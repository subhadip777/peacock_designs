import React from 'react';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){

        const menu = this.props.templates.map((template)=>{

            return(
                
                    
                        <div className="col-3 col-sm-6 col-lg-3 ">
                            
                                    <img src={template.image} className="img-responsive w-100 mt-1 " height="70%" width="70%" alt={template.name}/>
                                    <div className="caption">
                                        <p className="text-center">
                                            {template.description}
                                        </p>

                                    </div>
                                      
                                

                        </div>

                   

                
            ) 
        })
        return(
            <>
            
            <div className="container-fluid bg-white bg  text-black-50">
                <div className="row ">
                    <div className="col-12 text-center heading">
                        <div >
                             Designs <strong className="text-danger">That blows your mind</strong>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="row m-0">
                    {menu}
                </div>
                

            </div>
            </>
           
        )
    }
}
export default Menu;