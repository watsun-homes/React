export const PopUp = () => {

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
        <div className="popupbox">
            <div className="popinner">
                <div className="closebtn">×</div>
                <div className="poptxt">
                Webサイトを"改善"します<br />
                "改善"することで新たな課題を解決しますああああ
                </div>
            </div>
            <div className="popbg"></div>
        </div>
    );
}