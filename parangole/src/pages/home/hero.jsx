// import styled from "styled-components";
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="hero-container">
          <div className="hero-blocks">
            <div className="hero-block-item span-col3 item1">
              <div className="hero-content">
                <h1>Conheça a UP Fitness</h1>
                <p>
                  Transforme seu corpo, eleve sua mente:
                  <span>Entre em forma na nossa academia!</span>
                </p>
                <Link className="btn-alt" to="/cadastro">
                  Matricule-se
                </Link>
              </div>
            </div>
            <div className="hero-block-item span-col2 span-row2 item2"></div>
            <div className="hero-block-item item3"></div>
            <div className="hero-block-item span-col2 item4"></div>
            <div className="hero-block-item span-col2 item5"></div>
            <div className="hero-block-item span-col3 item6"></div>
          </div>
        </div>
      </div>
    </>
  );
}