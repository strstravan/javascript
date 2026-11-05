

function helloworld(){
    // kode yg di eksekusi
    console.log("Hello World");
}

helloworld()

function looping(a){
    for(i = 1 ; i <= a; i++){
        console.log('mobil' + i)
    }
}
looping(100)

function pertambahan(a , b){
    console.log(a + b)
}
pertambahan(10,10)


// buat function dengan menggunakan parameter dan argumen perkalian, pembagian , pengurangan dan satu favorit banhgun datar rumus

function perkalian(a , b) {
    console.log(a * b)
}
perkalian(10, 5)


function pembagian(a , b) {
    console.log(a / b)
}
pembagian(20, 5)


function pengurangan(a , b) {
    console.log(a - b)
}
pengurangan(10, 5)


function luasPersegiPanjang(panjang , lebar) {
    console.log(panjang * lebar)
}
luasPersegiPanjang(10, 5)

function salam(nama = "tamu") {
    console.log("Assalamualaikum " + nama)
}
salam("haidar")

function cetakNamaSiswa(jabatan,usia...name) {
    console.log(jabatan + "" + usia + "" name{2})
}
cetakNamaSiswa("programer", 20, "haidar", "satria", "asoom", "keren","fulan")

// return value
function perkalian(a.b) {
    return a + b
}
console.log(perkalian(10, 20))

let user = "taufik";

function cetakUser(){
    let user2 = "nonim";

    console.log("user1 : " + user)
}
console.log(user2)
cetakUser()