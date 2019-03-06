import React from 'react';

const Loader = ({isSearching, query}) => {
  return (
    <div className="Loader">
      <ul className="shelf">
        <li className={`book ${isSearching && query ? 'searching' : null} one`}></li>
        <li className={`book ${isSearching && query ? 'searching' : null} two`}></li>
        <li className={`book ${isSearching && query ? 'searching' : null} three`}></li>
        <li className={`book ${isSearching && query ? 'searching' : null} four`}></li>
        <li className={`book ${isSearching && query ? 'searching' : null} five`}></li>
      </ul>
    </div>
  );
}

export default Loader;
