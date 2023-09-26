const imgs=document.querySelectorAll("img");
const boxes=document.querySelectorAll(".item-box");
console.log(boxes);
function actionOnScrollingStart() {
    imgs.forEach(img => {
        img.style.filter="blur(3px)";
    });
    boxes.forEach(box => {
        box.style.opacity="0.4";
    });
    setTimeout(() => {
        actionOnScrollingStop();
    }, 500); // Adjust the delay (in milliseconds) as needed
}

function actionOnScrollingStop() {
    imgs.forEach(img => {
        img.style.filter="blur(0)";
        img.style.transition="1s";
    });
    boxes.forEach(box => {
        box.style.opacity="1";
        box.style.transition="1s";
    });
}

window.addEventListener('scroll', () => {
    actionOnScrollingStart();
});