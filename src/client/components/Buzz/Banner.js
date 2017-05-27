/**
 * Created by sourabh on 4/5/17.
 */

import React from "react"
import BannerImg1 from "../../assets/images/tothenew.jpg"
import BannerImg2 from "../../assets/images/Road_Trip-cover-photo-26153.jpg"
import {logout} from '../../action/usersaction/user.async.action'
import {connect} from 'react-redux'
import {OverlayTrigger, Popover} from "react-bootstrap"
import Viewprofile from "../../container/Viewprofile"

class Banner extends React.Component {
    logout = (e) => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
    };

    render() {
        // const popoverhover = (
        //     <Popover id="popover-hover" className="pop-over">
        //         <Viewprofile/>
        //     </Popover>
        // );
        return (
            <div className="bannerParentContainer">
                <div>
                    <div className="bannerChildContainer1">
                        <img className="bannerImg1" src={BannerImg1}/>
                    </div>
                    <div className="bannerChildContainer2">
                        <span className="userinfo">{this.props.userData.name}</span>

                        <button type="button" className="btn btn-danger"><a href="#" onClick={this.logout}>Logout</a>
                        </button>
                    </div>
                    <div className="bannerChildContainer3">
                        <img className="bannerImg2" src={BannerImg2}/>
                        <div className="textOnBanner">
                            <p>CREATING BUZZ AROUND YOU</p>
                            <p>NEVER BEEN SO EASY..</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});
const mapStateToProps = (state) => ({
    userData: state.userReducer.userData,
})
export default connect(mapStateToProps, mapDispatchToProps)(Banner)
