import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({advice}) => {
    const vowelsLetters = 'aeiouy'

    const letters = advice.split('').reduce((accum, letter) => {
        letter = letter.toLowerCase()

        if (!vowelsLetters.includes(letter)) {
            return accum
        }

        return {
            ...accum,
            [letter]: accum[letter] ? accum[letter] + 1 : 1
        }
    }, {})

    const sortedLetters = Object.entries(letters).sort(([_, aValue], [__, bValue]) => bValue - aValue)

    const barChartData = {
        labels: sortedLetters.map(([key]) => key),
        datasets: [
            {
                data:  sortedLetters.map(([_, value]) => value),
                label: "Количество гласных в предложении",
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true,
            },
        ]
    };

    return <>
        <p>{advice}</p>
        <Bar
            width={260}
            height={100}
            data={barChartData}
            options={
                {
                    plugins: {
                        title: {
                            display: true,
                            text: "Рейтинг используемых гласных букв",
                            font: {
                                size: 30,
                                weight: 'bold'
                            }
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }
            }
        />
    </>
};

export default Chart;
