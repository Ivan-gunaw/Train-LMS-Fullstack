// function hello(){
//     console.log("Halo, selamat pagi!");
// }

// hello();

// function checkAngka (number){
//     if (number %2 === 0){
//         console.log("genap");
//     }else{
//         console.log("ganjil");
//     }
// }

// checkAngka (7);

// function splitToArray (str){
//     var tempArray = str.split(" ");
//     return tempArray;
// }

// function jumlahKata (str){
//     var result = splitToArray (str);
//     var arrayLength = result.length;
//     return arrayLength;
// }
// console.log (jumlahKata ("Hello Selamat Pagi"));

/** Study Case 1 (kelas tanggal 25-Jun-2023)
 *  
 * Buatlah sebuah function untuk cek jumlah faktor dari sebuah angka
 * 
 * contoh:
 * cekJumlahFaktor(12)
 * 
 * result:
 * 6
*/ 

// function cekJumlahFaktor (num){
//     var faktor = 0
//     for (let i = 1; i <= num ; i++){
//         if(num%i === 0) {
//             faktor++;
//         }
//     }
//     return faktor;
// }
// console.log (cekJumlahFaktor (12));

//Study Case 2 (kelas tgl 25-Jun-23) - cek bilangan prima
// function cekBilanganPrima (faktor){
//     for (let i = 1; i<= faktor ; i++){
//         if (faktor%i === 0 || faktor%faktor === 0){
//             console.log ("bilangan prima");
//         }else{
//             console.log ("bukan bilangan prima");
//         }
//     }
//     return faktor;
// }
// console.log(cekBilanganPrima (19)); 

// Study Case 3 (kelas tgl 25-jun-2023)˜

// Study Case 4 (kelas tgl 25-Jun-2023)

// let count = [1,2,3,4,5];
// function countAverage(count){
//     let total = 0
//     for (var i = 0 ; i < count.length ; i++){
//         total += count[i];
//     }
//     return total/count.length;
    
// }
// console.log (countAverage(count));

/**
 * Study Case 6
 * 
 * Tentukan apakah sebuah kata atau kalimat adalah Palindrome.
 * Palindrome adalah sebuah istilah untuk kata jika dibalik tetap menghasilkan kata yang sama
 * Contoh:
 * apa
 * katak
 * kodok
 * ovo
 * kasur rusak
 * 
 * Test Case:
 * checkPalindrome("katak") // true
 * checkPalindrome("baso") // false
 * checkPalindrome() // Masukan sebuah kata.
 */

function checkPalindrome (str){
    var newString = '';

    for (var i = str.length - 1; i>=0; i--){
        newString += str [i];
        return newString;
}
}

console.log (checkPalindrome ('apa'));
