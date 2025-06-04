import texts from "../../../public/texts";
import CardContentPage from "../../components/CardContentPage";

const BirthCertificate = () => {
    return(
        <CardContentPage text={texts.BIRTH_CERT_TEXT}
            vars={{
                "source2": texts.SOURCE_2_URL,
                "source5": texts.SOURCE_5_URL,
                "source6": texts.SOURCE_6_URL
            }}
            card={{
                "input": [
                    texts.BIRTH_CERT_INPUT_1, 
                    texts.BIRTH_CERT_INPUT_2,
                    texts.BIRTH_CERT_INPUT_3,
                    texts.BIRTH_CERT_INPUT_4,
                    texts.BIRTH_CERT_INPUT_5,
                    texts.BIRTH_CERT_INPUT_6,
                    texts.BIRTH_CERT_INPUT_7
                ],
                "output": [
                    texts.BIRTH_CERT_OUTPUT_1,
                    texts.BIRTH_CERT_OUTPUT_2
                ],
                "time": texts.BIRTH_CERT_TIME,
                "price": texts.BIRTH_CERT_PRICE
            }}
        />
    );
};

export default BirthCertificate;