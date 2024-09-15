import Card from './components/Card';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import Timer from './components/Timer';
import EndGame from './components/EndGame';
import StartGame from './components/StartGame';
import BadEnd from './components/BadEnd';

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
    // this piece for the future update of the hard levels

    function createColors(quantity) {
        let tempArr = [];
        for (let i = 0; i < quantity; i++) {
            let randomColor = `#${Math.floor(Math.random() * 0xffffff)
                .toString(16)
                .padEnd(6, '0')}`;
            if (!tempArr.includes(randomColor)) {
                tempArr.push(randomColor);
            }
        }
        const copyTempArr = tempArr.map((element) => element);
        for (let i = 0; i < copyTempArr.length; i++) {
            tempArr.push(copyTempArr[i]);
        }
        shuffleArray(tempArr);
        // setRandomColors(tempArr);
    }
    useEffect(() => {
        shuffleArray(randomColors);
    }, []);
    useEffect(() => {
        if (level === 'Normal') {
            createColors(8);
        }

        // console.log(randomColor);
    }, [level]);
    useEffect(() => {
        if (level === 'Hard') {
            createColors(10);
        }

        // console.log(randomColor);
    }, [level]);
    useEffect(() => {
        if (level !== '') {
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
                    navigator.vibrate([25, 40, 60]);
                }, 500);
            }
            setChosen([]);
        }
        if (opened.length === randomColors.length) {
            navigator.vibrate([25, 50, 100, 200]);
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
    const [timeIsUp, setTimeIsUp] = useState(false);
    const [prematurely, setPrematurely] = useState(false);
    const [seconds, setSeconds] = useState(30);
    useEffect(() => {
        if (opened.length === randomColors.length) {
            setPrematurely(true);
            console.log(prematurely);
        }
    }, [opened, randomColors, prematurely]);

    return (
        <div className="App">
            <StartGame setLevel={setLevel}></StartGame>
            {opened.length === randomColors.length && (
                <EndGame seconds={seconds} score={score} />
            )}

            {level === 'Easy' && (
                <>
                    <h1 className="app__title">
                        Click on card and try to find couple
                    </h1>
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
                </>
            )}
            {level === 'Normal' && (
                <>
                    <h1 className="app__title">
                        Click on card and try to find couple
                    </h1>
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
                </>
            )}
            {level === 'Hard' && (
                <>
                    {timeIsUp && <BadEnd />}
                    <h1 className="app__title">
                        Click on card and try to find couple
                    </h1>
                    <Timer
                        setTimeIsUp={setTimeIsUp}
                        prematurely={prematurely}
                        seconds={seconds}
                        setSeconds={setSeconds}
                    ></Timer>
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
                </>
            )}
        </div>
    );
}

export default App;
