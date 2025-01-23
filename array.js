//let people = ["Akbar", "Laila", "Majnun"];
//people.push("Adi");

//console.log(people); 
// Output: ["Akbar", "Laila", "Majnun","Adi"]


//const siswa = ['sarip', 'ghaly'];
//const siswaGans = ['akbar', 'rabka'];
//siswa.push(...siswaGans);
//console.log(siswa); // [ 'sarip', 'ghaly', 'akbar', 'rabka' ]


//const siswaGans = ['akbar', 'rabka', 'sarip'];
//const siswaDihapus = siswaGans.pop();

//console.log(siswaGans); // [ 'akbar', 'rabka' ]
//console.log(siswaDihapus); // sarip


//const hardware = ['Ram', 'SSD'];

//const jumlahHardware = hardware.unshift('Harddisk', 'Monitor');

//console.log(hardware); // [ 'Harddisk', 'Monitor', 'Ram', 'SSD' ]
//console.log(jumlahHardware); // 4


//const users = [
//    {
//      name: 'akbarGans',
//      age: 99,
//      gender: 'male',
//    },
//    {
//      name: 'rabkaGans',
//      age: 999,
//      gender: 'male',
//    },
//    {
//      name: 'tiaraJLQ',
//      age: 999,
//      gender: 'female',
//    },
//  ];
  
//  const usersMale = users.filter((user) => user.gender === 'male');
  
//  console.log(usersMale);
  /* output:
  [
    { name: 'sarip', age: 16, gender: 'male' },
    { name: 'arfin', age: 17, gender: 'male' }
  ]
  */
//Array.js
//Soal 1
//Tambahkan
//const bahasa_pemrograman = [];
//bahasa_pemrograman.push('JavaScript', 'PHP', 'Java', 'C++', 'C#');

//console.log(bahasa_pemrograman);
//Output: ['JavaScript', 'PHP', 'Java', 'C++', 'C#', 'C']

//Hapus
//const bahasa_pemrograman = ['JavaScript', 'PHP', 'Java', 'C++', 'C#', 'C'];
//const lastBahasa_pemrograman = bahasa_pemrograman.pop();

//console.log(lastBahasa_pemrograman);  

//console.log(bahasa_pemrograman);    

//Tampilkan
//const bahasa_pemrograman = ['JavaScript', 'PHP', 'Java', 'C++', 'C#', 'C'];
//language_programming = bahasa_pemrograman;

//console.log(language_programming);


//soal 2
//Tambahkan
//const number = [3, 6, 9, 12, 15];
//number.unshift(0);

//console.log(number);

//Hapus
//const number = [0, 3, 6, 9, 12, 15];
//const firstElement = number.shift();

//console.log(firstElement); 

//console.log(number)

//const firstNumber = number;

//console.log(firstNumber);

//soal3
//filter
//const ages = [18, 22, 16, 25, 30, 14, 17, 15, 24];

//const filteredAges = ages.filter(function(number) {
//  //return number >= 18;
//});

//console.log(filteredAges); 

//const ages = [18, 22, 25, 30, 24];
//const adultAges = ages;

//console.log(adultAges);


//soal 4 : concat
const evenNumbers = [2, 4, 6]
const addNumbers = [1, 3, 5]
const allNumbers = evenNumbers.concat(addNumbers)
console.log(allNumbers)


//soal 5 : splice 
const colors = ["red", "black", "blue", "yellow", "green"]
colors[0] = "orange"
colors[1] = "pink"
console.log(colors)