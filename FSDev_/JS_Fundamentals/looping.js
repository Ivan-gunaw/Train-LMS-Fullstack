// Pengenalan perulangan

// pengulangan dengan "For" | digunakan jika sudah mengetahui akan berapa kali pengulangan
// for (var i = 0 ; i<10 ; i++){
//     console.log (i);   
// }

// pengulangan dengan "While" | penggunaan "i++" adalah untuk membatasi hasil yang kita print
// tanpa fungsi "i++" hasilnya akan terjadi "INFINITE LOOPING"
// var i = 1;
// while (i<=10){
//     console.log(i);i++;
// }

/** Study Case 1 (kelas tgl 24-Jun-2023)
 * 
 * Cetak Angka dari 1 sampai 10 dan cek apakah bilangan "GENAP" / "GANJIL"
 * 
 * Contoh
 * var num = 10;
 * 
 * Result:
 * 1 adalah Ganjil
 * 2 adalah Genap
 */

// var Angka = 10
// for (var i = 1; i<=Angka ; i++){
//     if(i%2===0){
//         console.log(i + ' adalah Genap');
//     }else{
//         console.log(i + ' adalah Ganjil');
//     }
// }

/** Study Case 2 (kelas tgl 24-Jun-2023)
 * Print sebuah string menjadi huruf besar dan kecil
 * 
 * contoh 
 * var str = "nasi kotak";
 * 
 * result
 * NaSi kOtAK
 * 
 */

// var str = "nasi kotak";
// var temp = '';

// for (var i = 0; i < str.length; i++){
//     if (i%2 === 0){
//         console.log(str[i].toUpperCase());
//     }else{
//         console.log(str[i].toLowerCase());
//     }
// }
// Notes : fungsi "Console.log" pada JS akan default print hasil secara vertical

// for (var i = 0; i < str.length; i++){
//     if (i%2 === 0){
//         temp += str[i].toUpperCase()  
//         //console.log(str[i].toUpperCase());
//     }else{
//         temp += str[i].toLowerCase()
//         //console.log(str[i].toLowerCase());
//     }
// }console.log(temp)

/** Study Case 3 (kelas tgl 24-Jun-2023)
 * 
 * Pecah kalimat menjadi per kata
 * 
 * Contoh:
 * Var Pantun = "makan siang bareng temen kerja"
 * 
 * Result :
 * makan
 * siang 
 * bareng
 * temen
 * kerja
 * 
 */

// var pantun = 'makan siang bareng temen kerja';
// var temp = "";
// 
// for (var i = 0; i<pantun.length, i++)



/** Study Case 5 (kelas tgl 24-jun-23)
 * 
 * print sebuah kotak
 * 
 * contoh:
 * var x = 3;
 * 
 * Result:
 * ###
 * ###
 * ###
 * 
 */

var x = 3;
var temp = "";

for (var i = 0; i < x ;i++){
    for (var j = 0; j < x;j++){
        temp += "#";
    }
    console.log(temp);
    temp = "";
}


/** Study Case 6 (kelas tgl 24-Jun-23)
 * 
 * Print sebuah tangga
 * 
 * contoh:
 */

// var x = 3;
// var temp = "";

// for (var i = 0; i < x ;i++){
//     for (var j = 0; j <= i;j++){
//         temp += "#";
//     }
//     console.log(temp);
//     temp = "";
// }

// var x = 3;
// var temp = "";

// for (var i = 0; i < x ;i++){
//     for (var j = 0; j <= i;j++){
//         temp += j+1;
//     }
//     console.log(temp);
//     temp = "";
// }