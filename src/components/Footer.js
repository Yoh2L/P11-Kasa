import React from "react";
import footerImg from "../assets/Kasa_footer.png";

const Footer = () => {
	return (
		<div className="footer">
			<img src={footerImg} alt="Logo Kasa" />
			<div className="footer-text">© 2020 Kasa. All rights reserved</div>
		</div>
	);
};

export default Footer;
