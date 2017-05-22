import React from 'react'

export default class Leftcomponent extends React.Component {
    render() {
        return (
            <div>
                <div className="leftPanel">
                    <div className="buzzCom">
                        <ul>
                            <a href="#" id="buzz">
                                <li onClick={this.props.updateOnEdit.bind(this)}>BUZZ</li>
                            </a>

                                <li onClick={this.props.updateOnComplaint.bind(this)}>COMPLAINTS</li>

                        </ul>
                    </div>
                    <div className="leftfooter">
                        <p>&copy;&nbsp;&nbsp;2017 To The New Digital</p>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}