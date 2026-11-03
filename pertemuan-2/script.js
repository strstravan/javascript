console.log("Hello World");

let myname = "jum'at";
let address = "Jl. Raya";
let a = "5";

let b = "6";

let c = a * b;

//number
let z = 10;
console.log(typeof c);
console.log(`nama saya ${myname} dan alamat saya ${address}`);
console.log(a * b);
console.log(myname);
console.log(typeof z);

//bolean
let isTrue = true;
console.log(typeof isTrue);

//null & undefined
let VarOne = null;
let VarTwo;
console.log(typeof VarOne);
console.log(typeof VarTwo);
// array
const array = ["spageti", "ayam geprek", "telur dadar"];
array.push("nasi goreng");
array.push("nasi uduk");
array.push(1);
array.pop("spageti");
console.log(array[4]);
console.log(
  `nama saya ${myname} dan alamat saya ${address} dan saya suka makan ${array[1]}`,
);

// Array push

let bek = ["burung", "angsa"]; //— Menambah data di akhir
bek.push("bebek");

console.log(bek);

// Array pop

let ajom = ["baju", "celana", "topi"]; //pop() — Menghapus data terakhir
ajom.pop();

console.log(ajom);

// Array shift

let hp = ["huawei", "iphone"]; // unshift() — Menambah data di awal
hp.unshift("samsung");

console.log(hp);

let myData = {
    name : "ajom",
    address : "jakarta",
    age : 16

};
myData.hobi = "ngaji";
console.log(myData);

//tuliskan variabel dengan 5 data disimpan di array dan tampilkan data tersebut seolah olah
//cerita yang berkaitan diri data itu menggunakan document.write()
var cerita = ["ajam", "sekolah", "sepeda", "teman", "perpustakaan"];

document.writein(cerita[0] + " pergi ke " + cerita[1] + " menggunakan " + cerita[2] + ". Di sana, ia bertemu " + cerita[3] + ". Mereka pergi ke " + cerita[4] + " untuk membaca buku bersama.");

//tuliskan variabel dengan 7 data disimpan di object dan tampilkan data tersebut seolah olah cerita yg berkaitan dari data itu menggunakan document.write()

 let cerita = {
        nama: "str",
        umur: 15,
        sekolah: "SMA bujar",
        kota: "bogor",
        teman: "rupawan",
        hobi: "bermain futsal",
        citaCita: "imam masjidil haram"
    };

    


    document.write("Pada suatu hari, ada seorang anak bernama " + cerita.nama + ".");
    document.write("<br>Ia berusia " + cerita.umur + " tahun.");
    document.write("<br>" + cerita.nama + " bersekolah di " + cerita.sekolah + ".");
    document.write("<br>Ia tinggal di kota " + cerita.kota + ".");
    document.write("<br>Di sekolah, ia memiliki teman bernama " + cerita.teman + ".");
    document.write("<br>Mereka sering menghabiskan waktu dengan " + cerita.hobi + ".");
    document.write("<br>Kelak, " + cerita.nama + " ingin " + cerita.citaCita + ".");

