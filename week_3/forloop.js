let sumEven = 0;
let productOdd = 1;

for (i = 2; i <= 50; i+=2 ){
    sumEven += i;
}
console.log(`ผลรวมเลขคู่ 2-50 = ${sumEven}`);

for (i = 1; i <=10; i +=2){
    productOdd *= i;
}
console.log(`ผลคูณเลขคี่ 1-10 = ${productOdd}`);