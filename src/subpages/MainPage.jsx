import texts from '../../public/texts';

const MainPage = () => {
    const upperText = texts.formatStr(
        texts.MAIN_UPPER_TEXT,
        {
            terms_label: texts.TERMS_OF_USE_LABEL,
            terms_url: texts.TERMS_OF_USE_URL
        }
    );
    const baseUrl = import.meta.env.VITE_BASE_URL;

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
                <a href="#/notary">
                    <button className="w-full py-3 mb-4 rounded-lg">
                        {texts.MAIN_NOTARY_BUTTON}
                    </button>
                </a>
                <a href="#/birthcert" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_BIRTH_CERT_BUTTON}
                    </button>
                </a>
                <a href="#/passports" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_PASSPORTS_BUTTON}
                    </button>
                </a>
                <a href="#/taxcode" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_TAX_CODE_BUTTON}
                    </button>
                </a>
                <a href="#/addressreg" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_ADDRESS_REGISTER_BUTTON}
                    </button>
                </a>
                <a href="#/entrepreneurship" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_ENTREPRENEURSHIP_BUTTON}
                    </button>
                </a>
                <a href="#/banks" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_BANKS_BUTTON}
                    </button>
                </a>
                <a href="#/employmentbook" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_EMPLOYMENT_BOOK_BUTTON}
                    </button>
                </a>
                <a href="#/diplomas" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_DIPLOMAS_BUTTON}
                    </button>
                </a>
                <a href="#/registers" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_REGISTERS_BUTTON}
                    </button>
                </a>
                <a href="#/healthdb" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_HEALTH_DB_BUTTON}
                    </button>
                </a>
                <a href="#/driverslicense" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_DRIVERS_LICENSE_BUTTON}
                    </button>
                </a>
                <a href="#/ownershipdocs" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_OWNERSHIP_DOCS_BUTTON}
                    </button>
                </a>
                <a href="#/contracts" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_CONTRACTS_BUTTON}
                    </button>
                </a>
                <a href="#/militaryoffice" className="disabled">
                    <button className="w-full py-3 mb-4 rounded-lg" disabled>
                        {texts.MAIN_MILITARY_OFFICE_BUTTON}
                    </button>
                </a>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="text-center text-xl display-linebreak p-4 mt-8">
                        <b>{texts.MAIN_BOTTOM_TEXT}</b>
                    </div>
                    <img className="place-self-center relative aspect-square w-1/7 m-10 object-contain"
                            src={baseUrl + "/tada.png"}/>
                </div>
            </div>
    );
};

export default MainPage;