const express = require("express");
const deleteRouter = express();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const Orders = require("../models/orders");
const Deliveries = require("../models/deliveries");
const Packagecalories = require("../models/packagecalories");
const Packagename = require("../models/packagename");

deleteRouter.post("/:id", jsonParser, function(req, res){
    Orders.destroy({
        where: {
            number: req.body.id + 1
        }
    }).then((res) => {
        //console.log(res);
    });

    Packagecalories.destroy({
        where: {
            orders_id: req.body.id + 1
        }
    }).then((res) => {
        //console.log(res);
    });

    Packagename.destroy({
        where: {
            orders_id: req.body.id + 1
        }
    }).then((res) => {
        //console.log(res);
    });

    Deliveries.destroy({
        where: {
            orders_id: req.body.id + 1
        }
    }).then((res) => {
        //console.log(res);
    });
    res.sendStatus(200)
});

module.exports = deleteRouter