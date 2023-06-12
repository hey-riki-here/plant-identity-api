const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send({ mesage: 'test response' })
})

router.get('/test', (req, res) => {
    console.log(req.query.url);
    res.send({ mesage: 'test response test' })
})

router.get('/find', async (req, res) => {
    let image = await axios.get(req.query.url, { responseType: 'arraybuffer' });
    let returnedB64 = Buffer.from(image.data).toString('base64');

    const base64files = [returnedB64];

    const data = {
        api_key: "1Yfs4S2MUCoLxlqKQoh6NGTHfS6gK7ZWUY0Y0L4HqWpiqtgUKI",
        images: base64files,
        /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
        plant_details: ["common_names",
            "url",
            "name_authority",
            "wiki_description",
            "taxonomy",
            "synonyms"],
    };

    axios.post('https://api.plant.id/v2/identify', data).then(response => {
        // console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.error('Error: ', error)
    });

});

module.exports = router;