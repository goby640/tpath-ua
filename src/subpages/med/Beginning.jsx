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

    const beginningText = texts.formatStr(
        texts.BEGINNING_TEXT,
        {
            "doc1": texts.DOC_1_URL,
            "doc2": texts.DOC_2_URL,
            "doc3": texts.DOC_3_URL,
            "doc4": texts.DOC_4_URL,
            "doc5": texts.DOC_5_URL,
            "source1": texts.SOURCE_1_URL,
            "source2": texts.SOURCE_2_URL,
            "source3": texts.SOURCE_3_URL,
            "source4": texts.SOURCE_4_URL,
            "source5": texts.SOURCE_5_URL,
            "source6": texts.SOURCE_6_URL
        }
    );
    
    return (
        <TextContentPage text={beginningText} vars={{}} />
    );
};

export default Beginning;