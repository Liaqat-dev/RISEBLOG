import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    titleStyle?: string;
}

function Button({ title,className,titleStyle, ...rest }: Props) {
    return <button className={`bg-blue-1 flex items-center rounded-full px-2 cursor-pointer py-0.5 mx-0.5 +${className}`} {...rest}><span style={{lineHeight:1}} className={` text-white text-center align-middle  font-light + ${titleStyle}`}>{title}</span></button>

}

export default Button;
