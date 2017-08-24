import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCbfo0hs03J3FR5n_1BVK0vE8MSlmy4O5c';

// Create a new component. This component should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

//Take this component's HTML & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));