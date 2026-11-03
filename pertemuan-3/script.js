// konversi tipe data

let angka = 100;
let konverAngka = string(angka);

console.log(konverAngka  + konverAngka);
console.log(typeof konverAngka);

let tahun = '2026';
let konversiTahun = number(tahun);

console.log (konversiTahun + 4);

// nilai falsy

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null)); 
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

// nilai truthy
console.log(Boolean("ajom"));
console.log(Boolean(1));
console.log(Boolean(true));

// operator

// operator aritmatika
let a = 10;
let b = 5;

// pertambahan
console.log(a + b);
console.log

// operator penegasan

let x = 10;

console.log("nilai x awal : " + x);

x += 10;
console.log("nilai x setelah penegasan 10 : " + x);

x -= 5;
console.log("nilai x setelah penegasan 5 : " + x);

x *= 2;
console.log("nilai x setelah penegasan 2 : " + x);

x /= 2;
console.log("nilai x setelah penegasan 2 : " + x);

// opretator perbandingan

