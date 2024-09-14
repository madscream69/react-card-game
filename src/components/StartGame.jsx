function StartGame({ setLevel }) {
    return (
        <div className="startgame">
            <h3 className="startgame__title">Choose level</h3>
            <ul className="chooselvl">
                <li className="chooselvl__item">
                    <button
                        onClick={() => {
                            setLevel('Easy');
                            navigator.vibrate([25, 30, 40]);
                        }}
                        className="chooselvl__btn"
                    >
                        Easy
                    </button>
                </li>
                <li className="chooselvl__item">
                    <button
                        onClick={() => {
                            setLevel('Normal');
                            navigator.vibrate([25, 40, 60, 70]);
                        }}
                        className="chooselvl__btn"
                    >
                        Normal
                    </button>
                </li>
                <li className="chooselvl__item">
                    <button
                        onClick={() => {
                            setLevel('Hard');
                            navigator.vibrate([25, 50, 100]);
                        }}
                        className="chooselvl__btn"
                    >
                        Hard
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default StartGame;
