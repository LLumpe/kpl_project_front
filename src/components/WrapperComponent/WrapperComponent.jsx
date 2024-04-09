import React, { useRef, useEffect } from "react";
import "./main.css";
import * as echarts from "echarts";
export default function WrapperComponent({
  option,
  width,
  height,
  title,
}) {
  const main = useRef(null);
  useEffect(() => {
    const chartDom = main.current;
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
  }, []);
  return (
    <div className="main" style={{ width: width, height: height }}>
      <div className="title">{title}</div>
      <div className="content" ref={main}></div>
    </div>
  );
}