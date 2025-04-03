const PageLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen w-screen p-2">
            {children}
        </div>
    );
};

export default PageLayout;