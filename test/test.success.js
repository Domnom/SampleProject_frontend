var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should(),
	expect = chai.expect;
 	chai.use(chaiHttp);

 var webdriver = require('selenium-webdriver');
 var By = webdriver.By;
 var until = webdriver.until;

var driver;

var HelpfulService = require('../services/Helpful.service');

describe("Good - Helpful service", function() {

 	var helpfulService;

 	before(function() {
 		helpfulService = new HelpfulService();


 		driver = new webdriver
 		        .Builder()
 		        .usingServer(process.env.SELENIUM_HUB_URL)
 		        .withCapabilities(webdriver.Capabilities.chrome())
 		        .build();

 		// driver.get('http://google.com').then(function() {
 		//     console.log("open google.com...");
 		//     done();
 		// });

 	});

 	it ('add -> Add some numbers', function() {

 		var intTotal = helpfulService.add(1, 20);

 		expect(intTotal).to.equal(21);
 	});

 	it ('subtract -> Subtract some numbers', function() {

 		var intTotal = helpfulService.subtract(5, 3);

 		expect(intTotal).to.equal(2);
 	
 	});

 	it ('Should get the envs set in this server', function() {

 		var envObj = helpfulService.getEnv();

 		expect(envObj).to.have.property('GATEWAY_URL').to.equal('http://sample-project-gateway');
 		
 	});


 	it('should search in google', function(done) {

 		// driver.get('http://www.google.com')
 		driver.get(process.env.FRONTEND_SERVICE_NAME)
 			.then(function() {
 				setTimeout(function() {
 					done();
 				}, 5000);
 				// console.log("GOOGLE OPENED");
 				// var searchBox = driver.findElement(By.name('q'));
 				// searchBox.sendKeys('simple programmer');
 				// searchBox.getAttribute('value')
 				// 	.then(function(value) {
 				//         expect(value).to.equal('simple programmer');
 				//         done();
 				// 	});
 			});
 		
  	});


  	after(function(done) {
  	    // works with promise
  	    driver.quit().then(done);
  	});

 })