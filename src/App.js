import './App.css';
import Header from './components/Header';
import Stars from './components/Stars';
import ReviewBox from './components/ReviewBox';
import SubmitButton from './components/SubmitButton';
import NPSScore from './components/NPSSCORE';


function App() {
  return (
    <>
    <Header/>
      <div style={{display: "flex", flexDirection:'column'}}>
        <Stars/>
        <ReviewBox/>
        <div style={{display:"flex"}}>
          <NPSScore/>
          <SubmitButton/>
        </div>
      </div>
    </>
  )
}

export default App;
