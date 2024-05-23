import { Layout, Menu, Grid } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import Whatsapp from 'comps/Whatsapp';
import PageFooter from 'comps/PageFooter';
import { useEffect } from 'react';

const PageLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { Header, Content } = Layout;

  const pathname = window.location.pathname;
  const isHome = pathname !== '/club' && pathname !== '/penca';
  const isPenca = pathname === '/penca';

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const smallScreen = ['xs', 'sm', 'md'].includes(currentBreakpoint);

  useEffect(() => {
    if (location.hash) {
      document.querySelector(`${location.hash}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [location.hash])

  const onGoToSection = sectionId => {
    document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
    });
  };

  const onClick = (e) => {
    console.log('click ', e);
    onGoToPage(e.key)
  };

  const onGoToPage = pathname => navigate(pathname);
  const menuItems = [
    {
      key: '/',
      label: 'Inicio',
    }, {
      key: '/club',
      label: 'El club',
    }, {
      key: '/directiva',
      label: 'Directiva',
    }, {
      key: '/socios',
      label: 'Socios',
    }, {
      key: '/#activities',
      label: 'Actividades',
    }, {
      key: '/#times',
      label: 'Horarios',
    }, {
      key: '/#staff',
      label: 'Staff',
    }, {
      key: '/#contact',
      label: 'Contacto',
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          zIndex: 20,
          width: '100%',
          position: 'fixed',
          background: '#171742',
          boxShadow: '1px 1px 9px black',
          padding: '0',
        }
      }>
        <div className='header-content'>
          <div className="logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{
              color: '#fff',
              justifyContent: 'end',
              background: '#171742',
              borderBottom: 'none'
            }}
            items={menuItems}
            onClick={onClick}
          >
          </Menu>
        </div>
      </Header>

      <Content className="site-layout" style={{ padding: '0', margin: '64px auto 0 auto', width: '100vw'}}>
        {children}
        <PageFooter />
        <Whatsapp />
      </Content>
    </Layout>
  )
};

export default PageLayout;