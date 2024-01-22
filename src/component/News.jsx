import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      product: [],
      loading: true,
      page: 1,
      totalpages:0
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=10b6b17a75b74f6e9ade85b9a88dfe73&page=${this.state.page}&pagesize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let final = await data.json();
    this.setState({ loading: false });
    // console.log(final)
    this.setState({
      product: final.articles,
      totalpages: final.totalResults,
     
      loading: false,
      page: 1,
    });
  }
  async componentDidMount() {
   this.updateNews()
  }
 

  
  fetchMoreData = async() => {
  
    
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=10b6b17a75b74f6e9ade85b9a88dfe73&page=${this.statepage}&pagesize=20`;
     
      let data = await fetch(url);
      let final = await data.json();
      
      // console.log(final)
      this.setState({
        product: this.state.product.concat(final.articles),
        totalpages: final.totalResults,
      
        loading: false,
        page: this.state.page+1,
      });

  
  };
  render() {
    return (
      <>
     
        <h1 className="my-1 container">
          {`${this.props.category.toUpperCase()}`} NEWS OF THE WORLDS
        </h1>
        
        <InfiniteScroll
          dataLength={this.state.product.length}
          next={this.fetchMoreData}
          hasMore={this.state.product.length!== this.state.totalpages}
          loader={<Spinner/>}
        >

        <div className="container my-3 d-flex flex-row flex-wrap justify-content-around ">
          { this.state.product.map((element) => {
                return (
                  <>
                 
                    <div className="row my-2" key={element.publishedAt}>
                      <div className="col-md-4" key={element.publishedAt}>
                        <NewsItem
                          title={
                            element.title == null ? "My Title" : element.title
                          }
                          description={
                            element.description == null
                              ? this.lorem
                              : element.description
                          }
                          imageurl={
                            element.urlToImage == null
                              ? "https://image.cnbcfm.com/api/v1/image/107274759-16…cessing_Facility_1.jpg?v=1689944401&w=1920&h=1080"
                              : element.urlToImage
                          }
                          url={!element.url == null ? "annnn" : element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    </div>
          
                   
                  </>
                );
              })}
        </div>
        
 
        </InfiniteScroll>
   
        
      </>
    );
  }
}

export default News;
React;
