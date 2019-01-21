import React, { Component } from 'react';
import MainPage  from './MainPage';
import { StyleSheet,css } from 'aphrodite';
import { connect } from 'react-redux';
import { setPage } from '../actions/setPage';

const styles = StyleSheet.create({
    links: {
        "display" : "inline-block",
	"padding" : ".4em"
    },
});

class OtherPage extends Component {
    render () {
        return (
	    <div>
              <div>
		<div className={css(styles.links)}><a href="#" onClick={this.props.goToOtherPage}>Main Page</a></div>
		<div className={css(styles.links)}>Other Page</div>
              </div>
	      <div>
		This is the Other Page.
	      </div>
	    </div>
        );
    }
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
    return {
	goToOtherPage: () => {
	    dispatch(setPage(<MainPage/>));
	}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(OtherPage);

