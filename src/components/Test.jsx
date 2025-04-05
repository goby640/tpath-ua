const Test = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    return (
        <>
            <div className="flex flex-col w-full items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-2 w-full ">
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
                <img className="w-1/3 md:w-1/5 md:max-w-1/5" src={baseUrl + "/arrow.png"}/>
                <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-2 w-full ">
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
            </div>
        </>
    );
};