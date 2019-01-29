const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orphan' , {useNewUrlParser:true});

const DonationSchema = new mongoose.Schema({
    first_name  : {type : String , required:[true, 'First Name is required']},
    last_name  : { type : String , required : [true, 'Last Name is required']},
    donation : {type : Number , required: [true, 'Donation is required']},
    comment : {type : String}
})
module.exports = mongoose.model("Donation" , DonationSchema);