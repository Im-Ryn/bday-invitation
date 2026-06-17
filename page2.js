function simpanDanLanjut(value) {

    let data =
        JSON.parse(localStorage.getItem("data")) || {};

    data.tujuan = value;

    localStorage.setItem(
        "data",
        JSON.stringify(data)
    );

    window.location.href = "page3.html";
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
    }else if(input == "eropa" || input == "europe"){
        alert("Hey no no ya");
        return;
    }

    simpanDanLanjut(input);
}