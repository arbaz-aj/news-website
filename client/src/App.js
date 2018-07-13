import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getSources } from "./actions/sourceActions";
import {connect} from "react-redux";
import SourcesDropdown from "./components/SourcesDropdown";

var p = 'News';
class App extends React.Component {
  componentDidMount(){
    this.props.getSources();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{p} App</h1>
        </header>
        <SourcesDropdown sources={this.props.sources} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sources: state.sources,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      getSources: (sources) => {
          dispatch(getSources(sources));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
