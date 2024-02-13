import Header from "./Header";

type ContainerProps = {
    children: React.ReactNode; //👈 children prop typr
  };
  

const Layout = (props:ContainerProps) => {
  return (
    <>
        <div className="header"><Header/></div>
        <div className="content">{props.children}</div>    
    </>
  )
}

export default Layout