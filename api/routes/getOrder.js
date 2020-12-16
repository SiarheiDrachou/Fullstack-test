const express = require("express");
const getRouter = express();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const Orders = require("../models/orders");
const Deliveries = require("../models/deliveries");
const Packagecalories = require("../models/packagecalories");
const Packagename = require("../models/packagename");

getRouter.get("/", jsonParser, function (req, res) {
    let orders = [];

    Orders.findAll({
        raw: true
    }).then(getOrders => {
        for (let i in getOrders) {
            orders.push({
                id: getOrders[i].number,
                packageName: "",
                packageCalories: "",
                deliveries: []
            });
        }

        Deliveries.findAll({
            raw: true
        }).then(getDeliveries => {
            for (let i in getDeliveries) {
                orders[getDeliveries[i].orders_id - 1].deliveries.push(getDeliveries[i])
            }
        }).catch(err => console.log(err));

        Packagecalories.findAll({
            raw: true
        }).then(getPackageCalories => {
            for (let i in getPackageCalories) {
                orders[i].packageCalories = getPackageCalories[i].text;
            }
        }).catch(err => console.log(err));

        Packagename.findAll({
            raw: true
        }).then(getPackageName => {
            for (let i in getPackageName) {
                orders[i].packageName = getPackageName[i].text;
            }
            res.send(orders);
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

module.exports = getRouter