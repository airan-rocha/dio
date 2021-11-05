const Button = ({children, className, onClick}) => {
    return (
        <button
            type="button"
            className={className}
            style={estilo}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;

const estilo= {
    margin: 5
 }