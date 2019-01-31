const sharp = require('sharp');
const fs = require('fs');
const readline = require('readline-sync');

const roundedCorners = Buffer.from(
    `<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>`
);
const roundedCornerResizer = sharp()
    .resize(200,200)
    .overlayWith(roundedCorners, { cutout: true })
    .png();

    
//let inputPath = 'C:\\Scripts\\6 Libraries and Package Management\\src\\test-images\\test.jpg'
//let outputPath = 'C:\\Scripts\\6 Libraries and Package Management\\src\\test-images\\tested2.png'

function checkFilePath(filePath){
    const checked = [];            
    if(fs.existsSync(filePath)){
        checked.push(1);
    } else {
        checked.push(0);
    };
    return checked;
}

function getInputImage(){
    let inputtedImage = readline.question('Enter the full file path and name of the image - i.e "C:\\test\\image.jpg": \n\n');
    let check = checkFilePath(inputtedImage);
    if(check != 1){
        console.log("That file doesn't exist, please enter a file that exists.");
        return getInputImage();
    } else {
        return inputtedImage;
    }
};


function getOutputImage(){
    let outputImage = readline.question('Enter the full file path and name of the NEW image - i.e "C:\\test\\image2.jpg": \n\n');
    return outputImage;
};

function comparePaths(){
    let outputPath = getOutputImage();

    if(outputPath === inputtedImage){
        outputPath = readline.question('That image name already exists, please enter a different image name: \n\n');
        return outputPath;
    }
    return outputPath;
};

const inputtedImage = getInputImage();

fs.createReadStream(inputtedImage)
.pipe(roundedCornerResizer)
.pipe(fs.WriteStream(comparePaths()));

exports.getInputImage = getInputImage;
exports.getOutputImage = getOutputImage;