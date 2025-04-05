import texts from "../../public/texts";
import BackableContentPage from "../components/BackableContentPage";

const Maintenance = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    return (
        <div className=" w-full h-fit max-h-fit max-w-4xl p-4">
            <div className="p-4 mb-2">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold text-center mb-10">
                        {texts.MAINTENANCE_TEXT}
                    </div>
                    <img className="relative aspect-square w-1/3 m-10 object-contain"
                        src={baseUrl + "/maintenance.png"}/>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;