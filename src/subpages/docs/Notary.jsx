import texts from "../../../public/texts";
import CardContentPage from "../../components/CardContentPage";

const Notary = () => {
    return (
        <CardContentPage text={texts.NOTARY_TEXT} 
            vars={{
                "doc1": texts.DOC_1_URL,
                "source3": texts.SOURCE_3_URL,
                "source4": texts.SOURCE_4_URL
            }}
            card={
                {
                    "input": [
                        texts.NOTARY_INPUT_1,
                        texts.NOTARY_INPUT_2
                    ],
                    "output": [
                        texts.NOTARY_OUTPUT_1
                    ],
                    "time": texts.NOTARY_TIME,
                    "price": texts.NOTARY_PRICE
                }
            }
        />
    );
};

export default Notary;