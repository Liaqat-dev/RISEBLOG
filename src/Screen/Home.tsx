import RingContainer from "@/components/Rings/ringContainer.tsx";
import {Home_Routes} from "../../constants/routes.tsx";
import {Route, Routes} from "react-router";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

function Home() {
    const navigate = useNavigate();

    const [screenNumber, setScreenNumber] = useState(0);
    const handleNavigate = (op: string) => {
        setScreenNumber((Prev) => {
            let newScreenNumber = Prev;
            if (op === '+') {
                newScreenNumber = (Prev + 1) % Home_Routes.length;
            } else if (op === '-') {
                newScreenNumber = (Prev - 1 + Home_Routes.length) % Home_Routes.length;
            }

            navigate(Home_Routes[newScreenNumber].path);


            return newScreenNumber;
        });
    };


    useEffect(() => {
        navigate(Home_Routes[screenNumber].path);
    }, []);

    return (
        <RingContainer>
            <Routes>
                {
                    Home_Routes.map((item, index) => (
                        <Route key={index} path={item.path} element={item.element}/>
                    ))
                }
            </Routes>

            <div className={'flex justify-center gap-4'}>
                <FaArrowLeft size={40} className={'text-secondary cursor-pointer hover:scale-125'}
                             onClick={() => handleNavigate('-')}/>
                <FaArrowRight size={40} className={'text-secondary cursor-pointer hover:scale-125'}
                              onClick={() => handleNavigate('+')}/>

            </div>


        </RingContainer>

    )
}

export default Home
