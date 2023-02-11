// import ReactDOM from "react-dom";
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const EE = () => {
    return (
        <>
          <h1 style={{ textAlign: "center", marginLeft: "178px"}}>SEMESTER 3</h1>
          <div className="EEApp">
            <Carousel breakPoints={breakPoints}>
              <Item>Analog Electronics (ECC331)</Item>
              <Item>Network Analysis and Synthesis (EEC301)</Item>
              <Item>Electrical and Electronics Measurements(EEC302)</Item>
              <Item>Mathematics-III(MAC331)</Item>
              <Item>Electromagnetic Field Theory(PHC332)</Item>
            </Carousel>
          </div>

          <h1 style={{ textAlign: "center", marginLeft: "178px"}}>SEMESTER 4</h1>
          <div className="EEApp">
            <Carousel breakPoints={breakPoints}>
              <Item>Power Systems - I (EEC401)</Item>
              <Item>Electrical Machines - I (EEC402)</Item>
              <Item>Digital Electronics(EEC403)</Item>
              <Item>Fluid and Thermal Engineering(MEC431)</Item>
            </Carousel>
          </div>

          <h1 style={{ textAlign: "center", marginLeft: "178px"}}>SEMESTER 5</h1>
          <div className="EEApp">
            <Carousel breakPoints={breakPoints}>
              <Item>Electrical Machines - II(EEC501)</Item>
              <Item>Control Systems(EEC502)</Item>
              <Item>Power Systems - II(EEC503)</Item>
              <Item>Power Electronics(EEC504)</Item>
            </Carousel>
          </div>

          <h1 style={{ textAlign: "center",  marginLeft: "178px"}}>SEMESTER 6</h1>
          <div className="EEApp">
            <Carousel breakPoints={breakPoints}>
              <Item>Advanced Power Systems (ECC331)</Item>
              <Item>Microprocessor and Microcontroller (EEC301)</Item>
              <Item>Depth Elective-I()</Item>
              <Item>Depth Elective-II()</Item>
            </Carousel>
          </div>

          <h1 style={{ textAlign: "center", marginLeft: "178px"}}>SEMESTER 7</h1>
          <div className="EEApp">
            <Carousel breakPoints={breakPoints}>
              <Item>Depth Elective - 4</Item>
              <Item>Depth Elective - 5</Item>
              <Item>Depth Elective - 3</Item>
              <Item>Open Elective - 3</Item>
            </Carousel>
          </div>

          <h1 style={{ textAlign: "center",marginLeft: "178px"}}>SEMESTER 8</h1>
          <div className="EEApp">
            <Carousel breakPoints={breakPoints}>
              <Item>Depth Elective - 6</Item>
              <Item>Open Elective - 4</Item>
              <Item>Open Elective - 5</Item>
            </Carousel>
          </div>
        </>
      );
    }

export default EE;