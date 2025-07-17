import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center border-t border-slate-500 p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Rafi Shariar</p>
  </aside>
</footer>
            
        </div>
    );
};

export default Footer;