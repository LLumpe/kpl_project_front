import React, { useContext } from "react";
import { Table, Image } from "antd";
import gameDataContext from "../../utils/gameDataContext";
import "./main.css";

const columns = [
  {
    title: "英雄名",
    dataIndex: "hero_name",
    key: "hero_name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "英雄图像",
    key: "hero_image",
    dataIndex: "hero_image",
    render: (text) => <Image width={50} src={text}></Image>,
  },
  {
    title: "位置",
    dataIndex: "position_name",
    key: "position_name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "胜利场次",
    dataIndex: "victory_count",
    key: "victory_count",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "平均助攻数",
    key: "AVERAGE_ASSISTS",
    dataIndex: "AVERAGE_ASSISTS",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "平均死亡数",
    key: "AVERAGE_DEATHS",
    dataIndex: "AVERAGE_DEATHS",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "KDA",
    key: "KDA",
    dataIndex: "KDA",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "胜率",
    key: "VICTORY_RATE",
    dataIndex: "VICTORY_RATE",
    render: (text) => <a>{text}</a>,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const HeroRank = ({ width, height, title }) => {
  const context = useContext(gameDataContext); //hook接受context内容
  console.log("socketDataInfo---->", context?.gameData?.data?.heroData);
  return (
    <div className="table" style={{ width: width, height: height }}>
      <div className="title_heroRank">
        <span>{title}</span>
      </div>
      <div className="table_heroRank">
        <Table
          columns={columns}
          dataSource={context?.gameData?.data?.heroData}
          className="table"
          scroll={{ x: 700, y: 300 }}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default HeroRank;
