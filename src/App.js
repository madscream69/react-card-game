import Card from './components/Card';
import './App.css';
import { useState } from 'react';

// const colors = [
//     '#EB6424',
//     '#50723C',
//     '#0C0A3E',
//     '#78FECF',
//     '#EDCF8E',
//     '#F374AE',
// ];
let randomColors = [
    '#EB6424',
    '#50723C',
    '#0C0A3E',
    '#78FECF',
    '#EDCF8E',
    '#F374AE',
    '#EB6424',
    '#50723C',
    '#0C0A3E',
    '#78FECF',
    '#EDCF8E',
    '#F374AE',
];
randomColors = randomColors.sort(() => Math.random() - 0.5);
function App() {
    const [currentColor, setCurrentColor] = useState('');
    const [counter, setCounter] = useState(0);

    // for (let i = 0; i < colors.length; i++) {
    //     if (randomColors.length === colors.length) {
    //         i = 0;
    //     }
    //     randomColors.push(colors[i]);
    // }

    return (
        <div className="App">
            <h1 className="app__title">Click on card and try to find couple</h1>
            <div className="cards">
                {randomColors.map((color, index) => {
                    return (
                        <Card
                            counter={counter}
                            setCounter={setCounter}
                            currentColor={currentColor}
                            setCurrentColor={setCurrentColor}
                            color={color}
                            index={index}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
