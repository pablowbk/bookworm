import React from 'react';
import Na from './na';

const Card = ({data}) => {
  return (
    data.items.map((item, i) => {
      return (
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
                ? <img className="book-img" src={item.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
                : <Na />
              }
              <div className="book-more">
                <h4 className="book-subtext">
                  {
                  item.volumeInfo.subtitle
                  }
                </h4>
                <div className="book-desc">
                  { item.volumeInfo.description ? item.volumeInfo.description : `Sin Descripción` }
                </div>
              </div>
            </div>
          </div>
        </div>
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
