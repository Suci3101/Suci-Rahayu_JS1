// if,else,nested if
let totalBelanja = 10000;

if (totalBelanja >= 20000) {
  console.log("Diskon 10%");
} else if (totalBelanja >= 10000) {
  console.log("Diskon 5%");
} else {
  console.log("Tidak ada diskon");
}

// switch case
let buahBuahan = "semangka";

switch (buahBuahan) {
  case "anggur":
  case "semangka":
    console.log("buah yang mengandung vitamin A");
    break;
  case "kiwi":
  case "lemon":
    console.log("Buah yang mengandung vitamin C");
    break;
  default:
    console.log("Tumbuhan tidak dikenal");
}

// for statement
let total = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}

console.log(total);
// while, do while 
const kata = 'Suci Rahayu';
let reversed = '';
let index = kata.length - 1;

do {
  reversed += kata[index];
  index--;
} while (index >= 0);
// function
function gabungkanString(str1, str2) {
  return str1 + " " + str2;
}

const kata1 = "Suci";
const kata2 = "Rahayu";
const hasil = gabungkanString(kata1, kata2);
console.log(hasil);