// Object -> kumpulan dari "Value" -> mirip seperti Larik namun diawali dengan simbol 'kurung kurawal' | {}

let student = { 
    name : "Vincent",
    gpa : 3.21,
    isGraduated : true,
    skills : ["js", "c", "flutter"],
    profile : {
        city : "Jakarta",
        address : "Kebon Jeruk",
    },
    "cek status": "yes",
    100: 5,
};

// let temp = 100
// // typeof untuk cek tipe data

// console.log(student[temp]); // menggunakan kurung siku untuk memanggil hasil variabel // menggunakan titik (.) untuk menampilkan atribut juga
// console.log (student.gpa);
// console.log(student["isGraduated"]);
// console.log(student["cek status"]);
// console.log(student["100"]);


// for(let key in (student)){
//     console.log(key);
//     console.log(student[key]);
// }

// menggunakan "function" untuk mengubah array menjadi object.
// var buah = ["durian", 75000, true];

// function changeToObject (array){
//     var result = {}
//     result.jenis = array[0];
//     result.harga = array[1];
//     result.enak = array [2];
//     return result
// }
// console.log (changeToObject(["Durian", 75000, true]));

// // Method dalam Obyek
// var mobil = {
// // Key
//     name : "Civic",
//     cc : 5000,
// // Method
//     startEngine : function(){
//         console.log("Mesin nyala");        
//     }
// }  


// Object Class tgl 25-Jun-23

// let height = 160;

// let caca = {
//   name: "Caca",
//   weight: 45,
//   height: 155,
//   hobbies: ["nonton", "makan"],
//   mentionHobbies: function () {
//     console.log("Hobby Caca: ");
//     for (let i = 0; i < this.hobbies.length; i++) {
//       console.log(i + 1 + ". " + this.hobbies[i]);
//     }
//   },
//   cacaHeight: function () {
//     console.log(this.height);
//   },
// };

// console.log(caca);
// caca.mentionHobbies();
// caca.cacaHeight();

