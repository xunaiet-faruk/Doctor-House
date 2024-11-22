import Aboutus from "@/components/Home/AboutUs/Aboutus";
import Banner from "@/components/Home/Banner/Banner";
import Expert from "@/components/Home/Expert/Expert";
import Feedback from "@/components/Home/Feedback/Feedback";
import Info from "@/components/Home/Personalnfo/Info";


const Homepage = () => {
  return (
    <div>
     <Banner/>
     <Aboutus/>
     <Info/>
     <Feedback/>
     <Expert/>
   
    </div>
  );
};

export default Homepage;