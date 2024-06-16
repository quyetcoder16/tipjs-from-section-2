const { default: mongoose } = require("mongoose");
const _SECONDS = 5000
const os = require('os')
const process = require('process')

const countConnect = () => {
    const numConnection = mongoose.connect.length;
    console.log(`number of connections:: ${numConnection}`);
}

// check overload

const checkOverLoad = () => {
    setInterval(() => {

        const numConnection = mongoose.connect.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // example maximum number of connections based on number osf cores 

        console.log(`active connection :: ${numConnection}`);
        console.log(`memory usage:: ${memoryUsage / 1024 / 1024}`);

        const maxConnection = numCores * 5;
        if (numConnection > maxConnection) {
            console.log(`connection overload detected!`);
        }



    }, _SECONDS) //monitor every 5 second
}

module.exports = {
    countConnect,
    checkOverLoad
}