import { useState } from 'react';
import background from '../images/background-card.jpg';

// function ClickedFront(e) {
//     console.log(e.target.parentElement);
//     e.target.parentElement.classList.add('clicked-front');
//     e.target.parentElement.nextSibling.classList.toggle('clicked-back');
// }
// function ClickedBack(e) {
//     console.log(e.target);

// }
function Card({
    color,
    currentColor,
    setCurrentColor,
    counter,
    setCounter,
    createCard,
    index,
}) {
    const [clicked, setClicked] = useState(false);

    function checkColors(e) {
        if (!clicked) {
            setClicked(true);
            // console.log(e.target.parentElement.parentElement.dataset.color);
        } else {
            setCurrentColor('');
            setClicked(false);
        }

        // setClicked(true);
        setTimeout(function () {
            if (currentColor.length === 0) {
                setCurrentColor(
                    e.target.parentElement.parentElement.dataset.color
                );
                console.log(currentColor);
                setCounter(counter + 1);
            } else if (
                currentColor ===
                e.target.parentElement.parentElement.dataset.color
            ) {
                // setClicked(true);
                setCurrentColor('');
            } else {
                setClicked(false);
            }
            console.log(counter);
        }, 500);
    }

    return (
        <div className="card__wrapper">
            <div
                className="card"
                onClick={(e) => {
                    checkColors(e);
                    // if (clicked) {
                    //     setClicked(false);
                    //     console.log(currentColor);
                    // } else {
                    //     checkColors(e);
                    // }
                }}
                data-color={color}
            >
                <div className={clicked ? 'front clicked-front' : 'front'}>
                    <img
                        src={background}
                        alt="bg"
                        className="front__background"
                    />
                </div>
                <div
                    className={clicked ? 'back clicked-back' : 'back'}
                    style={{ backgroundColor: color }}
                >
                    <div className="content">
                        <h3 className="content__title">{color}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
