import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { searchGiphs } from '../actions/giphActions';

class Giphs extends Component {
  constructor() {
    super();

    this.state = { search: '' };
    this._onInputChange = this._onInputChange.bind(this);
  }

  _onInputChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  viewImageDetail(id) {
    console.log('id:', id)
    browserHistory.push(`/detail/${id}`)
  }

  render() {
    let { search } = this.state;
    let { giphs, searchGiphs } = this.props;
    let images = '';
    if (giphs) {
      // console.log('giphs.data[0].images.fixed_width:', giphs.data[0].images.fixed_width)
      images = giphs.data.map(giph => {
        return (
          <button onClick={() => this.viewImageDetail(giph.id)} className="btn btn-default" key={giph.id}>
            <img src={giph.images.fixed_width.url}/>
          </button>
        )
      })

    }
    // console.log('giphs:', giphs)
    return (
      <div>
        <h1>Search Giphs</h1>
        <input type="text" placeholder="Search Giphs" value={search} onChange={this._onInputChange} />
        <button className="btn btn-default" onClick={() => searchGiphs(search)}>Search</button>
        <div>
          {images}
        </div>
      </div>
    )
  }
}



export default connect(
  state => ({
    giphs: state.giphs
  }),
  dispatch => ({
    searchGiphs(search) {
      dispatch(searchGiphs(search))
    }
  }))(Giphs);
