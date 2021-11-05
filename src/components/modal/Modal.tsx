import React from 'react';
import './Modal.css';
import confirmed from '../../images/confirmed.svg';
import deaths from '../../images/deaths.svg';
import recovered from '../../images/recovered.svg';

function Modal(): JSX.Element {
  return (
    <div className="modal">
      <div className="modal__item">
        <h2 className="modal__item_title">Albania</h2>
        <div className="modal__item_confirmed info-row">
          <div className="info-row__subtitle">
            <div className="info-row__subtitle_wrapper">
              <img
                className="info-row__subtitle_img"
                src={confirmed}
                alt="confirmed"
              />
            </div>
            <span className="info-row__subtitle_text">Total Confirmed</span>
          </div>
          <div className="info-row__number">132215</div>
        </div>
        <div className="modal__item_deaths info-row">
          <div className="info-row__subtitle">
            <div className="info-row__subtitle_wrapper">
              <img
                className="info-row__subtitle_img"
                src={deaths}
                alt="deaths"
              />
            </div>
            <span className="info-row__subtitle_text">Total Deaths</span>
          </div>
          <div className="info-row__number">2812</div>
        </div>
        <div className="modal__item_recovered info-row">
          <div className="info-row__subtitle">
            <div className="info-row__subtitle_wrapper">
              <img
                className="info-row__subtitle_img"
                src={recovered}
                alt="recovered"
              />
            </div>
            <span className="info-row__subtitle_text">Total Recovered</span>
          </div>
          <div className="info-row__number">13230</div>
        </div>
        <div className="modal__item_btn">
          <span>ok</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
