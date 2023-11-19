import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mr-auto"></div>
                <div class="navbar-nav">
                    <a class="nav-link text-dark" href="#login">login</a>
                    <a class="nav-link text-dark" href="#registration">registration</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;