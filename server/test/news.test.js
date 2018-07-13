const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('request');
const http = require('http');
var chai = require('chai');
const chaiHttp = require('chai-http');
let app = require('../app')
let nock = require('nock');
chai.use(chaiHttp);

describe('Get News tests', () => {
  const baseUrl = 'https://newsapi.org';
  const channel = 'bbc-news';
  beforeEach(() => {
   
  });
  
  it('/Get getNews() should return sc 200 and valid json', function(done){
    let expected = {articles:"BBC-NEWS"}
     nock(baseUrl) 
      .get('/v2/top-headlines?sources='+channel+'&apiKey=dc92e9fb0e364a35bdcf268425e356c3')
      .reply(200,expected);
   
    chai.request(app)
      .get('/news/'+channel)
      .then(function (res, err) {
      expect(err).to.be.undefined;
      expect(res).to.have.status(200);
      expect(res).not.to.have.status(500)
      assert.equal(res.text,JSON.stringify(expected));
      done();
   });
  });

  
  it('/Get getNews() should throw exception', function(done){
    let expected = { message: 'Something went wrong. Please try again...'}
     nock(baseUrl) 
      .get('/v2/top-headlines?sources='+channel+'&apiKey=dc92e9fb0e364a35bdcf268425e356c3')
      .reply(404,new Error());
    
    chai.request(app)
      .get('/news/'+channel)
      .then(function (res, err) {
      expect(res).to.have.status(404);
      expect(res).not.to.have.status(200)
      assert.equal(res.text,JSON.stringify(expected));
      done();
   });  
  });
});