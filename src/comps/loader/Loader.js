import React from 'react';

const Loader = ({isSearching}) => {
  return (
    <div className="Loader">
      <ul className="shelf">
        <li className="book one" style={{animationPlayState: isSearching ? 'running' : 'paused'}}></li>
        <li className="book two" style={{animationPlayState: isSearching ? 'running' : 'paused'}}></li>
        <li className="book three" style={{animationPlayState: isSearching ? 'running' : 'paused'}}></li>
        <li className="book four" style={{animationPlayState: isSearching ? 'running' : 'paused'}}></li>
        <li className="book five" style={{animationPlayState: isSearching ? 'running' : 'paused'}}></li>
        <li className="book six" style={{animationPlayState: isSearching ? 'running' : 'paused'}}></li>
        <li className="book seven" style={{animationPlayState: isSearching ? 'running' : 'paused'}}></li>
        <li className="book eight" style={{animationPlayState: isSearching ? 'running' : 'paused'}}></li>
      </ul>
    </div>
  );
}

export default Loader;
