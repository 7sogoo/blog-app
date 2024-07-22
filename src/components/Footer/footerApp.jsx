import { FooterContent } from "./footerContent"
import { FooterFooter } from "./footerFooter"

export const Footer = () => {
    return (
        <div className="flex flex-col gap-[25px] bg-[#F6F6F7] py-[100px]">
            <div className="max-w-[1216px] m-auto flex flex-col gap-[25px]">
                <div>{<FooterContent/>}</div>
                <div>{<FooterFooter/>}</div>
            </div>
        </div>
    )
}