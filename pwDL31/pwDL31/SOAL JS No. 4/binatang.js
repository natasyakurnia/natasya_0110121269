const hs = document.getElementById("hasil")
const binatang = document.getElementById("binatang")
function imageBinatang() {
    if (binatang.value == "k") {
        return hs.src = "kucing.jpg"
    } else if (binatang.value == "g") {
        return hs.src = "gajah.jpg"
    } else if (binatang.value == "i") {
        return hs.src = "kelinci.jpg"
    } else if (binatang.value == "b") {
        return hs.src = "buaya.jpg"
    } else {
        return hs.src = "singa.jpg"
    }
}
function imageConfirmation() {
    alert(hs.src)
}