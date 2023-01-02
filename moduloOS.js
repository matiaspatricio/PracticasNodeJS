const os = require('os')

const user = os.userInfo()
console.log(user);
console.log("uptime:");
console.log(os.uptime());

console.log('The system uptime is ' + os.uptime());

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),

}

console.log("--------------------");
console.log(currentOS);