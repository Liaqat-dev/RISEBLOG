import {createContext, useContext} from "react";


interface UserContextType{
    user:{
        name: string,
        email: string,
        avatar: string,
    }|null,
    setUser: React.Dispatch<React.SetStateAction<{     name: string ,    email: string ,     avatar: string }>>
}

export const UserContext = createContext<UserContextType>({
    user:{
        name:'',
        email:'',
        avatar:'',
    },
    setUser: () => {}
})

export const useUser = () => useContext(UserContext);