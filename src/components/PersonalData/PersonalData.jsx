import React, { useContext, useEffect, useState } from "react";
import WrapperComponent from "../WrapperComponent/WrapperComponent";
import gameDataContext from "../../utils/gameDataContext";
export default function PersonalData({ title }) {
  const context = useContext(gameDataContext); //hook接受context内容
  const [yAxisData, setYAxisData] = useState([]);
  const [xAxisData, setXAxisData] = useState([]);
  // console.log("socketDataInfo---->", context?.gameData?.data?.heroData);
  const reconstructedData = (data) => {
    let xAxisData = [];
    let yAxisData = [];
    const KDA = {
      name: "KDA",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    const appear_count = {
      name: "出场次数",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    const VICTORY_RATE = {
      name: "胜率",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    const prohibit_count = {
      name: "被禁场次",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    const PROHIBIT = {
      name: "被ban率",
      type: "bar",  
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    const AVERAGE_KILLS = {
      name: "平均击杀",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    data?.map((item) => {
      KDA.data.push(item.KDA);
      appear_count.data.push(item.appear_count);
      VICTORY_RATE.data.push(item.VICTORY_RATE);
      prohibit_count.data.push(item.prohibit_count);
      PROHIBIT.data.push(item.PROHIBIT);
      AVERAGE_KILLS.data.push(item.AVERAGE_KILLS);
    });
    data?.map((item) => {
      // console.log(item);
      yAxisData.push(item?.hero_name);
    });
    xAxisData = [
      ...xAxisData,
      KDA,
      appear_count,
      VICTORY_RATE,
      prohibit_count,
      PROHIBIT,
      AVERAGE_KILLS,
    ];
    setXAxisData(xAxisData);
    setYAxisData(yAxisData);
  };
  useEffect(() => {
    reconstructedData(context?.gameData?.data?.heroData);
  }, [context.gameData]);
  //个人数据的柱状图
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    grid: {
      left: "4%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: yAxisData,
    },
    series: xAxisData,
  };
  return (
    <WrapperComponent
      option={option}
      width={"100%"}
      height={550}
      title={title}
    ></WrapperComponent>
  );
}
