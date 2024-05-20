//inline styling
function Footer() {
    const style={
        backgroundColour: "blue",
        color:"green"
    }
    return (
        <footer>
          
            <nav>
                <p style={style}>&copy;  {new Date().getFullYear()} code for challenge</p>
            </nav>
        </footer>
    );
}
export default Footer