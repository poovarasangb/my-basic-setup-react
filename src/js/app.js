import { lazy, Suspense } from "react";
import { useTime } from "./customHook/time";

const DisplayTime = lazy(() => import("./displayTime"));

export const App = ({
    time = new Date().getTime()
}) => {
    const [date] = useTime(time);
    return (
        <>
            <Suspense fallback={null}>
                <DisplayTime
                    dateProps={time}
                />
            </Suspense>
            <h1>
                {"Using customHook ==> "}
                {`${date.toLocaleDateString() } :: ${ date.toLocaleTimeString()}`}
            </h1>

        </>
    );
};