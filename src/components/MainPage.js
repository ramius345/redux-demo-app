import React, { Component } from 'react';
import OtherPage  from './OtherPage';
import { StyleSheet,css } from 'aphrodite';
import { connect } from 'react-redux';
import { setPage } from '../actions/setPage';

const styles = StyleSheet.create({
    links: {
        "display" : "inline-block",
	"padding" : ".4em"
    },
});

class MainPage extends Component {
    render () {
        return (
	    <div>
              <div>
		<div className={css(styles.links)}>Main Page</div>
		<div className={css(styles.links)}><a href="#" onClick={this.props.goToOtherPage}>Other Page</a></div>
              </div>
	      <div>
		This is the Main Page
	      </div>
	    </div>
        );
    }
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
    return {
	goToOtherPage: () => {
	    dispatch(setPage(<OtherPage/>));
	}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);

