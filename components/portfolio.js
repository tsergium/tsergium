import React, { Component } from 'react';

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
            <a href="#" data-toggle="modal" data-target="#myModal">
              <img
                src="https://themes.getbootstrap.com/wp-content/uploads/2018/02/BS_Application-400x300.png" alt=""
                className="img-responsive portofolio"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" target="_blank">
              <img
                src="https://themes.getbootstrap.com/wp-content/uploads/2018/05/front-preview-screenshot-600x450.jpg"
                alt="" className="img-responsive portofolio"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" target="_blank">
              <img
              src="https://themes.getbootstrap.com/wp-content/uploads/2018/06/dashkit-1.3.0-600x450.png" alt=""
              className="img-responsive portofolio"
              />
            </a>
          </div>
        </div>
        <div className="row mt60">
          <div className="col-sm-4">
            <a href="#" target="_blank">
              <img
              src="https://themes.getbootstrap.com/wp-content/uploads/2018/07/cover-new-600x450.jpg" alt=""
              className="img-responsive portofolio" />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" target="_blank">
              <img
              src="https://themes.getbootstrap.com/wp-content/uploads/2018/07/twbs-sparrow-featured-image-1-600x450.jpg"
              alt="" className="img-responsive portofolio"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" target="_blank">
              <img
              src="https://themes.getbootstrap.com/wp-content/uploads/2018/04/screenshot-2-600x450.png" alt=""
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
