const mongoose = require('mongoose');

const url="mongodb+srv://meshohack:paas1264@mesho.1umopoj.mongodb.net/test"

mongoose.connect(url)
.then(()=>{
    console.log("connection established successfully");
}).catch((err)=>{
    console.log(err);
})