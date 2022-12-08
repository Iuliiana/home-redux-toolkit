import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <ul className="nav">
                    <li><NavLink className="nav-item" to='/'>home</NavLink></li>
                    <li><NavLink className="nav-item" to='/task-1'>Task 1</NavLink></li>
                    <li><NavLink className="nav-item" to='/task-2'>Task 2</NavLink></li>
                </ul>
            </header>

            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}
export {Layout}