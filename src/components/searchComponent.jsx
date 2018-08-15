import React, { Component } from "react";
import "../css/searchComponent.css";

export default class SearchComponent extends Component {
  render() {
    const { seriesName, onSearch } = this.props;

    return (
      <div className="searchComponent">
        <input
          autoFocus="autofocus"
          type="text"
          placeholder="Search"
          onChange={onSearch}
          value={seriesName}
        />
      </div>
    );
  }
}
