import React from 'react'
import Cameraicon from "../../assets/images/Camera-icon.png"
import {connect} from "react-redux"
import {createPost, fetchPost} from "../../action/index"
import AlertContainer from "react-alert"
class Creatbuzz extends React.Component {

    constructor() {
        super();
        this.state = {
            postBody: "",
            post_value: "Activity",
            image_path: "",
        }
    }

    alertOptions = {
        position: 'top right',
        theme: 'dark',
        time: 3000,
        transition: 'scale',
    };

    showErrorAlert = () => {
        this.msg.show('You can not create an empty post ',
            {
                type: 'error'
            });
    };
    showExtensionAlert = () => {
        this.msg.show('Plz select image with the following extension : jpg,png,gif', {
            type: 'error'
        })
    };

    onImageChange = (event) => {
        this.setState({[event.target.name]: event.target.files[0]});
    };
    onPostchange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };
    setValue = (event) => {
        this.setState({post_value: event.target.value})
    };
    onCreatePost = (e) => {
        e.preventDefault();
        if (!this.state.postBody.trim() && !this.state.image_path) {
            this.showErrorAlert();
            return
        }
        if (this.state.image_path) {
            const imageExtension = this.state.image_path.name.split('.')[1];
            if ((imageExtension == 'jpg') || (imageExtension == 'gif') || (imageExtension == 'png')) {
                //do nothing
            } else {
                this.showExtensionAlert();
                return
            }
        }
        const multipartFormData = new FormData();
        multipartFormData.append("postBody", this.state.postBody.trim());
        multipartFormData.append("post_value", this.state.post_value);
        multipartFormData.append("image_path", this.state.image_path);
        this.props.dispatch(createPost(multipartFormData));
        this.setState({postBody: "", image_path: ""})
    };

    render() {
        return (
            <div>
                <form>
                    <div className="createbuzz">
                        <div className="buzzheader">
                            Create buzz
                        </div>
                        <div className="input">
                            <textarea
                                name="postBody"
                                value={this.state.postBody}
                                placeholder="Share your thought..."
                                onChange={this.onPostchange}
                            />
                        </div>
                        <div className="buzzfooter">
                            <div className="category">
                                <select onChange={this.setValue}>
                                    <option value="Activity">Activity</option>
                                    <option value="Lost n Found">Lost n Found</option>
                                </select>
                                <div className="imCamera">
                                    <input type="file" name="image_path" onChange={this.onImageChange}/>
                                </div>
                                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                                <button type="button" className="btn btn-danger" onClick={this.onCreatePost}>Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const CreateBuzzContainer = connect(state => state)(Creatbuzz);
export default CreateBuzzContainer