import RingContainer from "@/components/Rings/ringContainer.tsx";
import {Home_Section1_Routes} from "../../../constants/routes.tsx";
import {Route, Routes} from "react-router";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import DailyArticles from "@/Screen/Home/DailyArticles.tsx";


import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

function Home() {
    const navigate = useNavigate();
    const n = 1;

    const [screenNumber, setScreenNumber] = useState(0);
    const handleNavigate = (op: string) => {
        setScreenNumber((Prev) => {
            let newScreenNumber = Prev;
            if (op === '+') {
                newScreenNumber = (Prev + 1) % Home_Section1_Routes.length;
            } else if (op === '-') {
                newScreenNumber = (Prev - 1 + Home_Section1_Routes.length) % Home_Section1_Routes.length;
            }

            navigate(Home_Section1_Routes[newScreenNumber].path);


            return newScreenNumber;
        });
    };


    useEffect(() => {
        navigate(Home_Section1_Routes[screenNumber].path);
    }, [n]);

    return (<div className={''}>
            <RingContainer >
                <Routes>
                    {
                        Home_Section1_Routes.map((item, index) => (
                            <Route key={index} path={item.path} element={item.element}/>
                        ))
                    }
                </Routes>
                <div className={'absolute  bottom-9  flex  w-full justify-center '}>
                    <div className={' flex justify-center gap-7'}>
                        <FaArrowLeft size={40} className={'text-secondary cursor-pointer hover:scale-125'}
                                     onClick={() => handleNavigate('-')}/>
                        <FaArrowRight size={40} className={'text-secondary cursor-pointer hover:scale-125'}
                                      onClick={() => handleNavigate('+')}/>

                    </div>
                </div>


            </RingContainer>
            <DailyArticles/>
        </div>

    )
}

export default Home
