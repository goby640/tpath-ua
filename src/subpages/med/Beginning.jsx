import texts from "../../../public/texts";
import TextContentPage from "../../components/TextContentPage";

const Beginning = () => {
    return (
        <TextContentPage text={texts.BEGINNING_TEXT} vars={{}} />
    );
};

export default Beginning;