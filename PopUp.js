import { useState } from "react";

export const PopUp = (props) => {

    const closeBtn = () => {
        props.TrueFalse();
    };


            // var popup = document.getElementById('js-popup');
            // if (!popup) return;
            // popup.classList.add('is-show');

            // var blackBg = document.getElementById('js-black-bg');
            // var closeBtn = document.getElementById('js-close-btn');

            // function closePopup(elem) {
            //     if (!elem) return;
            //     elem.addEventListener('click', function() {
            //         popup.classList.remove('is-show');
            //     });
            // };
            
            // closePopup(blackBg);
            // closePopup(closeBtn);
            

    return(
        <>
        {props.showFlag ? (
            <div className="popup">
            <div className="popup-inner">
            <button className="close-btn" onClick={closeBtn}>×</button>
                <p className="poptxt">
                Webサイトを"改善"します<br />
                "改善"することで新たな課題を解決します
                </p>
            </div>
            <button className="black-background" onClick={closeBtn}></button>
        </div>
        ) : (
        <>
        </>
        )}
        </>
    );
}