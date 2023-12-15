import React from "react";


class CourseRegistration extends React.Component {
    constructor() {
        super();
        this.state = {
            StuName: "",
            StuEmail: "",
            CourseName: "",
            TrainerName: "",
            isDisplay: false,
            FormData: null,
            sessionData: {
                Mern: {
                    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg",
                    timings: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
                    dates: ["Monday", "Wednesday"],
                },
                Mean: {
                    image: "https://th.bing.com/th/id/R.0304b2d824349ecc36b8e3bdfff79ca2?rik=uyC7w8cqpnYIAg&riu=http%3a%2f%2fwww.goodworklabs.com%2fwp-content%2fuploads%2f2017%2f08%2fMean.jpg&ehk=glaHYPc7uBsDHMHOhY7QCMTHfYDPVKQR0BnnPkoC%2bPY%3d&risl=&pid=ImgRaw&r=0",
                    timings: ["11:00 AM - 1:00 PM", "3:00 PM - 5:00 PM"],
                    dates: ["Tuesday", "Thursday"],
                },
                DataScience: {
                    image: "https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
                    timings: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
                    dates: ["Monday", "Wednesday"],
                },
                FullStack: {
                    image: "https://i.ytimg.com/vi/DFKwZ4Pmrws/maxresdefault.jpg",
                    timings: ["10:30 AM - 12:30 PM", "4:00 PM - 6:00 PM"],
                    dates: ["Tuesday", "Thursday"],
                }
            }
        }
    }
    StuNameChange(e) {
        console.log(e.target.value)
        this.setState({ StuName: e.target.value })
    }

    StuEmailChange(e) {
        this.setState({ StuEmail: e.target.value })
    }

    CourseNameChange(e) {
        this.setState({ CourseName: e.target.value })
    }

    TrainerNameChange(e) {
        this.setState({ TrainerName: e.target.value })
    }

    saveData(e) {
        e.preventDefault();
        const formData = {
            StuName: this.state.StuName,
            StuEmail: this.state.StuEmail,
            CourseName: this.state.CourseName,
            TrainerName: this.state.TrainerName,
        };
        this.setState({ isDisplay: true, formData: formData });

        // Reset form fields
        // this.setState({
        //     StuName: "",
        //     StuEmail: "",
        //     CourseName: "",
        //     TrainerName: "",
        //     isDisplay: false,
        // });
    }

    render() {
        return (
            <div style={{ background: "url(https://media.istockphoto.com/vectors/abstract-form-background-vector-id1216793787?k=6&m=1216793787&s=170667a&w=0&h=fjXGy8ozrgb2zn_DjjCibcC3eDwozZeur3HMXXIbOns=)", backgroundSize: "cover", minHeight: "100vh", }}>
                <div style={{ width: "100%", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}>
                    <h1 style={{ textAlign: "center" }}>Course Registration</h1>
                    <form onSubmit={(e) => this.saveData(e)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="name">Student Name:</label>
                        <input type="text" placeholder="Enter Name" value={this.state.StuName} onChange={(e) => this.StuNameChange(e)} required/>
                        <br />
                        <label htmlFor="Email">Email:</label>
                        <input type="text" placeholder="Enter mail Id" value={this.state.StuEmail} onChange={(e) => this.StuEmailChange(e)} required/>
                        <br />
                        <label htmlFor="course">Choose your Course:</label>
                        <select name="course" id="course" value={this.state.CourseName} onChange={(e) => this.CourseNameChange(e)} required>
                            <option value="" disabled defaultValue>Courses</option>
                            <option value="Mern">Mern Stack Development</option>
                            <option value="Mean">Mean Stack Development</option>
                            <option value="DataScience">Data science Full Course</option>
                            <option value="FullStack">Full stack Development</option>
                        </select>

                        <br />

                        <label htmlFor="tariner">Trainer Name:</label>
                        <select name="course" id="course" value={this.state.TrainerName} onChange={(e) => this.TrainerNameChange(e)} required>
                            <option value="" disabled defaultValue>Trainers</option>
                            <option value="Trainer1">Trainer1</option>
                            <option value="Trainer2">Trainer2</option>
                            <option value="Trainer3">Trainer3</option>
                            <option value="Trainer4">trainer4</option>
                        </select>

                        <br />
                        <button type="submit">Submit</button>
                    </form>
                    {/* {this.state.isDisplay ? (<div style={{ margin: 'auto', width: '300px', height: '300px', border: '2px solid green', backgroundColor: 'darkcyan', marginTop: '30px' }}>
                        <h4>Save Student Data </h4>
                        <h4>Student Name: {this.state.StuName}</h4>
                        <h4>Student Email: {this.state.StuEmail}</h4>
                        <h4>Course Name: {this.state.CourseName}</h4>
                        <h4>Trainer Name: {this.state.TrainerName}</h4>
                    </div>) : null} */}
                    {this.state.isDisplay && this.state.CourseName && (
                        <div style={{ marginTop: "30px", border: "2px solid #201e27", padding: "10px", width: '300px', height: '450px', marginLeft: '605px', backgroundColor: 'darkcyan' }}>
                            <img src={this.state.sessionData[this.state.CourseName].image} alt={`${this.state.CourseName} Session`} style={{ width: "100%", borderRadius: "5px", marginTop: "10px" }} />
                            <h3>Session Timings and Dates:</h3>
                            <ul>
                                {this.state.sessionData[this.state.CourseName].timings.map((timing, index) => (
                                    <li key={index}>{timing}</li>
                                ))}
                            </ul>
                            <p>Session Dates: {this.state.sessionData[this.state.CourseName].dates.join(", ")}</p>

                            <button onClick={() => alert("Join Now!")} style={{backgroundColor:'pink', borderRadius: '5px'}}>Join Now</button>
                        </div>
                    )}
                </div>


            </div>

        )
    }
}

export default CourseRegistration