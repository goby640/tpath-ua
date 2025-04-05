import texts from "../../public/texts";
import BackableContentPage from "./BackableContentPage";
import TldrCard from "./TldrCard";

const CardContentPage = ({text, vars, card}) => {
    const pageText = texts.formatStr(
        text,
        vars
    );

    return (
        <BackableContentPage content={
            <>
                <TldrCard card={card} />
                <div className="text-left display-linebreak"
                    dangerouslySetInnerHTML={{
                        __html: pageText
                    }}
                />
            </>
        }/>
    );
};

export default CardContentPage;