import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-black/5 bg-bgLight">
      <div className="container px-4 py-12 mx-auto">
        <p className="text-paraVal text-center text-sm font-mono uppercase tracking-widest">
          Built by <a href="https://github.com/Putrapraditya" target="_blank" rel="noreferrer" className="text-textLight font-bold hover:text-redval transition-colors">Putra Praditya Hariyantoro</a> 
          <span className="mx-4 text-black/10">|</span>
          Inspired by <a href="https://endfield.gryphline.com/id-id" target="_blank" rel="noreferrer" className="text-textLight font-bold hover:text-redval transition-colors uppercase">Endfield</a>
          <span className="mx-4 text-black/10">|</span>
          <a href="https://playvalorant.com/id-id/" target="_blank" rel="noreferrer" className="text-textLight font-bold hover:text-redval transition-colors uppercase">Valorant</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
