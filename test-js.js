const fs = require('fs');
const path = './my-file.txt';
const UTE_MAPPING = [
    ["Login","biometric_login", "login"],
    ["Login","biometric_login", "impression"],
    ["Login","biometric_login", "error_impression"],
    ["Settings","settings", "impression"],
    ["Settings","notification_settings", "Impression"],
    ["Settings","security_Settings", "impression"],
]

// Generate a LookML script to add all mapped user tracking event fields as dimensions and measures
function makeLookML() {
    let lookML = [];
  
    for (const [header, context, action] of UTE_MAPPING) {
      let lowContext = context.toLowerCase();
      let lowAction = action.toLowerCase();
      const fieldName = `${lowContext}_${lowAction}`.replaceAll(/[.-]/g, "_");
      
      var dimension = 'dimension: '+fieldName+' {\n\thidden: yes\n\tgroup_label: "'+header+'"\n\ttype: number\n\tsql: ${TABLE}.'+fieldName+';;\n}\n';
      var measure = 'measure: total_'+fieldName+' {\n\tlabel: "'+context+':'+action+'"\n\tgroup_label: "'+header+'"\n\ttype: sum\n\tvalue_format: "@{number_format}"\n\tsql: ${'+fieldName+'};;\n}\n';
      lookML.push(dimension);
      lookML.push(measure);
    }
    
  return lookML.join('\n');
}

// Append the LookML script to the file    
function appendDateToFile(filePath) {
    fs.appendFileSync(filePath, makeLookML().toString() + '\n');
}

appendDateToFile(path);