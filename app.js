const fs = require('fs');
const zlib =  require('zlib');

let finalResult = "";

const readable = fs.createReadStream(__dirname + '/file.txt');
const writable = fs.createWriteStream(__dirname + '/tofile.txt');
const gzipFile = fs.createWriteStream(__dirname + '/toGzip.txt.gz');


readable.pipe(writable);

const gzip = zlib.createGzip();

readable.pipe(gzip).pipe(gzipFile);

