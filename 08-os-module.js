// const os = require('os');
// // info about cureent user
// const user = os.userInfo();
// console.log(user);
// //method return the system uptime in second
// console.log(`The uptime of the system is ${os.uptime()} seconds`);

// //other methods
// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOs);
const { userInfo, uptime } = require('os');
console.log(userInfo());
console.log(uptime());
