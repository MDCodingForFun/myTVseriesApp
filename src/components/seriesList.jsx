import React from "react";
import "../css/seriesList.css";
import imageSrc from "../assets/camera.svg";
import { Link } from "react-router-dom";

function SeriesListItem({ series }) {
  return (
    <div className="listItem col-lg-3 col-md-4">
      {series.show.image === null ? (
        <div className="no_image">
          <img alt="camera" src={imageSrc} />
          <p>No Image Available</p>
        </div>
      ) : (
        <div>
          <img
            className="img-responsive"
            src={series.show.image.medium}
            alt="series"
          />
        </div>
      )}
      <Link
        className="seriesName"
        target="_blank"
        to={`/series/${series.show.id}`}
      >
        {series.show.name}
      </Link>
    </div>
  );
}

export default function SeriesList(props) {
  return (
    <div className="seriesList container">
      <div className="row serieslist-row">
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </div>
    </div>
  );
}
