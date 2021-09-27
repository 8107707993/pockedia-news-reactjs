import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import '../App.css';



export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize: 9,
        category: 'general'
    }


    static propType = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalFirstLetter =(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state ={
            articles :[],
            loading: false,
            page:1
        }
        document.title = `${this.capitalFirstLetter(this.props.category)} - Pockedia News`;
    }

    

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=daeec696b84f44979221f0e82d5267fb&page=1&pageSize=${this.props.pageSize}`;
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
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=daeec696b84f44979221f0e82d5267fb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=daeec696b84f44979221f0e82d5267fb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
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
            <>
            {/* Right fixed tag start here */}
            {/* <div className="  d-flex justify-content-end " style={{zIndex:"1"}}>
                    <h5 className="text-light p-3 border-bottom mb-2 mt-2 bg-secondary shadow-lg rounded-start position-fixed font-family-sans-serif" style={{zIndex:"1"}}>Page <span className="text-danger text-nowrap">{this.state.page}</span></h5>
            </div>  */}
            <div className="row">
            <div className="col-lg-12 col-sm-12 col-12">
            <div className="popup-btn">
            <p href="#id01">Page <span className="text-danger text-nowrap">{this.state.page}</span> </p>
            </div>
            <div className="popup-btn2" >
            <p style={{width:"113px"}}>{this.capitalFirstLetter(this.props.category.slice(0,8))}</p>
            </div>
            </div>
            </div>

            {/* news Body start here ... */}
            <div className="container my-3 ">
                
            

                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return  <div className="col-md-4 my-3" key={element.url}>
                                    <Newsitem title={element.title?element.title.slice(0,30):"We’re on a mission to start a conversation with your customers in this fast connected world."} author={element.author} source={element.source.name} date={element.publishedAt} description={element.description?element.description.slice(0,80):"We’re on a mission to start a conversation with your customers in this fast connected world."} newsUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://storage.googleapis.com/afs-prod/media/1597968725b8407d85745272ba7a4ad0/3000.jpeg"}/>
                                </div>
                    })}
                   
                </div>

                <div className="d-flex justify-content-between container">
                <button type="button" disabled={this.state.page <=1} className="btn btn-secondary shadow rounded" onClick={this.handelPrevClick}>&laquo; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-secondary shadow rounded" onClick={this.handelNextClick}>Next &raquo;</button>
                </div>
            </div>
 </>       )
    }
}

export default News
