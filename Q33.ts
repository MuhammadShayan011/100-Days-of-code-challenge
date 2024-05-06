let numbers1: number[]=[1,2,3,4,5,6,7,8,9,10];
let ordinal:string;
for (const num of numbers1){
if (num == 1){
    ordinal =  "st";
} else if (num == 2){
    ordinal = "nd";
} else if (num ==3){
    ordinal = "rd";}
 else 
 { ordinal = "th";}
console.log(`${num}${ordinal},`)}