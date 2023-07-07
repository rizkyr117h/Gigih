const myPromise = new Promise((resolve, reject) => {
  // Menjalankan operasi asinkron
  const data = "Ini adalah data yang ditemukan.";

  // Mengubah status Promise menjadi terpenuhi dan memberikan data sebagai hasilnya
  resolve(data);
});

// Menangani Promise yang terpenuhi
myPromise.then((result) => {
  console.log("Promise terpenuhi dengan hasil:", result);
});
