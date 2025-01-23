//true && true; // true
//true && false; // false
//false && true; // false
//false && false; // false

//2 < 3 && 6 < 8; // true && true = true
//2 < 3 && 6 > 8; // true && false = false
//2 > 3 && 6 < 8; // false && true = false
//2 > 3 && 6 > 8; // false && false = false

//true || true; // true
//true || false; // true
//false || true; // true
//false || false; // false

//2 < 3 || 6 < 8; // true || true = true
//2 < 3 || 6 > 8; // true || false = true
//2 > 3 || 6 < 8; // false || true = true
//2 > 3 || 6 > 8; // false || false = false

//'' || 'hello world'; // hello world

//let alok = 7;
//alok += 4; // alok = 7 + 4
//console.log(alok);

//let a = 5.5555555;
//let b = 2.3999;
//let hasil = a + b;
//console.log(hasil);  // Output: 7.955455499999999

const sedangSenang = true;
const sedangSedih = false;

if (sedangSenang && sedangSedih) {
    console.log('Anda Senang hidup')
}