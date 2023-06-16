import HomeBackground from "../../Components/HomePage/HomeBackground/HomeBackground";
import ImageSide from "../../Components/HomePage/ImageSide/ImageSide";
import SideBar from "../../Components/HomePage/SideBar/SideBar";
import TextSide from "../../Components/HomePage/TextSide/TextSide";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";
import "./HomePage.css";
function HomePage() {
  return (
    <section>
      <HomeBackground />
      <PageWrapper className="HomePage page">
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
