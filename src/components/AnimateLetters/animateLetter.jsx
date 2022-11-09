import "./animateLetters.scss";

const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((value,i) => {
                 return <span key={value+i} className={`${letterClass} _${i+idx}`}>{value}</span>  
                })
            }
        </span>
    )
}

export default AnimatedLetters;