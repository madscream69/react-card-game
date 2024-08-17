import Card from './components/Card';
import './App.css';
import { useEffect, useState } from 'react';
import EndGame from './components/EndGame';
import StartGame from './components/StartGame';

// let randomColors = [
//     '#EB6424',
//     '#50723C',
//     '#0C0A3E',
//     '#78FECF',
//     '#EDCF8E',
//     '#F374AE',
//     '#533E2D',
//     '#F45B69',
//     '#EB6424',
//     '#50723C',
//     '#0C0A3E',
//     '#78FECF',
//     '#EDCF8E',
//     '#F374AE',
//     '#533E2D',
//     '#F45B69',
// ];
// randomColors = randomColors.sort(() => Math.random() - 0.5);
function App() {
    const [counter, setCounter] = useState(0);
    const [level, setLevel] = useState('');
    const [opened, setOpened] = useState([]);
    const [chosen, setChosen] = useState([]);
    const [score, setScore] = useState(0);
    const [randomColors, setRandomColors] = useState([
        '#EB6424',
        '#50723C',
        '#0C0A3E',
        '#78FECF',
        '#EDCF8E',
        '#F374AE',
        '#533E2D',
        '#F45B69',
        '#EB6424',
        '#50723C',
        '#0C0A3E',
        '#78FECF',
        '#EDCF8E',
        '#F374AE',
        '#533E2D',
        '#F45B69',
    ]);
    // for (let i = 0; i < colors.length; i++) {
    //     if (randomColors.length === colors.length) {
    //         i = 0;
    //     }
    //     randomColors.push(colors[i]);
    // }
    // console.log(randomColor); calling 2 times because in the index.js we use StrictMode
    function shuffleArray(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        setRandomColors(copy);
    }
    useEffect(() => {
        shuffleArray(randomColors);
    }, []);
    // this piece for the future update of the hard levels
    // const randomColor = `#${Math.floor(Math.random() * 0xffffff)
    //     .toString(16)
    //     .padEnd(6, '0')}`;
    // console.log(randomColor);
    useEffect(() => {
        if (level === 'Easy') {
            document.querySelector('.startgame').classList.add('dn');
        }
        if (chosen.length === 2) {
            if (
                chosen[0] !== chosen[1] ||
                opened[opened.length - 1] === opened[opened.length - 2]
            ) {
                const temp = [...opened];
                temp.pop();
                temp.pop();
                setTimeout(() => {
                    setOpened(temp);
                }, 500);
            }
            setChosen([]);
        }
        if (opened.length === randomColors.length) {
            setScore(Math.floor((randomColors.length / counter) * 100));
            console.log(`Your score = ${score}`);
        }
    }, [chosen, opened, counter, randomColors, score, level]);
    const handleCardClick = (id) => {
        // console.log(id);
        setCounter(counter + 1);
        console.log(counter);
        if (chosen.length !== 2) {
            setOpened([...opened, id]);
            setChosen([...chosen, randomColors[id]]);
        }
    };
    return (
        <div className="App">
            <StartGame setLevel={setLevel}></StartGame>
            {opened.length === randomColors.length && <EndGame score={score} />}

            <h1 className="app__title">Click on card and try to find couple</h1>
            <div className="cards">
                {randomColors.map((color, index) => {
                    return (
                        <Card
                            color={color}
                            opened={opened}
                            setOpened={setOpened}
                            id={index}
                            key={index}
                            handleCardClick={handleCardClick}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
