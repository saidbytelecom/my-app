import React from "react";

const XmukiTest = () => {
    const [numbers, setNumbers] = React.useState([1,2,3]);
    const [count, setCount] = React.useState(0)

    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10);
        setNumbers([...numbers,randNumber ]);
    }
    React.useEffect( () => {
        console.log('КОМПОНЕНТ БЫЛ ОТОБРАЖЁН!')
    }, [numbers, count])
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount( count + 1)}>+</button>
            <ul>
                {
                    numbers.map( (num, index) => <li key={index}>{num}</li>)
                }
            </ul>
            <button onClick={addNumber}>Новое число</button> <br/>
            <button>Не следить</button>
        </div>
    )
}

export default XmukiTest;