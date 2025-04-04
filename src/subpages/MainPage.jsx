import { useNavigate } from 'react-router-dom';
import texts from '../../public/texts';

const MainPage = () => {
    const navigate = useNavigate();
    return (
            <div className=" w-full h-fit max-h-fit max-w-lg p-6">
                <div className="text-left display-linebreak p-4 mb-2">
                    {texts.MAIN_UPPER_TEXT}
                </div>
                <button 
                onClick={ (e) => {
                    navigate(`/psychiatrist`);
                }}
                    className="w-full py-3 mb-4 rounded-lg"
                >
                    {texts.MAIN_PSYCHIATRIST_BUTTON}
                </button>
                <button 
                onClick={ (e) => {
                    navigate(`/endocrynologist`);
                }}
                    className="w-full py-3 mb-4 rounded-lg"
                >
                    {texts.MAIN_ENDOCRYNOLOGIST_BUTTON}
                </button>
            </div>
    );
};

export default MainPage;