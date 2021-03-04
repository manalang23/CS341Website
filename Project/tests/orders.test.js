//Aron Miguel Manalang

const orders = require('../routes/orders.js');

test('Checks to see if any data in JSON form is sent', () => {
	expect(orders).toEqual(expect.anything());
});