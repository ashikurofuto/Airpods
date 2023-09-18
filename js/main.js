const chooseColors= document.querySelectorAll('choose__color-btn');
const contentItems = document.querySelectorAll('.content--item');


chooseColor.forEach(element => {
    element.addEventListener('click',open);
});


function open(event){
    const target = event.currentTarget;
    const button = target.dataset.button;
    const contentActives = document.querySelectorAll(`.${button}`);
    chooseColors.forEach(item => item.classList.remove('.choose__color-btn--active'));
    target.classList.add('.choose__color-btn--active');
    contentItems.forEach(item => item.classList.remove('.content--item__active'));
    contentActives.forEach(item => item.classList.add('.content--item__active'));
}
