var express = require('express');
var router = express.Router();

var orders = { data : [
	{
		topping: "Cherry",
		quantity: 2
	},
	{
		topping: "Plain",
		quantity: 6
	},
	{	topping: "Chocolate",
		quantity: 3
	}
]};

/* GET orders */
router.get('/', function(req, res, next) {
  var myObj = JSON.stringify(orders);
  res.send(myObj);
});

// POST orders
router.post('/', function (req, res) {
	var myObj = JSON.stringify(orders);
	res.send(myObj)
});

module.exports = router;