import { Outlet } from "react-router-dom";
const ParentLayout = () => {
    return ( 
        <main>
            <Outlet/>
        </main>
     );
}
 
export default ParentLayout;