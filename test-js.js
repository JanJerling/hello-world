const fs = require('fs');
        const path = './my-file.txt';

        function appendDateToFile(filePath) {
            const currentDate = new Date().toISOString();
            fs.appendFileSync(filePath, '\nTesting\n' + currentDate);
        }

        appendDateToFile(path);