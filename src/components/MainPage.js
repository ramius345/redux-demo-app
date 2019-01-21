import React, { Component } from 'react';
import OtherPage  from './OtherPage';
import { StyleSheet,css } from 'aphrodite';
import { connect } from 'react-redux';
import { setPage } from '../actions/setPage';
import { addToList } from '../actions/addToList';

const styles = StyleSheet.create({
    links: {
        "display" : "inline-block",
	"padding" : ".4em"
    },
});

class MainPage extends Component {
    constructor(props) {
	super(props);
	this.state = { textboxValue: '' };
	this.handleInput = this.handleInput.bind(this);
	this.addNewEntry = this.addNewEntry.bind(this);
    }

    handleInput(event) {
	this.setState({ textboxValue: event.target.value });
    }

    addNewEntry() {
	this.props.addToList( this.state.textboxValue );
	this.setState({ texboxValue: ''});
    }
    
    render () {
	let entries = this.props.list.map( x => <li>{x}</li> );
	
        return (
	    <div>
              <div>
		<div className={css(styles.links)}>Main Page</div>
		<div className={css(styles.links)}><a href="#" onClick={this.props.goToOtherPage}>Other Page</a></div>
              </div>
	      <ul>
		{entries}
	      </ul>
	      <div>
		This is the Main Page
	      </div>
	      <div>
		<input type="text" value={this.state.textboxValue} onChange={this.handleInput}></input>
	      </div>
	      <div>
		<input type="button" value="Add To List" onClick={this.addNewEntry}></input>
	      </div>
	    </div>
        );
    }
};

const mapStateToProps = (state) => ({
    list: state.listReducer.list
});
const mapDispatchToProps = (dispatch) => {
    return {
	goToOtherPage: () => {
	    dispatch(setPage(<OtherPage/>));
	},
	addToList: (entry) => {
	    dispatch(addToList(entry));
	}
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);

