import React from 'react'
import {connect} from "react-redux"
import {createPost, fetchPost} from "../../action/index"
import AlertContainer from "react-alert"
const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/dcs4tfpha/upload';
const CLOUDINARY_UPLOAD_PRESET="rrawwml0";
const axios=require("axios");
class Creatbuzz extends React.Component {
    constructor() {
        super();
        this.state = {
            postBody: "",
            post_value: "Activity",
            file: "",
            image_preview: "",
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
        let file=event.target.files[0];

        const formData = new FormData();
        formData.append('file',file);
        formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);
        axios({
            url:CLOUDINARY_URL,
            method:'POST',
            data:formData,

        }).then((res)=>{
            this.setState({file:res.data.secure_url});
            console.log("state-------",this.state.file);
        }).catch((error)=>{
            console.log(error);
        });

    };
    onPostchange = (event) => {
        this.setState({[event.target.name]: event.target.value})

    };
    setValue = (event) => {
        this.setState({post_value: event.target.value})
    };
    onCreatePost = (e) => {
        e.preventDefault();
        if (!this.state.postBody.trim() && !this.state.file) {
            this.showErrorAlert();
            return
        }
        if (this.state.file) {
            console.log("split--------",this.state.file);
            const imageExtension = this.state.file.name.split('.')[1];
            if ((imageExtension == 'jpg') || (imageExtension == 'gif') || (imageExtension == 'png')) {
                //do nothing
            } else {
                this.showExtensionAlert();
                return
            }
        }
       // const multipartFormData = new FormData();
       // multipartFormData.append("postBody", this.state.postBody.trim());
        //multipartFormData.append("post_value", this.state.post_value);
      //  multipartFormData.append("image_path", this.state.image_path);

        this.props.dispatch(createPost(this.state));
        this.setState({postBody: "", file: ""})
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
                                    <input type="file" name="file" onChange={this.onImageChange}/>
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



// onClick={this.setState({file:null})