import React, { Component } from "react";
import SearchComponent from "./searchComponent";
import LoaderComponent from "./loaderComponent";
import SeriesList from "./seriesList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      seriesName: "",
      isFetching: false
    };

    this.handleSeriesInputChange = this.handleSeriesInputChange.bind(this);
  }

  handleSeriesInputChange(e) {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json =>
        this.setState({
          series: json,
          isFetching: false
        })
      );
  }
  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <SearchComponent
          seriesName={seriesName}
          onSearch={this.handleSeriesInputChange}
        />

        {!isFetching &&
          series.length === 0 &&
          seriesName.trim() === "" && (
            <p> Please enter series name into the input </p>
          )}
        {!isFetching &&
          series.length === 0 &&
          seriesName.trim() !== "" && (
            <p>No TV Series have been found with this name.</p>
          )}
        {isFetching && <LoaderComponent />}
        {!isFetching && <SeriesList list={series} />}
      </div>
    );
  }
}
