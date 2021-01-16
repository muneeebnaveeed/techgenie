import { useCallback, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import _ from "lodash";
import { useRouter } from "next/router";
import routes from "routes";

const CollapsibleNav = (props) => {
    const router = useRouter();

    return (
        <ul
            className="bg-white transition-all shadow-lg flex flex-col absolute left-0 w-full"
            {...props}
        >
            <div className="tw-container py-8">
                <CollapsibleNavItem>Portfolio</CollapsibleNavItem>
                <CollapsibleNavItem>Packages</CollapsibleNavItem>
            </div>
        </ul>
    );
};

const CollapsibleNavItem = ({ children, ...rest }) => (
    <li className="cursor-pointer hover:opacity-50 transition-all flex py-4" {...rest}>
        {children}
    </li>
);

const NavItem = ({ children, className, ...rest }) => (
    <li
        className={`cursor-pointer hover:opacity-50 transition-all font-bold ${className || ""}`}
        {...rest}
    >
        {children}
    </li>
);

const Navbar = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapsed = useCallback(() => setIsCollapsed((prev) => !prev), []);
    const router = useRouter();
    return (
        <div className="relative w-full z-20 transition-all duration-300" {...props}>
            <main className="w-full shadow-md nv:shadow-none">
                <div className="tw-container py-8">
                    <div className="flex items-center justify-between">
                        <div className="overflow-hidden" style={{ width: "130px", height: "35px" }}>
                            <img
                                className="w-full h-full object-contain"
                                src="/logo.png"
                                alt="Logo"
                            />
                        </div>
                        <ul className="hidden nv:flex items-center gap-6">
                            <NavItem onClick={() => router.push("/packages")}>Packages</NavItem>
                            <NavItem onClick={() => router.push("/packages")}>Portfolio</NavItem>
                            <NavItem className="font-semibold tw-button-secondary hover:opacity-100">
                                Contact Us
                            </NavItem>
                        </ul>
                        <div
                            className="nv:hidden transition-all text-4xl cursor-pointer opacity-100 hover:opacity-40"
                            onClick={toggleCollapsed}
                        >
                            {isCollapsed ? <AiOutlineMenu /> : <AiOutlineClose />}
                        </div>
                    </div>
                </div>
            </main>
            {!isCollapsed && <CollapsibleNav />}
        </div>
    );
};

export default Navbar;
