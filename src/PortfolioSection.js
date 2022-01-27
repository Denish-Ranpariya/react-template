import React from "react";
import ProjectContainer from "./ProjectContainer";
import "./style.css";

const PortfolioSection = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <ProjectContainer imageSource={"./assets/img/portfolio/cabin.png"} />
                    <ProjectContainer imageSource={"./assets/img/portfolio/cake.png"} />
                    <ProjectContainer imageSource={"./assets/img/portfolio/circus.png"} />
                    <ProjectContainer imageSource={"./assets/img/portfolio/game.png"} />
                    <ProjectContainer imageSource={"./assets/img/portfolio/safe.png"} />
                    <ProjectContainer imageSource={"./assets/img/portfolio/submarine.png"} /> 
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;