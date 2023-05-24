let warna = ['merah,hijau,kuning,putih,biru'];

for (let i = 0; i <warna.length; i++) {
    console.log(warna[i]);
}
for (let key in warna) {
    console.log('Nama warna' + key + ' adalah ' + warna [key]);
}