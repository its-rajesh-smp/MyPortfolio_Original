import { HomePageBackgroundConfig } from "../../Backgrounds/HomePageBackgroundConfig";
import Background from "../../Components/Background/Background";
import ImageSide from "../../Components/HomePage/ImageSide/ImageSide";
import SideBar from "../../Components/HomePage/SideBar/SideBar";
import TextSide from "../../Components/HomePage/TextSide/TextSide";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";
import "./HomePage.css";
function HomePage() {
  return (
    <section className="HomePageSection">
      <Background config={HomePageBackgroundConfig} />
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
