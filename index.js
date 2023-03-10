const formidable = require('formidable');
const express = require('express');
const app = express();

const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
  cloud_name: "COLUR_NAME",
  api_key: "API_KEY",
  api_secret: "API_SECRET_KEY"
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const form = formidable({
        multiples: true
    });

    form.parse(req, (err, fields, files) => {
        let imgInfo = [];

        if (Array.isArray(files.file)) {
            imgInfo = files.file.map((file) =>{ return {filePath:file.filepath, id:file.newFilename}});
        } else {
            imgInfo.push({filePath:files.file.filepath, id:files.file.newFilename});
        }

        imgInfo.forEach(async(file)=>{
            let res = await cloudinary.uploader.upload(file.filePath, {public_id:file.id, folder:fields.folder || "hai"})
            console.log(res.secure_url);
        })

    });
});

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000/');
});