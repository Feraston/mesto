import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imgZoom, titleZoomImg) {
    super(popupSelector);
    this._imgZoom = imgZoom;
    this._titleZoomImg = titleZoomImg;
  }

  openPopup({ name, link }) {
    this._imgZoom.setAttribute('src', link);
    this._imgZoom.setAttribute('alt', name);
    this._titleZoomImg.textContent = name;

    super.openPopup();
  }
}