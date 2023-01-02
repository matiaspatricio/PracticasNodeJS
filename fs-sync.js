const {readFileSync, writeFileSync, writeFile} = require ('fs');

//const readFileSync2 = require ('fs');
//lectura de archivos

const first = readFileSync('./content/first.txt','utf-8'); //se puede dejar con un solo parametro

const second = readFileSync('./content/second.txt','utf-8'); //se puede dejar con un solo parametro


console.log(first,second);


writeFileSync('./content/result-sync.txt',`Here is the result: ${first} , ${second} saludos`,{ flag:'a'}) 


