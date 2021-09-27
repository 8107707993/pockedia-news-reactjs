import React, { Component } from "react";
export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } =
      this.props;
    return (
      <>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={imageUrl}
              style={{ height: "170px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                Published Date: {new Date(date).toGMTString()}
              </p>
              <p className="card-text">
                By: {!author ? "Unknown" : author}{" "}
                <span class="badge bg-success">{source}</span>
              </p>
              <a
                href={newsUrl}
                target="blank"
                className="btn btn-sm btn-secondary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
