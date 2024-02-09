import React from "react";
class Category extends React.Component{
    state = {
        allGenre : ["Action","Comedy","Romance","Thriller","Horror"]
    }

    componentDidMount(){
        // API call(msg bhejna => get)
        let data = require("./data.json") ;

        let uniqueGenreObjects = []
        let newData = data.map((e)=>{
            let flag = 0 ;
            if(uniqueGenreObjects.length > 0){
                uniqueGenreObjects.forEach((el)=>{
                    if(el._id == e.genre._id){
                        flag = 1;
                    }
                });
                if(flag == 0){
                    uniqueGenreObjects.push(e.genre) ;
                }
            }else{
                uniqueGenreObjects.push(e.genre) ;
            }
        });
        
        this.setState({allGenre:uniqueGenreObjects}) ;

        // fetch("/genre").then(function(res){
        //     return res.json()
        // }).then((json)=>{
        //     this.setState({allGenre:json})
        // })
    }

    render(){
        return(
            <ul class="list-group">
                <li class="list-group-item" onClick={
                    ()=>{
                        this.props.recieveGenreData("All Genres")
                        }
                } key="allGenres">All Genres</li>
                {
                    this.state.allGenre.map((el)=>{
                        return (<li class="list-group-item" onClick={
                            ()=>{
                                this.props.recieveGenreData(el.name)
                            }
                        } key={el._id}>{el.name}</li>)
                    })
                }
            </ul>
        )
    }
}

export default Category;