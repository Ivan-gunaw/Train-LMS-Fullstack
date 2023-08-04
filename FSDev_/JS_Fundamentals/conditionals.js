// 1. IF.... Else
// 2. Switch Case

// Study Case 1 
// Buatlah Coding untuk logika tersebut
// Jika umur sudah atau lebih dari 17 tahun, maka cetaklah "Bisa Bikin KTP" jika tidak maka cetak "Belum Bisa Bikin KTP"

// var umur = 17

// if (umur >= 17){
//     console.log("bisa bikin KTP");
// }else{
//     console.log("belum bisa bikin KTP");
// }

// Study Case 2
// Buatlah sebuah aplikasi tiket masuk sebuah wahana dengan ketentuan sebagai berikut

// var umur = 17
// var tb = 149

// if(umur < 17 && tb < 150){
//     console.log ("tidak boleh masuk");
// }else{
//     console.log("boleh masuk");
// }

// if(umur < 17){
//     console.log("tidak boleh masuk");
// }else if(tb < 150){
//     console.log("tidak boleh masuk");
// }else {
//     console.log("boleh masuk");
// }


/** Study Case 1 (Full Stack Class tgl 24-Jun-2023)
 * Cek bilangan "GANJIL" & "GENAP"
 * 
 * Contoh:
 * Var num = 5;
 * 
 * Result:
 * 5 adalah bilangan Ganjil
 */

// let Number = 5;

// if (Number%2===0){
//     console.log(Number + ' adalah bilangan Genap');
// }else{
//     console.log(Number + ' adalah bilangan Ganjil');
// }

/** Study Case 2 (Full Stack Class tgl 24-Jun-2023)
 * program cek "Grade Sekolah"
 * 
 * Grade A : Score antara 100 - 85
 * Grade B : Score antara 84 - 70
 * Grade C : Score antara 69 - 55
 * Grade D : Score antara 54 - 40
 * Grade E : Score antara 39 - 0
 */

// let Score = 84;

// if (Score <= 100 && Score >= 85){
//     console.log("Grade A");
// }else if(Score <= 84 && Score >= 70){
//     console.log("Grade B");
// }else if(Score <= 69 && Score >= 55){
//     console.log("Grade C");
// }else if(Score <= 54 && Score >= 40){
//     console.log("Grade D");
// }else if(Score <= 39 && Score >= 0){
//     console.log("Grade E");
// }else{
//     console.log("Masukan score yang benar, trims.");
// }

/** Study Case 3 (Full Stack Class tgl 24-Jun-23)
 * ada 3 Jenis access : Public, Protected, Private
 * 
 * Jika Access kosong , maka tampilkan "Input Access"
 * 
 * Access Public, jika level dibawah 5 maka tampilkan "Public di bawah 5"
 * Access Public, jika level diatas 5 maka tampilkan "Public di atas 5"
 * Access Public, jika level sama dengan 5 maka tampilkan "Public Five"
 * 
 * Access Private, jika level dibawah 5 maka tampilkan "Private di bawah 5"
 * Access Private, jika level diatas 5 maka tampilkan "Private di atas 5"
 * Access Private, jika level sama dengan 5 maka tampilkan "Private Five"
 * 
 * Access Protected, jika level dibawah 5 maka tampilkan "Protected di bawah 5"
 * Access Protected, jika level diatas 5 maka tampilkan "Protected di atas 5"
 * Access Protected, jika level sama dengan 5 maka tampilkan "Protected Five"
 * 
 * Jika Access salah, tampilkan access is not defined
 * 
 * BUAT CODING menggunakan Nested Conditional : Switch case & if...else
 * 
 */

var access = "Public";
var level = 6;

switch (access){
    case "Public":
        if (level < 5){
            console.log ("Public di bawah 5");
        }else if (level > 5){
            console.log ("Public di atas 5");
        }else{
            console.log ("Public Five");
        }
        break;
    case "Private":
        if (level <  5){
            console.log ("Private di bawah 5");
        }else if (level > 5){
            console.log ("Private di atas 5");
        }else{
            console.log ("Private Five");
        }
        break;
    case "Protected":
        if (level < 5){
            console.log ("Protected di bawah 5");
        }else if (level > 5){
            console.log ("Protected di atas 5");
        }else{
            console.log ("Protected Five")
        }
        break;
    case "":
        console.log ("Input Access");
        break;
    default :
        console.log ("Access is not Defined");
        break;
}


