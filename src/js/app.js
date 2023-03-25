import { lazy, Suspense } from "react";
import { useBrowserTimeCustomHook } from "./browserTime";

const BrowserTimeComp = lazy(() => import("./browserTime"));

export const App = () => {
    const _time = new Date().getTime();
    const { time } = useBrowserTimeCustomHook(_time);
    const date = new Date(time);
    return (
        <>
            <Suspense fallback={null}>
                <BrowserTimeComp
                    dateProps={_time}
                />
            </Suspense>
            <h2>
                {`${date.toLocaleDateString() } :: ${ date.toLocaleTimeString()}`}
            </h2>
        </>
    );
};