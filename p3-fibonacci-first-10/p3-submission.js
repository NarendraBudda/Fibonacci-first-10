let n1=0;
let n2=1;
let count=10;
console.log(n1);
console.log(n2);
for(let i=3;i<=count;i++){
    let n3=n1+n2;
    n1=n2;
    n2=n3;
    console.log(n3);
}