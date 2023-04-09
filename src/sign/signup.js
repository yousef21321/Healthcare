// import loc from './images/location.svg'
import myImage4 from "./patient_delivery_mask.svg";
import Footer from "../shared/Footer";
// import pharma from './images/pharma.png'
// import medicine from './images/medicine.png'
import './signup.css';
import Header from "../shared/Header";

const signUp = () => {
    return ( 
        <>
        <Header/>
        <div className="_2I6S">
  <div className="_1M6m">
    <div className="_3q9I">
      <div className="_1rd9 _3630">Prescriptions delivered. Fast.</div>
      <div className="kSoG">
        <span className="_2L0C">
          Get your delivery in as little as 2 hours.
        </span>
      </div>
      <div className="t1vT">
        <button type="submit" className="_2ouf">
          <a href="/signup2"> <span className="_3XAT">Get started →</span></a>
        </button>
      </div>
    </div>
    <div className="_3XEH">
      <img className="IziK" src={myImage4} alt="My Image" />

    </div>
  </div>
</div>

        
    <Footer/>

    </>
     );
}
 
export default signUp;