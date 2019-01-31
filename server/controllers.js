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
    },

    stories : (req,res) =>{
        Donation.find({comment : {$ne : ""}})
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    },
    like : (req,res) =>{
        Donation.findById(req.params.id)
        .then(user =>{
           user.likes +=1;
           user.save();
           res.json(user);
        })
        .catch(err =>{
            res.json(err);
        })
    },
    dislike : (req,res) =>{
        Donation.findById(req.params.id)
        .then(user =>{
           user.likes -=1;
           user.save();
           res.json(user);
        })
        .catch(err =>{
            res.json(err);
        })
    },
    delete: (req,res) =>{
        Donation.remove({})
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            res.json(err);
        })
    }
}