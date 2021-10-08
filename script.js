const openPopupButton = document.querySelector('.open-popup'),
    closePopupButton = document.querySelector('.close'),
    popupBackground = document.querySelector('.popup-bg'),
    popup = document.querySelector('.popup');

openPopupButton.addEventListener('click', () => {
    popupBackground.classList.add('popup-bg--active');
    popup.classList.add('popup--active')
});

closePopupButton.addEventListener('click', () => {
    popupBackground.classList.remove('popup-bg--active');
    popup.classList.remove('popup--active')
});

popupBackground.onclick = (e) => {
    if (e.target.classList.contains('popup-bg')) {
        popupBackground.classList.remove('popup-bg--active');
        popup.classList.remove('popup--active')
    }
}