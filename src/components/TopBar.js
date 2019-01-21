import React, { Component } from 'react';
import { StyleSheet,css } from 'aphrodite';

const styles = StyleSheet.create({
    topBarStyles: {
	"background-color" : "brown",
	"width" : "100%",
	"padding" : "0px",
	"margin" : "0px",
	"position" : "fixed"
    },
    topBarHeading: {
	"font-size" : "36px",
	"color" : "white",
	"padding" : "5px",
	"margin" : "0px",
	"display" : "inline-block"
    },
    topBarStylesLandscape: {
	'@media (max-width: 720px)': {
	    "background-color" : "brown",
	    "width" : "100%",
	    "padding" : "0px",
	    "margin" : "0px",
	    "position" : "static"
	}
    }
});

class TopBar extends Component {
    render() {
	return (
	    <div className={css(styles.topBarStylesLandscape,styles.topBarStyles)}>
	      <div className={css(styles.topBarHeading)}>Demo App</div>
            </div>
	);
    }
};

export default TopBar;
