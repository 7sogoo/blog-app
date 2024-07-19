import { useState } from "react"
import { CarouselContent } from "./carouselContent"

const SvgNext = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#696A75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>
const SvgBack = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#696A75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/></svg>

export const CarouselApp = () => {

    const [current,setCurrent] = useState(0) 
    const [content, setContent] = useState(
[        {
        backgroundImage : "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCLy5GghCAPtYF~~U28~GaAdAp88xIeWT8FSkxHLq4JKnZuK1Ax07wga4n6pArK3wCb0p3KuijpLEmUvLcVvF5JxOkJWk9AU1rXxAtZd4woX~Gpb6eSSvDZZqMcP8h-3zhg9ut2mf4VzWiIiDHKoa9NFXk8w0G04hXxZ2xt~73IMrGSXvFTz~kv0Vk4MPJFtZHNiElyvYHEdlUlU9HVpQZdHPzvhc2XEN6DiTGUzQFh~QgwOE1h-gKcycyMG3CwVSq-PGcJpBzOKf20idyHPjhXZtUuuqxXW56q6b~~6JJETVtLbxz~ERtCcjXI3euAOxRmG8ebg83eq01thZq~zEg__",
        title: "Grid system for better Design User Interface",
        date: "August 20, 2022",
    },
    {
        backgroundImage : "https://s3-alpha-sig.figma.com/img/348e/c9c1/94d6445161ab63109e6e813699b61984?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAzRO0UFEWE9aluhJwQq90QNQz-RtqIoHHQJ2IvjsA10gsQQiWVG~XYeV2MuWWDERRViHPVX62LfuJqic6LDxNcypzVh03b5MzVQsIqf87Pp0rAUSOYv5V8s0iOFKiysRtS4j6shr~EjFfXbiy74pI4OLh8s4qNIUp8dXWPaHLPLcSBSLDeoeVgpbmyA~x6drx~bEnXXn76O~p9mdMyQ-sWkn0kH66PWXg4VeObyMI6nd0cw9zoFBdt75O9WMHfrAcV-~2hBamWJPZCiDvEpL2AQSvOlMEi~hpgn4FRCBB42sqizTuG3yPEyQl7gVQZRcrJ6Np5JkK9FmMKhxZALCA__",
        title: "Grid system for better Design User Interface",
        date: "September 20, 2023",
    },
    {
        backgroundImage : "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eR9T678lH5NmwfDTe6yRWXlAe8zperPTHPCLwvB0HPZmNh3Lbkjj2Al9VbL9mZfDu5X2wQ-cESdyMqgtxd4tB~NoTvKnp~Wwk52Rjr5CiSeUX0bjJgI3VUcdFId1tkegx~Kid47O9763PMH~VfZXlISb2D37iLEWPWy-PmVEVONQBkdXWisXeidu7wjWNV3hkH4shYudzDQsM-73RaMiULbU3uVg0rHLKTYFtEx~0GG-os405KBI0U6J8yqlIka7EOHthEqwl07Te-DF9-gaS9B7XhbGBGszLwmRQO5M9fGYFBgZH8h1-zoaOKna53UZOWTzzgyL6ML~F~a4HjUUdg__",
        title: "Grid system for better Design User Interface",
        date: "September 20, 2023",
    }]
)

    const leftClick = () => {
        if(current > 0){
            setCurrent(current - 1)
        }
        else if(current === 0){
            setCurrent(content.length - 1)
        }
    }

    const rightClick = () => {
        if(current < content.length - 1){
            setCurrent(current + 1)
        }
        else if (current === content.length - 1){
            setCurrent(0)
        }
    }

    return( 
        <div className="px-[350px] py-[100px]">
            <div className="relative cursor-pointer">
                <CarouselContent bgPhoto={content[current].backgroundImage} title={content[current].title} date={content[current].date}/>
                <div className="absolute right-0 mt-2">
                    <button onClick={leftClick}>{SvgBack}</button>
                    <button onClick={rightClick}>{SvgNext}</button>
                </div>
            </div>
        </div>
    )
}