import React from "react";
// import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {

  state = {
    noOfMovies : 0,
    searchString:"",
    currGenre:"All Genres",
  }

  recieveMovieData = (number)=>{
    this.setState({noOfMovies:number});
  }

  recieveSearchData = (str)=>{
    this.setState({searchString:str});
  }

  recieveGenreData = (genre)=>{
    this.setState({currGenre:genre})
  }

  render(){
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="row">
          <div className="col-2 p-4">
            <Category recieveGenreData={this.recieveGenreData}/>
          </div>
          <div className="col-10 p-4">
            <div className="row">
              <div className="col-3">
                <Search noOfMovies={this.state.noOfMovies} recieveSearchData={this.recieveSearchData}/>
              </div>
            </div>
            <div className="row col-8">
              <Table sendData={this.recieveMovieData} searchString={this.state.searchString} currGenre={this.state.currGenre}/>
            </div>
          </div>
        </div>
      </React.Fragment>
      // <div><Test /></div>
    );
  }
}

export default App;