import React from 'react';

const SearchIcon = ({ ...other }) => (
  <svg
    clipRule="evenodd"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeMiterlimit="10"
    {...other}
  >
    <path d='M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm4.9 11.9L19 19' />
  </svg>
);

SearchIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 19.7 19.7',
};

export default SearchIcon;
