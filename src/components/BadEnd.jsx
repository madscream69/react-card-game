function BadEnd() {
    return (
        <div className="endgame">
            <h2 className="endgame__title">
                You lost! <br /> Time is up! You have to be faster!
            </h2>
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
export default BadEnd;
