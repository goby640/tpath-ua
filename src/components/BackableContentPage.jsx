import texts from "../../public/texts";

const BackableContentPage = ({content}) => {
    return (
        <div className=" w-full h-fit max-h-fit max-w-4xl p-6">
            <div className="p-4 mb-2">
                {content}
            </div>
            <a href="#/">
                <button className="w-full py-3 mb-4 rounded-lg">
                    {texts.HOME_BUTTON_TEXT}
                </button>
            </a>
        </div>
    );
};

export default BackableContentPage;