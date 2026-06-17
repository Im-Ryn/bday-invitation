function kirimWhatsApp() {

    const data =
        JSON.parse(localStorage.getItem("data")) || {};

    const pesan = `
Halo!

Aku sudah menyelesaikan semua pilihannya. Berikut detail tempat yang aku inginkan:

• Tujuan
${data.tujuan}

• Sushi Place
${data.sushi}

• Dresscode
${data.dresscode}

• Waktu
${data.jam}

• Pesan Tambahan
${data.pesan}

Semoga semuanya sesuai ya :)
`;

    const nomorAdmin = "6281210834417";

    const url =
        `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}


function simpanDanLanjut(value) {

    let data =
        JSON.parse(localStorage.getItem("data")) || {};

    data.pesan = value;

    localStorage.setItem(
        "data",
        JSON.stringify(data)
    );

    kirimWhatsApp();
}

function pilih(tempat) {
    simpanDanLanjut(tempat);
}

function submitCustom() {

    const input = document
        .getElementById("pilihan-lain")
        .value
        .trim();


    simpanDanLanjut(input);
}