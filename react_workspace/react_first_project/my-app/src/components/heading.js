
import './../styles/heading.css'

function Heading() {
    /*
    let style = {
        headingStyle : {
            color: "#00ff00",
            backgroundColor: "#5500ff"
        }
        ,
        
        parastyle :{
            fontSize: "2rem"
        }
        
}*/

    return (
        <>
            <h1 className = "main-heading">Welcome to React</h1>
            <p className = "para-styling"> React is very interesting</p>
            <button>Click me!</button>

            <div>
                <h2> hope you are understanding react</h2>
            </div>
        </>
    )
    
}

export default Heading;