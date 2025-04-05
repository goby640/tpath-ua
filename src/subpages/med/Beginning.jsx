import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import texts from "../../../public/texts";
import TextContentPage from "../../components/TextContentPage";

const Beginning = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
    
    return (
        <TextContentPage text={texts.BEGINNING_TEXT} vars={{}} />
    );
};

export default Beginning;