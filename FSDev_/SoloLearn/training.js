/**
 * Study Case 1 (pengulangan)
 *
 * Hitung mean dari sebuah data statistik
 *
 * Contoh:
 * let stats = [1.7, 0.2, 5.1, 7.3, 3.5]
 *
 * Result:
 * Mean = 3.56
 */

let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
let total = 0;

for (let i = 0; i < stats.length ; i++){
    total += stats[i]; // pada putaran pertama -> 0 + 1.7 // putaran kedua -> 1.7 + 0.2... dst //
}
console.log ("Mean = " + total/stats.length);
// result -> Mean = 3.56

/**
 * Study Case 2
 *
 * Cek apakah jumlah x dan o adalah sama
 *
 * Contoh 1:
 * let checkBoard= "xxxoooxoxo"
 * Result:
 * true
 *
 * Contoh 2:
 * let checkBoard = "xoxox"
 * Result:
 * false
 */

// Contoh 1: If... else
// let checkBoard = "xxxoooxoxo";
// let countX = 0;
// let countO = 0;

// for(i=0 ; i<checkBoard.length ; i++){
//     if (checkBoard[i] === "x"){
//         countX++;
//     }else{
//         countO++;
//     }
// }
// if (countX === countO){
//     console.log ("True");
// }else{
//     console.log ("False");
// }

// Contoh 2: if... else

// let checkBoard = "xoxox";
// let countX = 0;
// let countO = 0;

// for (i=0 ; i<checkBoard.length ; i++){
//     if (checkBoard[i] === "x" ){
//         countX++;
//     }else{
//         countO++;
//     }
// }
// if(countX === countO){
//     console.log ("True");
// }else{
//     console.log ("False");
// }

/**
 * Study Case 3
 *
 * Dalam suatu desa akan di pilih seorang ketua desa. Terdapat 3 orang kandidat, bernama: Vincent, Ncent, Admin.
 * Hitung masing2 suara yang di dapat per kandidat.
 *
 * Contoh:
 * let votes = ["Vincent","Ncent",
 * "Vincent","Admin","Admin","Vincent"]
 *
 * Result:
 * [
 *      ["Vincent", 3],
 *      ["Ncent", 1],
 *      ["Admin", 2]
 * ]
 */

// let votes =["Vincent", "Ncent", "Vincent", "Admin", "Admin", "Vincent"];
// voteVincent = 0;
// voteNcent = 0;
// voteAdmin = 0;

// for (let i=0 ; i < votes.length ; i++){ 
//     switch (votes[i]){ //-> template penulisan "Variabel [baris] [column]"
//         case "Vincent":
//             voteVincent++;
//             break;
//         case "Ncent":
//             voteNcent++;
//             break;
//         case "Admin":
//             voteAdmin++;
//             break;
//     }
// }
// let Results = [
//     ["Vincent", voteVincent],
//     ["Ncent", voteNcent],
//     ["Admin", voteAdmin],
// ];
// console.log (Results);

// Study Case 4
// soal di "slide 03a Array .ppt"

// let murid = [
// [1, "Vincent", 3.5]
// [2, "Udin", 3.0]
// [3, "Mamang", 2.1]  
//]

// Syarat lulus IPK Minimum >= 3.0

let murid = [
    [1, "Vincent", 3.5]
    [2, "Udin", 3.0]
    [3, "Mamang", 2.1]  
]

for (let i = 0; i < murid.length ; i++){
    if (murid [i][2] >= 3.0){
        console.log (murid [i][0]+". " + murid [i][1] +", IPK = " + murid[i][2]+", Lulus");
    }else{
        console.log (murid [i][0]+". " + murid [i][1] +", IPK = " + murid[i][2]+", Gagal");
    }
}
