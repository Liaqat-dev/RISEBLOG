interface Props {
    zindex?:number,
    size:number,
    degree?:number,
    position?: {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    };
}

function Ring2({ size, degree, position, zindex=9}: Props) {
    return (
        <div className={`  border-gradient  rounded-3xl z-${zindex}`}
             style={{
                 width: size+Math.floor(Math.random() * (20)) + 5,
                 height: size+120,


                 position: "absolute",
                 transform: `rotate(${degree}deg)`,
                 ...position,
             }}

        />
    );
}

export default Ring2;
