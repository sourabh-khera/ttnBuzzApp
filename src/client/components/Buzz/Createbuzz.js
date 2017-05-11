import React from 'react'
import Cameraicon from "../../assets/images/Camera-icon.png"
import {connect} from "react-redux"
import {createPost,fetchPost} from "../../action/index"
class Creatbuzz extends React.Component {

    constructor() {
        super();
        this.state = {
            postBody: "",
            post_value: "",
            image_path:""
        }
    }

    onchange = (event) => {
        let{tempState}=this.state;
        tempState=Object.assign({},this.state,{[event.target.name]:event.target.value})
        this.setState({state:tempState})

    }
    setValue = (event) => {

        this.setState({post_value: event.target.value})
    }
    createPost = (e) => {
        e.preventDefault();
        multipartFormData=new FormData();
        multipartFormData.append(this.state.postBody);
        multipartFormData.append(this.state.post_value);
        multipartFormData.append(this.state.image_path);
        this.props.dispatch(createPost(multipartFormData));
        this.setState({postBody: ""})
    }

    render() {
        return (
            <div>
                <form>

                    <div className="createbuzz">
                        <div className="buzzheader">
                            Create buzz
                        </div>
                        <div className="input">
                            <textarea value={this.state.postBody} placeholder="Share your thought..."
                                      onChange={(event) => this.onchange(event)}></textarea>
                        </div>
                        <div className="buzzfooter">
                            <div className="category">
                                <select onChange={(event) => this.setValue(event)}>
                                    <option>Status</option>
                                    <option value="Activity">Activity</option>
                                    <option value="Lost n Found">Lost n Found</option>
                                </select>
                                <div className="imCamera">

                                    <input type="file" name="image_path"/>
                                </div>
                                <input type="submit" value="submit" onClick={this.createPost}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}


const CreateBuzzContainer = connect(state => state)(Creatbuzz)
export default CreateBuzzContainer