const expect = require('chai').expect;
const assert = require('chai').assert;
var chai = require('chai');
var spies = require('chai-spies');
let app = require('../app');
let nock = require('nock');
chai.use(spies);


describe('Get Channels tests', () => {
	const baseUrl = 'https://newsapi.org'
	beforeEach(() => {
   
	});

	it('/Get getChannels() should return sc 200 and valid json', function(done){
		let expected = {channels:"BBC-NEWS"};
		nock(baseUrl) 
			.get('/v2/sources?apiKey=dc92e9fb0e364a35bdcf268425e356c3')
			.reply(200,expected);
    
		chai.request(app)
			.get('/')
			.then(function (res, err) {
				expect(err).to.be.undefined;
				expect(res).to.have.status(200);
				expect(res).not.to.have.status(500);
				assert.equal(res.text,JSON.stringify(expected));
				done();
			});

   
    
	});
	it('/Get getChannels() should throw exception', function(done){
		let expected = { message: 'Something went wrong. Please try again...'};
		nock(baseUrl) 
			.get('/v2/sources?apiKey=dc92e9fb0e364a35bdcf268425e356c3')
			.reply(404,new Error());
    
		chai.request(app)
			.get('/')
			.then(function (res) {
				expect(res).to.have.status(404);
				expect(res).not.to.have.status(200);
				assert.equal(res.text,JSON.stringify(expected));
				done();
			});  
	});  
});