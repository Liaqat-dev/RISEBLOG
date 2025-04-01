import Ring from "@/components/Rings/rings.tsx";
import {ReactNode} from "react";
interface Props {
    children?: ReactNode;
}

function RingContainer({children}: Props) {
    return (
        <div className="relative h-[calc(100vh-6rem)] overflow-hidden z-0 ">
            <Ring size={Math.floor(Math.random() * (10)) + 5} degree={Math.floor(Math.random() * 181)}
                  position={{top: Math.floor(Math.random() * (50)) + 16, left: Math.floor(Math.random() * (30)) + 10}}
                  zindex={9}/>
            {screen.width >= 500 ?
                <Ring size={Math.floor(Math.random() * (10)) + 5} degree={Math.floor(Math.random() * 181)}
                      position={{top: -10, left: (screen.width + Math.floor(Math.random() * (40)) + 100) / 2}}
                      zindex={9}/> : null}
            <Ring size={Math.floor(Math.random() * (10)) + 5} degree={Math.floor(Math.random() * 181)} position={{
                bottom: Math.floor(Math.random() * (40)) + 10,
                right: Math.floor(Math.random() * (40)) + 10
            }} zindex={9}/>
            <Ring size={Math.floor(Math.random() * (10)) + 5} degree={Math.floor(Math.random() * 181)}
                  position={{top: Math.floor(Math.random() * (40)) + 10, right: Math.floor(Math.random() * (40)) + 10}}
                  zindex={9}/>
            <Ring size={Math.floor(Math.random() * (10)) + 5} degree={Math.floor(Math.random() * 181)} position={{
                bottom: Math.floor(Math.random() * (30)) + 10,
                left: Math.floor(Math.random() * (40)) + 10
            }} zindex={9}/>


            {
                children
            }
        </div>
    );
}

export default RingContainer;