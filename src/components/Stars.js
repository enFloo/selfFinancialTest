import Star from './Star';

const Stars = () =>{
    let count = 10;
    return(
        <div style={{flex:"1", alignSelf:"center", marginBottom:"1em", marginTop:"1em"}}>
            <p style={{}}>How likely are you to recommend our product to a friend or family?</p>
            <div style={{display:"flex"}}>
                {[...Array(count)].map((e, i) => <span key={i}><Star/></span>)}
            </div>
            
        </div>
    )
};

export default Stars;