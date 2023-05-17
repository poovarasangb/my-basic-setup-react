import { lazy, Suspense } from "react";

const DisplayTime = lazy(() => import("./displayTime"));
const NavBar = lazy(() => import("./component/navBar"));

export const App = ({
    time = new Date().getTime()
}) => (
    <>
        <Suspense fallback={null}>
            <NavBar />
        </Suspense>
        <Suspense fallback={null}>
            <DisplayTime
                dateProps={time}
            />
        </Suspense>
    </>
);