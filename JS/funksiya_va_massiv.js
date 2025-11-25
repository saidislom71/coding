// FUNKSIYAGA OID MISOLLAR
console.log("FUNKSIYAGA OID MISOLLAR\n")

// 1-misol
function PowerA3(a){
    return a**3;
}
console.log(`1-misol: ${PowerA3(5)}`)

// 2-misol
function PowerA234(b){
    console.log(`2-misol: ikkinchi darajasi ${b**2}, uchunchi daraja ${b**3}, to'rtinchi daraja ${b**4}`)
}

PowerA234(4)

// 3-misol
function MEAN(c, d){
    let orta_arifmetik = (c+d)/2
    let orta_geometrik = Math.sqrt(c*d)
    return{ orta_arif: orta_arifmetik,
        orta_geo: orta_geometrik
    };
}
let natija = MEAN(4,9)
console.log(`3-misol: ${natija.orta_arif}, ${natija.orta_geo}`)

// 4-misol
function TRIANGLE(A){
    let peremetri = 3*A
    let yuza = (Math.sqrt(3)/4)*Math.pow(A, 2)
    return {
        p: peremetri,
        s: yuza
    };
}

let burchak = TRIANGLE(3)
console.log(`4-misol: ${burchak.p}, ${burchak.s}`)

// 5-misol
function RectPS(w, h){
    let yuzasi = w*h
    let perimetr = 2*(w+h)
    return{
        S: yuzasi,
        P: perimetr
    }
}
let togri_4burchak = RectPS(3,4)
console.log(`5-misol: ${togri_4burchak.S}, ${togri_4burchak.P}`)

// 6-misol
function DigitCountSum(M){
    let str = M.toString()
    let Count = str.length
    let Sum = 0
    for(let i = 0; i<str.length; i++){
       Sum+= Number(str[i])
    }
    return{
        c: Count,
        s: Sum
    };
}
let javob = DigitCountSum(321)
console.log(`6-misol: ${javob.c}, ${javob.s}`)

// 7-misol
function InvertDigit(N){
    let Invert2 = '' 
    let Invert = N.toString()
    for(let i=Invert.length-1;i>=0;i--){
        Invert2+=Invert[i]
    }
    return Invert2
}

let son1 = InvertDigit(463)
console.log(`7-misol: ${son1}`)

// 8-misol
function AddRightDigit(K, R){
    let d = K.toString()
    let z = R.toString()
    return d+z
}
let right = AddRightDigit(234, 98)
console.log(`8-misol: ${right}`)

// 9-misol
function AddLeftDigit(Q, W){
    let q = Q.toString()
    let w = W.toString()
    return w+q
}
let test = AddLeftDigit(45, 123)
console.log(`9-misol: ${test}`)

// 10-misol
function SWAP(ab, bc){
    let temp = ab
    ab = bc
    bc = temp
    return [ab, bc]
}
console.log(`10-misol: ${SWAP(13, 45)}\n`)

// MASSIVGA OID MISOLLAR
console.log("MASSIVGA OID MISOLLAR\n")

// 1-misol
let son = 3
let array = []

for(let i=0; i<son;i++){
    array.push(i*2+1)
}
console.log(`1-misol: ${array}`)

// 2-misol
function daraja(l){
    let arr = []
    for(let i = 0;i < l;i++){
        arr.push(Math.pow(2, i))
    }
    return arr
}
console.log(`2-misol: ${daraja(8)}`)

// 3-misol

function had(L, Z, Y){
    let arr1 = []
    arr1[0] = Y
    for(let i = 0; i<L;i++){
        arr1.push(arr1[i]+Z)
    }
    return arr1
}
console.log(`3-misol: ${had(5, 3, 2)}`)

// 4-misol
function multiple(Q, W, R){
    let arr2 = []
    arr2[0] = R
    for(let i = 0; i < Q; i++){
        arr2.push(arr2[i]*W)
    }
    return arr2
}
console.log(`4-misol: ${multiple(5, 3, 2)}`)

// 5-misol
function fibonacci(F){
    let array2 = []
    array2[0] = 0
    array2[1] = 1
    for(let i=2;i<F;i++){
        array2.push(array2[i-1]+array2[i-2])
    }
    return array2
}
console.log(`5-misol: ${fibonacci(10)}`)

// 6-misol 
let array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let last_number = array0[array0.length-1]
let result = null
for(let i=0;i<array0.length;i++){
    if(array0[i]<last_number){
        result = array0[i]
        break;
    }
    else {
        console.log(0)
    }
}
console.log(`6-misol: ${result}`)

// 7-misol
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let first = array1[0]
let last = array1[array1.length-1]
let natija1 = null
let found = false
for(let i = 0; i < array1.length; i++){
    if(array1[i]>first && last>array1[i]){
        natija1 = array1[i]
    }
}
console.log(`7-misol: ${natija1}`)

// 8-misol
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let K = 2
let L = 6

let sum = 0
for(let i = K+1; i<L;i++){
    sum+=arr[i]
}
console.log(`8-misol: ${sum}`)

// 9-misol
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let K3 = 2
let L3 = 6
let sum3 = 0
let arif = 0

for(let i = K+1; i<L;i++){
    sum3+=arr3[i]
    arif++
}

console.log(`9-misol: ${sum3/arif}`)

// 10-misol
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let K2 = 2
let L2 = 6
let arr6 = []
for(let i = 0;i<arr2.length;i++){
    if(arr2[i]>=arr2[K2]  && arr2[i]<=arr2[L2]){
        continue
    }
    else{arr6.push(arr2[i])}   
}
console.log(`10-misol: ${arr6}`)