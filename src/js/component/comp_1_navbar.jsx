import React from "react";

export const comp_1_navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse" 
                id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">inicio</a>
                        <a className="nav-link" href="#">sobre nosotros</a>
                        <a className="nav-link" href="#">servicios</a>
                        <a className="nav-link disabled">contactanos</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}