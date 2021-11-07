import './style.css';

/**
 * 
 * @param href link da web
 * @returns 
 */
const Link = ({href, text, extern, className}) => {
    const target = extern ? "_blank" : "";
    const rel = extern ? "noreferrer" : "";

    return (
        <a href={href} target={target} rel={rel} className={`link ${className}`}>
            {text || href}
        </a>
    )
}

export default Link;