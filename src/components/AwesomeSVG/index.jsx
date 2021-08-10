import cssIcon from '../../assets/images/cssIcon.svg';
import htmlIcon from '../../assets/images/htmlIcon.svg';
import reactIcon from '../../assets/images/reactIcon.svg';
import javascriptIcon from '../../assets/images/javascriptIcon.svg';
import typeScriptIcon from '../../assets/images/typescriptIcon.svg';
import sassIcon from '../../assets/images/sassIcon.svg';
import firebaseIcon from '../../assets/images/firebaseIcon.svg';
import figmaIcon from '../../assets/images/figmaIcon.svg';
import '../../animations/index';
import './style.scss';

export function AwesomeSVG(){
  return(
    <div className="icons-container">
      <img className="icon" src={htmlIcon} alt="HTML" />
      <img className="icon" src={cssIcon} alt="CSS" />
      <img className="icon" src={javascriptIcon} alt="javascript" />
      <img className="icon" src={typeScriptIcon} alt="typescript" />
      <img className="icon" src={reactIcon} alt="react" />
      <img className="icon" src={sassIcon} alt="sass" />
      <img className="icon" src={firebaseIcon} alt="firebase" />
      <img className="icon" src={figmaIcon} alt="figma" />
    </div>
  )
}