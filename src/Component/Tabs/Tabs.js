import React, { Component } from 'react';
import axios from 'axios';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            howItWorks: [],
            diners: [],
            host: [],
            diners_image: [],
			host_image: [],
            dinerNote: [],
            hostNote: []
        }
    }

    componentDidMount() {
        axios.get("http://togglehead.net/developer/authenticook_user/index.php/diners_frontend/how_it_work_diners")
        .then((res) => {
            this.setState({
                howItWorks: res.data.howitworks[0],
                diners: res.data.diners[0],
                host: res.data.host[0],
                diners_image: res.data.diners_image[0],
				host_image: res.data.host_image[0],
                dinerNote: res.data.diners_note,
                hostNote: res.data.host_note
            })
        })

    }

    render() {
        return (
            <section className="container">
                <div className="row col-md-12">
                    <div className="nav nav-tabs tab-main text-center">
                        <a className="tab-sec nav-link active" data-toggle="tab" href="#host">
                            <img src={"http://togglehead.net/developer/authenticook-admin/fassets/images/how-it-works/icons/"+this.state.host_image.icon} />
                            <span>Host</span>
                        </a>
                        <a className="tab-sec nav-link" data-toggle="tab" href="#guest">
                            <img src={"http://togglehead.net/developer/authenticook-admin/fassets/images/how-it-works/icons/"+this.state.diners_image.icon} />
                            <span>Guest</span>
                        </a>
                    </div>
                    <div className="container tab-content">
                            <div id="host" className="tab-pane active">
                                <h2>{this.state.host.heading}</h2>
                                <div class="row">
                                    <div className="col-md-4">
                                        <div className="card text-center">
                                            <h3>{this.state.host.text1}</h3>
                                            <p>{this.state.host.description1}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-center">
                                            <h3>{this.state.host.text2}</h3>
                                            <p>{this.state.host.description2}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="card text-center">
                                        <h3>{this.state.host.text3}</h3>
                                        <p>{this.state.host.description3}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div id="guest" className="tab-pane fade">
                            <div id="host" className="tab-pane active">
                                <h2>{this.state.diners.heading}</h2>
                                <div class="row">
                                    <div className="col-md-4">
                                        <div className="card text-center">
                                            <h3>{this.state.diners.text1}</h3>
                                            <p>{this.state.diners.description1}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-center">
                                            <h3>{this.state.diners.text2}</h3>
                                            <p>{this.state.diners.description2}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="card text-center">
                                        <h3>{this.state.diners.text3}</h3>
                                        <p>{this.state.diners.description3}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>  
            </section>
        )
    }
}

export default Tabs;