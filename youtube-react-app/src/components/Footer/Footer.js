import MenuList from '../MenuList/MenuList';

// Fn comp with anonymous function
const Footer = function () {
  const copyrightYear = new Date().getFullYear();
  const developerName = 'Sivagiri';

  // must return jsx
  return (
    <footer className='text-center'>
      <hr />
      <MenuList />
      <p>
        Copyright {copyrightYear} | {developerName}
      </p>
    </footer>
  );
};

export default Footer;
