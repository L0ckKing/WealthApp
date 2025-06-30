import { Tabs } from "../Components/Tabs"
import { Outlet } from "react-router-dom"

export function Dashboard(){
    return <>
    <Tabs/>
    <main>
        <Outlet/>
    </main>
    </>
}