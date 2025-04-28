import { useTime } from "./customHook/time";

interface defaultProps {
    dateProps: number;
}

const DisplayTime = ({
    dateProps = new Date().getTime()
}: defaultProps): JSX.IntrinsicElements => {
    const [date] = useTime(dateProps);
    return (
        <h1 className="red">
            {`Current Time is ${date.toLocaleDateString() } :: ${ date.toLocaleTimeString()}`}
        </h1>
    );
};

export {
    DisplayTime as default
};
