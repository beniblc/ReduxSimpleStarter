import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyCbfo0hs03J3FR5n_1BVK0vE8MSlmy4O5c';

// Create a new component. This component should produce some HTML
class App extends Component {
constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfbourd'}, (videos) => {
        this.setState({ videos });
        // this.setState({ videos: videos })
    });

}

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
    
}

//Take this component's HTML & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));