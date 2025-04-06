import texts from "../../../public/texts";
import CardContentPage from "../../components/CardContentPage";

const GP = () => {
    return (
        <CardContentPage text={texts.GP_TEXT}
            vars={{
                "doc2": texts.DOC_2_URL,
                "notary_link": texts.NOTARY_URL
            }}
            card={
                {
                    "input": [
                        texts.GP_INPUT_1, 
                        texts.GP_INPUT_2,
                        texts.GP_INPUT_3,
                        texts.GP_INPUT_4,
                        texts.GP_INPUT_5,
                        texts.GP_INPUT_6,
                        texts.GP_INPUT_7,
                        texts.GP_INPUT_8,
                        texts.GP_INPUT_9
                    ],
                    "output": [
                        texts.GP_OUTPUT_1
                    ],
                    "time": texts.GP_TIME,
                    "price": texts.GP_PRICE
                }
            }
        />
    );
};

export default GP;