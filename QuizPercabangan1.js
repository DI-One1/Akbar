//if (false) {
  //  console.log('statement1');
  //} else if (false) {
    //console.log('statement2');
  //} else if (false) {
    //console.log('statement3');
  //} else {
    //console.log('statement4');
  //}

const nilai = 83;

if (nilai <= 100 && nilai >= 92) {
  console.log('Grade: A');
} else if (nilai < 92 && nilai >= 84) {
  console.log('Grade: B');
} else if (nilai < 84 && nilai >= 75) {
  console.log('Grade: C');
} else if (nilai < 75 && nilai >= 0) {
  console.log('Grade: D');
} else {
  console.log('Nilai tidak valid');
}

console.log(nilai);
