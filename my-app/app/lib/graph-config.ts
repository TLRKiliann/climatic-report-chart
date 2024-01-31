import type { DataProps, OptionsProps } from "./definitions";

export const options: OptionsProps = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Temperatures (celsius) in Lausanne 2010-2020',
            font: {
                size: 14,
            },
            color: "dimgrey",
        },
        elements: {
            point: {
                radius: 5,
                hitRadius: 10,
            }
        },
    },
};

export const labels: string[] = ["janvier", "février", "mars", "avril", "mai", "juin", 
    "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

const newDataBar1: number[] = [4, 6, 8, 9, 14, 20, 22, 21, 19, 15, 7, 6];
const newDataBar2: number[] = [4, 6, 8, 9, 14, 20, 22, 21, 19, 15, 7, 6];
const newDataBar3: number[] = [4, 6, 8, 9, 14, 20, 22, 21, 19, 15, 7, 6];

export const dataBar: DataProps = {
    labels,
    datasets: [
        {
            label: 'T°C 2010',
            data: newDataBar1,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'T°C 2020',
            data: newDataBar2,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'T°C 2024',
            data: newDataBar3,
            borderColor: 'rgb(0,128,128)',
            backgroundColor: 'rgba(0,128,128, 0.5)',
        },
    ],
};