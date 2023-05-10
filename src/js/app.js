import { lazy, Suspense } from "react";

const DisplayTime = lazy(() => import("./displayTime"));

export const App = ({
    time = new Date().getTime()
}) => (
    <>
        <Suspense fallback={null}>
            <DisplayTime
                dateProps={time}
            />
        </Suspense>
    </>
);