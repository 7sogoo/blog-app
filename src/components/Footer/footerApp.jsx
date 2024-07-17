import { FooterContent } from "./footerContent"
import { FooterFooter } from "./footerFooter"

export const Footer = () => {
    return (
        <div className="px-[350px] py-[100px] flex flex-col gap-[25px] bg-[#F6F6F7]">
            <div>{<FooterContent/>}</div>
            <div>{<FooterFooter/>}</div>
        </div>
    )
}