import navstyle from './Nav.module.css'
function Heading(props) {
    const fun=(msg)=>{
        console.log(msg);
    };
    return (
        <header>
          
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">code</a></li>
                    <li><a href="">profile</a></li>
                    <button className={props.isbool?navstyle.demo:navstyle.demo2} onClick={()=>fun("click")}><a href="">login</a></button>
                </ul>
            </nav>
        </header>
    );
}
export default Heading