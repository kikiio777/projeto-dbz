const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo =video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
// passo 2
botaoTrailer.addEventListener("click", () => {
    alternarModal();
 // passo 4 
    modal.classList.toggle("aberto");
    video.setAttribute("src",linkDoVideo);
});

// passo 3

//OBJETIVO 2- passo 1 
const botaoFecharModal = document.querySelector(".fechar-modal");
// passo 2
botaoFecharModal.addEventListener("click", () => {
    //passo 3
   alternarModal();
    video.setAttribute("src","");
});






