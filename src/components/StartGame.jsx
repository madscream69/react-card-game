function StartGame({ setLevel }) {
    return (
        <div className="startgame">
            <h3 className="startgame__title">Choose level</h3>
            <ul className="chooselvl">
                <li className="chooselvl__item">
                    <button
                        onClick={() => setLevel('Easy')}
                        className="chooselvl__btn"
                    >
                        Easy
                    </button>
                </li>
                <li className="chooselvl__item">
                    <button className="chooselvl__btn">Normal</button>
                </li>
                <li className="chooselvl__item">
                    <button className="chooselvl__btn">Hard</button>
                </li>
            </ul>
        </div>
    );
}
export default StartGame;
