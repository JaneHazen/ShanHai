import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';


class ListOfBooks extends Component {

    listOfBooks = ({list}) =>{
        if(list){
            return list.map((item)=>{
                return(
                    <Link className="link" to={`/books/${item.id}`} key={item.id} >
                        <li className="booksLi">
                            <div >
                                <article className="popupContainer" key={item.id}>
                                    <p className="bookTitle">{item.title}</p>
                                    <p className="bookAuthor">{item.author}</p>
                                    <p className="bookDescription">{item.description}</p>
                                    <p>{item.user_id}</p>
                                    <p className="bookCreatedAt"><Timestamp time={item.created_at} format='full'/></p>
                                </article>

                            </div>
                        </li>
                    </Link>
                )
            })
        }
    }

    render() {
        return (
            <div className="main_results">
                <ul className="booksUl">
                    {this.listOfBooks(this.props.books)}
                </ul>
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