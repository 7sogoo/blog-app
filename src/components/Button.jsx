export const MyButton = ({children, onClick}) => {

  return (
    <>
      <button onClick={onClick} className="w-fit px-5 py-3 border-[1px] border-[#00000050] text-[#696A75] rounded-lg m-auto">
        {children}
      </button>
    </>
  );
};
