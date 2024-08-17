import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);     //always for class components
    }
    render() {
        return (
            <div className="user_card">
            <h2>Name: {this.props.name}</h2>      
            <h3>Location: </h3>
            <h3>Contact: </h3>
        </div>
        );
    }
}
export default UserClass;