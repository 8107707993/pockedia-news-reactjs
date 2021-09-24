import React, { Component } from 'react'
export class Newsitem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <><div>
                <div className="card" style={{width:"18rem"}}>
                    <img src={imageUrl} style={{height:"170px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-secondary">Read More</a>
                    </div>
                </div>  
                </div></>
        )
    }
}

export default Newsitem
