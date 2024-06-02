const mongoose = require('mongoose');

async function connect() {

    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('database is connected'))
    .catch(e => console.log(e.message));
    
}