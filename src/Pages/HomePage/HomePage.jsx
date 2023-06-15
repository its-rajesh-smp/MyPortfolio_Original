import ImageSide from "../../Components/HomePage/ImageSide/ImageSide";
import SideBar from "../../Components/HomePage/SideBar/SideBar";
import TextSide from "../../Components/HomePage/TextSide/TextSide";
import "./HomePage.css";
function HomePage() {
  return (
    <section className="HomePage page">
      <SideBar />
      <div className="HomePage__container">
        <TextSide />
        <ImageSide />
      </div>
    </section>
  );
}

export default HomePage;
