import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDCnYgZ3idxznNz1gyxFaG94ewHRfiFS_U';


// Create a new component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}



// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));


