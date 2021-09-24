import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-secondary text-light my-3">
                 <br/><br/> 
                 <div className="row my-3">
                     <div className="col-md-2">
                         <table>
                            <thead>
                                <tr>
                                    <th>Section</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Home</td>
                                </tr>
                                <tr>
                                <td>Features</td>
                                </tr>
                                <tr>
                                <td>Pricing</td>
                                </tr>
                                <tr>
                                <td>FAQs</td>
                                </tr>
                                <tr>
                                <td>About</td>
                                </tr>
                            </tbody>
                         </table>
                     </div>
                     <div className="col-md-2"><table>
                            <thead>
                                <tr>
                                    <th>Section</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Home</td>
                                </tr>
                                <tr>
                                <td>Features</td>
                                </tr>
                                <tr>
                                <td>Pricing</td>
                                </tr>
                                <tr>
                                <td>FAQs</td>
                                </tr>
                                <tr>
                                <td>About</td>
                                </tr>
                            </tbody>
                         </table></div>
                     <div className="col-md-2"><table>
                            <thead>
                                <tr>
                                    <th>Section</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Home</td>
                                </tr>
                                <tr>
                                <td>Features</td>
                                </tr>
                                <tr>
                                <td>Pricing</td>
                                </tr>
                                <tr>
                                <td>FAQs</td>
                                </tr>
                                <tr>
                                <td>About</td>
                                </tr>
                            </tbody>
                         </table></div>
                    <div className="col-md-6">Subscribe to our newsletter
                                                Monthly digest of whats new and exciting from us.
                        <br/>
                        <br/><br/><br/> 
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Email" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                 </div>
                 <hr className="hr"/>
                 <div className="container gx-5">© 2021 Company, Inc. All rights reserved.</div>
                 <br/><br/><br/> <br/><br/>
            </div>
        )
    }
    
}

export default Footer
