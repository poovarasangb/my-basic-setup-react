import { useTime } from "./customHook/time";

interface defaultProps {
    dateProps: number;
}

const DisplayTime = ({
    dateProps = new Date().getTime()
}: defaultProps): JSX.Element => {
    const [date] = useTime(dateProps);
    return (
        <h1 className="red">
            {`Using component ==> ${ date }`}
        </h1>
    );
};

export {
    DisplayTime as default
};
