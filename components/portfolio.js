import React, { Component } from 'react';
import Img from "react-webp-image";

class Portfolio extends Component {
  render() {
    return (
      <div className="container mb60 mt80">
        <div className="row">
          <div className="col-sm-12 mt40">
            <h3 className="text-center">PORTOFOLIO</h3>
          </div>
        </div>
        <div className="row mt40">
          <div className="col-sm-4">
            <a href="#" title="portfolio item 1" data-toggle="modal" data-target="#myModal">
              <img
                src="https://themes.getbootstrap.com/wp-content/uploads/2018/02/BS_Application-400x300.png" alt=""
                className="img-responsive portofolio"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" title="portfolio item 2" target="_blank">
              <Img
                src="/static/front-preview-screenshot-600x450.jpg"
                webp="/static/front-preview-screenshot-600x450.webp"
                alt=""
                className="img-responsive portofolio"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" title="portfolio item 3" target="_blank">
              <img
              src="/static/dashkit-1.3.0-600x450.png" alt=""
              className="img-responsive portofolio"
              />
              <Img
                src="/static/dashkit-1.3.0-600x450.png"
                webp="/static/dashkit-1.3.0-600x450.webp"
                alt=""
                className="img-responsive portofolio"
              />
            </a>
          </div>
        </div>
        <div className="row mt60">
          <div className="col-sm-4">
            <a href="#" title="portfolio item 4" target="_blank">
              <Img
                src="/static/cover-new-600x450.jpg"
                webp="/static/cover-new-600x450.webp"
                alt=""
                className="img-responsive portofolio"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" title="portfolio item 5" target="_blank">
              <Img
                src="/static/twbs-sparrow-featured-image-1-600x450.jpg"
                webp="/static/twbs-sparrow-featured-image-1-600x450.webp"
                alt=""
                className="img-responsive portofolio"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" title="portfolio item 6" target="_blank">
              <Img
                src="/static/screenshot-2-600x450.png"
                webp="/static/screenshot-2-600x450.webp"
                alt=""
                className="img-responsive portofolio"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
