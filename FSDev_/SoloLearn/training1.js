// pengulangan Hello World
// hasil :
// Hello World 1x !!
// Hello World 2x !!
// dst

// // menggunakan For
// for (i = 1; i < 11; i++){
//     console.log (`Hello World ${i}x`);
// }

// // menggunakan while
// var i = 1;
// while (i < 11){
//     console.log (`Hello World ${i}x`);
//     i++;
// }

// latihan soal -> Web Programming Unpad (Youtube) || tgl 03-Jul-2023
// Juragan Angkot

// menggunakan for
// var i = 1;
// for (var i = 1; i < 11; i++){
//     console.log (`Angkot No. ${i} beroperasi dengan baik.`);
// }

// // menggunakan while
// var i = 1; 
// while (i < 11){
//     console.log (`Angkot No. ${i} beroperasi dengan baik.`);
    
//     if (i % 2 === 0){
//         console.log(`Angkot No. ${i} untuk jalur dalam kota`);
//     }else{
//         console.log(`Angkot No. ${i} untuk jalur luar kota`);
//     }
//     i++;
// }

var totalAngkot = 20;
var nomorAngkot = 1; 
while (nomorAngkot <= totalAngkot){
    console.log (`Angkot No. ${nomorAngkot} beroperasi dengan baik.`);
    
    if (nomorAngkot % 2 === 0){
        console.log(`Angkot No. ${nomorAngkot} untuk jalur dalam kota`);
    }else{
        console.log(`Angkot No. ${nomorAngkot} untuk jalur luar kota`);
    }
    nomorAngkot++;
}
