import React, {Component} from 'react';

class BookDetail extends Component {

  BookDetail = ({detail}) =>{
    if(detail){
      return detail.map((item)=>{
        return(
          <div key={detail.id} className="bookBox">
            <div className="container">
            <article className="popupContainer" key={detail.id}>
              <h2>{detail.author}</h2>
              <h3>{detail.description}</h3>
              <p>{detail.user_id}</p>
              <p className="bookCreatedAt"><Timestamp time={detail.created_at} format='full'/></p>
            </article>
        </div>
        })
    }
  }

  render() {
        return (
            <div className="main_results">
                    {this.bookDetail(this.props.detail)}
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