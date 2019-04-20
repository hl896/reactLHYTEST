import React from 'react';
import './searchstyle/imageList.css';
import ImageCard from './ImageCard'
const ImageList = (props) => {
    console.log("images"+props.image)
    const images = props.image.map((image)=>{
        console.log('descript:'+image.id)
        return(
            // <div className='imageDiv' key={id}>
                
                
            //     <img src={urls.regular} />
            //     <h3>{alt_description}</h3>
            //     <p>{description}</p>
                
            // </div>
            <ImageCard key={image.id} image={image}/>
        )
    })
    return (
        <div className='imageList'>
            
                {
                    images
                }
        </div>
    );
};
export default ImageList;