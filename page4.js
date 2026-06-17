function simpanDanLanjut(value) {

    let data =
        JSON.parse(localStorage.getItem("data")) || {};

    data.dresscode = value;

    localStorage.setItem(
        "data",
        JSON.stringify(data)
    );

    window.location.href = "page5.html";
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