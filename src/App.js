import React, { Component } from 'react';
import CatList from './CatList'

import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';

class App extends Component {   
  
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

