/*let args= process.argv;
for(let i=2; i<args.length; i++){
console.log("Hello to", args[i]);
}
*/
/*
const math = require("./math"); //jo bhi export hua hai usse require krlia
console.log(math.sum(2,3));
console.log(math.mul(4,10));
console.log(math.sub(10,8));

const f= require("./Fruits");
console.log(f[1]);

const figlet = require("figlet");
figlet("Shreya Rawat!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }); 
  */
 import { sum, PI } from "./math.js";
 console.log(sum(1,2));