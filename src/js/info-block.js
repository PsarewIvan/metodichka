(() => {
    const infoContents = document.querySelectorAll('.js-info');

    infoContents.forEach((infoContent) => {
        const infoBlock = infoContent.querySelector('.js-info-block');
        const infoButton = infoContent.querySelector('.js-info-button');

        infoButton?.addEventListener('click', () => {
            infoBlock?.classList.toggle('hidden');
        });
    });
})();
