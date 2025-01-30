<!DOCTYPE html>
<html lang="en">
<head>
    <title>Percabangan if</title>
</head>
<body>
    <script>
// Meminta input angka dari pengguna
let angka = parseFloat(prompt("Masukkan sebuah angka:"));

// Menentukan apakah angka positif, negatif, atau nol
if (angka > 0) {
    alert(angka + " adalah angka positif.");
} else if (angka < 0) {
    alert(angka + " adalah angka negatif.");
} else {
    alert("Angka yang Anda masukkan adalah nol.");
}

    </script>
</body>
</html>
