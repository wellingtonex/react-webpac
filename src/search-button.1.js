import React from 'react';

const SearchButton = ({ children }) => (
    <button handleClick={() => { alert('buscar')}}>{children}</button>
)

export default SearchButton;

