let bool=true;
function Button() {
    const hidesome={
        display:"block",
        color:"green"
       }
       //hidesome.display="block";
    const show=(e)=>{
        if (bool) {
           
            hidesome.display="none";

           // e.target.style.display='block';
            bool= false;
            console.log(bool);
            console.log(hidesome.display);
       
        }else{
            hidesome.display="block";

           // e.target.style.display='none';
            bool=true;
            console.log(bool);
            console.log(hidesome.display);
        }
    }
     
    return(<>
            <p style={hidesome}>toggle on button to hide/show me!</p>
            <button onClick={(e)=>show(e)}>click me!</button>
        </>
    );
}
export default Button