import React from 'react'
import $ from 'jquery'
import './Main.css'

class Main extends React.Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        var image_ele = document.createElement('img')
        if(event.target.id='box0'){
            // image_ele.src = {box0}
        }
        else if(event.target.id=='box1'){
            // image_ele.src = {box1}
        }
        else if(event.target.id=='box2'){
            // image_ele.src = {box2}
        }
        document.getElementById('main-editor-exchange-photo-container-id').appendChild(image_ele);
        // let img = event.target.src;
        // let formData = new FormData();
        // formData.append('file1' , img);
        // $.ajax({
        //     url: "http://localhost:5000/swap", // fix this to your liking
        //     type:"POST",
        //     data: {'file1':img},
        //     cache: false,
        //     processData:false,
        //     contentType:false,
        //     error: function(data){
        //         console.log("upload error" , data);
        //         console.log(data.getAllResponseHeaders());
        //     },
        //     success: function(data){
        //         document.getElementById('main-editor-exchange-photo-container-id').innerHTML=""
                
        //         var bytestring = data['image']
        //         var image = bytestring.split('\'')[1]
        //         var image_ele = document.createElement('img')
        //         image_ele.id = 'main-editor-exchange-photo-swap'
        //         image_ele.className='main-editor-face-photo-swap'
        //         image_ele.alt='Exchanged' 
        //         image_ele.src = 'data:image/jpeg;base64,'+image
                
        //         document.getElementById('main-editor-exchanged-photo-container-id').appendChild(image_ele)
        //     }
        // });   
    }

    render(){
        return(
            <div
            className="main"
            >
                {/* ************* Photo Container ************* */}
                <div
                className = "main-photo-container"
                >   
                    <img
                        id = 'main-photo-id'
                        className = "main-photo"
                        alt=""
                    />

                </div>

                {/* ************* Editor Container ************* */}
                <div
                className = "main-editor-container"
                >  

                    {/* ********* Face Container ********* */}
                    <div
                    className="main-editor-face"
                    >
                       <div id="main-editor-face-title">Selected Face</div>
                       <div 
                        id = 'main-editor-face-photo-container-id'
                        className='main-editor-face-photo-container'
                        onClick = {this.handleClick}
                        >
                               
                       </div>
                    </div> 

                    {/* ********* Exchange Container ********* */}
                    <div
                    className="main-editor-exchange"
                    >
                       <div
                       className="main-editor-exchange-title"
                       >
                            Expressionfull Face
                       </div>
                       
                       <div
                        id = 'main-editor-exchange-photo-container-id'
                        className="main-editor-exchange-photo-container"
                       >
                        
                       </div>
                    </div> 

                    {/* ************* Button Container ************* */}
                    <div
                    className="main-editor-button"
                    >
                        <button 
                        id='exchange-button'
                        className="button"
                        onClick={this.handleClick}
                        >
                            ExChange
                        </button>
                    </div>
                </div>

                

            </div>
        )
    }
}

export default Main