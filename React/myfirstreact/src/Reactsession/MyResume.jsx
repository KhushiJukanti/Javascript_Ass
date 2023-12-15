import React from "react";

class MyResume extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Khushi Jukanti",
            email:"khushi@gmail.com",
            phone: 999999999,
            age: 20
        }
    }
    changeName(){
        //  this.state.name = "sameer updated"
        this.setState({name:"Ishu"})
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h1>My Resume</h1>
                <h4> About me: Hii iam Khushi iam learning MERN</h4>
                <h4>Name:{this.state.name}</h4>
                <h4>Email:{this.state.email}</h4>
                <h4>PhoneNbr:{this.state.phone}</h4>
                <h4>Age:{this.state.age}</h4>
                <button onClick={()=>this.changeName()}>Change Name</button>
            </div>
        )
    }
}

export default MyResume