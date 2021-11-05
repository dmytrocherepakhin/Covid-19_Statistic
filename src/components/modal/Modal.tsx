import React from 'react';

function Modal(): JSX.Element {
  return (
    <div className="modal">
      <div className="modal__item">
        <h2 className="modal__item_title">USA</h2>
        <div className="modal__item_confirmed info-row">
          <div className="info-row__subtitle">
            <span className="info-row__subtitle_img">?</span>
            <span className="info-row__subtitle_text">Total Confirmed</span>
          </div>
          <div className="info-row__number">?</div>
        </div>
        <div className="modal__item_deaths info-row">
          <div className="info-row__subtitle">
            <span className="info-row__subtitle_img">?</span>
            <span className="info-row__subtitle_text">Total Deaths</span>
          </div>
          <div className="info-row__number">?</div>
        </div>
        <div className="modal__item_recovered info-row">
          <div className="info-row__subtitle">
            <span className="info-row__subtitle_img">?</span>
            <span className="info-row__subtitle_text">Total Recovered</span>
          </div>
          <div className="info-row__number">?</div>
        </div>
        <div className="modal__item_btn">ok</div>
      </div>
    </div>
  );
}

export default Modal;
