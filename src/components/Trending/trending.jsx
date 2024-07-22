import { CardCreator } from "./trendingCard"

const URLS = [
    "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K24Nzd5zJ1XEOcGTJPxkBNveQUmndhW2SktSLjMo1rPdg-y6sSyfDMRGkalCHYmwdMT3C5~hoo2ioFKLAFXd-bB1v4dX0PwPh89I0r-7xQk1GAI9lDBSY7VcLgv3iZOVLZW7YI9Dua0XMuqUW47gVpcMeJjvpE7sg3doPNrg44W1R3dYjBkeZlJEsNMN7Q23yAngjRM5DAxP8tzVL-m77WMg3uvi9kmMTdUw2WFBbr1UjC5zWKXHEBYBe9oa-NU1QMwvTR94X1L5nztOmunq1zU~1fm18W-XfaHPUbJzP8j~VaHlpZomJ0NYzrFizwh9ByK8Fal~uduwxFQrizyz-Q__",
    "https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TO9tXxQJDJRX3m3VOSbIoznsnvg1jKU~GDV11O6JT7Xon6qgojr1pDy1uf~cb~tdDeogO26BN~UI2DMY3wGOJF3DdPfMlNS7xzeCe~z8pYn483vBxg6Qd1fNxHrZd5ln8K-LXztN9B~TqVrqLpCvDS7vSCGz7gsN1ksWug3Mm~pbQMpII9g~Yb1Ud4lpYxlMyE8e~KGb-V-kx0SnUYXqJVkKyMhWtghrtClm7NBu-bl3AV4n3LEOajSYbwEQ-HFs-4MxY0H~egkin3q6~jBoryHzc6u6LqttU7793gcpKtnAzay3gGRiqKD2x-wJdCI9aXoYwpuqv-Q~zsDHM5Khtg__",
    "https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7AMmxIgtUH4BYgItpH1tVb1TXBNNupwZ87M-tz3VZOKm0pA5sbflyoq6ugbWOJ~LIbhaePqQw6pedVx4e5oNVGmtmQviVOIz6OplELy4YxX9MfLb5a8KY2LHwJeWN5wqpG3Io2UWL6-w3hq9JlMh8yq9PZfqbzuRPAr~bZa2LkO8ROh0ObE7lRJmprGogpptEJ5~jWSg7e-zyEeA4pCJdP89Do1vX5VYo5ysLH5jH2U4ub9lOHGVKbV5mLWcrsbCzf~Dyx6Gtf4QrcqkQRx6xVTDj4PMnTPz3X~WFCClbOh5i8qJzYNDH3Hxw4gHHYCunwho8loQD2FhxeTQ~EqxQ__",
    "https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4ZOPPxqp9QsBC3L4FpckBb8lZYKobziHH1tKq6zayFcGG3-LsgXuREWBLK06pyu9YUp9nFukgKIlb9VM16fGZa8XjMcvCKUSMkL1C3Um3r9q63LepyHlN~tiFZ~XFdAiicoyVBQgKHHo~P3D4W14kjhsbPHkHz5jBFm~CrF71lccblbT4cel4dIRR0xDNppveFAyVIFnR6yDrDi0zHFhsQpNiIjwB54qGYjSkdaHeqhA6KSr5rH2ZsYe-~gwlif5xT0NzLBqSb2Ydc3ifCSW~mJ7IeT~2aTVbmjQ0EmFKpqJ9msBfukqFME~~HVAZPLLzPRVs9X4GNHBz4gGIsxjg__"

]

export const Trending = () => {
    return (
        <div className="flex flex-col gap-[30px]">
            <p className="text-2xl font-bold">Trending</p>
            <div className="flex gap-8">
                {URLS.map(el => (
                    <CardCreator url={el} titles="The Impact of Technology on the Workplace: How Technology is Changing"/>
                ))}
            </div>
        </div>
    )
} 