const { default: mongoose } = require("mongoose")

const connectString = `mongodb://localhost:27017/test_db`

mongoose.connect(connectString).then(_ => console.log(`connect success`))
    .catch(err => console.log(`error connect!`))

if (1 === 1) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}

module.export = mongoose