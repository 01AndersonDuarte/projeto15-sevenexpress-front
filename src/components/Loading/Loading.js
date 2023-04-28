import { Rings, LineWave, ThreeDots } from "react-loader-spinner";

export function LoadingRings() {
    return (
        <Rings
            height="50vh"
            width="50vw"
            color="#ffbd59"
            radius="24"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
        />
    );
}

export function LoadingLineWave() {
    return (
        <LineWave
            height="50vh"
            width="50vw"
            color="#ffbd59"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
}

export function LoadingThreeDots() {
    return (
        <ThreeDots
            height="20"
            width="20"
            radius="6"
            color="#ffbd59"
            ariaLabel="loading"
            background-color="transparent"
        />);
}