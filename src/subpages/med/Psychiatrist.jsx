import texts from "../../../public/texts";

const Psychiatrist = () => {
    return (
        <div className=" w-full h-fit max-h-fit max-w-3xl p-6">
            <div className="text-left display-linebreak p-4">
                {texts.PSYCHIATRIST_TEXT}
            </div>
        </div>
    );
};

export default Psychiatrist;