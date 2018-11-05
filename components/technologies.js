import React, { Component } from 'react';

class Technologies extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-skew bg-skew-light mt80">
          <div className="container content">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="text-center">TEHNOLOGI FOLOSITE</h3>
              </div>
            </div>
            <div className="row mt40 mb40">
              <div className="col-sm-3 hidden-xs">
                <img src="/static/images/php.png" alt="PHP" className="img-responsive icon" />
              </div>
              <div className="col-sm-3 hidden-xs">
                <img src="/static/images/pyton.png" alt="Python" className="img-responsive icon" />
              </div>
              <div className="col-sm-3 hidden-xs">
                <img src="/static/images/go.png" alt="Go" className="img-responsive icon" />
              </div>
              <div className="col-sm-3 hidden-xs">
                <img src="/static/images/js.png" alt="js" className="img-responsive icon" />
              </div>
            </div>

            <div className="" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel">
                <div className="row">
                  <div className="col-sm-3 visible-xs mb20">
                    <img src="/static/images/php.png" alt="PHP" className="img-responsive icon" />
                  </div>
                  <div className="col-sm-3 text-center">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1"
                           aria-expanded="false" aria-controls="collapse1">
                          Phalcon
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading2">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2"
                           aria-expanded="false" aria-controls="collapse2">
                          Symfony
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading3">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3"
                           aria-expanded="false" aria-controls="collapse3">
                          Zend
                        </a>
                      </h4>
                    </div>
                  </div>


                  <div className="col-sm-3 visible-xs mt40 mb20">
                    <img src="/static/images/pyton.png" alt="Python" className="img-responsive icon" />
                  </div>
                  <div className="col-sm-3 text-center">
                    <div className="panel-heading" role="tab" id="heading4">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                          Scrapy
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading5">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                          Scrapinghub
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading6">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                          Robotics
                        </a>
                      </h4>
                    </div>
                  </div>


                  <div className="col-sm-3 visible-xs mt40 mb20">
                    <img src="/static/images/go.png" alt="Go" className="img-responsive icon" />
                  </div>
                  <div className="col-sm-3 text-center">
                    <div className="panel-heading" role="tab" id="heading7">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse7" aria-expanded="false" aria-controls="collapse7">
                          Microservices
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading8">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse8" aria-expanded="false" aria-controls="collapse8">
                          Real Time Chat
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading9">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse9" aria-expanded="false" aria-controls="collapse9">
                          Teacher Assistant
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-3 visible-xs mt40 mb20">
                    <img src="/static/images/js.png" alt="js" className="img-responsive icon" />
                  </div>
                  <div className="col-sm-3 text-center">
                    <div className="panel-heading" role="tab" id="heading10">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse10" aria-expanded="false" aria-controls="collapse10">
                          React
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading11">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse11" aria-expanded="false" aria-controls="collapse11">
                          Redux
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading12">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse12" aria-expanded="false" aria-controls="collapse12">
                          Node
                        </a>
                      </h4>
                    </div>
                    <div className="panel-heading" role="tab" id="heading13">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#collapse13" aria-expanded="false" aria-controls="collapse13">
                          Express
                        </a>
                      </h4>
                    </div>

                  </div>
                </div>

                <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                  <div className="panel-body">
                    1 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                  <div className="panel-body">
                    2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                  <div className="panel-body">
                    3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                  <div className="panel-body">
                    4 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                  <div className="panel-body">
                    5 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
                  <div className="panel-body">
                    6 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse7" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7">
                  <div className="panel-body">
                    7 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse8" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8">
                  <div className="panel-body">
                    8 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse9" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading9">
                  <div className="panel-body">
                    9 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse10" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading10">
                  <div className="panel-body">
                    10 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse11" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading11">
                  <div className="panel-body">
                    11 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading12">
                  <div className="panel-body">
                    12 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
                <div id="collapse13" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                  <div className="panel-body">
                    13 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Technologies;
