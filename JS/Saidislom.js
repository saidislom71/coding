// shart operatoriga oid misollar
console.log("shart operatoriga oid misollar:")
// 1-misol 
let a = 3

if(a>0){
    console.log(`1-misol:${a+1}`)
}
else{
    console.log(`1-misol:${a}`)
}

// 2-misol 
let b = -1

if(b>0){
    console.log(`2-misol:${b+1}`)
}
else{
    console.log(`2-misol:${b-2}`)
}

// 3-misol
let c = 0

if(c>0){
    console.log(`3-misol:${c+1}`)
}
else if(c<0){
    console.log(`3-misol:${c-2}`)
}
else{
    c = 10
    console.log(`3-misol: ${c}`)
}

// 4-misol 
let d = 3, e = 2, f = 10
let array = [d, e, f]
let count = 0

for(let i = 0;i < array.length;i++){
    if(array[i]>0){
        count++
    }
}
console.log(`4-misol: ${count}`)

// 5-misol 
let g = 2, h = -2, i = 3
let array1 = [g, h, i]
let count_big = 0
let count_small = 0 

for(let i = 0;i<array1.length;i++){
    if(array1[i]>=0){
        count_big++
    }
    else{
        count_small++
    }
}
console.log(`5-misol: musbat sonlar ${count_big} ta, manfiy sonlar ${count_small}`)

// 6-misol
let j = 77, k = 55

if(j>k){
    console.log(`6-misol: ${j} katta `)
}
else{
    console.log(`6-misol: ${k} katta `)
}

// 7-misol 
let n = 1, o = 2
if(n<o){
    console.log(`8-misol: kichik son tartib raqami 1`)
}
else{
    console.log(`8-misol: kichik son tartib raqami 2`)
}

// 8-misol 
let l = 77, m = 55

if(l>m){
    console.log(`6-misol: kattasi ${l} kichigi ${k}`)
}
else{
    console.log(`6-misol: kattasi ${m} kichigi ${j}`)
}

// 9-misol 
let A = 5
let B = 4
let C = B
if(A>B){
    B=A
    A=C
    C=A
    console.log(`9-misol: A=${A}, B=${B}`)
}

// 10-misol
let D = 40
let E = 30
let sum = 0

if(D!=E){
    sum=D+E
    D=sum
    E=sum
    console.log(`10-misol: A va B teng emas. A=${D}, B=${E}\n`)
}
else{
    D=sum
    E=sum
    console.log(`10-misol: A va B teng. A=${D}, B=${E}\n`)
}

// tanlash operatoriga oid misollar
console.log("tanlash operatoriga oid misollar:")

// 1-misol
let hafta_kun = 1

switch(hafta_kun){
    case 1:
        console.log('1-misol: dushanba')
        break;
    case 2:
        console.log('1-misol: seshanba')
        break;
    case 3:
        console.log('1-misol: chorshanba')
        break;
    case 4:
        console.log('1-misol: payshanba')
        break;
    case 5:
        console.log('1-misol: juma')
        break;
    case 6:
        console.log('1-misol: shanba')
        break;
    case 7:
        console.log('1-misol: yakshanba')
        break;
    default:
        console.log("1-misol: bunday hafta kun yo'q")
}

// 2-misol
let K = 5

switch(K){
    case 1: 
        console.log("2-misol: yomon")
        break;
    case 2: 
        console.log("2-misol: qoniqarsiz")
        break;
    case 3: 
        console.log("2-misol: qoniqarli")
        break;
    case 4: 
        console.log("2-misol: yaxshi")
        break;
    case 5: 
        console.log("2-misol: a'lo")
        break;
    default:
        console.log("2-misol: Xato")
        break;
}

// 3-misol
let Oy_soni = 3

switch(Oy_soni){
    case 1:
    case 2:
        console.log("3-misol: Qish")
        break;
    case 3:
    case 4:
    case 5:
        console.log("3-misol: Bahor")
        break;
    case 6:
    case 7:
    case 8:
        console.log("3-misol: Yoz")
        break;
    case 9:
    case 10:
    case 11:
        console.log("3-misol: Kuz")
        break;
    case 12:
        console.log("3-misol: Qish")
        break;
    default:
        console.log("3-misol: Xato")
        break;
}

// 4-misol
let Oy_kuni = 4

switch(Oy_kuni){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("4-misol: 31kun bor")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("4-misol: 30kun bor")
        break;
    case 2:
        console.log("4-misol: 29kun bor. 4yilda bir 28kun")
        break;
    default:
        console.log("4-misol: xato")
        break;
}

// 5-misol 
let F = 5
let G = 5
let amal = 4
switch(amal){
    case 1:
        console.log(`5-misol: ${F+G}\n`)
        break;
    case 2:
        console.log(`5-misol: ${F-G}\n`)
        break;
    case 3:
        console.log(`5-misol: ${F*G}\n`)
        break;
    case 4:
        console.log(`5-misol: ${F/G}\n`)
        break;
    case 5:console.log(`5-misol: xato\n`)
        break;
}

// for sikli operatoriga oid misollar
console.log("for sikli operatoriga oid misollar")

// 1-misol
let M = 3
let N = 4

for(let i=0;i<N;i++){
    console.log(`1-misol: ${M}`)
}

// 2-misol
let S = 1
let X = 5


for(let i=S;i<=X;i++){
    console.log(`2-misol: ${i}`);
}
console.log("\n")

// 3-misol
let Z = 10
let Q = 2
let count1 = 0
for(let i=Z-1;i>Q;i--){
    console.log(`3-misol: ${i}`)
    count1++;
}
console.log(`3-misol: chiqarilgan sonlar soni ${count1}\n`)

// 4-misol 
let price =5000
for(let i=1;i<=10;i++){
    console.log(`4-misol: ${i}kg konfet narxi ${i*price}`)
}
console.log("\n")

// 5-misol
let price2 = 5000

for(let i=1;i<=10;i++){
    console.log(`5-misol: ${i/10}kg konfet narxi ${(i/10)*price2}`)
}
console.log("\n")

// 6-misol
let price3 = 5000

for(let i=12;i<=20;i+=2){
    console.log(`6-misol: ${i/10}kg konfet narxi ${(i/10)*price3}`)
}
console.log("\n")

// 7-misol
let W = 10
let R = 20
let Sum = 0
for(let i=W;i<=R;i++){
    Sum+=i;
}
console.log(`7-misol: ${Sum}`)

// 8-misol
let T = 1
let Y = 5
let Sum1 = 1
for(let i=T;i<=Y;i++){
    Sum1*=i
}
console.log(`8-misol: ${Sum1}`)

// 9-misol
let J = 1
let H = 10
let Sum2 = 0
for(let i=J;i<=H;i++){
    Sum2+=i*i
}
console.log(`9-misol: ${Sum2}`)

// 10-misol
let L = 10
let sum3 = 0

for(let i=2;i<=L;i++){
    sum3+=1/i
}
console.log(`10-misol: ${sum3+1}`)