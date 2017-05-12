import React from 'react'
import Cameraicon from "../../assets/images/Camera-icon.png"
import {connect} from "react-redux"
import {createPost,fetchPost} from "../../action/index"
class Creatbuzz extends React.Component {

    constructor() {
        super();
        this.state = {
            postBody: "",
            post_value: "Activity",
            image_path:"",
            errorMessage: "",
            showError: false,
        }
    }


    onImageChange = (event) => {
        this.setState({[event.target.name]:event.target.files[0], showError:false});
    }

    onPostchange = (event) => {
        this.setState({[event.target.name]:event.target.value, showError:false});
    }

    setValue = (event) => {
        this.setState({post_value: event.target.value, showError:false})
    }
    onCreatePost = (e) => {
        e.preventDefault();
        console.log(this.state)
        if(!this.state.postBody && !this.state.image_path){
            this.setState({showError:true,errorMessage:"post can not be empty"})
            return
        }
        if(!this.state.post_value){
            this.setState({showError: true, errorMessage: 'please select a category '})
            return
        }
        const multipartFormData=new FormData();
        multipartFormData.append("postBody",this.state.postBody);
        multipartFormData.append("post_value",this.state.post_value);
        multipartFormData.append("image_path",this.state.image_path);
        this.props.dispatch(createPost(multipartFormData));
        this.setState({postBody: "",image_path:"",post_value:""})
    }
    render() {
        const { showError, errorMessage } = this.state
        const renderError = showError
            ? (<div>{errorMessage}</div>)
            : null
        return (
            <div>
                <form>

                    <div className="createbuzz">
                        <div className="buzzheader">
                            Create buzz
                        </div>
                        <div className="input">
                            <textarea  name="postBody" value={this.state.postBody} placeholder="Share your thought..."
                                      onChange={this.onPostchange}></textarea>
                        </div>
                        {renderError}
                        <div className="buzzfooter">
                            <div className="category">
                                <select onChange={this.setValue}>
                                    {/*<option selected disabled hidden>Category</option>*/}
                                    <option value="Activity">Activity</option>
                                    <option value="Lost n Found">Lost n Found</option>
                                </select>
                                <div className="imCamera">

                                    <input type="file"  name="image_path" onChange={this.onImageChange}/>
                                </div>
                                <input type="submit" value="submit" onClick={this.onCreatePost}/>
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