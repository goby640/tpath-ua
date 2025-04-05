const TldrCard = ({card}) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    return (
        <div className="p-4 mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 w-full shadow-lg rounded-lg bg-white/70 text-black justify-stretch">
            <div className="w-full flex flex-rows-2 items-center">
                <div className="self-start w-1/10 max-w-1/10 min-w-1/10 mr-4 relative aspect-square shadow-lg rounded-lg bg-white/50 overflow-hidden">
                    <img className="p-1"
                        src={baseUrl + "/input.png"}
                        alt="input"/>
                </div>
                <ul className="self-start pl-4 list-disc">
                    {
                        card.input.map((element, index) => {
                            return (<li key={index}>{element}</li>)
                        })
                    }
                </ul>
            </div>
            <div className="w-full flex flex-rows-2 items-center">
                <div className="self-start w-1/10 max-w-1/10 min-w-1/10 mr-4 relative aspect-square shadow-lg rounded-lg bg-white/50 overflow-hidden">
                    <img className="p-1"
                        src={baseUrl + "/output.png"}
                        alt="output"/>
                </div>
                <ul className="self-start pl-4 list-disc">
                    {
                        card.output.map((element, index) => {
                            return (<li key={index}>{element}</li>)
                        })
                    }
                </ul>
            </div>
            <div className="w-full flex flex-rows-2 items-center">
                <div className="self-start w-1/10 max-w-1/10 min-w-1/10 mr-4 relative aspect-square shadow-lg rounded-lg bg-white/50 overflow-hidden">
                    <img className="p-1"
                        src={baseUrl + "/time.png"}
                        alt="time"/>
                </div>
                <p>{card.time}</p>
            </div>
            <div className="w-full flex flex-rows-2 items-center">
                <div className="self-start w-1/10 max-w-1/10 min-w-1/10 mr-4 relative aspect-square shadow-lg rounded-lg bg-white/50 overflow-hidden">
                    <img className="p-1"
                        src={baseUrl + "/price.png"}
                        alt="price"/>
                </div>
                <p>{card.price}</p>
            </div>
        </div>
    );
};

export default TldrCard;