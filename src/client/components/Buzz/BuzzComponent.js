import React from 'react'
import LeftComponent from "./Leftcomponent"
import CreateBuzz from "./Createbuzz"
import Post from "./Posts"
import Banner from "./Banner"
import Createcomplaint from "../complaints/createComplaint"
import {connect} from "react-redux"
import {
    fetchPostDetails,
    fetchUserDetails,
    fetchLikesAndDiislikesDetails,
    fetchCommentsDetails
} from "../../action/index"


class Buzzcomponent extends React.Component {
    constructor() {
        super();
        console.log('asddasddadasdasdadas');
        this.state = {

            edit: true,
            value: "",
            skip: 0,
            limit: 10,
        }
    }

    componentDidMount() {
        // document.addEventListener('scroll', (event) => {
        //     if (document.body.scrollHeight - 30 < document.body.scrollTop + window.innerHeight) {
        //         this.setState({skip: this.state.skip + 10}, () => {
        //             this.props.dispatch(fetchPostDetails(this.state.skip, this.state.limit));
        //         })
        //     }
        // });
        this.props.dispatch(fetchPostDetails(this.state.skip, this.state.limit));
        this.props.dispatch(fetchLikesAndDiislikesDetails());
        this.props.dispatch(fetchCommentsDetails())
    }

    updateOnComplaint = () => {
        this.setState({edit: false})
    };
    updateOnBuzz = () => {
        this.setState({edit: true})
    };


    render() {
        console.log("state",this.state);
        return (
            <div className="Component">
                <Banner/>
                <div className="containers">
                    <LeftComponent updateOnComplaint={this.updateOnComplaint} updateOnEdit={this.updateOnBuzz}/>

                    <div className="rightpanel">
                        {
                            (this.state.edit) ?
                                <div>
                                    <CreateBuzz/>
                                    {
                                        this.props.postData.map((post, i) => (
                                            <Post posts={post} key={i}/>
                                        ))
                                    }
                                </div>
                                : <Createcomplaint/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    postData: state.postReducer.postData,
});

export default connect(mapStateToProps)(Buzzcomponent)