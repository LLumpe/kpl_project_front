import React, { useContext, useEffect, useState } from "react";
import gameDataContext from "../../utils/gameDataContext";
import "./main.css";
import WrapperComponent from "../WrapperComponent/WrapperComponent";
export default function WinLoseData({ title }) {
  const context = useContext(gameDataContext); //hook接受context内容
  console.log(context?.gameData?.data?.teamData);
  const [xAxisData, setXAxisData] = useState([]);
  const [yAxisData, setYAxisData] = useState([]);
  const reconstructedData = (data) => {
    let xAxisData = [];
    data?.map((item) => {
      console.log(item);
      xAxisData.push(item.teamName);
    });
    console.log("xAxisData---->", xAxisData);
    setXAxisData(xAxisData);
    const victory = {
      name: "胜利",
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value;
        },
      },
      data: [],
    };
    const fail = {
      name: "失败",
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value;
        },
      },
      data: [],
    };
    const victoryRate = {
      name: "胜率",
      type: "line",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value;
        },
      },
      data: [],
    };
    data?.map((item) => {
      victory.data.push(item.win);
      fail.data.push(item.los);
      victoryRate.data.push(item.VICTORY_RATE);
    });
    setYAxisData([victory, fail, victoryRate]);
  };
  useEffect(() => {
    reconstructedData(context?.gameData?.data?.teamData);
  }, [context]);
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: ["胜利", "失败", "胜率"],
    },
    xAxis: [
      {
        type: "category",
        data: xAxisData,
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "胜利失败",
        min: 0,
        max: 20,
        interval: 5,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "胜率",
        min: 0,
        max: 100,
        interval: 5,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: yAxisData,
    // [
    //   {
    //     name: "胜利",
    //     type: "bar",
    //     tooltip: {
    //       valueFormatter: function (value) {
    //         return value;
    //       },
    //     },
    //     data: [
    //       2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
    //     ],
    //   },
    //   {
    //     name: "失败",
    //     type: "bar",
    //     tooltip: {
    //       valueFormatter: function (value) {
    //         return value;
    //       },
    //     },
    //     data: [
    //       2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
    //     ],
    //   },
    //   {
    //     name: "胜率",
    //     type: "line",
    //     yAxisIndex: 1,
    //     tooltip: {
    //       valueFormatter: function (value) {
    //         return value;
    //       },
    //     },
    //     data: [
    //       2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
    //     ],
    //   },
    // ],
  };
  return (
    <WrapperComponent
      option={option}
      width={"100%"}
      height={600}
      title={title}
    ></WrapperComponent>
  );
}
