import texts from "../../public/texts";
import TextContentPage from "../components/TextContentPage";

const PrivacyPolicy = () => {
    return (
        <TextContentPage text={texts.PRIVACY_POLICY_FULL_TEXT} vars={{}} />
    );
};

export default PrivacyPolicy;