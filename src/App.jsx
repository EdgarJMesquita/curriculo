import { AwesomeIcons } from './components/AwesomeIcons';
import linkedInIcon from './assets/images/linkedInIcon.svg';
import githubIcon from './assets/images/githubIcon.svg';
import './styles/style.scss';

function App() {
  return (
    <div className="responsive">
      <h1>Edgar Jonas Mesquita da Silva</h1>
      <h2>Contato</h2>
      <ul>
        <li>
          &#8226; 
          <a href="https://www.linkedin.com/in/edgar-jonas" target="_blank" without rel="noreferrer">
            <img className="small-icon" src={linkedInIcon} alt="linkedIn" />
            LinkedIn
          </a>
        </li>
        <li>
          &#8226;
          <a href="https://github.com/EdgarXongas" target="_blank" without rel="noreferrer">
            <img className="small-icon" src={githubIcon} alt="github" />
            Github
          </a>
        </li>
      </ul>

      <h2>Objetivo</h2>
      <ul>
        <li>&#8226; Conseguir meu primeiro trabalho ou estágio como programador.</li>
      </ul>

      <h2>Experiências</h2>
      <ul>
        <li>&#8226; 2017 - Operação Comercial - Americanas - emprego atual.</li>
      </ul>

      <h2>Educação</h2>
      <ul>
        <li>&#8226; 2020 - Curso Superior de Análise e Desenvolvimento de Sistemas - Faculdade CDL - cursando 3° semestre.</li>
      </ul>

      <h2>Educação Autodidata</h2>
      <ul>
        <li>&#8226; Desenvolvimento FrontEnd</li>
        <li>&#8226; HTML5/CSS3 responsivo</li>
        <li>&#8226; Javascript - ECMAScript 6</li>
        <li>&#8226; Typescript</li>
        <li>&#8226; React.js
          <svg id="small-react-icon" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.4387 36.0214C33.3922 36.0214 35.7865 33.3303 35.7865 30.0107C35.7865 26.6911 33.3922 24 30.4387 24C27.4852 24 25.0909 26.6911 25.0909 30.0107C25.0909 33.3303 27.4852 36.0214 30.4387 36.0214Z" fill="#61DAFB"/>
            <path id="atom3" d="M30.1818 39.64C44.6416 39.64 56.3636 35.4054 56.3636 30.1818C56.3636 24.9582 44.6416 20.7236 30.1818 20.7236C15.722 20.7236 4 24.9582 4 30.1818C4 35.4054 15.722 39.64 30.1818 39.64Z" stroke="#61DAFB" strokeWidth="2"/>
            <path id="atom2" d="M21.5244 34.9109C28.7543 46.7589 38.4914 54.2464 43.2727 51.6345C48.0541 49.0227 46.0691 37.3007 38.8392 25.4527C31.6093 13.6047 21.8722 6.11729 17.0909 8.7291C12.3096 11.3409 14.2945 23.0629 21.5244 34.9109Z" stroke="#61DAFB" strokeWidth="2"/>
            <path id="atom1" d="M21.5244 25.4528C14.2945 37.3008 12.3096 49.0228 17.0909 51.6346C21.8723 54.2464 31.6093 46.759 38.8392 34.911C46.0691 23.063 48.0541 11.341 43.2727 8.72915C38.4914 6.11734 28.7543 13.6048 21.5244 25.4528Z" stroke="#61DAFB" strokeWidth="2"/>
          </svg>
        </li>
        <li>&#8226; Sass</li>
        <li>&#8226; Firebase</li>
        <li>&#8226; UI &amp; UX básico</li>
        <li>&#8226; Integração com APIs</li>
        <li>&#8226; Figma</li>
      </ul>
      <AwesomeIcons />
    </div>
  );
}

export default App;

