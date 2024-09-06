import { Outlet } from "react-router-dom";
import { Menu } from "../Components/Menu/Menu";

export function Layout(){

    return(
        <div className="flex"> 
            <Menu />
            <main>
                <Outlet />
            </main>
        </div>
    )
}