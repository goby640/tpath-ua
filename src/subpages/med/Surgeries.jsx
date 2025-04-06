import texts from "../../../public/texts";
import CardContentPage from "../../components/CardContentPage";

const Surgeries = () => {
    return (
        <CardContentPage text={texts.SURGERIES_TEXT} 
            vars={{
                "doc1": texts.DOC_1_URL
            }}
            card={
                {
                    "input": [
                        texts.SURGERIES_INPUT_1
                    ],
                    "output": [
                        texts.SURGERIES_OUTPUT_1
                    ],
                    "time": texts.SURGERIES_TIME,
                    "price": texts.SURGERIES_PRICE
                }
            }
        />
    );
};

export default Surgeries;