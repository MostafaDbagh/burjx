import Navbar from "../component/navbar";

const Home = () => {
  const customLinks = [
    { to: "/", label: "الرئيسية" },
    { to: "/services", label: "الخدمات" },
    { to: "/contact", label: "تواصل معنا" },
  ];

  return (
      <Navbar links={customLinks} />
   
  );
};

export default Home;
