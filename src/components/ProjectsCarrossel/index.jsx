import React, { useState } from 'react';
import githubIcon from '../../assets/images/githubIcon.svg';

const positions = [0, -51.5];

export function ProjectsCarrossel() {
  const [index, setIndex] = useState(0);
  const currentPosition = `${positions[index]}%`;

  function handleCarrossel(newIndex) {
    const updatedIndex = index + newIndex;
    if (updatedIndex < 0) return;
    if (updatedIndex > positions.length) return;
    setIndex(updatedIndex);
  }

  return (
    <>
      <h2>Projetos</h2>
      <div
        style={{
          width: '100%',
          height: '620px',
          overflow: 'hidden',
          borderRadius: '15px',
          backgroundColor: '#373747',
          padding: '15px',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '200%',
            height: '620px',
            gap: '15px',
            overflowX: 'hidden',
            overflowY: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            translate: currentPosition,
            transition: 'translate 0.5s',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              Casa da Taça
            </p>
            <video
              width={250}
              autoPlay={true}
              muted={true}
              loop={true}
              style={{ borderRadius: '15px', marginTop: '10px' }}
            >
              <source src="/videos/CasaDaTaca.mp4" type="video/mp4" />
            </video>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '5px',
              }}
            >
              <a
                href="https://github.com/EdgarJMesquita/rn-casa-da-taca"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="small-icon"
                  style={{ height: '15px', marginRight: '5px' }}
                  src={githubIcon}
                  alt="github"
                />
              </a>
            </div>
          </div>

          <div
            style={{
              borderRadius: '15px',
              backgroundColor: '#373747',
              padding: '15px',
            }}
          >
            <div>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                MoveIt
              </p>
            </div>
            <iframe
              width={500}
              height={550}
              style={{
                borderRadius: '15px',
                marginTop: '10px',
                overflow: 'hidden',
                overflowY: 'hidden',
              }}
              src="https://edy-moveit.vercel.app/"
            ></iframe>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '5px',
              }}
            >
              <a
                href="https://github.com/EdgarJMesquita/react-nlw-moveit"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="small-icon"
                  style={{ height: '15px', marginRight: '5px' }}
                  src={githubIcon}
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
        <button
          style={{
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'rgba(0,0,0,.1)',
            position: 'absolute',
            top: '50%',
            color: '#FFFFFF',
            transform: 'translateY(-50%)',
          }}
          onClick={() => handleCarrossel(-1)}
        >
          &lt;
        </button>
        <button
          style={{
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'rgba(0,0,0,.1)',
            position: 'absolute',
            top: '50%',
            right: '0%',
            color: '#FFFFFF',
            transform: 'translateY(-50%)',
            marginRight: '15px',
          }}
          onClick={() => handleCarrossel(1)}
        >
          &gt;
        </button>
      </div>
    </>
  );
}
