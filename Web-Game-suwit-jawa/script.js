// buat function untuk menentukan pilihan computer
function getPilihComputer() {
    const comp = Math.random();
    if (comp <= 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

// buat function untuk menentukan rules
function getHasil(computer, player) {
    if (player == computer) return 'SERI!';
    if (player == 'gajah') return (computer == 'semut') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (computer == 'gajah') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (computer == 'semut') ? 'MENANG!' : 'KALAH!';
    if (player == 'gajah') return (computer == 'orang') ? 'MENANG!' : 'KALAH!';
}

// membuat gambar nya berputar random
function putar() {
    // tankap gambar komputer yang ada di attribute area komputer
    const imgComputer = document.querySelector('.img-komputer');
    // membuat array gambar untuk menampung 
    const gambar = ['gajah', 'orang', 'semut'];
    // membuat variabel i untuk setiap kali gambar akan bertambah 1 / berganti
    let i = 0;
    // membuat waktu untuk memulai putar gambar
    const waktuMulai = new Date().getTime();
    // setInterval adalah fungsi untuk melakukan sesuatu secara berulang-ulang (selama waktu tertentu)
    setInterval(function () {
        // membuat agar waktu mulai nya berhenti setelah 1 detik / waktunya selisih 1 detik 
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }

        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');

        // membuat agar gambar berhenti ketika sudah mencapai angka indeks terakhir / 3
        if (i == gambar.length) {
            i = 0;
        }

    }, 100); // -> mengatur interval nya setiap 0.1 detik
}
// cara 02

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        // membuat pilihan computer
        const pilihComputer = getPilihComputer();
        // membuat pilihan player
        const pilihPlayer = pil.className;
        // membuat hasil player vs computer
        const hasil = getHasil(pilihComputer, pilihPlayer);
        // menyisipkan fungsi putar
        putar();
        // menampilkan gambar pilih komputer / membuat agar waktu nunggu 1 detik setelah proses putar gambar komputer
        setTimeout(function () {
            // menangkap gambar di elemen area komputer
            const imgComputer = document.querySelector('.img-komputer');
            // menampilkan gambar pilihan computer
            imgComputer.setAttribute('src', 'img/' + pilihComputer + '.png');
            // menangkap elemen div attribute info
            const info = document.querySelector('.info');
            // mengganti/menyisipkan isi/text elemen div attribute info
            info.innerHTML = hasil;
        }, 1000);
    });
});

// cara 01

// // mengatur (tombol) player gajah
// // tankap attribute class gajah
// const pGajah = document.querySelector('.gajah');
// // membuat event player gajah
// pGajah.addEventListener('click', function () {
//     // membuat pilihan computer
//     const pilihComputer = getPilihComputer();
//     // membuat pilihan player
//     const pilihPlayer = pGajah.className;
//     // membuat hasil player vs computer
//     const hasil = getHasil(pilihComputer, pilihPlayer);
//     // menangkap gambar di elemen area komputer
//     const imgComputer = document.querySelector('.img-komputer');
//     // menampilkan gambar pilihan computer
//     imgComputer.setAttribute('src', 'img/' + pilihComputer + '.png');
//     // mengangkap elemen div attribute info
//     const info = document.querySelector('.info');
//     // mengganti/menyisipkan isi/text elemen div attribute info
//     info.innerHTML = hasil;
// });

// // mengatur (tombol) player orang
// // tangkap attribute class orang
// const pOrang = document.querySelector('.orang');
// // membuat event player orang
// pOrang.addEventListener('click', function () {
//     // membuat pilihan computer
//     const pilihComputer = getPilihComputer();
//     // membuat pilihan player
//     const pilihPlayer = pOrang.className;
//     // membuat hasil player vs computer
//     const hasil = getHasil(pilihComputer, pilihPlayer);
//     // menangkap gambar pilihan computer
//     const imgComputer = document.querySelector('.img-komputer');
//     // menampilkan gambar pilihan computer
//     imgComputer.setAttribute('src', 'img/' + pilihComputer + '.png');
//     // menangkap elemen div class info
//     const info = document.querySelector('.info')
//     // mengganti / menyisipkan isi/text elemen div attribute info
//     info.innerHTML = hasil;
// });

// // mengatur (tombol) player semut
// // tangkap attribute class semut
// const pSemut = document.querySelector('.semut');
// // membuat event player orang
// pSemut.addEventListener('click', function () {
//     // membuat pilihan computer
//     const pilihComputer = getPilihComputer();
//     // membuat pilihan player
//     const pilihPlayer = pSemut.className;
//     // membuat hasil player vs computer
//     const hasil = getHasil(pilihComputer, pilihPlayer);
//     // menangkap gambar pilihan computer
//     const imgComputer = document.querySelector('.img-komputer');
//     // menampilkan gambar pilihan computer
//     imgComputer.setAttribute('src', 'img/' + pilihComputer + '.png');
//     // menangkap elemen div class info
//     const info = document.querySelector('.info')
//     // mengganti / menyisipkan isi/text elemen div attribute info
//     info.innerHTML = hasil;
// });