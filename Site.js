import {TabSample} from "./Tab";
import {PopUp} from "./PopUp";
import { useState } from "react";

export const Site = () => {

    const [showModal, setShowModal] = useState(true);

    const TrueFalse = () => {
        setShowModal(false);
    };

    return(
        <div className="site">
        <div className="cat">カテゴリー</div>
        <TabSample />
        <PopUp showFlag={showModal} TrueFalse={TrueFalse}/>
        </div>
    );

}