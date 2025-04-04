import { useEffect, useState } from "react";

const ZoomableImage = ({thumbnailUrl, fullUrl, altText}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const thumbnailSrc = baseUrl + thumbnailUrl;
  const fullSrc = baseUrl + fullUrl;

  useEffect(() => {
    if (isZoomed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isZoomed]);

  return (
    <>
      {/* Thumbnail */}
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

      {/* Fullscreen Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-white/50 flex items-center justify-center">
            {/* Close Button */}
            <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="absolute aspect-square top-4 right-4 p-1 !text-white !text-xl !font-bold !bg-red-600 hover:!bg-red-800"
                aria-label="Close"
            >
                X
            </button>

            {/* Full Image */}
            <img
                src={fullSrc}
                alt={altText}
                className="max-w-full max-h-full object-contain cursor-zoom-out"
                onClick={() => setIsZoomed(false)}
            />
        </div>
      )}
    </>
  );
};

export default ZoomableImage;