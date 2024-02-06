const Main = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className=" w-[1120px] h-[1175px] pr-[126px] pl-[522px] flex items-center bg-[white]">
        {children}
      </div>
      <div className="w-[1120px] h-[1175px] bg-[#0166FF]"></div>
    </div>
  );
};

export default Main;
