function Game() {
    return(
        <>
         <label for="cars">Choose a colour:</label>
            <select name="cars" id="cars">
                <option value="volvo">red</option>
                <option value="saab">green</option>
                <option value="opel">orange</option>
                <option value="audi">blue</option>
            </select>
        </>
    );
}
export default Game