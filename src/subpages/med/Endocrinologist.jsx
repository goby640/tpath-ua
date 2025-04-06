import texts from "../../../public/texts";
import CardContentPage from "../../components/CardContentPage";

const Endocrynologist = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    return (
        <CardContentPage text={texts.ENDOCRYNOLOGIST_TEXT}
            vars={{}}
            card={
                {
                    "input": [
                        texts.ENDOCRYNOLOGIST_INPUT_1, 
                        texts.ENDOCRYNOLOGIST_INPUT_2,
                        texts.ENDOCRYNOLOGIST_INPUT_3,
                        texts.ENDOCRYNOLOGIST_INPUT_4,
                        texts.ENDOCRYNOLOGIST_INPUT_5,
                        texts.ENDOCRYNOLOGIST_INPUT_6,
                        texts.ENDOCRYNOLOGIST_INPUT_7
                    ],
                    "output": [
                        texts.ENDOCRYNOLOGIST_OUTPUT_1,
                        texts.ENDOCRYNOLOGIST_OUTPUT_2
                    ],
                    "time": texts.ENDOCRYNOLOGIST_TIME,
                    "price": texts.ENDOCRYNOLOGIST_PRICE
                }
            }
        />
    );
};

export default Endocrynologist;