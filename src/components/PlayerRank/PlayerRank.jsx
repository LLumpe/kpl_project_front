import React, { useContext } from "react";
import { Table, Image } from "antd";
import gameDataContext from "../../utils/gameDataContext";
import "./main.css";

const columns = [
  {
    title: "选手名称",
    dataIndex: "player_name",
    key: "player_name",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "选手姓名",
    dataIndex: "player_chinese_name",
    key: "player_chinese_name",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "选手图像",
    dataIndex: "player_image",
    key: "player_image",
    align: "center",
    render: (text) => <Image width={50} src={text}></Image>,
  },
  {
    title: "MVP次数",
    dataIndex: "MVP",
    key: "MVP",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "KDA",
    dataIndex: "KDA",
    key: "KDA",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "国家",
    dataIndex: "country_image",
    key: "country_image",
    align: "center",
    render: (text) => (text ? <Image width={50} src={text}></Image> : "-"),
  },
  {
    title: "所属队伍",
    dataIndex: "team_name",
    key: "team_name",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "比赛位置",
    dataIndex: "position",
    key: "position",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "总击杀",
    key: "total_kills",
    dataIndex: "total_kills",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "总死亡",
    key: "total_deaths",
    dataIndex: "total_deaths",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "总助攻",
    key: "total_assists",
    dataIndex: "total_assists",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "平均击杀",
    key: "AVERAGE_KILLS",
    dataIndex: "AVERAGE_KILLS",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "平均死亡",
    key: "AVERAGE_DEATHS",
    dataIndex: "AVERAGE_DEATHS",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
  {
    title: "平均助攻",
    key: "AVERAGE_ASSISTS",
    dataIndex: "AVERAGE_ASSISTS",
    align: "center",
    render: (text) => (text ? <a>{text}</a> : "-"),
  },
];
const PlayerRank = ({ width, height, title }) => {
  const context = useContext(gameDataContext); //hook接受context内容
  console.log("playerData---->", context?.gameData?.data?.playerData);
  return (
    <div className="table" style={{ width: width, height: height }}>
      <div className="title_playerRank">
        <span>{title}</span>
      </div>
      <div className="table_playerRank">
        <Table
          columns={columns}
          dataSource={context?.gameData?.data?.playerData}
          className="table"
          scroll={{ x: 1200, y: 260 }}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default PlayerRank;
