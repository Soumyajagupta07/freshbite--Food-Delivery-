import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);     //always for class components

        this.state = {
            count: 0,
            count2: 2,
        };
    }
    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user_card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}></button>
            <h2>Name: {this.props.name}</h2>      
            <h3>Location: </h3>
            <h3>Contact: </h3>
        </div>
        );
    }
}
export default UserClass;