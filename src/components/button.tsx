import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    titleStyle?: string;
}

function Button({ title,className,titleStyle, ...rest }: Props) {
    return <button className={`rounded-3xl cursor-pointer bg-blue  px-4 py-0.5 mx-1 +${className}`} {...rest}><span className={` text-white font-light + ${titleStyle}`}>{title}</span></button>

}

export default Button;
