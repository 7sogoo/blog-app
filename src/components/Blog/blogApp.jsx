import { Blog } from "./blog"

const obj = 
    {
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        authorPicture: "https://s3-alpha-sig.figma.com/img/0b91/04ea/6891be7496ccabdc2fd0b1a1d8a535d7?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8sett~8wYYH6uA-J4sSLpr4GykmOiFxikmk9suzs~bIw1xxrHqF7rDt1xAS4-hru-udFjYqSSKOUSc0CrCckDnXhKIVOk7lIsdyC5P9FQHJKvtC9IyhpgNvys7668JAZlDl~4Rp2ZvrsLgirf6O5QGchZb9mBpf0eDLHwe75pc2QWRTasMvZXrNQVgmD6aBHKCxysG~BmS2mdwJkepkVFJBfs~0vblJSOdpiWCBv6lkffDoqd22k-hVMy1r-gy09PrmCn6OSGcHvCyhrJs98totYvQ300Ro7AGZe5e8H7yssvB-2JvakE-7LReZQ~-pWXOpelFQYO1y9X00d82vPQ__",
        authorName: "Tracey Wilson",
        date: "August 20, 2022",
        image: "https://s3-alpha-sig.figma.com/img/eb1f/38cd/a6a8e0df2280c787cafc780464b002fe?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jsTz16R9e0-Gb4EVRHJzihlspqmnkRDrUs9K4s~ci-2qSGonVGMiwKnLDYsKC9tWNxF6Fx8egSG42PHhCqVqx3nSlBoAa5htvhmzPVeoUOHK0GAH8oVHocOMJQmFdaM7l4wEFR-Ufm1jQ~j4Vn~jVU03P4vs6Oh4yg1dHdl0ayEQiTkr7UgXhZWX6ulfkTvtVKth41Ng373zBpQz6aCv123GlB4fNdGBWs0ywibRFcACQAOcC2lfAKceM97nhB~~e28T0ATTUq45RfZwl5zXrxXzCRFws3IsDVrCBNeLkf3yUIalP10Dl0PQwV7M44bMd5p5~IH3N5xt47-Uuwdupg__",
        article: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.

One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
        title2: "Research Your Destination",
        article2: `Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.`,
        title3: "Plan Your Itinerary",
        article3: `While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.

Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.`
    }





export const BlogApp = () => {
    return (
        <div>
            <Blog title={obj.title} authorPicture={obj.authorPicture} authorName={obj.authorName} date={obj.date} image={obj.image} article={obj.article} title2={obj.title2} article2={obj.article2} title3={obj.title3} article3={obj.article3}/>
        </div>
    )
}