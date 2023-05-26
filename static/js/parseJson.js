const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../..', 'events.json');

try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    console.log(parsedData);

    parsedData.forEach((event) => {
        console.log(event.day);
        console.log(event.title);
        console.log(event.link);
    });

} catch (error) {
    console.error('Une erreur est survenue lors de la lecture du fichier :', error);
}
