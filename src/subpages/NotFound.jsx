import texts from "../../public/texts";
import BackableContentPage from "../components/BackableContentPage";

const NotFound = () => {
    return (
        <BackableContentPage content={
            <div className="text-3xl font-bold text-center mb-10">
                {texts.NOT_FOUND_TEXT}
            </div>
        }/>
    );
};

export default NotFound;