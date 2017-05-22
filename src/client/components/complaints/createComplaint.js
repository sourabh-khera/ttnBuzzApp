/**
 * Created by sourabh on 8/5/17.
 */
import React from "react"
import {createComplaint} from "../../action/index"
import {connect} from "react-redux"
class Createcomplaint extends React.Component {
    constructor() {
        super();
        this.state = {

                Department: "",
                complaintType: "",
                userName: "",
                emailID: "",
                complaintBody: "",
                edit:false,
        }
    }

    onchange=(event)=>{
     this.setState({[event.target.name]:event.target.value});
    };
    onSubmit=(complaintData,edit)=>{
        this.props.dispatch(createComplaint(complaintData));
    };

    render() {
        return (
            <div>
                <div className="complaintContainer">
                    <div className="complaintheader">
                            COMPLAINT BOX
                        </div>
                        <div className="department">
                            <h5>Select Department</h5>
                            <select name="Department" onChange={this.onchange}>
                                <option value="Accounts&Finance">Accounts&Finance</option>
                                <option value="HR">HR</option>
                                <option value="Research&Development">Research&Development</option>
                            </select>
                        </div>
                        <div className="title">
                            <h5>Issue Title</h5>
                            <select name="complaintType" onChange={this.onchange}>
                                <option value="Hardware">Hardware</option>
                                <option value="Software">Software</option>
                                <option value="Infrastructure">Infrastructure</option>
                            </select>
                        </div>
                        <div className="name">
                            <h5>Your Name</h5>
                            <input type="text" name="userName" placeholder="enter your name" onChange={this.onchange}/>
                        </div>
                        <div className="emailid">
                            <h5>Your Email-Id</h5>
                            <input type="text" name="emailID" placeholder="enter your emailID" onChange={this.onchange}/>
                        </div>

                        <div className="concern">
                            <h5>Your Concern</h5>
                            <textarea name="complaintBody" placeholder="enter your concern" onChange={this.onchange}></textarea>
                        </div>
                        <div className="complaintfooter">
                            <div className="submitcomplaint">
                                <button onClick={()=>this.onSubmit(this.state)}>Submit</button>
                            </div>

                        </div>
                </div>

            </div>
        )
    }

}

const ComplaintContainer=connect(state=>state)(Createcomplaint);
export default ComplaintContainer;
