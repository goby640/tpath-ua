const NonZoomableImage = ({thumbnailUrl, altText}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const thumbnailSrc = baseUrl + thumbnailUrl;

  return (
    <>
      {/* Thumbnail */}
      <div>
        <div
          className="relative aspect-square shadow-lg rounded-lg bg-white/10 cursor-zoom-in overflow-hidden flex items-center justify-center"
          onClick={() => setIsZoomed(true)}
        >
          <img
            className="p-1 h-full w-full object-contain"
            src={thumbnailSrc}
            alt={altText}
          />
        </div>
        <div className="text-center">
          {altText}
        </div>
      </div>
    </>
  );
};

export default NonZoomableImage;