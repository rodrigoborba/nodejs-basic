var fs = require('fs');

function lerArquivo(){
    fs.writeFile('data.txt' , 'Hello world from SON' , function (err) {
        if(err){
            throw err;
        }
    });
}

function lerArquivo(){
    fs.readFile('data.txt', function (err,data) {
        if(err){
            throw err;
        }
        console.log(data.toString('utf8'));
    });
}

function lerArquivoDeDiretorio(){
    fs.readdir('.', function (err,files) {
        if(err){
            throw err;
        }
    
        for (var file in files){
            console.log(files[file]);
        }
    });
}

function lerArquivoDeDiretorioSyncFiltrando(){
    fs.readdirSync('.')
    .filter(function (file) {
        return (file.endsWith('.js'));
    })
    .forEach(function (file) {
        console.log(file);
    });
}

lerArquivoDeDiretorioSyncFiltrando()
