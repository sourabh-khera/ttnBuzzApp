import React from 'react'
import BannerImg1 from "../../assets/images/tothenew.jpg"
import BannerImg2 from "../../assets/images/Road_Trip-cover-photo-26153.jpg"
import LeftComponent from "./leftComponent"
import CreateBuzz from "./createbuzz"
import Post from "./post"
import Banner from "./banner"
import Createcomplaint from "../complaints/createComplaint"

export default class Buzzcomponent extends React.Component {
    constructor(){
        super();
        this.state={

            edit:true
        }
    }
    updateOnComplaint=()=>{
        this.setState({edit:false},()=>{
            console.log("compalint=====",this.state.edit)
        })
    }
    updateOnEdit=()=> {
        this.setState({edit: true}, () => {
            console.log("edit=====", this.state.edit)
        })
    }

    render(){

        return (
            <div className="Component">
                  <Banner/>
                <div className="containers">
                    <LeftComponent updateOnComplaint={this.updateOnComplaint} updateOnEdit={this.updateOnEdit}/>

                    <div className="rightpanel">
                        {
                            (this.state.edit)?
                                 <div>
                                     <CreateBuzz/>
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