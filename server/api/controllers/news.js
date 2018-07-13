const https = require('http');
const request = require('request');
exports.getNews = (req, res, next) =>{
    var channel = req.params.id;
    request('https://newsapi.org/v2/top-headlines?sources='+channel+'&apiKey=dc92e9fb0e364a35bdcf268425e356c3', { json: true }, (err, response, news) => {
        if (err || response.statusCode!=200) { 
            if(news.status === "error" && news.code === "sourceDoesNotExist"){
                return res.status(response.statusCode).json({
                    error:{
                        code: 'sourceDoestNotExist',
                        message: 'One or more of the news sources you\'ve requested doesn\'t exist ('+channel+'). Check your spelling, or see http://localhost:8000 for a list of valid sources.'             
                    }
                })
            }
            console.log(err);
            return res.status(response.statusCode).json({
            message: 'Something went wrong. Please try again...'
        })
        }   
        return res.status(200).json(news)
      });
 
}
