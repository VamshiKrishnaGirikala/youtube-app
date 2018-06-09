import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';
import YTSearch from "youtube-api-search";
import SearchBar from './components/search_bar';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY='AIzaSyB58RIuuJ257Gp9hfkFkUA0pZksJspkIZs';




class App extends Component {
  constructor(props){
    super(props)
    this.state={videos:[],
    selectedVideo:null}

   this.videoSearch('bmw');
  }
  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      })
  })
    
  }
  render() {
    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
    return (
      <div className="App">
        <h1>Hello This is React App!!</h1>
       <SearchBar onSearchTermChange={videoSearch} />
       <VideoDetail  video={this.state.selectedVideo} />
       <VideoList 
       videos={this.state.videos}
       onVideoSelect={selectedVideo=>this.setState({selectedVideo:selectedVideo})}/>
      </div>
    );
  }
} 

export default App;
