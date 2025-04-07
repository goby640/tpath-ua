import texts from "../../../public/texts";
import CardContentPage from "../../components/CardContentPage";

const Psychiatrist = () => {
    return (
        <CardContentPage text={texts.PSYCHIATRIST_TEXT}
            vars={{
                "doc1": texts.DOC_1_URL
            }}
            card={
                {
                    "input": [
                        texts.PSYCHIATRIST_INPUT_1, 
                        texts.PSYCHIATRIST_INPUT_2,
                        texts.PSYCHIATRIST_INPUT_3,
                        texts.PSYCHIATRIST_INPUT_4,
                        texts.PSYCHIATRIST_INPUT_5,
                    ],
                    "output": [
                        texts.PSYCHIATRIST_OUTPUT_1
                    ],
                    "time": texts.PSYCHIATRIST_TIME,
                    "price": texts.PSYCHIATRIST_PRICE
                }
            }
        />
    );
};

export default Psychiatrist;