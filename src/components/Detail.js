import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGiphById } from '../actions/giphActions';

class Detail extends Component {

  componentWillMount() {
    this.props.getGiphById(this.props.params.id)
  }

  render() {
    // console.log('this.props:', this.props);
    let { embed_url, rating, source, slug, images } = this.props.giph.data;
    return (
      <div>
        <h3>Detail:</h3>
        <img src={images.downsized.url} alt=""/>
        <p>Rating: {rating}</p>
        <p>Source: <a href={source}>{source}</a> </p>
        <p>Slug: {slug}</p>
      </div>
    )
  }
}

export default connect(
  state => ({
    giph: state.detail
  }),
  dispatch => ({
    getGiphById(id) {
      dispatch(getGiphById(id))
    }
  }))(Detail);
