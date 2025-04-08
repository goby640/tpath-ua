import texts from "../../public/texts";
import TextContentPage from "../components/TextContentPage";

const TermsOfUse = () => {
    return (
        <TextContentPage text={texts.TERMS_OF_USE_FULL_TEXT} vars={{
            "license": texts.LICENSE_LINK_TEXT,
            "license_link": texts.LICENSE_LINK_URL,
            "privacy": texts.PRIVACY_POLICY_TEXT,
            "privacy_link": texts.PRIVACY_POLICY_URL
        }} />
    );
};

export default TermsOfUse;