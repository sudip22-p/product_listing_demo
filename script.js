const imgs=document.querySelectorAll("img");
function actionOnScrollingStart() {
    console.log('User started scrolling.');
    imgs.forEach(img => {
        img.style.filter="blur(3px)";
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
    console.log('User stopped scrolling.');
}

window.addEventListener('scroll', () => {
    actionOnScrollingStart();
});