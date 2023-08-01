import { FC, ReactNode, useEffect, useState } from "react";

interface CurcularProviderProps {
    children: (value: number) => ReactNode;
    valueStart: number;
    valueEnd: number;
}
const CurcularProvider: FC<CurcularProviderProps> = ({
    valueStart,
    valueEnd,
    children,
}) => {
    const [value, setValue] = useState(valueStart);

    useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
};

export default CurcularProvider;
