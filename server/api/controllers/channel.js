const https = require('http');
const request = require('request');
const Product = require('../models/product');
const mongoose =  require('mongoose');
exports.getChannels = (req, res, next) =>{
    request('https://newsapi.org/v2/sources?apiKey=dc92e9fb0e364a35bdcf268425e356c3', { json: true }, (err, response, channels) => {
        if (err || response.statusCode!=200) { 
            console.log(err);
            return res.status(response.statusCode).json({
            message: 'Something went wrong. Please try again...'
        })
        }
    //     const product = new Product({
    //         _id: new mongoose.Types.ObjectId(),
    //         name: 'Ferrari'
    //     })
    //     product.save().then(r => {
    //         console.log(r)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    //     console.log()
    //     Product.find().exec().then(r=>{
    //         console.log(r)
    //         return  res.status(200).json(r)
    //     })
    // .catch(err=>{
    //     console.log(err)
    //  })
        
       return res.status(200).json(channels)
      });
 
}

