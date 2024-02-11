
export function Button({children, className, textOnly, ...props}) {

    let cssClassName = textOnly ? 'text-button' : 'button';
    cssClassName += ' ' + className;

    return <button className={cssClassName} {...props}>
        {children}
    </button>
} 
