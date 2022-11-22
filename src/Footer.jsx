import React from "react";




function Footer(){

const Year = new Date();
let year = Year.getFullYear();

    return <footer>Copy Right {year}</footer>
};

export default Footer;