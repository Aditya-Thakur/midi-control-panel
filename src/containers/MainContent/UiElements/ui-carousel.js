import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';

class ui_carousel extends Component{
    render(){
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Carousel</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Carousel</li>
                                    </ol>
            
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Slides only</h4>
                                        <p className="text-muted m-b-30 font-14">Here’s a carousel with slides only.
                                            Note the presence of the <code>.d-block</code>
                                            and <code>.img-fluid</code> on carousel images
                                            to prevent browser default image alignment.</p>
        
                                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-1.jpg" alt="First slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-2.jpg" alt="Second slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-3.jpg" alt="Third slide" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">With controls</h4>
                                        <p className="text-muted m-b-30 font-14">Adding in the previous and next controls:</p>
        
                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-4.jpg" alt="First slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-5.jpg" alt="Second slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-6.jpg" alt="Third slide" />
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">With indicators</h4>
                                        <p className="text-muted m-b-30 font-14">You can also add the indicators to the
                                            carousel, alongside the controls, too.</p>
        
                                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            </ol>
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-3.jpg" alt="First slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-2.jpg" alt="Second slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block img-fluid" src="assets/images/small/img-1.jpg" alt="Third slide" />
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">With captions</h4>
                                        <p className="text-muted m-b-30 font-14">Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.</p>
        
                                        <div id="carouselExampleCaption" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img src="assets/images/small/img-7.jpg" alt="..." />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h3>First slide label</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="assets/images/small/img-5.jpg" alt="..." />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h3>Second slide label</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="assets/images/small/img-4.jpg" alt="..." />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h3>Third slide label</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleCaption" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleCaption" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">

                                <h4 class="mt-0 header-title">Crossfade</h4>
                                <p class="text-muted m-b-30">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>
                                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">

                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block img-fluid" src="assets/images/small/img-3.jpg" alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block img-fluid" src="assets/images/small/img-5.jpg" alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block img-fluid" src="assets/images/small/img-7.jpg" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AUX>
        );
    }
}

export default ui_carousel;