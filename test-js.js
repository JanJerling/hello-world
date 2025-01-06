const fs = require('fs');
        const path = './my-file.txt';

        function appendDateToFile(filePath) {
            const currentDate = new Date().toISOString();
            fs.appendFileSync(filePath, '\n\n' + currentDate);
            console.log('Date appended to file' + currentDate);
        }

        appendDateToFile(path);