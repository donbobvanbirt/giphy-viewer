import React, { Component } from 'react';
import Giphs from './Giphs';

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Giphy Search</h1>
        <Giphs />
      </div>
    )
  }
}
