import React, {Component} from 'react';
import { connect } from 'react-redux';

class ListOfBooks extends Component {

    listOfBooks = ({list}) =>{
        if(list){
            return list.map((item)=>{
                return(
                    <div className="card">
                        <div className="left">
                        </div>
                        <div className="right">
                            <h4>{item.title}</h4>
                            <h6>{item.author}</h6>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className="main_results">
                {this.listOfBooks(this.props.books)}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        books:state.books
    }
}
export default connect(mapStateToProps,null)(ListOfBooks);