window.onload = function () {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;

        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;

        const insideX = x - btnLeft;
        const insideY = y - btnTop;

        console.log('insideX',insideX);

        const spn = document.createElement('span');
        spn.classList.add('circle');
        spn.style.top = insideY + 'px';
        spn.style.left = insideX + 'px';

        this.appendChild(spn);

        setTimeout(() => spn.remove(), 1000);
    });
};

