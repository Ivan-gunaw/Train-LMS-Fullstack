// Array

// var numbers = [1,2,3,4,5];

// for (var i = 0; i < numbers.length ; i++){
//     console.log(numbers[1]);
// }

/** Study Case 1 (kelas tgl 24-Jun-23)
 * 
 * Hitung mean dari sebuah data statistik
 * 
 * contoh :
 * let stats = [1.7, 0.2, 5.1, 7.3, 3.5]
 * 
 * Result:
 * Mean = 3.56
 */

// let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
// let total = 0;

// for (let i = 0; i < stats.length; i++){
//     total += stats[i];
// }
// console.log ("mean = " + total/ stats.lenght);

/** Study Case 2 (kelas tgl 24-Jun-23)
 * 
 * cek apakah jumlah x dan o adalah sama
 * 
 * Contoh 1:
 * let Checkboard= "xxxoooxoxo"
 * Result:
 * true
 * 
 * Contoh 2:
 * let Checkboard = "xoxox"
 * Result:
 * false
 * 
 * 
 */


//let CheckBoard = "xxxoooxoxo";

//Teknik Flagging
// Contoh 1
// let countX = 0;
// let countO = 0;

// for (let i = 0 ; i < CheckBoard.length ; i++){
//     if (CheckBoard[i] === 'x'){
//         countX++;
//     }else{
//         countO++;
//     }
// }
// if (countX === countO){
//     console.log(true);
// }else{
//     console.log(false);
// }

/** Study case 3 (kelas tgl 24-Jun-23)
 *  
 * dalam suatu desa akan dipilih seorang ketua desa
 * terdapat 3 orang kandidat bernama "Vincent", Ncent, Admin
 * 
 * 
 */ 

// let votes =["Vincent","Ncent","Vincent","Admin","Admin","Vincent"];

// let voteVincent = 0;
// let voteNcent = 0;
// let voteAdmin = 0;

// for (let i = 0; i < votes.length; i++){
//     if (votes[i] === "Vincent") {
//         voteVincent++;
//     }else if (votes [i] === "Ncent") {
//         voteNcent++;
//     }else if (votes [i] === "Admin") {
//         voteAdmin++;
//     }
// }

// let result = [
//     ["Vincent", voteVincent],
//     ["Ncent", voteNcent],
//     ["Admin", voteAdmin],
// ];

// console.log(result);

/** Study Case 5
 * 
 * Tentukan score MAX dan MIN. dari sebuah Array
 * 
 * contoh:
 * let scores = [77,2,30,15,35]
 * 
 * Result
 * Max : 77
 * Min : 2
 * 
 * 
 */

let Scores = [77,2,30,15,35];

let MAX = [0];
let MIN = [0];

for (let i = 0; i < Scores.length; i++){
    if(MAX < Scores[i]){
        MAX = Scores [i];
    }
}   if(MIN > Scores[i]){
        MIN = Scores[i];
}

console.log("Max: " + MAX);
console.log("Min: " + MIN);
