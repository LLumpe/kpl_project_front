import React, { useState, useContext, useEffect } from "react";
import WrapperComponent from "../WrapperComponent/WrapperComponent";
import gameDataContext from "../../utils/gameDataContext";
export default function PersonalKill({ title }) {
  const context = useContext(gameDataContext); //hook接受context内容
  const [yAxisData, setYAxisData] = useState([]);
  const [xAxisData, setXAxisData] = useState([]);
  // console.log("socketDataInfo---->", context?.gameData?.data?.heroData);
  const reconstructedData = (data) => {
    const totalKill = {
      name: "总击杀",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    const totalDeath = {
      name: "总死亡",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    const totalAssists = {
      name: "总助攻",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    const xAxisData = [];
    data?.map((item) => {
      totalKill.data.push(item.total_kills);
      totalDeath.data.push(item.total_deaths);
      totalAssists.data.push(item.total_assists);
      xAxisData.push(item.teamName);
    });
    setXAxisData(xAxisData);
    setYAxisData([totalKill, totalDeath, totalAssists]);
  };
  useEffect(() => {
    reconstructedData(context?.gameData?.data?.teamData);
  }, [context]);
  //个人数据的柱状图
  const option = {
    title: {
      text: "Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["总击杀", "总死亡", "总助攻"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: yAxisData,
  };
  return (
    <WrapperComponent
      option={option}
      width={"100%"}
      height={280}
      title={title}
    ></WrapperComponent>
  );
}
