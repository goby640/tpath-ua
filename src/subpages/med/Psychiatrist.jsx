import texts from "../../../public/texts";
import CardContentPage from "../../components/CardContentPage";

const Psychiatrist = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    return (
        <CardContentPage text={texts.PSYCHIATRIST_TEXT}
            vars={{}}
            card={
                {
                    "input": [
                        texts.PSYCHIATRIST_INPUT_1, 
                        texts.PSYCHIATRIST_INPUT_2
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