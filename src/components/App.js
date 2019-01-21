import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet,css } from 'aphrodite';
import TopBar from './TopBar.js';

const styles = StyleSheet.create({
    appStyles: {
        "font-family" : "Helvetica Neue, Helvetica, Arial, sans-serif",
    },
    content: {
	"padding-top" : "3em"
    }
});


class App extends Component {
  render() {
    return (
	<div className={css(styles.appStyles)}>
	  <TopBar/>
	  <div className={css(styles.content)}/>
	    {this.props.currentPage}
	  <div/>
	</div>
    );
  }
}

const mapStateToProps = (state) => ({ currentPage: state.pageReducer.currentPage });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(App);
