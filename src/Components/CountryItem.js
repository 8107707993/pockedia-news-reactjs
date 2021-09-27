import React, { Component } from 'react'

export class CountryItem extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-secondary" style={{color:"#ffffff8c"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Country
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Choose Your Country</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-dark">
                            <li><a className="list-group-item" href="/">United Arab Emirates (the)</a></li>
                            <li><a className="list-group-item" href="/">Argentina</a></li>
                            <li><a className="list-group-item" href="/">Austria</a></li>
                            <li><a className="list-group-item" href="/">Australia	</a></li>
                            <li><a className="list-group-item" href="/">Belgium</a></li>
                            <li><a className="list-group-item" href="/">Bulgaria</a></li>
                            <li><a className="list-group-item" href="/">Brazil</a></li>
                            <li><a className="list-group-item" href="/">Canada</a></li>
                            <li><a className="list-group-item" href="/">Switzerland</a></li>
                            <li><a className="list-group-item" href="/">China</a></li>
                            <li><a className="list-group-item" href="/">Colombia</a></li>
                            <li><a className="list-group-item" href="/">Cuba</a></li>
                            <li><a className="list-group-item" href="/">Czechia</a></li>
                            <li><a className="list-group-item" href="/">Germany</a></li>
                            <li><a className="list-group-item" href="/">Egypt</a></li>
                            <li><a className="list-group-item" href="/">France</a></li>
                            <li><a className="list-group-item" href="/">United Kingdom of Great Britain an</a></li>
                            <li><a className="list-group-item" href="/">Greece</a></li>
                            <li><a className="list-group-item" href="/">Hong Kong	</a></li>
                            <li><a className="list-group-item" href="/">Hungary</a></li>
                            <li><a className="list-group-item" href="/">Indonesia</a></li>
                            <li><a className="list-group-item" href="/">Ireland</a></li>
                            <li><a className="list-group-item" href="/">Israel	</a></li>
                            <li><a className="list-group-item" href="/">India</a></li>
                            <li><a className="list-group-item" href="/">Italy</a></li>
                            <li><a className="list-group-item" href="/">Japan</a></li>
                            <li><a className="list-group-item" href="/">Korea (the Republic of)	</a></li>
                            <li><a className="list-group-item" href="/">Lithuania</a></li>
                            <li><a className="list-group-item" href="/">Latvia</a></li>
                            <li><a className="list-group-item" href="/">Morocco</a></li>
                            <li><a className="list-group-item" href="/">Mexico	</a></li>
                            <li><a className="list-group-item" href="/">Malaysia</a></li>
                            <li><a className="list-group-item" href="/">Nigeria</a></li>
                            <li><a className="list-group-item" href="/">Netherlands </a></li>
                            <li><a className="list-group-item" href="/">Norway</a></li>
                            <li><a className="list-group-item" href="/">New Zealand	</a></li>
                            <li><a className="list-group-item" href="/">Philippines </a></li>
                            <li><a className="list-group-item" href="/">Poland</a></li>
                            <li><a className="list-group-item" href="/">Portugal</a></li>
                            <li><a className="list-group-item" href="/">Portugal</a></li>
                            <li><a className="list-group-item" href="/">Serbia</a></li>
                            <li><a className="list-group-item" href="/">Russian Federation (the)	</a></li>
                            <li><a className="list-group-item" href="/">Saudi Arabia	</a></li>
                            <li><a className="list-group-item" href="/">Sweden</a></li>
                            <li><a className="list-group-item" href="/">Singapore</a></li>
                            <li><a className="list-group-item" href="/">Slovenia</a></li>
                            <li><a className="list-group-item" href="/">Slovakia</a></li>
                            <li><a className="list-group-item" href="/">Thailand</a></li>
                            <li><a className="list-group-item" href="/">Turkey</a></li>
                            <li><a className="list-group-item" href="/">Taiwan (Province of China)	</a></li>
                            <li><a className="list-group-item" href="/">Ukraine</a></li>
                            <li><a className="list-group-item" href="/">United States of America (the)</a></li>
                            <li><a className="list-group-item" href="/">Venezuela (Bolivarian Republic of)</a></li>
                            <li><a className="list-group-item" href="/">South Africa	</a></li>




                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountryItem



	
