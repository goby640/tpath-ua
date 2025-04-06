import texts from '../../public/texts';

const MainPage = () => {
    const upperText = texts.formatStr(
        texts.MAIN_UPPER_TEXT,
        {
            terms_label: texts.TERMS_OF_USE_LABEL,
            terms_url: texts.TERMS_OF_USE_URL
        }
    );

    return (
            <div className="w-full h-fit max-h-fit max-w-3xl p-4">
                <div className="text-left display-linebreak p-4 mb-2"
                    dangerouslySetInnerHTML={{
                        __html: upperText
                    }}
                />
                <a href="#/beginning">
                    <button className="w-full py-3 mb-4 rounded-lg">
                        {texts.MAIN_BEGINNING_BUTTON}
                    </button>
                </a>
                <a href="#/psychiatrist">
                    <button className="w-full py-3 mb-4 rounded-lg">
                        {texts.MAIN_PSYCHIATRIST_BUTTON}
                    </button>
                </a>
                <a href="#/endocrynologist">
                    <button className="w-full py-3 mb-4 rounded-lg">
                        {texts.MAIN_ENDOCRYNOLOGIST_BUTTON}
                    </button>
                </a>
                <a href="#/surgeries">
                    <button className="w-full py-3 mb-4 rounded-lg">
                        {texts.MAIN_SURGERIES_BUTTON}
                    </button>
                </a>
                <a href="#/gp">
                    <button className="w-full py-3 mb-4 rounded-lg">
                        {texts.MAIN_GP_BUTTON}
                    </button>
                </a>
            </div>
    );
};

export default MainPage;