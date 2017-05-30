/**
 * Created by sourabh on 30/5/17.
 */
import React from "react"
import CreateBuzz from "../Buzz/Createbuzz"
import Post from "../Buzz/Posts"
import {connect} from "react-redux"
import ScrollUpButton from "react-scroll-up-button"
class Createpost extends React.Component {

    render() {
        return (
            <div>
                <ScrollUpButton />
                <CreateBuzz/>
                {
                    this.props.postData.map((post, i) => (
                        <Post posts={post} key={i}/>
                    ))
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    postData: state.postReducer.postData,
});
export default connect(mapStateToProps)(Createpost)


