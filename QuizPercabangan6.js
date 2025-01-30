<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nama Bulan Kalender Islam</title>
    <script>
        function tampilkanBulan() {
            // Array yang berisi nama bulan dalam kalender Islam (Hijriyah)
            const bulanIslam = [
                "Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir", 
                "Jumadil Awwal", "Jumadil Akhir", "Rajab", "Sha'ban", 
                "Ramadhan", "Syawal", "Dhul-Qi'dah", "Dhul-Hijjah"
            ];

            // Meminta input angka bulan dengan prompt
            let angkaBulan = parseInt(prompt("Masukkan angka bulan (1-12):"));

            // Menampilkan hasil dengan pop-up menggunakan alert
            if (angkaBulan >= 1 && angkaBulan <= 12) {
                alert("Bulan: " + bulanIslam[angkaBulan - 1]);
            } else {
                alert("Masukkan angka antara 1 dan 12.");
            }
        }
    </script>
</head>
<body>
    <h2>Nama Bulan Kalender Islam</h2>
    <button onclick="tampilkanBulan()">Masukkan Angka Bulan</button>
</body>
</html>
