//arrow function called Layout
import Header from './header';
import Footer from './footer';
const Layout = ({ children }) => {
  return (
    <div className='bg-offwhite'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
