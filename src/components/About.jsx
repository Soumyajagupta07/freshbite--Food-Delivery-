import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Didmount");
    }

    render(){
        console.log("Parent render");
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>This is React learning</h2>
                <UserClass name={"Soumya Gupta"} location={"Kolkata"}/>
            </div>
        )
    }
}

/*
- Parent Constructor
- Parent Render
  - Soumyaja Constructor
  - Soumyaja Render
  - Soumyaja ComponentDidMount

  - Jinia Constructor
  - Jinia Render
  - Jinia ComponentDidMount
*/

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <p>It is about page</p>
//             <User/>
//             <UserClass name={"Soumyaja Gupta"} location={"Kolkata"}/>
//             <UserClass name={"Jinia Gupta"} location={"India"}/>
//         </div>
//     )
// }
export default About;