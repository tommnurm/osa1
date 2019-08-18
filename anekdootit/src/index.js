import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
    const [bestQuoteIndex, setBestQuoteIndex] = useState(0)
    const [bestQuoteVotes, setBestQuoteVotes] = useState(0)
    
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{props.anecdotes[selected]}</div>
            <div>has {points[selected]} votes</div>
            <button onClick={() => {
                const copy = [...points]
                copy[selected] += 1
                if (copy[selected] > bestQuoteVotes) {
                    setBestQuoteIndex(selected)
                    setBestQuoteVotes(copy[selected])
                }
                setPoints(copy)
            }}>
                vote
            </button>
            <button onClick={() => {setSelected(getRandomIndex(props.anecdotes.length))}}>
                next anecdote
            </button>
            <h1>Anecdote with most votes</h1>
            <div>
                {props.anecdotes[bestQuoteIndex]}
            </div>
            <div>
                has {bestQuoteVotes} votes
            </div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
 

ReactDOM.render(
    <App anecdotes={anecdotes} />, 
    document.getElementById('root')
);

