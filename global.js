//global object

//console.log(global);


setTimeout(() => {
    console.log('timeout')
    clearInterval(int)
}, 5000);

const int = setInterval(()=> {
    console.log('interval')

},1000)


const os = require('os')
console.log(os.platform(), os.homedir())

// useful to know in which directory I am. Gives you a path
console.log(__dirname);
console.log(__filename);