//arrow function called Layout
import Header from './header';
import Footer from './footer';
import GridLines from './grid-lines';
const Layout = ({ children }) => {
  return (
    <div>
      <GridLines />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
