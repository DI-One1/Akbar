// Memasukkan nilai secara langsung
//let nilaiDdpk = 100;

// Menentukan apakah lulus atau tidak
//if (nilaiDdpk > 75) {
    //console.log("Selamat Anda Lulus!");
//} else {
    //console.log("Mohon Maaf Tidak Lulus, Jangan Menyerah!");
//}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kategori Nilai</title>
</head>
<body>

    <h2>Masukkan Nilai Pemrograman Dasar</h2>
    
    <label for="nilai">Nilai: </label>
    <input type="number" id="nilai" placeholder="Masukkan nilai (0-100)" min="0" max="100">
    <button onclick="tentukanKategori()">Cek Kategori</button>

    <h3 id="hasil"></h3>

    <script>
// Meminta input nilai dari pengguna
let nilai = parseInt(prompt("Masukkan nilai ujian pemrograman JavaScript:"));

// Menentukan apakah lulus atau tidak
if (nilai > 75) {
    alert("Selamat Anda Lulus!");
} else {
    alert("Mohon Maaf Tidak Lulus, Jangan Menyerah!");
}

    </script>

</body>
</html>
