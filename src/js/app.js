import UseTime, { useTimeHook } from "./useTime";

export const App = () => {
    const _time = new Date().getTime();
    const { time } = useTimeHook(_time);
    const date = new Date(time);
    return (
        <>
            <UseTime
                dateProps={_time}
            />
            <h2>
                {`${date.toLocaleDateString() } :: ${ date.toLocaleTimeString()}`}
            </h2>
        </>
    );
};