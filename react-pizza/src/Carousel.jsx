import React from 'react'

function Carousel() {
  return (
    <div>
        <div className="container-fluid">
  <div className="row">
    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
        <li data-target="#carousel-example-generic" data-slide-to={1} />
        <li data-target="#carousel-example-generic" data-slide-to={2} />
      </ol>
      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="images/01.jpg" />
        </div>
        <div className="item">
          <img src="images/02.jpg" />
        </div>
        <div className="item">
          <img src="images/03.jpg" />
        </div>
      </div>
      {/* Controls */}
      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default  Carousel;
