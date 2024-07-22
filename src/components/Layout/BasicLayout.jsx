import { Footer } from "../Footer/footerApp";
import { Navbar } from "../navbar";

export const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-[100px] min-h-screen">
      <div className="max-w-[1216px] min-w-[1216px] m-auto flex flex-col gap-[100px]">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
