import React from "react";

/**  React.Component  即使状态没有变化， 
 * 只要调用了setState就会触发render 
 * */

class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    add=()=>{
        const { count } = this.state;
        this.setState({
            count: count >=3 ? 3: count+1
        })
    }

    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate");
    // }


    render(){
        console.log("render");
        const { count } = this.state;
        return(
            <div onClick={this.add}>{count}</div>
        )
    }
}

export default App;