const arr = [9, 8, 4];
const { rejects } = require("assert");
const fs = require("fs");


function sum(a, b){
    return a + b;
}

function inOneHour(){
    const now = Date.now();
    const oneHourInMili = 1 * 60 * 60 * 1000;
    return now + oneHourInMili;
}



function multiplyAllNumbers(){
    return arr.map((val) => val * 2);
}


function generateDir(dirName){
    fs.appendFile("test.txt", "testado e aprovado!", (err) => {
        if (err){
            return err
        }
    })
    return true;

}

async function isNumber(x){
    return new Promise((resolve, reject) =>{
        if (typeof x === "number"){
            resolve("number");
        }else{
            reject(typeof x);
        }
    })
}


module.exports = { sum, inOneHour, multiplyAllNumbers, generateDir, isNumber };