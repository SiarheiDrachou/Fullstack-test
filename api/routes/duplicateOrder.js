const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const Orders = require("../models/orders");
const Deliveries = require("../models/deliveries");
const Packagecalories = require("../models/packagecalories");
const Packagename = require("../models/packagename");

app.post("/:id", jsonParser, function(req, res){
    Orders.create({
        id: req.body.order.id,
        number: req.body.order.id
    }).then(res=>{
        //console.log(res);
    }).catch(err=>console.log(err));

    Packagecalories.create({
        text: req.body.order.packageCalories,
        orders_id: req.body.order.id
    }).then(res=>{
        //console.log(res);
    }).catch(err=>console.log(err));

    Packagename.create({
        text: req.body.order.packageName,
        orders_id: req.body.order.id
    }).then(res=>{
        //console.log(res);
    }).catch(err=>console.log(err));

    for(let i of req.body.order.deliveries) {
        Deliveries.create({
            date: i.date,
            interval: i.interval,
            address: i.address,
            orders_id: req.body.order.id
        }).then(res=>{
            //console.log(res);
        }).catch(err=>console.log(err));
    }
    res.sendStatus(200);
});

module.exports = app