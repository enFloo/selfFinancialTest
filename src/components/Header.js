import giantRobot_logo from '../Assets/GiantRobot_Logo.png';

const Header = () =>{
    return(
        <div style={{backgroundColor: '#CF2AFF', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '175px'}}>
            <img src={giantRobot_logo} alt="Logo" />
        </div>
    )

};

export default Header;