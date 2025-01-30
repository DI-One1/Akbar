<!DOCTYPE html>
<html lang="en">
<head>
    <title>Percabangan if</title>
</head>
<body>
    <script>
        function hitungDiskon() {
    // Meminta input total belanja dari pengguna
    let totalBelanja = parseFloat(prompt("Masukkan total belanja Anda:"));

    // Validasi input
    if (isNaN(totalBelanja) || totalBelanja < 0) {
        alert("Masukkan total belanja yang valid!");
        return;
    }

    let diskon = 0;
    let jumlahDiskon = 0;
    let totalSetelahDiskon = totalBelanja;

    // Menentukan diskon berdasarkan total belanja dengan if-else
    if (totalBelanja > 1500000) {
        diskon = 0.15; // Diskon 15% jika lebih dari 1.500.000
    } else if (totalBelanja > 500000) {
        diskon = 0.10; // Diskon 10% jika lebih dari 500.000
    } else {
        diskon = 0; // Tidak ada diskon jika kurang dari atau sama dengan 500.000
    }

    // Menghitung jumlah diskon dan total yang harus dibayar setelah diskon
    jumlahDiskon = totalBelanja * diskon;
    totalSetelahDiskon = totalBelanja - jumlahDiskon;

    // Menampilkan hasil diskon dan total yang harus dibayar
    if (diskon > 0) {
        alert("Diskon Anda: Rp " + jumlahDiskon.toFixed(2) + "\nTotal yang harus dibayar setelah diskon: Rp " + totalSetelahDiskon.toFixed(2));
    } else {
        alert("Terimakasih telah berbelanja di toko kami");
    }
}

// Memanggil fungsi untuk menghitung diskon
hitungDiskon();

    </script>
</body>
</html>
