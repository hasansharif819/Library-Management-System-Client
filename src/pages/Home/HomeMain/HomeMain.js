import React from "react";
import Button from "../../../components/UI/Button/Button";
import homeVideo from "../../../image/kay2g9fc.mp4";
import classes from "./HomeMain.module.css";
import { Link } from 'react-router-dom';
const HomeMain = () => {
  return (
    <div className={`${classes.homeMain}`}>
      <div className="container ">
      <div className="row">
        <div className={`col-md-6 mb-4 ${classes.video}`}>
          <video
            loop={true}
            autoPlay={true}
            autoplaytimeout={10000}
            autoplayhoverpause='true'
            muted={true}
          >
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
        <div className="col-md-6">
          <div className={`${classes.titleBar}`}></div>
          <div className={`${classes.text} ms-5`}>
            <div>
              <h1>
                IST <br /> Library Management <br /> System
              </h1>
              <p>
                Institute of Science and Technology is equipped with a
                well-maintained library<br /> housed with books related to business,
                science and technology, including the  <br />latest trends. With around
                20,000 books and journals relevant to the curriculum  <br /> of the
                courses offered at Institute of Science and Technology.
              </p>
            </div>
            <Button className={`${classes.button}`} >
            <Link to="/library">Access IST Library</Link>
              </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeMain;
