const nama = document.getElementById("nama");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

document.getElementById("submit").addEventListener("click", function() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    
    if (nama === "" || email === "" || phone === "" || message === "") {
        alert("Harap isi semua kolom!");
    } else {
        alert("SUKSES")
    }
});

var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 1500)
function plusDiv(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    console.log(index)
    const imgList = document.getElementsByClassName("slider")
    if (index > imgList.length) { slideIndex = 1 }
    if (index < 1) {slideIndex = imgList.length}
    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
}