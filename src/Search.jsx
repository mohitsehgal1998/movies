import React from "react";

function Search(props){
    return(
        <div>
            <p class="text-start">Showing {props.noOfMovies} movies from database.</p>
            <button type="button" class="btn btn-primary">New</button>
            <div class="input-group mb-3 mt-4">
            <input type="text" onChange={
                (el)=>{
                    props.recieveSearchData(el.currentTarget.value);
                }
            } class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
            </div>

        </div>
    );
}

export default Search;