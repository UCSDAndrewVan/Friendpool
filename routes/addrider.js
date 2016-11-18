var data = require("../data.json");

exports.addRider = function(req, res) {
    
    var newRider = {
        "name": req.query.name,
        "location": req.query.location,
        "number": req.query.number,
        "time": req.query.time
    };
    data.riders.push(newRider);
    
    // Sends rider info to driver homepage.
    res.render('riderhome', data);
}