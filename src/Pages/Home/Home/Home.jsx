import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Location from "../Location/Location";
import OurTeam from "../OurTeam/OurTeam";
import Services from "../Services/Services";

const Home = () => {
      return (
            <div>
                  {/* banner section */}
                  <Banner></Banner>

                  {/* About us Section */}
                  <AboutUs></AboutUs>

                  {/* Our services */}
                  <Services></Services>

                  {/* Location */}
                  <Location></Location>

                  {/* Our Team */}
                  <OurTeam></OurTeam>
            </div>
      );
};

export default Home;