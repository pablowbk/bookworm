import React from 'react';

const Card = () => {
  return (
    <div className="Card">
      <div className="book-container">
        <h3 className="book-title">Book Title</h3>
        <div className="book-info">
          <img className="book-img" src="https://via.placeholder.com/150x200" alt="book cover"/>
          <div className="book-more">
            <h4 className="book-subtext">subtext here</h4>
            <p className="book-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deleniti ea minus non sunt nihil perferendis sed eius eum provident modi, optio tempora asperiores natus reiciendis incidunt cumque, atque repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
