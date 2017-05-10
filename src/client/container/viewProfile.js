import React from "react"
import profileImage from "../assets/images/tothenew.jpg"
import profileCover from "../assets/images/tothenew-Cover.jpg"
export default class Viewprofile extends React.Component{

    render(){

        return(
            <div className="container">

                <div className="profileCover">
                    <img src={profileCover}/>

                </div>
                <div className="profileImage">
                  <img src={profileImage}/>
                </div>

            </div>
        )
    }

}