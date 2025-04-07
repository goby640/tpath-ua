import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const PageContent = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0)
        }
    });

    return (
        <div className="flex flex-1 p-4 pb-8 md:pb-15 pt-4 justify-center w-full">
            {children}
        </div>
    );
};

export default PageContent;