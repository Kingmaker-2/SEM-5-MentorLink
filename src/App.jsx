import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Mentor on Your Chosen Domain",
  subtitle:
    "At MentorLink, we connect students with experienced alumni mentors who offer personalized guidance in your chosen domain. Our platform provides seamless video calls and real-time chat features, allowing you to receive tailored advice and support from industry professionals anytime, anywhere. With our trusted alumni network, you gain direct access to expert knowledge and career insights, helping you grow and succeed in your academic and professional journey.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Mentors to Serve You for Help",
  subtitle:
    "Our mentors are successful alumni from diverse fields, bringing years of real-world experience and expertise. Each mentor is carefully selected to ensure they have the knowledge and qualifications to guide you in your specific area of interest. Whether you need career advice, academic support, or professional insights, our mentors are dedicated to helping you achieve your goals with personalized, high-quality mentorship",
  link: "#",
};

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
