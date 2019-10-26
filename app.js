import * as cocoSsd from '@tensorflow-models/coco-ssd';
const image2base64 = require('image-to-base64');

var fs = require('fs')

image2base64("./Test.jpg").then((res) => {
    const model = await cocoSsd.load();
    const predictions = await model.detect(res);
    console.log(predictions)
})