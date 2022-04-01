// Класс карточки
export default class Card {
  constructor({ data, cardSelector, handleCardClick }) {
    this._data = data; // данные карточки
    this._cardSelector = cardSelector; // id шаблона карточки
    this._cardElement = this._getTemplate(); // разметка карточки
    this._handleCardClick = handleCardClick; // функция открытия popup'а изображения
    this._cardPicture = this._cardElement.querySelector('.card__picture'); // изображение карточки
  }


  // Получение шаблона разметки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }


  // Установка обработчиков событий карточки
  _setEventListeners() {

    // Установка обработчика событий кнопке 'Like'
    this._cardElement.querySelector('.card__like-btn')
      .addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like-btn_active');
      });

    // Установка обработчика событий кнопке удаления карточки
    this._cardElement.querySelector('.card__trash')
      .addEventListener('click', () => {
        this._cardElement.remove();
        this._cardElement = '';
      });

    // Установка обработчика событий изображению
    this._cardPicture.addEventListener('click', this._handleCardClick);

  }


  // Создание карточки
  createCard() {
    this._cardPicture.src = this._data.link;
    this._cardPicture.alt = this._data.name;
    this._cardElement.querySelector('.card__title').textContent = this._data.name;
    this._setEventListeners();
    return this._cardElement;
  }
}
