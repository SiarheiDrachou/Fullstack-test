const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Orders = require("./api/models/orders");
const Deliveries = require("./api/models/deliveries");
const Packagecalories = require("./api/models/packagecalories");
const Packagename = require("./api/models/packagename");

var jsonParser = bodyParser.json();

app.get("/api/getOrders", jsonParser, function(req, res){
let orders = [];

Orders.findAll({raw:true}).then(getOrders=>{
    for(let i in getOrders) {
        orders.push({
            id: getOrders.number,
            packageName:"",
            packageCalories:"",
            deliveries:[]
        });
    }

    Deliveries.findAll({raw:true}).then(getDeliveries=>{
        for(let i in getDeliveries) {
            orders[getDeliveries[i].orders_id - 1].deliveries.push(getDeliveries[i])
        }
    }).catch(err=>console.log(err));

    Packagecalories.findAll({raw:true}).then(getPackageCalories=>{
        for(let i in getPackageCalories) {
            orders[i].packageCalories = getPackageCalories[i].text;
        }
    }).catch(err=>console.log(err));

    Packagename.findAll({raw:true}).then(getPackageName=>{
        for(let i in getPackageName) {
            orders[i].packageName = getPackageName[i].text;
        }
        res.send(orders);
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));
});

app.post("/api/cancelOrder", jsonParser, function(req, res){
    Orders.destroy({
        where: {
            number: req.body.id + 1
        }
    }).then((res) => {
        console.log(res);
    });

    Packagecalories.destroy({
        where: {
            orders_id: req.body.id + 1
        }
    }).then((res) => {
        console.log(res);
    });

    Packagename.destroy({
        where: {
            orders_id: req.body.id + 1
        }
    }).then((res) => {
        console.log(res);
    });

    Deliveries.destroy({
        where: {
            orders_id: req.body.id + 1
        }
    }).then((res) => {
        console.log(res);
    });
});

app.post("/api/duplicateOrder", jsonParser, function(req, res){
    console.log(req.body.order.packageName, req.body.order.packageCalories);
    Orders.create({
        id: req.body.order.id,
        number: req.body.order.id
    }).then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));

    Packagecalories.create({
        id: req.body.order.id,
        text: req.body.order.packageCalories,
        orders_id: req.body.order.id
    }).then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));

    Packagename.create({
        id: req.body.order.id,
        text: req.body.order.packageName,
        orders_id: req.body.order.id
    }).then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));

    for(let i of req.body.order.deliveries) {
        Deliveries.create({
            date: i.date,
            interval: i.interval,
            address: i.address,
            orders_id: req.body.order.id
        }).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});