import React, { Component } from "react";
import "../css/singleSeries.css";
import LoaderComponent from "./loaderComponent";

export default class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    // console.log("SINGLE SERIES", show);

    return (
      <div className="container">
        {show === null && <LoaderComponent />}
        {show !== null && (
          <div>
            <div className="row">
              <div className="col-auto">
                <img alt="show" src={show.image.medium} />
              </div>
              <div className="col-auto description">
                <p>
                  <b>Title:</b> {show.name}
                </p>
                <p>
                  <b>Genre:</b>
                  {show.genres.map(genre => (
                    <span key={genre}> {genre} </span>
                  ))}
                </p>
                <p>
                  <b>Premiered:</b> {show.premiered}
                </p>
                <p>
                  <b>Status:</b> {show.status}
                </p>
                <p>
                  <b>Rating:</b>{" "}
                  {show.rating.average === null && "Not Available"}
                  {show.rating.average}
                </p>
                <p>
                  <b>Episodes:</b> {show._embedded.episodes.length}
                </p>
                <button className="btn btn-primary">
                  <a target="_blank" href={show.officialSite}>
                    Visit Official Site
                  </a>
                </button>
              </div>
            </div>
            <div className="summary">
              {show.summary
                .replace(/<p>/g, "")
                .replace(/<\/p>/g, "")
                .replace(/<b>/g, "")
                .replace(/<\/b>/g, "")
                .replace(/<i>/g, "")
                .replace(/<\/i>/g, "")}
            </div>
          </div>
        )}
      </div>
    );
  }
}
