let num1 = 1;
let num2 = 0;

do {
    console.log("O numero é " + num1);

    num3 = num1;
    num1 = num1 + num2; 
    num2 = num3;

}while(num1 <=146 );

let count2 = 0;
for (let count =1 ;count<=146; count+count2){

     console.log("O numero é " + count);

    count3 = count;
    count = count + count2; 
    count2 = count3;
}