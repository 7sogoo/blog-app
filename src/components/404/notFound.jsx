export const NotFound = () => {
    return(
        <div className="px-[840px] py-[100px]">
            <div className="flex gap-10 items-center justify-between">
                <div className="min-w-[21%] flex justify-center items-center text-7xl font-semibold">404</div>
                <div className="w-[1px] h-[156px] bg-[#E8E8EA]"></div>
                <div className="flex flex-col gap-5 py-2 max-w-[61%]">
                    <p className="text-2xl font-semibold">Page Not Found</p>
                    <p className="text-[#696A75] text-lg">We're sorry, This page is unknown or does not exist the page you are looking for.</p>
                    <button className="px-4 py-[10px] bg-[#4B6BFB] text-white rounded-md w-fit">Back To Home</button>
                </div>
            </div>
        </div>
    )
}