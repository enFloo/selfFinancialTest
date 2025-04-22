import greyStar_logo from '../Assets/Star_Grey.png';
import purpleStar_logo from '../Assets/Star_Purple.png';

const Star = (isActive) =>{
    isActive = false;
    if(isActive){
        return(
            <div style={{paddingRight: ".6em"}}>
                <img src={purpleStar_logo} alt="Star Logo" />
            </div>
        )
    }else{
        return(
            <div style={{paddingRight: ".6em"}}>
                <img src={greyStar_logo} alt="Star Logo" />
            </div>
        )
    }
    
};

export default Star;
