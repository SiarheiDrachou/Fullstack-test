const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const getOrderRoutes = require('./api/routes/getOrder');

const Orders = require("./api/models/orders");
const Deliveries = require("./api/models/deliveries");
const Packagecalories = require("./api/models/packagecalories");
const Packagename = require("./api/models/packagename");

app.use('/api/getOrders', getOrderRoutes);

app.post("/api/cancelOrder", jsonParser, function(req, res){
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

app.post("/api/duplicateOrder", jsonParser, function(req, res){
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

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});