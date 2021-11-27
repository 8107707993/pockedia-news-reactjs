import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import "../App.css";
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  capitalFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
    // document.title = `${this.capitalFirstLetter(
    //   props.category
    // )} - Pockedia News`;
  
  const updateNews= async()=>{
    let url = `http://www.omdbapi.com/?i=tt3896198&apikey=c8bdad91`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(parsedata.articles)
    setTotalResults(parsedata.totalResults)
    setLoading(false)
  }

  useEffect(() => {
  updateNews()
  }, [])

  const handelNextClick = async () => {
    if (
      !(
        page + 1 >
        Math.ceil(totalResults / props.pageSize)
      )
    ) {
      setPage(page + 1)
      updateNews()
      // let url = `https://newsapi.org/v2/top-headlines?country=${
      //   props.country
      // }&category=${
      //   props.category
      // }&apiKey=daeec696b84f44979221f0e82d5267fb&page=${
      //   page + 1
      // }&pageSize=${props.pageSize}`;
      // this.setState({ loading: true });
      // let data = await fetch(url);
      // let parsedata = await data.json();
      // // console.log(parsedata);
      // this.setState({
      //   page: page + 1,
      //   articles: parsedata.articles,
      //   loading: false,
      // });
    }
  };

  const handelPrevClick = async () => {
    setPage(page - 1)
    updateNews()

    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${
    //   props.category
    // }&apiKey=daeec696b84f44979221f0e82d5267fb&page=${
    //   page - 1
    // }&pageSize=${props.pageSize}`;
    // setLoading(true)
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // // console.log(parsedata);
    // setArticles(AR)
    // this.setState({
    //   page: page - 1,
    //   articles: parsedata.articles,
    //   loading: false,
    // });
  };


    return (
      <>
        {/* Right fixed tag start here */}
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="popup-btn">
              <p>
                Page{" "}
                <span className="text-danger text-nowrap">
                  {page}
                </span>{" "}
              </p>
            </div>
            <div className="popup-btn2">
              <p style={{ width: "113px" }}>
                {capitalFirstLetter(props.category.slice(0, 8))}
              </p>
            </div>
          </div>
        </div>

        {/* news Body start here ... */}
        {loading && <Spinner />}
        <div className="container my-3 ">
          {/* <InfiniteScroll
            dataLength={articles.length}
            next={this.fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={loading && <Spinner />}
          > */}
          <div className="container">
            <div className="row">
              {!loading && articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <Newsitem
                      title={
                        element.title
                          ? element.title.slice(0, 30)
                          : "We’re on a mission to start a conversation with your customers in this fast connected world."
                      }
                      author={element.author}
                      source={element.source.name}
                      date={element.publishedAt}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : "We’re on a mission to start a conversation with your customers in this fast connected world."
                      }
                      newsUrl={element.url}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://storage.googleapis.com/afs-prod/media/1597968725b8407d85745272ba7a4ad0/3000.jpeg"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* </InfiniteScroll> */}
        </div>

        <div className="d-flex justify-content-between container">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-secondary shadow rounded"
            onClick={handelPrevClick}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            className="btn btn-secondary shadow rounded"
            onClick={handelNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
