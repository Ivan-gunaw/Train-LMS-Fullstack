// latihan soal -> Web Programming Unpad (Youtube) || tgl 05-Jul-2023
// Juragan Angkot

var totalAngkot = 10;
var angkotBeroperasi = 6;
var angkotBaruKeluar = angkotBeroperasi + 2;
var nomorAngkot = 1; 
// while (nomorAngkot <= totalAngkot){
//     console.log (`Angkot No. ${nomorAngkot} beroperasi dengan baik.`);
    
//     if (nomorAngkot % 2 === 0){
//         console.log(`Angkot No. ${nomorAngkot} untuk jalur dalam kota`);
//     }else{
//         console.log(`Angkot No. ${nomorAngkot} untuk jalur luar kota`);
//     }
//     nomorAngkot++;
// }

// dengan rumus "FOR"
// for (var nomorAngkot = 1; nomorAngkot <= totalAngkot; nomorAngkot++){
//     if (nomorAngkot <= 6){
//         console.log (`Angkot no. ${nomorAngkot} beroperasi dengan baik.`);    
//     }else{
//         console.log (`Angkot no. ${nomorAngkot} sedang tidak beroperasi`);
//     }
    
// }

// gabungan rumus "While" & "For";

// while (nomorAngkot <= angkotBeroperasi){
//     console.log (`Angkot no. ${nomorAngkot} beroperasi dengan baik.`);
//     nomorAngkot++;
// };

// for (nomorAngkot = angkotBeroperasi + 1; nomorAngkot <= totalAngkot; nomorAngkot++){
//     console.log(`Angkot no. ${nomorAngkot} sedang tidak beroperasi.`);
// };

// latihan soal IF... Else IF... Else Angkot4.JS
// for (var nomorAngkot = 1; nomorAngkot <= totalAngkot; nomorAngkot++){
//     if(nomorAngkot <= 6){
//         console.log (`Angkot no. ${nomorAngkot} beroperasi dengan baik.`);
//     }else if ( nomorAngkot < angkotBaruKeluar || nomorAngkot > angkotBaruKeluar){
//         console.log (`Angkot no. ${nomorAngkot} sedang tidak beroperasi.`);
//     }else{
//         console.log(`Angkot no. ${nomorAngkot} sedang lembur`);
//     } temp = " ";
// } 

// Jawaban dari Web Programming Unpad
// for (var nomorAngkot = 1; nomorAngkot <= totalAngkot; nomorAngkot++){
//     if(nomorAngkot <= 6){
//         console.log (`Angkot no. ${nomorAngkot} beroperasi dengan baik.`);
//     }else if (nomorAngkot == angkotBaruKeluar){
//         console.log (`Angkot no. ${nomorAngkot} sedang lembur.`);
//     }else{
//         console.log(`Angkot no. ${nomorAngkot} sedang tidak beroperasi`);
//     }
// }

// latihan soal IF... Else IF... Else Angkot5.JS
// for (var nomorAngkot = 1; nomorAngkot <= totalAngkot; nomorAngkot++){
//     if(nomorAngkot <= 6){
//         console.log (`Angkot no. ${nomorAngkot} beroperasi dengan baik.`);
//     }else if ( nomorAngkot % 2 === 0){
//         console.log (`Angkot no. ${nomorAngkot} sedang lembur.`);
//     }else{
//         console.log(`Angkot no. ${nomorAngkot} sedang tidak beroperasi`);
//     } 
// } 

// latihan soal IF... Else IF... Else Angkot6.JS
for (var nomorAngkot = 1; nomorAngkot <= totalAngkot; nomorAngkot++){
    if(nomorAngkot < 5 || nomorAngkot === 6){
        console.log (`Angkot no. ${nomorAngkot} beroperasi dengan baik.`);
    }else if ((nomorAngkot % 2 === 0) || nomorAngkot === 5){
        console.log (`Angkot no. ${nomorAngkot} sedang lembur.`);
    }else{
        console.log(`Angkot no. ${nomorAngkot} sedang tidak beroperasi`);
    } 
} 

for (var nomorAngkot = 1; nomorAngkot <= totalAngkot; nomorAngkot++){
    if(nomorAngkot < 5 || nomorAngkot === 6){
        console.log (`Angkot no. ${nomorAngkot} beroperasi dengan baik.`);
    }else if ((nomorAngkot === 8) || nomorAngkot === 10 || nomorAngkot === 5){
        console.log (`Angkot no. ${nomorAngkot} sedang lembur.`);
    }else{
        console.log(`Angkot no. ${nomorAngkot} sedang tidak beroperasi`);
    } 
} 