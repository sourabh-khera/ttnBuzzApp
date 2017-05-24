/**
 * Created by sourabh on 8/5/17.
 */
import React from "react"
import {createComplaint} from "../../action/index"
import {connect} from "react-redux"
import AlertContainer from "react-alert"
import {Accordion, Panel} from "react-bootstrap";

class Createcomplaint extends React.Component {

    constructor() {
        super();
        this.state = {
            Department: "Accounts&Finance",
            complaintType: "Hardware",
            complaintBody: "",
        }
    }

    alertOptions = {
        position: 'top right',
        theme: 'dark',
        time: 3000,
        transition: 'scale',
    };
    showSuccessAlert = () => {
        this.msg.show('your complaint has been successfully logged',
            {
                type: 'success'
            });
    };

    showErrorAlert = () => {
        this.msg.show('Plz mention your concern ',
            {
                type: 'error'
            });
    };
    onchange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };
    onSubmit = (complaintData) => {

        if (!(this.state.complaintBody)) {
            this.showErrorAlert();
            return;
        }
        this.props.dispatch(createComplaint(complaintData));
        this.showSuccessAlert();
        this.setState({complaintBody: ""})
    };

    render() {
        const complaintInfo = this.props.complaintData;
        let assignedto = "";
        complaintInfo.map((items) => {
            console.log("!", items)
            if (items.complaintType === "Hardware") {
                items.assignedto = "yatin";
            }
            else if (items.complaintType === "Software") {
                items.assignedto = "Manoj";
            }
            else if (items.complaintType === "Infrastructure") {
                items.assignedto = "Gaurav";
            }
        });
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
                    <div className="concern">
                        <h5>Your Concern</h5>
                        <textarea value={this.state.complaintBody} name="complaintBody" placeholder="enter your concern"
                                  onChange={this.onchange}></textarea>
                    </div>
                    <div className="complaintfooter">
                        <div className="submitcomplaint">
                            <Accordion>
                                <Panel className="panel" header="View Complaints" eventKey="1">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Department</th>
                                            <th>Issue_Id</th>
                                            <th>AssignedTo</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody >
                                        {
                                            complaintInfo.map((items, i) => (
                                                <tr key={i}>
                                                    <td>Admin</td>
                                                    <td>{items._id}</td>
                                                    <td>{items.assignedto}</td>
                                                    <td>{items.status}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </Panel>
                            </Accordion>
                            <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                            <button onClick={() => this.onSubmit(this.state)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    complaintData: state.complaintReducer.complaintData,
});
export default connect(mapStateToProps)(Createcomplaint);
