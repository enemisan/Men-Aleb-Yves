const modal = document.querySelectorAll(".modal");
const modal_wrap = document.querySelectorAll(".modal-wrap");
const modal_close = document.querySelectorAll(".modal-close");
const ap_card = document.querySelectorAll(".ap-card");
const sub_box = document.querySelectorAll(".events-modal");


for (let i = 0; i < ap_card.length; i++) {
    ap_card[i].addEventListener('click', () => {
        modal[i].classList.add('modal-show');
        modal_wrap[i].classList.add('modal-wrap-show');
    })
}

for (let i = 0; i < modal_close.length; i++) {
    modal_close[i].addEventListener('click', () => {
        modal[i].classList.remove('modal-show');
        modal_wrap[i].classList.remove('modal-wrap-show');
    })
}

// Events Modal
const events_modal = document.querySelectorAll(".events-modal-ctn");
const events_modal_wrap = document.querySelectorAll(".events-modal-wrap");
const events_modal_close = document.querySelectorAll(".events-modal-close");

for (let i = 0; i < sub_box.length; i++) {
    sub_box[i].addEventListener('click', () => {
        events_modal[i].classList.add('modal-show');
        events_modal_wrap[i].classList.add('modal-wrap-show');
    })
}


for (let i = 0; i < events_modal_close.length; i++) {
    events_modal_close[i].addEventListener('click', () => {
        events_modal[i].classList.remove('modal-show');
        events_modal_wrap[i].classList.remove('modal-wrap-show');
    })
}
