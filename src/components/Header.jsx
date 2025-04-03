import texts from "../../public/texts";

const Header = () => {
  return (
    <div className="w-full my-4 inset-x-0 flex flex-col justify-center items-center">
      <a href="/" className="undecorated">
        <div className="text-5xl font-bold text-center">
          {texts.HEADER_NAME}
        </div>
        <div className="display-linebreak text-center mt-4">{texts.HEADER_TEXT}</div>
      </a>
    </div>
  );
};

export default Header;