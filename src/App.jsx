import {useEffect, useState} from "react";

const App = () => {
    const [advice, setAdvice] = useState('')

    useEffect(() => {
        const func = async () => {
            try {
                const response = await fetch('https://api.adviceslip.com/advice')
                const {slip} = await response.json()

                setAdvice(slip.advice)
            } catch {
                console.log('ERROR')
            }
        }

        func()
    }, [])

    return (
        <h1>
            {advice}
        </h1>
    );
};

export default App;
