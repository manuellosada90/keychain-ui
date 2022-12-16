import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {Link, Route, Routes, Outlet, BrowserRouter} from 'react-router-dom';
import About from './pages/About';

// Pages
import { Keychain } from './pages/Keychain';

// Mobile Pages

export default function AppRoutes() {

    // To show mobile warning if screen size is smaller than 1224px
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

    // const bypassMobileWarning = useRecoilValue(bypassMobileWarningAtom);
    // const setBypassMobileWarning = useSetRecoilState(bypassMobileWarningAtom);

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Layout />}> */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About/>} />
                    <Route path="keychain" element={<Keychain />} />

                    {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
                    <Route path="*" element={<NoMatch />} />
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
);
}

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
        <Link to="/nothing-here">Nothing Here</Link>
    </li>
    </ul>
    </nav>

    <hr />

    {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
    <Outlet />
    </div>
);
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

// function About() {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
