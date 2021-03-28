import React from 'react'
import $ from 'jquery'

import './Footer.css'
import upload from './upload.png'

function readUrl(input){

	let imagebox = $('#main-photo-id')
	console.log("evoked readUrl")
	if(input.files && input.files[0]){
		let reader = new FileReader();
		reader.onload = function(e){
			imagebox.attr('src',e.target.result); 
		}
		reader.readAsDataURL(input.files[0]);
	}
}


class Footer extends React.Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick(){
        let imagebox = $('#main-editor-face-photo-container-id')
		let input = $('#imageinput')[0]
		if(input.files && input.files[0])
		{
            readUrl(input)
			let formData = new FormData();
			formData.append('image' , input.files[0]);
			$.ajax({
				url: "http://localhost:5000/extract", // fix this to your liking
				type:"POST",
				data: formData,
				cache: false,
				processData:false,
				contentType:false,
				error: function(data){
					console.log("upload error" , data);
					console.log(data.getAllResponseHeaders());
				},
				success: function(data){
                    document.documentElement.style.setProperty('--header-height', '10%');
                    document.documentElement.style.setProperty('--footer-height', '10%');
                    document.getElementById('main-editor-face-photo-container-id').innerHTML=""
					// alert("hello"); // if it's failing on actual server check your server FIREWALL + SET UP CORS
					for(var box in data){
                        // console.log(data[box])
                        // if(box == null) continue
                        var bytestring = data[box]
                        var image = bytestring.split('\'')[1]
                        var image_ele = document.createElement('img')
                        image_ele.id = ''+box
                        image_ele.className='main-editor-face-photo'
                        image_ele.alt='Face' 
                        image_ele.src = 'data:image/jpeg;base64,'+image
                        
                        document.getElementById('main-editor-face-photo-container-id').appendChild(image_ele)
                    }
				}
			});            
		}
    }
    
    
    render(){
        return(
            <div className="footer">
                <input id="imageinput" type="file" name="image" onChange={readUrl(this)}/>
	            <button name="send" id = "sendbutton" onClick={this.handleClick}>Send</button>
	
                
            </div>
        )
    }
}

export default Footer