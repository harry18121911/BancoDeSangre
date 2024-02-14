import Header from "./Header";
import Sidebar from "./Sidebar";

type ContainerProps = {
    children: React.ReactNode; // children prop type
  };
  

const Layout = (props:ContainerProps) => {
  return (
    <>
        <div className="header"><Header/></div>
        <div className="row g-0">
          <div className="col-md-3"><Sidebar/></div>
          <div className="col-md-9">{props.children}</div>    
        </div>
    </>
  )
}

export default Layout
