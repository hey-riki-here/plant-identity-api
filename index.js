// const express = require('express')
// const app = express()
// const fs = require('fs');
// const axios = require('axios');
// const fetch = require("node-fetch");
// const cors = require('cors');
// const port = 3000
// let returnedData = {};

// app.use(cors({
//     origin: '*',
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));

// app.get('/', (req, res) => {
//     res.send({ mesage: 'test response' })
// })

// app.get('/test', (req, res) => {
//     console.log(req.query.url);
//     res.send({ mesage: 'test response' })
// })

// app.get('/find', async (req, res) => {
//     let image = await axios.get(req.query.url, { responseType: 'arraybuffer' });
//     let returnedB64 = Buffer.from(image.data).toString('base64');

//     const base64files = [returnedB64];

//     const data = {
//         api_key: "1Yfs4S2MUCoLxlqKQoh6NGTHfS6gK7ZWUY0Y0L4HqWpiqtgUKI",
//         images: base64files,
//         /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
//         modifiers: ["crops_fast", "similar_images"],
//         plant_language: "en",
//         /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
//         plant_details: ["common_names",
//             "url",
//             "name_authority",
//             "wiki_description",
//             "taxonomy",
//             "synonyms"],
//     };

//     axios.post('https://api.plant.id/v2/identify', data).then(response => {
//         // console.log(response.data);
//         res.send(response.data);
//     }).catch(error => {
//         console.error('Error: ', error)
//     });

// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

const express = require("express");
const api = require("./routes/api");

const app = express();
app.use(express.json());

app.use("/api", api);

const port = 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));