import background from '../images/background-card.jpg';

// function ClickedFront(e) {
//     console.log(e.target.parentElement);
//     e.target.parentElement.classList.add('clicked-front');
//     e.target.parentElement.nextSibling.classList.toggle('clicked-back');
// }
// function ClickedBack(e) {
//     console.log(e.target);

// }

function Card({ color, opened, id, handleCardClick }) {
    return (
        <div className="card__wrapper">
            <div
                className="card"
                onClick={() => {
                    handleCardClick(id);
                    // if (clicked) {
                    //     setClicked(false);
                    //     console.log(currentColor);
                    // } else {
                    //     checkColors(e);
                    // }
                }}
                data-color={color}
            >
                <div
                    className={`front  ${
                        opened.findIndex((openId) => openId === id) !== -1
                            ? 'clicked-front'
                            : ''
                    } `}
                >
                    <img
                        src={background}
                        alt="bg"
                        className="front__background"
                    />
                </div>
                <div
                    className={`back ${
                        opened.findIndex((openId) => openId === id) !== -1
                            ? 'clicked-back'
                            : ''
                    }`}
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
