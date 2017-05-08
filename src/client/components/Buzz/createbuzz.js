import React from 'react'
import Cameraicon from "../../assets/images/Camera-icon.png"


export default class Creatbuzz extends React.Component {
    render() {
        return (
            <div>
                <div className="createbuzz">
                    <div className="buzzheader">
                        Create buzz
                    </div>
                    <div className="input">
                        <textarea placeholder="Share your thought..."></textarea>
                    </div>
                    <div className="buzzfooter">
                        <div className="category">
                            <select>
                                <option>Activity</option>
                                <option>Lost n Found</option>
                            </select>
                            <div className="imCamera">

                                <input type="file" />
                            </div>
                            <input type="submit" value="submit" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}