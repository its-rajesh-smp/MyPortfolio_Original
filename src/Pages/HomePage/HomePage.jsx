import HomeBackground from "../../Components/HomePage/HomeBackground/HomeBackground";
import ImageSide from "../../Components/HomePage/ImageSide/ImageSide";
import SideBar from "../../Components/HomePage/SideBar/SideBar";
import TextSide from "../../Components/HomePage/TextSide/TextSide";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";
import "./HomePage.css";
function HomePage() {
  return (
    <section className="HomePageSection page">
      <HomeBackground />
      <PageWrapper className="HomePage ">
        <SideBar />
        <div className="HomePage__container">
          <TextSide />
          <ImageSide />
        </div>
      </PageWrapper>
    </section>
  );
}

export default HomePage;
