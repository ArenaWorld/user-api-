module.exports = function(app, db) {

  //get users
  app.get('/api/users', function(req, res) {
    db.User.findAll({}).then(function (result) {
      if (!result) {
        console.log('error')
      } else {
        res.json(result)
      }

    })
  });
  // get user
  app.get('/api/users/:id', function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then( function (result) {
      console.log('User: ', result)
      res.json(result)
    })
  });
  //add user
  app.post('/api/users/', function(req, res) {
    db.User.create({
      firstName: req.params.firstName,
      lastName: req.params.lastName,
      position: req.params.position,
      height: req.params.height,
      weight_lbs: req.params.height,
      school: req.params.school,
      wins: req.params.wins,
      losses: req.params.losses

    }).then(function() {
      res.send("User Created");
      console.log('Create User: ', result)
    })

  })
  //update user
  app.put('api/users/update/:id', function(req, res) {
    db.User.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        }).then( function ( result ) {
            res.json(result);
            console.log('Updated User: ', result)
        });
  })
  // delete user
  app.delete('api/users/delete/:id', function(req, res) {
    db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
  })
};
