//kurang lebih syntax nya sama kaya C
// alert("Hallo Everyone!!")

//komen di java script pake
//keyword dipake kalo data bisa di ubah di web nya
// keyword cons tidak bisa di ubah di web nya

let name="Hwang Angel";
console.log(`Nama Saya ${name}`); //untuk menampilkan
//(`---- ${---}) buat nambahin kata kata, trus panggil variabel nya

// name = "kim Seungmin";
// console.log(name); //buat manggil variabel nya aja

// console.log("annyeonghasaeyeo");
//phi = 22/7;

// let r = 10;

// r++; 
// console.log(r);
//++ itu artinya +1

// console.log(r%2);
// console.log(r%=2);

// prompt("masukan pw"); //buat input

// let word = prompt("kata kata hari ini");
// console.log(word);

// console.log(phi);

// let r = prompt("LuasLingkaran");
// const phi = 3.14;
// let Llingkaran = phi * r**2;
// console.log(Llingkaran);

// let x = 1;
// let y = 1;

// let a = 10;
// let b = 3;

// console.log(x==y);
// console.log(x==y || a==b);

// if (b>a){
//     console.log("benar");
// }
// else if (b==a){
//     console.log("Sama cihuyy");
// }
// else{
//     console.log("SALAH!");
// }

// switch (b){
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     default:
//         console.log("default");
//         break;

// }
// let z = 12;
// z < a ? console.log("truee") : console.log("false");

// for(let i=1; i<=8; i++){
//     console.log(`ngulang-${i} kali`);
// }

// function MenghitngLlingkaran(r){
//     return phi * r ** 2;
// }


// let MenghitngLlingkaran = (r) =>{
//     const phi = 3.14;
//     return phi * r ** 2;
// }

// console.log (MenghitngLlingkaran(10))
// console.log (MenghitngLlingkaran(20))

// //array
// let suami = ["seungmin", "hyunjin", "leeknow"];
// console.log(suami[2]);

// suami.push("felix");//nambah elemen
// console.log(suami);
// console.log(suami.length);

// //suami.pop(); //hapus elemen terakhir
// console.log(suami);

// suami.forEach((swami)=>{
//     console.log(suami);
// })

const btn = document.getElementById("btn");

function clicked() {
    btn.innerText = "sudah di klik";
}

function gantiwarna() {
    btn.style.backgroundColor = "green";
}