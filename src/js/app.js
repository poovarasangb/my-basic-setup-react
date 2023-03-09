import { useCallback } from "react";

export const App = () => {
    const renderName = useCallback(() => (
        <h2 className="red">
            {"Hello Pgb..!"}
        </h2>
    ), []);
    return renderName();
};

