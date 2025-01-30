// Fungsi untuk menentukan kategori usia
function kategoriUsia(usia) {
  if (usia >= 0 && usia <= 12) {
      return "Bocil";
  } else if (usia >= 13 && usia <= 17) {
      return "abg";
  } else if (usia >= 18 && usia <= 59) {
      return "Dewasa";
  } else if (usia >= 60) {
      return "Kolot";
  } else {
      return "Usia tidak valid"; // Jika usia kurang dari 0
  }
}

// Mengecek usia 12
let usia = 12;  // Usia yang ingin dicek
let kategori = kategoriUsia(usia);

// Menampilkan hasil
console.log("Usia " + usia + " masih " + kategori);
