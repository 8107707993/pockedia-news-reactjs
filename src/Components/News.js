import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';


export class News extends Component {

    constructor(){
        super();
        this.state ={
            articles :[],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=daeec696b84f44979221f0e82d5267fb&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({
            articles:parsedata.articles,
             totalResults: parsedata.totalResults,
            loading:false}) 
    }

    handelNextClick = async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=daeec696b84f44979221f0e82d5267fb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});let data = await fetch(url);
            let parsedata = await data.json()
            // console.log(parsedata);
            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles,
                loading: false
            }) 

        }
    }

    handelPrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=daeec696b84f44979221f0e82d5267fb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedata = await data.json()
        // console.log(parsedata);
        this.setState({
                page: this.state.page - 1,
                articles: parsedata.articles,
                loading: false 
            }) 
    }

    render() {
        return (
            <div className="container my-3">
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return  <div className="col-md-4 my-3" key={element.url}>
                                    <Newsitem title={element.title?element.title.slice(0,30):"We’re on a mission to start a conversation with your customers in this fast connected world."} description={element.description?element.description.slice(0,80):"We’re on a mission to start a conversation with your customers in this fast connected world."} newsUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://storage.googleapis.com/afs-prod/media/1597968725b8407d85745272ba7a4ad0/3000.jpeg"}/>
                                </div>
                    })}
                   
                </div>
                <div className="d-flex justify-content-between container">
                <button type="button" disabled={this.state.page <=1} class="btn btn-secondary shadow rounded" onClick={this.handelPrevClick}>&laquo; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} class="btn btn-secondary shadow rounded" onClick={this.handelNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News
