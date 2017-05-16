import React from 'react'
import BannerImg1 from "../../assets/images/tothenew.jpg"
import BannerImg2 from "../../assets/images/Road_Trip-cover-photo-26153.jpg"
import LeftComponent from "./Leftcomponent"
import CreateBuzz from "./Createbuzz"
import Post from "./Post"
import Banner from "./Banner"
import Createcomplaint from "../complaints/createComplaint"
import {connect} from "react-redux"
import {fetchPostDetails,fetchUserDetails} from "../../action/index"


class Buzzcomponent extends React.Component {
    constructor() {
        super();
        this.state = {

            edit: true,
            value: ""
        }
    }

    componentDidMount() {

           this.props.dispatch(fetchPostDetails())
    }

    updateOnComplaint = () => {
        this.setState({edit: false}, () => {
            console.log("compalint=====", this.state.edit)
        })
    }
    updateOnBuzz = () => {
        this.setState({edit: true}, () => {
            console.log("edit=====", this.state.edit)
        })
    }


    render() {
        return (
            <div className="Component">
                <Banner/>
                <div className="containers">
                    <LeftComponent updateOnComplaint={this.updateOnComplaint} updateOnEdit={this.updateOnBuzz}/>

                    <div className="rightpanel">
                        {
                            (this.state.edit) ?
                                <div>
                                    <CreateBuzz changeValue={this.updateValue}/>
                                    <Post/>
                                </div>
                                :

                                <Createcomplaint/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    postData: state.postData,
})

export default connect(mapStateToProps)(Buzzcomponent)