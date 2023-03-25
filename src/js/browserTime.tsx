import { useEffect, useState } from "react";

interface useTimeReturn {
    time: number;
}

interface defaultProps {
    dateProps: number;
}

const useBrowserTimeCustomHook = (dateProps: number): useTimeReturn => {
    const [time, setTime] = useState(() => dateProps);
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date().getTime());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return { time };
};

const BrowserTimeComp = ({dateProps}: defaultProps): JSX.Element => {
    const [time, setTime] = useState(() => dateProps);

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date().getTime());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    // eslint-disable-next-line no-trailing-spaces
    

    const date = new Date(time);
    return (
        <h1 className="red">
            {`${date.toLocaleDateString() } :: ${ date.toLocaleTimeString()}`}
        </h1>
    );
};

export { BrowserTimeComp as default, useBrowserTimeCustomHook };
