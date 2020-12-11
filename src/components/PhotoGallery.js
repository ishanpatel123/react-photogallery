import React from 'react';
import './PhotoGallery.css';

class PhotoGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            photoIndex: 0
        };
    }

    plusSlides = (step) => {
        const {images} = this.props;
        let {photoIndex} = this.state;
        if (photoIndex + step >= 0 && photoIndex + step < images.length ) {
            photoIndex += step;
            this.setState({
                photoIndex
            });
        }
    }

    currentSlide = (step) => {
        const {images} = this.props;
        if (step >= 0 && step < images.length ) {
            this.setState({
                photoIndex: step
            });
            window.scroll({top: 0, left: 0, behavior: 'smooth' })
        }
    }

    render() {
        let {photoIndex} = this.state;
        const {images} = this.props;
        return (
            <div>
                <div className="carousel">
                    <div className="carousel-inner">
                        {images.map((item, index) => {
                            if (index === photoIndex) {
                                return (
                                    <div className="carousel-item active" key={index}>
                                        <div className="caption">{item.caption}</div>
                                        <img src={item.url} alt="" className="img-holder"/>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <a href="/#" className="prev" onClick={() => this.plusSlides(-1)}>❮</a>
                    <a href="/#" className="next" onClick={() => this.plusSlides(1)}>❯</a>
                </div>

                <div className="container">
                    <div className="row">
                        {images.map((item, index) => {
                            return (
                                <div className="cols-md-4" key={index}>
                                    <img src={item.url} className="card" onClick={() => this.currentSlide(index)} alt=""/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
  }
  
export default PhotoGallery;
