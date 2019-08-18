import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text1, value, text2}) => {
    return <div>{text1} {value} {text2}</div>
}

const Statistics = ({good, neutral, bad}) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return <div>No feedback given</div>
    } else {
        return (
            <div>
                <Statistic text1='good' value={good}/>
                <Statistic text1='neutral' value={neutral} />
                <Statistic text1='bad' value={bad} />
                <Statistic text1='average' value={(good * 1.0 + (-1.0) * bad) / ((good + neutral + bad) * 1.0)} />
                <Statistic text1='positive'  value={(good * 100.0) / ((good + neutral + bad) * 1.0)} text2='%' />
            </div>
        )
    }
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>
                good
            </button>
            <button onClick={() => setNeutral(neutral + 1)}>
                neutral
            </button>
            <button onClick={() => setBad(bad + 1)}>
                bad
            </button>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
