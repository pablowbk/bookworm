import React from 'react';
import Na from './na';

const Card = ({ data }) => {
  return (
    data.items.map((item, i) => {
      return (
        item.volumeInfo.imageLinks && item.searchInfo
          ?
          <div className="Card" key={item.id}>
            <div className="book-container">
              <h3 className="book-title">
                {
                item.volumeInfo.title
                ? item.volumeInfo.title
                : `Sin Título`
                }
              </h3>
              <div className="book-info">
                { item.volumeInfo.imageLinks
                  ? <a className="link" href={item.volumeInfo.previewLink} rel="noopener noreferrer" target="_blank">
                    <img className="book-img" src={item.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
                    </a>
                  : <Na />
                }
                <div className="book-more">
                  <div className="book-subtext">
                    by  <span>{
                      item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Undeclared'
                    }</span>
                  </div>
                  <div className="book-subtext">
                    Publisher: <span>{ item.volumeInfo.publisher ? item.volumeInfo.publisher : 'Undeclared'}</span>
                  </div>
                  <div className="book-subtext">
                    Published: <span>{ item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : 'Unknown'}</span>
                  </div>
                  <div className="book-subtext">
                    Rating: <span>{ item.volumeInfo.averageRating ? item.volumeInfo.averageRating : '-'}</span>
                  </div>

                  <div className="expanded">
                    { item.volumeInfo.categories
                      ? item.volumeInfo.categories.map( (category, i) => {
                        return (
                          <div className="category" key={i}>{category}</div>
                        )})
                        : <div className="category">Unclassified</div>
                    }
                      {/* { item.searchInfo ? item.searchInfo.textSnippet : `Sin Descripción` } */}
                    <div name="button" className="btn">
                      <a className="link" href={item.volumeInfo.previewLink} rel="noopener noreferrer" target="_blank">more</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          : null
      )
    })
    // <div className="Card">
    //   <div className="book-container">
    //     <h3 className="book-title">Book title</h3>
    //     <div className="book-info">
    //       <img className="book-img" src="https://via.placeholder.com/150x200" alt="book cover"/>
    //       <div className="book-more">
    //         <h4 className="book-subtext">subtext here</h4>
    //         <p className="book-desc">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deleniti ea minus non sunt nihil perferendis sed eius eum provident modi, optio tempora asperiores natus reiciendis incidunt cumque, atque repellendus.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
