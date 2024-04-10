import React, { useContext, useEffect, useState } from "react";
import "./main.css";
import gameDataContext from "../../utils/gameDataContext";
import { Image } from "antd";
export default function ParticipatedTeam({ title }) {
  const context = useContext(gameDataContext);
  const [pickedTeamInfo, setPickedTeamInfo] = useState(null);
  const teamCheck = (res) => {
    setPickedTeamInfo(res);
  };
  useEffect(() => {
    setPickedTeamInfo(context?.gameData?.data?.participatedTeamData[0]);
  }, [context]);
  const teamList = context?.gameData?.data?.participatedTeamData.map((item) => {
    return (
      <li
        className="participated_team_item"
        key={item.team_id}
        onClick={() => {
          teamCheck(item);
        }}
      >
        <Image width={60} src={item.team_image} preview={false}></Image>
        <div className="participated_team_title">
          <span>{item.team_name}</span>
        </div>
      </li>
    );
  });
  return (
    <div className="participatedTeam">
      <div className="participated_title">
        <span>{title}</span>
      </div>
      <ul className="participated_team">{teamList}</ul>
      <div className="participated_team_info">
        <div className="participated_team_left">
          <Image src={pickedTeamInfo?.team_image} width={100}></Image>
          <span>{pickedTeamInfo?.team_name}</span>
        </div>
        <div className="participated_team_right">
          <div className="participated_team_right_KDA">
            <h1>{pickedTeamInfo?.KDA}</h1>
            <span>KDA</span>
          </div>
          <ul className="participated_team_right_container">
            <li className="participated_team_right_item">
              <div>
                <h2>{pickedTeamInfo?.f_score}</h2>
                <span>总得分</span>
              </div>
            </li>
            <li className="participated_team_right_item">
              <div>
                <h2>{pickedTeamInfo?.game_time}</h2>
                <span>比赛时长</span>
              </div>
            </li>
            <li className="participated_team_right_item">
              <div>
                <h2>{pickedTeamInfo?.totalDamageDealtToChampions}</h2>
                <span>分均输出</span>
              </div>
            </li>
            <li className="participated_team_right_item">
              <div>
                <h2>{pickedTeamInfo?.money}</h2>
                <span>经济</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
