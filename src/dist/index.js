const sharp = require('sharp');
const fs = require('fs');

const roundedCorners = Buffer.from(
    `<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>`
)

const roundedCornerResizer = sharp()
    .resize(200,200)
    .overlayWith(roundedCorners, { cutout: true })
    .png();

let ReadableStream = 'C:\\Scripts\\6 Libraries and Package Management\\src\\test-images\\test.jpg'
let WritableStream = 'C:\\Scripts\\6 Libraries and Package Management\\src\\test-images\\tested2.png'

fs.createReadStream(ReadableStream)
    .pipe(roundedCornerResizer)
    .pipe(fs.WriteStream(WritableStream));