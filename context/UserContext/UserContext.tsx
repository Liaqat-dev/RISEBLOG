import {ReactNode, useEffect, useState} from "react";
import {UserContext} from "./useUser";
import {fetchCurrentUser} from "../../src/api/api_routes";

interface Props {
    children: ReactNode;
}

export function UserProvider({children}: Props) {
    const [user, setUser] = useState<null | {
        name: string;
        email: string;
        avatar: string;
    }>(null);
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetchCurrentUser(); // ✅ wait for the data
                if (res) {
                    setUser({
                        name: res.displayName || '',
                        avatar: res.avatar || '',
                        email: res.email || ''
                    });
                }
            } catch (err) {
                console.error('Failed to fetch user:', err);
            }
        };

        getUser();
    }, []);

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}