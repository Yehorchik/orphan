const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orphan' , {useNewUrlParser:true});

const CardSchema = new mongoose.Schema({
    card_first_name : {type : String , required:[true, 'First Name is required']},
    card_last_name : { type : String , required : [true, 'Last Name is required']},
    card_number : {type : Number , required: true, min:[16, ' Wrong Card Number'] ,max:[16,'Wrong Card Number']},
    expiration_date : {type : String , required: [true,'Expiration date required ']},
    security_code :{type : Number, required: true, min:[10, ' Need security code']} ,
    billing_adress :  {type : String , required:[true, 'Billing Adress is required']},
},{timestamps : true})

const DonationSchema = new mongoose.Schema({
    first_name  : {type : String , required:[true, 'First Name is required']},
    last_name  : { type : String , required : [true, 'Last Name is required']},
    email : { type : String , required : [true, 'Email is required']},
    donation : {type : Number , required: true, min:[1, 'Donation is required , at least 1 dollar']},
    comment : {type : String},
    card : CardSchema,
},{timestamps : true})
module.exports = mongoose.model("Donation" , DonationSchema);