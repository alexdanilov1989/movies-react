import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleType = (e) => {
        this.setState(
            () => ({
                type: e.target.dataset.type,
            }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            type="search"
                            className="validate"
                            placeholder="Search"
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className="btn search-btn"
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="all"
                            onChange={this.handleType}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleType}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="series"
                            onChange={this.handleType}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
