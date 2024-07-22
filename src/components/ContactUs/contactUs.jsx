export const ContactUs = () => {
    return(
        <div>
            <div className="flex flex-col gap-5 mx-[63px]">
                <div className="px-[72.5px] flex flex-col gap-5">
                    <p className="text-4xl font-semibold">Contact Us</p>
                    <p className="text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="flex gap-[50px] py-[10px] px-[65.5px] w-[100%] mb-[40px]">
                    <div className="p-4 rounded-xl w-[50%] border-[1px] border-[#E8E8EA]">
                        <p className="font-semibold text-2xl">Address</p>
                        <p className="text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div className="p-4 rounded-xl w-[50%] border-[1px] border-[#E8E8EA]">
                        <p className="font-semibold text-2xl">Contact</p>
                        <p className="text-[#696A75]">313-332-8662 info@email.com</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F6F6F7] flex flex-col gap-5 pt-[30px] pb-[26px] pr-[130px] pl-[35px] rounded-xl mx-[126px]"> 
                <p className="text-lg font-semibold">Leave a Message</p>
                <div className="flex gap-7">
                    <input className="w-[50%] px-5 py-2 rounded-md" placeholder="Your Name"/>
                    <input className="w-[50%] px-5 py-2 rounded-md" placeholder="Your Email"/> 
                </div>  
                <input className="w-[100%] px-5 py-2 rounded-md" placeholder="Subject"/>
                <input className="w-[100%] px-5 py-2 rounded-md pb-20" placeholder="Write a message"/>
                <button className="px-4 py-[10px] bg-[#4B6BFB] text-white rounded-md w-fit">Send message</button>
            </div>
        </div>
    )
}