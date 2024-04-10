import React, { useEffect } from "react";
import WrapperComponent from "../WrapperComponent/WrapperComponent";
import { Image } from "antd";
import "./main.css";
export default function BasicData({ title, dataInfo }) {
  useEffect(() => {
    console.log(title, dataInfo);
  }, []);
  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        radius: ["70%", "90%"],
        color: "#67E0E3",
        label: {
          normal: {
            position: "center",
          },
        },
        data: [
          {
            value: dataInfo?.value,
            name: dataInfo?.name,
            label: {
              normal: {
                formatter: dataInfo?.name + " \n" + dataInfo?.value + "",
                textStyle: {
                  fontSize: 20,
                  color: "hsl(230, 16%, 45%)",
                },
              },
            },
          },
        ],
      },
    ],
    backgroundColor: "transparent",
  };
  return (
    <div className="basicDataContainer">
      <WrapperComponent
        option={option}
        width={205}
        height={100}
        title={title}
      ></WrapperComponent>
      {/* <Image
        src="https://img.scoregg.com/z/2373870/p/219/1616252884226_100X100.png"
        width={50}
      ></Image> */}
    </div>
  );
}
