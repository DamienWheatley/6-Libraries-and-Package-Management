const {expect} = require('chai');
const fs = require('fs');

describe('Testing Image Paths', function(){

    describe('Check Input path', function(){
        it('Has been entered', () => {
            //let inputImage = getInputImage();
            let inputImage = '';

            expect(inputImage).to.not.equal('');
        });
        it('Input File Exists', () => {
            let inputImage = 'C:\\Scripts\\6 Libraries and Package Management\\src\\test-images\\test.jpg';

            const checked = [];            
            if(fs.existsSync(inputImage)){
                checked.push(1);
            } else {
                checked.push(0);
            };

            expect(checked[0]).to.equal(1);
        });
    });
});