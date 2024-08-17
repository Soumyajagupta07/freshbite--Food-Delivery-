import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <p>It is about page</p>
            <User/>
            <UserClass name={"Soumya Gupta"} location={"Kolkata"}/>
        </div>
    )
}
export default About;