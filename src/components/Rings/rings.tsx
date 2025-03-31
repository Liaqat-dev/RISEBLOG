interface Props {
    zindex?:number|10,
    size:number,
    degree?:number,
    position?: {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    };
}

function Ring({ size, degree, position, zindex}: Props) {
    return (
        <div className={`bg-gradient-primary rounded-full z-${zindex}`}
            style={{
                width: size+Math.floor(Math.random() * (10)) + 5,
                height: size+90,

                position: "absolute",
                 transform: `rotate(${degree}deg)`,
                ...position,
            }}

        />
    );
}

export default Ring;
