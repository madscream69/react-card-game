function EndGame({ score }) {
    return (
        <div className="endgame">
            <h2 className="endgame__title">
                Nice Job! <br /> You have found all the couples!
            </h2>
            <p className="endgame__text">
                Your score is: <span>{score}</span> points!
            </p>
            <button
                className="endgame__btn"
                onClick={() => {
                    navigator.vibrate([25, 50, 70]);
                    window.location.reload();
                }}
            >
                New Game
            </button>
        </div>
    );
}
export default EndGame;
