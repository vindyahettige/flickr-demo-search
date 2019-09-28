const fetch = require('node-fetch');
const request = require('request')

exports.get_public_feed = async (req, res, next) => {

    let tag = req.query.tag;
    console.log("tag received: "+tag);
    let url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'
    if(tag){
        let tagList = [];
        tagList.push(tag);
        console.log("tag list : "+tagList);
        url = url + `&tags=${tagList}`
    }
    request(url, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }

        let urls = [];

        body.items.forEach(element => {
            urls.push(element.media.m)
        });

        res.send(urls);
        
    });
}