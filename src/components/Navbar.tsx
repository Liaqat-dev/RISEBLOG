import {nav_links} from "../../constants/nav_links.ts";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {IoMenu, IoClose} from "react-icons/io5";
import Button from "@/components/button.tsx";
interface Props {
    className?: string,
}
const NavBar = ({className}:Props) => {
    const [showSideMenu, setShowSideMenu] = useState(false);

    // Toggle the side menu
    const toggleSideMenu = () => {
        setShowSideMenu(!showSideMenu);

    };

    return (
        <nav className={` w-screen bg-white h-16 shadow-sm ${className}`}>
            {/* Navbar Header */}
            <div className="flex items-center justify-between  h-16 px-6">
                {/* Logo */}
                <NavLink to="/"><img src={'favIcon.png'} alt={'logo'} width={24}/>
                    <h3 className="font-semibold text-lg">
                        RISE<span className="text-secondary">BLOG</span>
                    </h3>
                </NavLink>

                {/* Desktop Navigation (Hidden on xs screens) */}
                <div className="max-sm:hidden sm:flex">
                    <ul className="flex list-none gap-6">
                        {nav_links.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    className={({isActive}) =>
                                        isActive
                                            ? "relative font-bold text-blue-600 after:absolute after:content-[''] after:w-2 after:h-2 after:bg-blue-600 after:rounded-full after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2"
                                            : "text-gray-700"
                                    }
                                    to={link.href}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-between ">
                    <Button title={"Sign Up"}/>


                    {/* Mobile Menu Button (Visible on xs screens) */}
                    <div className="sm:hidden">
                        {showSideMenu ? (
                            <IoClose size={24} onClick={toggleSideMenu}/>
                        ) : (
                            <IoMenu size={24} onClick={toggleSideMenu}/>
                        )}
                    </div>
                </div>
            </div>

            {/* Side Menu (Absolute Positioning Below Navbar) */}
            {showSideMenu && (
                <div
                    className="absolute top-full w-1/3   right-0  bg-white-1 shadow-md border-l border-b border-t border-gray-200  "
                    style={{borderBottomLeftRadius: 15}}
                >
                    <ul className="list-none ">
                        {nav_links.map((link, index) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.href}
                                    className={({isActive}) =>
                                        isActive
                                            ? "font-bold text-blue-600 p-2 z-40"
                                            : "text-gray-700 hover:text-blue-600 p-2 z-50"
                                    }
                                    onClick={toggleSideMenu}
                                >
                                    <span className={'pl-3'}> {link.name}</span>
                                </NavLink>
                                {
                                    index == nav_links.length - 1 ? null : <hr/>
                                }


                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;