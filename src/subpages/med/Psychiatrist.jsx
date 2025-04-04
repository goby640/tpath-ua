import texts from "../../../public/texts";
import BackableContentPage from "../../components/BackableContentPage";
import ZoomableImage from "../../components/ZoomableImage";

const Psychiatrist = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    return (
        <BackableContentPage content={
            <div>
                <div className="display-linebreak mb-2">
                    {texts.PSYCHIATRIST_TEXT}
                </div>
                <div className="flex flex-col md:flex-row w-full items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-2 w-full md:w-2/5">
                        <ZoomableImage thumbnailUrl="/thumbnails/test_thumbnail.png"
                            fullUrl="/images/test.png"
                            altText="Test image"/>
                        <ZoomableImage thumbnailUrl="/thumbnails/test_thumbnail.png"
                            fullUrl="/images/test.png"
                            altText="Test image"/>
                        <ZoomableImage thumbnailUrl="/thumbnails/test_thumbnail.png"
                            fullUrl="/images/test.png"
                            altText="Test image"/>
                        <ZoomableImage thumbnailUrl="/thumbnails/test_thumbnail.png"
                            fullUrl="/images/test.png"
                            altText="Test image"/>
                    </div>
                    <img className="w-full md:w-1/5 md:max-w-1/5 md:rotate-270" src={baseUrl + "/arrow.png"}/>
                    <div className="flex flex-col md:flex-row w-full md:w-2/5">

                    </div>
                </div>
            </div>
        } />
    );
};

export default Psychiatrist;