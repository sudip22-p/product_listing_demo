const imgs = document.querySelectorAll("img");
const boxes = document.querySelectorAll(".item-box");
function actionOnScrollingStart() {
    imgs.forEach(img => {
        img.style.filter = "blur(3px)";
    });
    boxes.forEach(box => {
        box.style.opacity = "0.4";
    });
    setTimeout(() => {
        actionOnScrollingStop();
    }, 500); // Adjust the delay (in milliseconds) as needed
}

function actionOnScrollingStop() {
    imgs.forEach(img => {
        img.style.filter = "blur(0)";
        img.style.transition = "1s";
    });
    boxes.forEach(box => {
        box.style.opacity = "1";
        box.style.transition = "1s";
    });
}

window.addEventListener('scroll', () => {
    actionOnScrollingStart();
});

function performDisplayOp(el) {
    const itemEl = el.parentNode.parentNode.nextElementSibling;
    if (el.innerHTML === "Show") {
        el.innerHTML = "Hide";
        itemEl.classList.toggle("hide");
    } else {
        el.innerHTML = "Show";
        itemEl.classList.toggle("hide");
    }
}

/*on clicking open*/
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        let clickedBtnEl = event.target;
        performDisplayOp(clickedBtnEl);
    });
});