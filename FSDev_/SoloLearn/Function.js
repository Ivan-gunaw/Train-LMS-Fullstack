// Function
// Build-in-Function

// list function String misalnya
// charAt() | slice() | split() | toString() | toLowerCase | toUpperCase
// Example :
// var nama = "Sandhika Galih";
// console.log(nama.charAt(5));

// list function Math misalnya
// sin() | cos() | tan() | random() | round() | floor() | ceil() | log()
// Example :
// var bilangan = Math.random();
// console.log(bilangan);

function totalVolumeKubus (a, b) {
    var volumeA = a**3;
    var volumeB = b**3;
    var totalVolume = volumeA + volumeB;

    return totalVolume;
}
console.log(totalVolumeKubus(10, 10));

//Example 1 :
function tambah (a,b) {
    return a + b;
}
var hasil = tambah (2,3); // pada line ini kita sudah invoke function tersebut sehingga tidak memerlukan "Function" lagi
console.log (hasil);

// Example 2 :
function tambah (a,b) {
    return a + b;
}
var a = 10;
var b = 20;
var hasil = tambah (a,b);
console.log (hasil);

// Example 3 :
function tambah (a,b) {
    return a + b;
}
var a = 10;
var b = 20;
var hasil = tambah (a*2,b*2);
console.log (hasil);

// var a = prompt ('masukan nilai 1 : ');
// var b = prompt ('masukan nilai 2 : ');
// var hasil = tambah (a,b);
// console.log (hasil);

// misalkan nilai a = 100 & nilai b = 70 -> maka hasil seharusnya = 170 || akan tetapi yang dikeluarkan adalah 10070
// hal tersebut dikarenakan setiap data yang masuk dalam fungsi "prompt" adalah "string" -> maka dari itu kita perlu sedikit memperbaiki fungsi kita

// var a = parseInt(prompt('masukan nilai 1 : ')); -> fungsi parseInt pada program ini adalah mengubah nilai menjadi "Integer"
// var b = parseInt(prompt('masukan nilai 2 : '));
// var hasil = tambah (a,b);
// console.log (hasil);

// Example 4 :

function tambah (a,b){
    return a + b;
}

function kali (a,b) {
    return a * b;
}

var a = 10;
var b = 20;
var c = 30;
var d = 40;
var hasil = kali(tambah(a,b),tambah(c,d));
console.log (hasil);

// bagaimana jika jumlah parameter & argumen, tidak sesuai
// case 1 : jika PARAMETER lebih sedikit dari ARGUMENT, maka ARGUMENT KELEBIHAN-NYA akan DIABAIKAN 

// function tambah (a,b){
//     return a + b;
// }

// var hasil = tambah (3,4,5);
// console.log(hasil);

// case 2 : jika PARAMETER lebih banyak dari ARGUMENT, maka PARAMETER KELEBIHAN-NYA akan memunculkan nilai default yaitu UNDEFINED









