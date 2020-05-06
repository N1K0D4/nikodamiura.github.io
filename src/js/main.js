const aParalase = document.querySelector('.aParalase'),
    pImage = aParalase.querySelector('.pImage');
    aParalase.onmousemove = (e) => {
        pImage.style.transform = `rotateX(${-(e.offsetY - (pImage.offsetWidth / 2)) / 10}deg) rotateY(${(e.offsetX - (pImage.offsetWidth / 2)) / 10}deg)`;
    }
    aParalase.onmouseout = (e) => {
        pImage.style.transform = 'rotate(0deg)';
    }