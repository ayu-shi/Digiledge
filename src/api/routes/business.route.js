const express = require('express');
const app = express();
const businessRoutes = express.Router();

// Require Business model in our routes module
let Thief = require('../models/Thief');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  console.log(req.body)
  let thief = new Thief(req.body);
  thief.save()
    .then(business => {
      res.status(200).json({'Thief': 'Thief in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Thief.find(function (err, Thiefs){
    if(err){
      console.log(err);
    }
    else {
      res.json(Thiefs);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Thief.findById(id, function (err, Thief){
    console.log(Thief);
      res.json(Thief);
  });
});


//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
  Thief.findById(req.params.id, function(err, business, next) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.Name = req.body.Name;
        business.City = req.body.City;
        business.Crime = req.body.Crime;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Thief.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;