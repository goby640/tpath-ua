const PageContent = ({ children }) => {
    return (
        <div className="flex flex-1 p-4 justify-center w-full">
            {children}
        </div>
    );
};

export default PageContent;