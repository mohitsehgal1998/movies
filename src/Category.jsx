import React from "react";
class Category extends React.Component{
    state = {
        allGenre : ["Action","Comedy","Romance","Thriller","Horror"]
    }

    componentDidMount(){
        // API call(msg bhejna => get)
        fetch("/genre").then(function(res){
            return res.json()
        }).then((json)=>{
            this.setState({allGenre:json})
        })
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