import React from 'react';
import Card from '../card/Card';

const CardsList = ({data}) => {
  const cardsList = data.items.map((book,i) => {
    return (
      <Card
        key={book.id}
        info={book.volumeInfo}
      />
    );
  })
  return (
    <div className="CardsList">
      {cardsList}
    </div>
  );
}

export default CardsList;
