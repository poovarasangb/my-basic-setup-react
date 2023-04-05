import { useEffect, useState } from "react";

interface useTimeReturn extends Array<any> {
}

const useTime = (
    dateProps: number = new Date().getTime()
): useTimeReturn => {
    const [time, setTime] = useState(() => dateProps);
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date().getTime());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    const date = new Date(time);
    return [date];
};

export { useTime };