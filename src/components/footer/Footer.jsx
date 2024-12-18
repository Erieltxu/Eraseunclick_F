import React from "react";
import "./footer.css";
import Facebook from "../../../public/icons/Facebook.svg";
import TwitterX from "../../../public/icons/TwitterX.svg";
import Instagram from "../../../public/icons/Instagram.svg";
import YouTube from "../../../public/icons/YouTube.svg";


function Footer() {
    return (
        <>
            <section className="footerWrapp">
                <div className="imgFooterContainer">
                    <img src={Facebook} alt="Facebook logo" />
                    <img src={TwitterX} alt="TwitterX logo" />
                    <img src={Instagram} alt="Instagram logo" />
                    <img src={YouTube} alt="Youtube logo" />
                </div>
                <div>
                    <p className="footerP">© Copyright 2024</p>
                </div>
            </section>
        </>
    )
};

export default Footer;