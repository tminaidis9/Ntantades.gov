import NavBar from "../../Components/NavBar/NavBar";
import './Option1Page1.css';
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Progress_Bar from "../../Components/Progress_Bar/Progress_Bar";
import Back_Button from "../../Components/Back_Button/Back_Button"; 
import Front_Button from "../../Components/Front_Button/Front_Button"; 
import Info_Component from "../../Components/Info_Component/Info_Component";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes.js"; 

function Eisagogi() {
  
  const navigate = useNavigate();

  const handleBackClick = () => {
      navigate(Routes.Home);
  };

  const handleFrontClick = () => {
      navigate(Routes.ProsopikaStoixeia);
  };

  return (
    <div className="Some">
      <NavBar />
      <div className="Option1Page1">
        <div>
          <Breadcrumb />
          <Progress_Bar />
          <div className="info-component-container">
            <Info_Component />
          </div>
          <div className="buttonas-container">
            <div className="back-button">
              <Back_Button onClickHandler={handleBackClick} />
            </div>
            <div className="front-button">
              <Front_Button onClickHandler={handleFrontClick} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Eisagogi;

