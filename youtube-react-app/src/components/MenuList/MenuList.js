// Functional Component with Arrow Function
import MenuItem from './MenuItem/MenuItem';

const MenuList = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Video',
      url: '/video'
    },
    {
      id: 3,
      title: 'Hoc Demo',
      url: '/hoc-demo'
    },
    {
      id: 4,
      title: 'About Us',
      url: '/about-us'
    },
    {
      id: 5,
      title: 'Contact Us',
      url: '/contact-us'
    },
    {
      id: 6,
      title: 'Gallery',
      url: '/gallery-page'
    },
    {
      id: 7,
      title: 'Hooks Demo',
      url: '/hooks-demo'
    },
    {
      id: 8,
      title: 'Shop',
      url: '/shop'
    },
    {
      id: 9,
      title: 'Unit Testing',
      url: '/unit-testing'
    }
  ];

  return (
    <ul className='navbar-nav me-auto mb-2 mb-md-0'>
      {menuItems.map((menu) => {
        console.log(menu);
        return <MenuItem key={menu.id} {...menu}></MenuItem>;
      })}
    </ul>
  );
};

export default MenuList;
