import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const Stars = () =>{
    let count = 10;
    const [rating, setRating] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined)

    const handleMouseOverStar = value =>{
        setHoverValue(value);
    }

    const handleMouseLeaveStar = () =>{
        setHoverValue(undefined);
    }

    const handleClickStar = value =>{

        setRating(value)
    }
    return(
        <div style={{flex:"1", alignSelf:"center", marginBottom:"1em", marginTop:"1em"}}>
            <p style={{}}>How likely are you to recommend our product to a friend or family?</p>
            <div style={{display:"flex"}}>
                {[...Array(count)].map((e, i) =>{
                    return(
                        <FaStar
                            key={i}
                            size={22}
                            style={{marginRight: ".5em"}}
                            color={(hoverValue || rating) > i ? "#CF2AFF" : "#D3D3D3"}
                            onChange={(e) => setRating(e.target.value)}
                            value={rating}
                            onMouseOver={() => handleMouseOverStar(i+1)}
                            onClick={() => handleClickStar(i+1)}
                            onMouseLeave={() => handleMouseLeaveStar()}
                        />
                        )}
                    )
                } 
            </div>
            
        </div>
    )
};

export default Stars;