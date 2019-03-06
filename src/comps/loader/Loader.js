import React from 'react';

const Loader = ({isSearching, query}) => {
  return (
    <div className="Loader">
      <ul className="shelf">
        <li className={`book one ${isSearching && query ? 'searching' : 'stopped'}`}></li>
        <li className={`book two ${isSearching && query ? 'searching' : 'stopped'}`}></li>
        <li className={`book three ${isSearching && query ? 'searching' : 'stopped'}`}></li>
        <li className={`book four ${isSearching && query ? 'searching' : 'stopped'}`}></li>
        <li className={`book five ${isSearching && query ? 'searching' : 'stopped'}`}></li>
      </ul>
    </div>
  );
}

export default Loader;
