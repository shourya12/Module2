let arr=[];

console.log(arr);

//array with element

let ele=[1,2,"ffdsvd",'s',false,2.3];
console.log(ele);


//print element at particular index

console.log(ele[3]);

//change some array element

ele[2]="hi";

console.log(ele);

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

//array method

ele.push("push kr diya");

console.log("push -- "+ele);

ele.pop();

console.log("pop -- "+ele);

ele.shift();

console.log("shift -- "+ele);

ele.unshift("test shift");

console.log("unshift -- "+ele);

console.log("array length "+ ele.length);