import { useState } from "react";
import { PostCardCreator } from "./postCardCreator";
import { PostHeader } from "./postHeader";

const imageURLS = [
  {
    url: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGaAS6boAe1jt7IE16J3AhBdS4oh-R64BcF71O~vpOVG45MXQ7Mz7kbSES0YcMtROk1bQJg5lD7Pey3sJaXn5N0QP0fleDa~h1h-~K0XVSFWWPSjIBV6GKQSbgDnVSDkPYjP3Gr4aInjtgZDc2KCGSP2L2kBUlsGQC9pz1eGLEsP821zltTv3G2QLm-qzI6oY7Uq8qKIoCDXS7UJnDSqSXSNEH2ssjK0TKRWbHpUkzG5fHO8-EUqCqIPZkyRpsDVVKkCLUWMk8rwjpCpqsqity7ufQz2SmZUDB-69xb44sZWpSjPIySFeYq8VZPpMlUj6tLEvHw7PEsv71o5OCRp6Q__",
    tag: "Technology",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eR9T678lH5NmwfDTe6yRWXlAe8zperPTHPCLwvB0HPZmNh3Lbkjj2Al9VbL9mZfDu5X2wQ-cESdyMqgtxd4tB~NoTvKnp~Wwk52Rjr5CiSeUX0bjJgI3VUcdFId1tkegx~Kid47O9763PMH~VfZXlISb2D37iLEWPWy-PmVEVONQBkdXWisXeidu7wjWNV3hkH4shYudzDQsM-73RaMiULbU3uVg0rHLKTYFtEx~0GG-os405KBI0U6J8yqlIka7EOHthEqwl07Te-DF9-gaS9B7XhbGBGszLwmRQO5M9fGYFBgZH8h1-zoaOKna53UZOWTzzgyL6ML~F~a4HjUUdg__",
    tag: "Design",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/3969/1462/48009e641f454298f62e13de84ac0a09?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hg6MvmikNHuCyjI~6iWhlJ~wKkenUTtg2he6zplRVn-ZdYhPk22AkGm0WZZSS0nzOgSSk1a0jYrPZuttGkdmXUjXMYmq~UaB0ASlQO3MmICdKyyK5~wta5HZADAHExoKzIa0AgcmtKuJ~w71D9qSXdZCUbo2cBsahXHb6EqqSReNinE~pksCb4q1jM8OGbhb1b0AJ5HFiDEHfoakXC62eQUmh8E9tCLCBHwiuX6yXt8SCb10pnO-qyau5wOzc5~boUJMe1QByQ9-V8Z~LZtRDadAnGxe9T1PWdWixDeTMGSEIyplXUpP6kVgKRMFkeX77u3V2FpdeHFnY17dbzsEKQ__",
    tag: "Software",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/fd32/a56d/d484b871abb15e732abb0a69f2ccd525?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TvAb~4j1sPoNpZphDIOLanQv6HQgXkY~Jm3Xp6U3DTmrZC5Pn3zzYeNRzdoBajFrSozP-0W5zYFqc7ticVMrtq8Qzq45YW9Uk15sGMpTrXojeWAajnOkxcErUBYkhthMsPgNz6r-VWW0ZbDTil~SFng62eBcw-W~0~g03coYkdqCceJwjdRZ3xuu1LoGRhoZQCjLJ~6WO82X~px27EN31aZvbrj1sHikWowLRQE0Z67jU2NYhfjLeDt8zzZKaM09mYJdbM3y1ogeluQuvRec15NHSEv-9Oq1rzKwUPz1jCynvvUD~L9DAR2BUoM~t1fN~Izp9o4I7aK1r3kBUNKqdg__",
    tag: "Software",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/348e/c9c1/94d6445161ab63109e6e813699b61984?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAzRO0UFEWE9aluhJwQq90QNQz-RtqIoHHQJ2IvjsA10gsQQiWVG~XYeV2MuWWDERRViHPVX62LfuJqic6LDxNcypzVh03b5MzVQsIqf87Pp0rAUSOYv5V8s0iOFKiysRtS4j6shr~EjFfXbiy74pI4OLh8s4qNIUp8dXWPaHLPLcSBSLDeoeVgpbmyA~x6drx~bEnXXn76O~p9mdMyQ-sWkn0kH66PWXg4VeObyMI6nd0cw9zoFBdt75O9WMHfrAcV-~2hBamWJPZCiDvEpL2AQSvOlMEi~hpgn4FRCBB42sqizTuG3yPEyQl7gVQZRcrJ6Np5JkK9FmMKhxZALCA__",
    tag: "Fashion",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/e4e4/d40b/dc5bf5a2de00232ed3b7e18eadcbe03a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtgyYAYaOvPGbf-x9LL6T8cx8i5iVbZmjLhw7iR4GpYHq--V9T6Vdq2zSmZfc~pwc~Eeh5W5V0qVtyu4wGFLhy8JtjZ-L~OpF5YddX9jIHwX0BK-m0lZrGTsDxbbFZ-83cytm4341h3V0Vm3Y9njN0V4qVEEwf6sINOg2b765vm1J1-rYdgWBzLzhv41cqjM7iBaIfTOSyROMeV~q1twQI4ajYCaOwlCPWbPwDsmO1SiNOGlz9R0MlACdjyYjWJoBd24dC0RlXX~Gp8bw9GaTGdVv8-opcOUtaSodxLllmR-V2UVO2F3seXnXvrN0Jjs-SWhVh8bpMYI6lUupNYjtQ__",
    tag: "Technology",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/3087/05a3/0ba138a3797a763d4510333166532abb?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmsmKKEHnenEpystHkvhASFM3LtgGXfrtnCOwOiy7gfaCaN0Fvj5BKbVIfKLudYCcAlxyoN1BaBQOuGOvoptkf6TqZvKhrUK8xQTcMivF2iRXe6-EIfRipaM7Cz-fMw-b42KQ2S9Vvm55Er0CWh53cPGBGJcBfr5YfLg8ffMAsMcKLBO0LMLm5mXLH33iIo3Pdn0NnqVtHsZJCSEoaVxn8ruERIovOSvI-jCuTA~gVIPt2Fx9geHhpeXWOTaiEVuwTjCo1Y9Pap1u1D5HYyWlqUj7JFA4a3qNorWgMNrcU03ZkfN2fznWKglf0KKyGT9Zy3OY4QXaJ0slrbXVqm23g__",
    tag: "Technology",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/9cba/0115/47643788a57b79a4aa1d6c6db76208a5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7HEqBtTz0g6AP~5ltOzyBdIRLpnf80caF8lN0wn-UZ3sVbD8O0mRANOoF9023i-Eh-RB60D1EA1-BhSoGzyo~4s38YhyT4X33xRhLSFqT1eGzEgK5Kzbef7Wl1MK4~~XAU75WbojJaBOJqW6KWEqrshB8gtgfjWJ-vcVBIIcfnwXoq7RyohN6~W6XbMlGzj0WoLf~2N-E6gNgoaC6qe0O7PDCpiwcITzH9yxsLhzjWbLdUI--XInNwOEfOp5IOE3Sh01oO0q7Hrv3EoiyfAZh85axbLC8CbnEfh5bbRiLHTAhZGD6phxRQAHm9TODfUwaLguKB3rb9wiFfGlzxo5A__",
    tag: "Branding",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/dbae/ead3/16e4297057a78fcd78323914d00b0bf8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emsUOyNANIn4vx~jy2mBFseYlxFrJp4wB6zloINxG3mEhPTaKCBhCHfWnX5Jq5i8xeYBR-TeRUZp-mkWno5NL3tfePAS6OMpBGQV0kF90ipPl-N~ygVlLDDwzHUlzi8-UCp~-kUpv2AzpJd~RE6Au5khZHWHlroNjSuYMoef~N4ea~bREqcaYzM1n7YbPZXO624J48UczLLrIOhN3L0168do4b5ZGLXbRktRzR90TO~vN1kBNpgrP0w0Sd~ETBb0rAwmkqo5Rmse5D1NdA87piE6cW3TLsxkpicClfXg6QLFmPsaPJPyYOcG7DKTxP02~AbU1LGY13~5PbHUfjzGZw__",
    tag: "Travel",
  },
];

export const Posts = () => {
  const [posts, setPosts] = useState(imageURLS);

  return (
    <div className="">
      <div>
        <div className="mb-10">
          <PostHeader posts={posts} setPosts={setPosts}/>
        </div>
        <div className="flex-wrap flex gap-[20px] max-w-[100%]">
          {posts.map((el, i) => (
            <PostCardCreator key={i} url={el.url} tag={el.tag} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-20 mb-[10px]">
          <button className="px-5 py-3 border-[1px] border-[#00000050] text-[#696A75] rounded-lg">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
