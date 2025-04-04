import texts from "../../public/texts";
import BackableContentPage from "./BackableContentPage";

const TextContentPage = ({text, vars}) => {
    console.log(text);
    console.log(vars);

    const pageText = texts.formatStr(
        text,
        vars
    );

    return (
        <BackableContentPage content={
            <div className="text-left display-linebreak"
                dangerouslySetInnerHTML={{
                    __html: pageText
                }}
            />
        }/>
    );
};

export default TextContentPage;