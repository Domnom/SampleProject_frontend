var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should(),
	expect = chai.expect;
 	chai.use(chaiHttp);

var HelpfulService = require('../services/Helpful.service');

describe("Bad - Helpful service", function() {

 	var helpfulSevice;

 	before(function() {
 		helpfulSevice = new HelpfulService();
 	});

 	it ('add -> Add some numbers', function() {

 		var intTotal = helpfulSevice.add(1, 20);

 		expect(intTotal).to.equal(23);
 	});

 	it ('subtract -> Subtract some numbers', function() {

 		var intTotal = helpfulSevice.subtract(5, 3);

 		expect(intTotal).to.equal(4);
 	
 	});

 })