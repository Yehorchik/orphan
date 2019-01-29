var Donation = require('./models');

module.exports = {
    all:(req,res) =>{
        Donation.find({})
        .then(results => {
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    },

    new : (req,res) =>{
        Donation.create(req.body)
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    }
    
}