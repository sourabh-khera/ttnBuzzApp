import React from 'react'
import Cameraicon from "../../assets/images/Camera-icon.png"
import {connect} from "react-redux"
import {createPost,fetchPost} from "../../action/index"
 class Creatbuzz extends React.Component {

    constructor(){
        super();
        this.state={
            postBody:"",
        }
    }

    onchange=(event)=>{
        this.setState({postBody:event.target.value})
    }

    createPost=(postBody)=>{
        this.props.dispatch(createPost(postBody))
        this.setState({postBody:""})

    }
    render() {
        return (
            <div>
                <div className="createbuzz">
                    <div className="buzzheader">
                        Create buzz
                    </div>
                    <div className="input">
                        <textarea value={this.state.postBody} placeholder="Share your thought..." onChange={(event)=>this.onchange(event)}></textarea>
                    </div>
                    <div className="buzzfooter">
                        <div className="category">
                            <select>
                                <option>Activity</option>
                                <option>Lost n Found</option>
                            </select>
                            <div className="imCamera">

                                <input type="file" />
                            </div>
                            <input type="submit" value="submit" onClick={()=>this.createPost(this.state.postBody)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const CreateBuzzContainer=connect(state=>state)(Creatbuzz)
export default CreateBuzzContainer