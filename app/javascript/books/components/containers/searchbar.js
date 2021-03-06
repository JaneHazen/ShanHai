import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions'
import { bindActionCreators } from 'redux';


class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            keyword:''
        }
    }

    searchBooks = (event) =>{
        event.preventDefault();
        this.props.getBooks(this.state.keyword)
    }

    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value
        })
    }


    render() {
        return (
            <div className="main_search">
                <form onSubmit={this.searchBooks}>
                    <input type="text" value={this.state.keyword} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getBooks}, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar)