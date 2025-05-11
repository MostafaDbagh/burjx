

export const HeaderBackground  = ({t}) =>{
    return (
        <div className="background">
        <div className=" d-flex flex-column align-items-cetner justify-content-end padding-top-down pb-5">
          <h3 className="px-5 flexFontHeader text-white">
            {t("home.lets")} <br /> {t("home.explore")} <br />
            <span className=" text-bold-pink"> {t("home.toma")}</span> <br />
            {t("home.boutique")}
          </h3>
          <div className="flexFontDesc">
            <p className=" py-2 text-white px-3 ">{t("home.title")}</p>
            <button className="primary-cta">{t("home.cta")}</button>
          </div>
        </div>
      </div>
    )
}