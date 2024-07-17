const styles = {
    first: "bg-[#4B6BFB] text-white rounded-md px-[10px] py-[4px] w-fit",
    second: "bg-[rgba(75,107,251,0.05)] text-[#4B6BFB] rounded-md px-[10px] py-[4px] w-fit"
}

export const Tag = ({tag = "Technology", isPrimary = true}) => {
    return(
        <button className={isPrimary ? styles.first : styles.second}>{tag}</button>
    )
} 