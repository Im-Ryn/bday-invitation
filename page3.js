function simpanDanLanjut(value) {

    let data =
        JSON.parse(localStorage.getItem("data")) || {};

    data.sushi = value;

    localStorage.setItem(
        "data",
        JSON.stringify(data)
    );

    window.location.href = "page4.html";
}

function pilih(tempat) {
    simpanDanLanjut(tempat);
}

function submitCustom() {

    const input = document
        .getElementById("pilihan-lain")
        .value
        .trim();

    if (input === "") {
        alert("Heh jangan kosong");
        return;
    }

    simpanDanLanjut(input);
}