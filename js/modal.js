const modal = document.getElementById("modal");
const modal_wrap = document.getElementById("modal-wrap");
const modal_close = document.getElementById("modal-close");
const ap_card = document.querySelectorAll(".ap-card");
const sub_box = document.querySelectorAll(".events-modal");


for (let i = 0; i < ap_card.length; i++) {
    ap_card[i].addEventListener('click', () => {
        modal.classList.add('modal-show');
        modal_wrap.classList.add('modal-wrap-show');
    })
}

for (let i = 0; i < sub_box.length; i++) {
    sub_box[i].addEventListener('click', () => {
        modal.classList.add('modal-show');
        modal_wrap.classList.add('modal-wrap-show');
    })
}

modal_close.addEventListener('click', () => {
    modal.classList.remove('modal-show');
    modal_wrap.classList.remove('modal-wrap-show');
})