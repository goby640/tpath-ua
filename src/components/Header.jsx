import texts from "../../public/texts";

const Header = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <div className="w-full my-4 inset-x-0 flex flex-col justify-center items-center">
      <a href={baseUrl} className="undecorated">
        <div className="text-5xl font-bold text-center">
          {texts.HEADER_NAME}
        </div>
        <div className="display-linebreak text-center mt-4">{texts.HEADER_TEXT}</div>
      </a>
    </div>
  );
};

export default Header;