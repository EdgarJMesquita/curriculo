import React from 'react';
import { AwesomeIcons } from '../../components/AwesomeIcons';
import linkedInIcon from '../../assets/images/linkedInIcon.svg';
import githubIcon from '../../assets/images/githubIcon.svg';
import awsIcon from '../../assets/images/aws.svg';
import xCodeIcon from '../../assets/images/xcode.svg';
import androidStudioIcon from '../../assets/images/android_studio.svg';
import '../../styles/style.scss';
import { ReactIconAnimation } from '../../components/ReactIconAnimation';

export function Home() {
  return (
    <div className="responsive">
      <h1>Edgar Jonas</h1>
      <h2>Contato</h2>
      <ul>
        <li>
          &#8226;
          <a
            href="https://www.linkedin.com/in/edgar-jonas"
            target="_blank"
            rel="noreferrer"
          >
            <img className="small-icon" src={linkedInIcon} alt="linkedIn" />
            LinkedIn
          </a>
        </li>
        <li>
          &#8226;
          <a
            href="https://github.com/EdgarJMesquita"
            target="_blank"
            rel="noreferrer"
          >
            <img className="small-icon" src={githubIcon} alt="github" />
            Github
          </a>
        </li>
      </ul>

      {/* <h2>Objetivo</h2>
      <ul>
        <li>&#8226; Aprender novas tecnologias.</li>
      </ul> */}

      <h2>Experiências</h2>
      <ul>
        <li>
          &#8226; 2021 até agora - Programador Javascript -
          <a href="https://mtechsp.com.br" target="_blank" rel="noreferrer">
            <img
              width={20}
              style={{ margin: '0 0.4rem' }}
              src="https://mtechsp.com.br/wp-content/uploads/2021/12/cropped-icone-192x192.png"
            />
            Mtech
          </a>
        </li>
      </ul>

      <h2>Educação</h2>
      <ul>
        <li>
          &#8226; 2020 - Curso Superior de Análise e Desenvolvimento de Sistemas
          - Faculdade CDL - cursando 5° semestre.
        </li>
      </ul>

      <h2>Conhecimentos</h2>
      <ul>
        <li>&#8226; Javascript</li>
        <li>&#8226; Typescript</li>

        <li>&#8226; Mobile</li>
        <ul style={{ paddingLeft: '1rem' }}>
          <li>&#8226; React-Native</li>
          <li>&#8226; Expo</li>
          <li>
            &#8226; Android Studio
            {/* <img
              className="small-icon"
              src={androidStudioIcon}
              alt="android studio"
            /> */}
          </li>
          {/* androidStudioIcon */}
          <li>
            &#8226; XCode(MacOS Monterey)
            {/* <img className="small-icon" src={xCodeIcon} alt="xcode" /> */}
          </li>
          <li>&#8226; Push Notifications(FCM e APNs)</li>
          <li>&#8226; MapBox</li>
        </ul>
        <li>&#8226; FrontEnd</li>
        <ul style={{ paddingLeft: '1rem' }}>
          <li>
            &#8226; ReactJS <ReactIconAnimation />
          </li>
          <li>&#8226; HTML5</li>
          <li>&#8226; CSS3</li>
          <li>&#8226; Styled-Components</li>
        </ul>
        <li>&#8226; BackEnd</li>

        <ul style={{ paddingLeft: '1rem' }}>
          <li>&#8226; NodeJS</li>
          <li>&#8226; Express</li>
          <li>&#8226; TypeORM</li>
          <li>&#8226; Prisma</li>
          <li>&#8226; MySQL</li>
        </ul>

        <li>&#8226; Integração com APIs</li>
        <li>&#8226; Figma - básico.</li>
      </ul>

      <h2>Certificações</h2>
      <ul>
        <li>
          &#8226;
          <a
            href="https://www.credly.com/badges/1b82e4d6-8076-46f3-bcd5-56f977ab044d/linked_in?t=rdwn4h"
            target="_blank"
            rel="noreferrer"
          >
            <img className="small-icon" src={awsIcon} alt="aws" />
            AWS Academy Graduate - AWS Academy Cloud Foundations
          </a>
        </li>
      </ul>

      <AwesomeIcons />
    </div>
  );
}
