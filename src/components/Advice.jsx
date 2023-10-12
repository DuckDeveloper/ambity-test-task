import {useEffect, useState} from "react";
import Chart from "./Chart.jsx";

const App = () => {
    const [advice, setAdvice] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const func = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://api.adviceslip.com/advice')
                const {slip} = await response.json()

                setAdvice(slip.advice)
            } catch {
                console.log('ERROR')
            } finally {
                setIsLoading(false)
            }
        }

        func()
    }, [])



    return (
       <div>
           {isLoading && 'LOADING'}
           <Chart advice={advice} />
       </div>
    );
};

export default App;
