import texts from "../../../public/texts";
import BackableContentPage from "../../components/BackableContentPage";
import ZoomableImage from "../../components/ZoomableImage";

const Psychiatrist = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    return (
        <BackableContentPage content={
            <>
                <div className="display-linebreak mb-2"
                    dangerouslySetInnerHTML={{
                        __html: texts.PSYCHIATRIST_TEXT
                    }}
                />
            </>
        } />
    );
};

export default Psychiatrist;