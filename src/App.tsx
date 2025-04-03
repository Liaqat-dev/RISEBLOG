import NavBar from "@/components/Navbar.tsx";
import {Route, Routes} from "react-router";
import {Screen_Routes} from "../constants/routes.tsx";


function App() {


    return <div>
        <NavBar className={'sticky z-50'}/>
        <div className="   bg-white w-screen h-screen  overflow-x-hidden overflow-y-auto">
            <Routes>
                {Screen_Routes.map((screen, key) => (
                    <Route key={key} path={screen.path} element={screen.element}/>
                ))
                }
            </Routes>
        </div>
    </div>
}

export default App
