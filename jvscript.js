//membuat teks contak person kedalam id cp
document.getElementById("cp").innerText = "Contact Person";

//membuat element html (li) kedalam id motto
var motto = document.querySelector('#motto');
var ElemenBaru = document.createElement("li");
var isiTeks = document.createTextNode('Just try it, you will never know something until u taste it');
ElemenBaru.appendChild(isiTeks);
motto.appendChild(ElemenBaru);

// membuat element yang dinamis berdasarkan event handler onclick
// untuk menampilkan Pop UP
const button = document.getElementById('popup');
button.addEventListener('click', function onClick(event) {
    window.alert("Terima kasih sudah melihat CV ku! Semoga dapat nilainya bagus hehehe :)");
});