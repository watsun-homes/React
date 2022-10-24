import { useState } from "react";

export const PopUp = () => {

    const [show,setShow] = useState(false);



            var popup = document.getElementById('js-popup');
            if (!popup) return;
            popup.classList.add('is-show');

            var blackBg = document.getElementById('js-black-bg');
            var closeBtn = document.getElementById('js-close-btn');

            function closePopup(elem) {
                if (!elem) return;
                elem.addEventListener('click', function() {
                    popup.classList.remove('is-show');
                });
            };
            
            closePopup(blackBg);
            closePopup(closeBtn);
            

    return(
        <div className="popup">
            <div className="popup-inner">
                <div className="close-btn">×</div>
                <p className="poptxt">
                Webサイトを"改善"します<br />
                "改善"することで新たな課題を解決します
                </p>
            </div>
            <div className="black-background"></div>
        </div>
    );
}