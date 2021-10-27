import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";

import { userData } from "../../dummyData.js";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
};

export default Home;
