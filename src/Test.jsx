import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a:1,
        };
        
        console.log("constructor was called");
    }

    render(){
        console.log("Render was called");
        return <div>
            <div>{this.state.a}</div>
            <button onClick={()=>{
                this.setState({a:this.state.a+1})
            }}>Change state</button>
        </div> ;
    }

    componentDidMount(){
        console.log("ComponentDidMount was called only once after render.");
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate was called after every re-render but not after first render.");
    }
}

export default Test;