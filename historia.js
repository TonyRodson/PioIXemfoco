let currentIndex= 0;
function carroseu (direction){
    const carroseu = document.querySelector('.carroseuiner');
    const item = document.querySelectorAll('.carroseuitem');
    const totalitem = item.length;

    currentIndex += direction;

    if(currentIndex<0){
        currentIndex = totalitem - 1
    }else if(currentIndex >= totalitem){
        currentIndex = 0 ;
    }
    const offset= -currentIndex *100;
    carroseu.style.transform =`translateX(${offset}%)`
}
function link(){
    location.href='file:///C:/Users/Aluno/Desktop/Tony%20Rodson%202/projeto%20integrador/capela.html'
}
function link2() {
    location.href='file:///C:/Users/Aluno/Desktop/Tony%20Rodson%202/projeto%20integrador/igreja.html'
}
function link3(){
    location.href='file:///C:/Users/Aluno/Desktop/Tony%20Rodson%202/projeto%20integrador/padreibiapina.html'
}