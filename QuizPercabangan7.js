<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tugas Akbar</title>
    </head>
    <body>
        <script>
function hitung() {
    // Meminta input dari pengguna
    let angka1 = parseFloat(prompt("Masukkan angka pertama:"));
    let angka2 = parseFloat(prompt("Masukkan angka kedua:"));
    let operasi = prompt("Pilih operasi (tambah, kurang, kali, bagi):").toLowerCase();
    let hasil;

    // Validasi input
    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    // Melakukan operasi berdasarkan pilihan
    if (operasi === "tambah") {
        hasil = angka1 + angka2;
    } else if (operasi === "kurang") {
        hasil = angka1 - angka2;
    } else if (operasi === "kali") {
        hasil = angka1 * angka2;
    } else if (operasi === "bagi") {
        if (angka2 === 0) {
            hasil = "Tidak bisa dibagi dengan nol!";
        } else {
            hasil = angka1 / angka2;
        }
    } else {
        alert("Operasi tidak valid. Pilih antara tambah, kurang, kali, atau bagi.");
        return;
    }

    // Menampilkan hasil
    alert("Hasil: " + hasil);
}

// Memanggil fungsi hitung untuk menjalankan program
hitung();

        </script>
    </body>
    <body>
    
        <div class="container">
            <h1>Selamat Datang di Website Akbar!</h1>
            <a href="https://www.instagram.com/_.eleventh/" class="btn">instagram</a>
        </div>
    
    </body>
    </html>
</html>
