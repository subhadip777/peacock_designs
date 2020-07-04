import React from 'react';
import 'reactstrap';
import '../Componentstyles/Home.css';
import { Card, CardImg } from 'reactstrap';
import {TEMPLATES} from '../shared/Templates';
import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
            <div className="container-fluid bg">
                <div className="row  headercontainer">
                    <div className="col-12  text-center head">
                        <span>What We Do</span>

                    </div>
                    <div className="col-12  text-center head2" >
                        <article>
                            WE designs most interesting and fabulasly designed web pages that can be used in various fields like LOGIN or PORTFOLIO websites
                        </article>
                    

                    </div>
                

                </div>
                <div className="container mt-5 ">
                    <div className="row design1">
                        <div className="col-10 ">
                            <div className="">
                                <h1 >
                                Designs
                                </h1>
                            </div>
                            
                        </div>
                        <div className="col-2 ml-0">
                            <div>
                                <Link to="/designs">
                                <div className="sidebutton">
                                    
                                        explore <strong className="text-danger">MORE</strong>
                                    
                                    
                                </div> 
                                </Link>
                            </div>
                             
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-sm-6 col-6 col-md-4">
                            <div class="py-5">
                                    <div class="hover hover-1 text-white rounded"><img src={TEMPLATES[1].image}  alt=""/>
                                    <div class="hover-overlay"></div>
                                    <div class="hover-1-content px-5 py-4">
                                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
                                        <p class="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 col-6 col-md-4">
                            <div class="py-5">
                                    <div class="hover hover-1 text-white rounded"><img src={TEMPLATES[0].image}  alt=""/>
                                    <div class="hover-overlay"></div>
                                    <div class="hover-1-content px-5 py-4">
                                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
                                        <p class="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 col-6 col-md-4">
                            <div class="py-5">
                                    <div class="hover hover-1 text-white rounded"><img src={TEMPLATES[2].image}  alt=""/>
                                    <div class="hover-overlay"></div>
                                    <div class="hover-1-content px-5 py-4">
                                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
                                        <p class="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 col-6 col-md-4">
                            <div class="py-5 ">
                                    <div class="hover hover-1 text-white rounded"><img src={TEMPLATES[3].image} alt=""/>
                                    <div class="hover-overlay"></div>
                                    <div class="hover-1-content px-5 py-4">
                                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
                                        <p class="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 col-6 col-md-4">
                            <div class="py-5 ">
                                    <div class="hover hover-1 text-white rounded"><img src={TEMPLATES[4].image} alt=""/>
                                    <div class="hover-overlay"></div>
                                    <div class="hover-1-content px-5 py-4">
                                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
                                        <p class="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 col-6 col-md-4 col-lg-4">
                            <div class="py-5 ">
                                    <div class="hover hover-1 text-white rounded"><img src={TEMPLATES[5].image} alt=""/>
                                    <div class="hover-overlay"></div>
                                    <div class="hover-1-content px-5 py-4">
                                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
                                        <p class="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                
                                </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
                

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 p-2 m-1">
                        <strong className="text1">
                        Quality and price never go hand in hand.
                        Where's the rip off?
                        </strong>

                    </div>
                    <div className="col-12 col-md-5 p-2 m-1">
                        <p className="text2">
                        We are associated freelancers, exnovo is a brand with which we present ourselves. Until the day before yesterday we were suppliers of the web agencies. As such, we have worked with tariffs that would allow them normal top-up.

                            From 1998 to today we have worked to optimize our work flow while maintaining quality. This allows us to develop high quality websites with simplicity and speed.

                            We have been "consultants consultants" and now we have decided to put our experience at the service of professionals and companies by keeping prices from web agency suppliers.
                        </p>
                    </div>
                    

                </div>

            </div>
        </>
    )

}
export default Home;