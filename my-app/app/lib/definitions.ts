export type DataProps = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor?: string;
        backgroundColor: string;
    }[]
};

export type OptionsProps = {
    responsive: boolean;
    plugins: {
        legend: {
            position: "bottom";
        },
        title: {
            display: boolean;
            text: string;
            font: {
                size: number;
            },
            color: string;
        },
        elements: {
            point: {
                radius: number;
                hitRadius: number;
            }
        },
    },
};