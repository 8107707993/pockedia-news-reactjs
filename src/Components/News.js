import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

    constructor(){
        super();
        this.state ={
            articles :[],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=daeec696b84f44979221f0e82d5267fb";
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata);
        this.setState({articles:parsedata.articles}) 
    }
    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return  <div className="col-md-4 my-3" key={element.url}>
                                    <Newsitem title={element.title?element.title.slice(0,30):"We’re on a mission to start a conversation with your customers in this fast connected world."} description={element.description?element.description.slice(0,80):"We’re on a mission to start a conversation with your customers in this fast connected world."} newsUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://storage.googleapis.com/afs-prod/media/1597968725b8407d85745272ba7a4ad0/3000.jpeg"}/>
                                </div>
                    })}
                   
                </div>
                
            </div>
        )
    }
}

export default News
