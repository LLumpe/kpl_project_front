import React from "react";
import CountUp from "react-countup";
import "./main.css";
import { Statistic } from "antd";
const formatter = (value) => <CountUp end={value} separator="," />;
export default function GameHot({ title, value }) {
  return (
    <div className="GameHot">
      <div className="title">{title}</div>
      <Statistic value={value} precision={2} formatter={formatter} />
    </div>
  );
}
