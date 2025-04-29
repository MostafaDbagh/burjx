import ProductContainer from "../components/ourProduct/porductContainer";
import Subscribe from "../components/subscribe";
import { Search } from "../components/search";
import { useTranslation } from "react-i18next";
import { HeaderBackground } from "../components/ui/background";
import "./style.css";


const Home = ({ search, setSearch }) => {
  const { t } = useTranslation("home");

  return (
    <div>
       <HeaderBackground t={t}/>
      <Search setSearch={setSearch} />
      <ProductContainer search={search} setSearch={setSearch} />
      <Subscribe />
    </div>
  );
};

export default Home;
