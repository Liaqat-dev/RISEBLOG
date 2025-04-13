import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import './index.css'
import App from './App.tsx'
import Modal from 'react-modal';
import {NotificationProvider} from "../context/NotficationContext/NotificationContext.tsx";
import {UserProvider} from "../context/UserContext/UserContext.tsx";

Modal.setAppElement('#root');
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <UserProvider>
            <NotificationProvider>
                <App/>
            </NotificationProvider>
        </UserProvider>

    </BrowserRouter>
    ,
)
