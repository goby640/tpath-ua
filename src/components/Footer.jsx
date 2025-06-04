import texts from "../../public/texts";

const Footer = () => {
    const footerCopyrightFormatted = texts.formatStr(
        texts.FOOTER_COPYRIGHT_TEXT,
        {
            author: texts.AUTHOR_NAME,
            year: new Date().getFullYear()
        });
    const footerContactFormatted = texts.formatStr(
        texts.FOOTER_CONTACT_LONG_TEMPLATE,
        {
            email: texts.CONTACT_EMAIL
        })
    const footerLicenseFormatted = texts.formatStr(
        texts.FOOTER_LICENSE_TEMPLATE_TEXT,
        {
            license: texts.LICENSE_LINK_TEXT,
            license_link: texts.LICENSE_LINK_URL,
            terms: texts.FOOTER_TERMS_OF_USE_TEXT,
            terms_link: texts.TERMS_OF_USE_URL,
            privacy: texts.PRIVACY_POLICY_TEXT,
            privacy_link: texts.PRIVACY_POLICY_URL
        })
    return (
        <div className="w-full mb-4 inset-x-0 flex flex-col justify-center items-center">
            <div className="text-center text-sm display-linebreak"
                dangerouslySetInnerHTML={{
                    __html: footerContactFormatted
                }}
            />
            <div className="text-xs text-center pt-4">
                <div className="display-linebreak"
                    dangerouslySetInnerHTML={{
                        __html: footerLicenseFormatted
                    }}
                />
                <div className="pt-1"
                    dangerouslySetInnerHTML={{
                        __html: footerCopyrightFormatted
                    }}
                />
            </div>
        </div>
    );
};

export default Footer;