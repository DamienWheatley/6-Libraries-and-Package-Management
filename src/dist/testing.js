const fs = require('fs');
const readline = require('readline-sync');

function checkFilePath(filePath){
    const checked = [];            
    if(fs.existsSync(filePath)){
        checked.push(1);
    } else {
        checked.push(0);
    };
    return checked;
}
//let inputPath = C:\Scripts\6 Libraries and Package Management\src\test-images\test.jpg

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



getInputImage();