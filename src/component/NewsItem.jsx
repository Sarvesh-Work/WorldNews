import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    imageurl: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string,
  };

  render() {
    let { title, description, url, imageurl, author, date, source } =
      this.props;

    return (
      <div>
        <div
          className="card my-2"
          style={{
            width: "18rem",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <div >
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{    marginLeft: "-75px",
  
    marginTop: "2px"}}>
            {source}
          </span>
          <img
            src={imageurl}
            className="card-img-top"
            alt={imageurl}
            style={{
              height: "150px",
              boxshadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {date}
              </small>
            </p>
            <a
              target="_blank"
              href={url}
              className="btn btn-dark"
              rel="noreferrer"
              style={{
                backgroundColor: "#7CB9E8",
                borderRadius: "8px",
                border: "none",
                color: "black",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              Red more
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
React;
