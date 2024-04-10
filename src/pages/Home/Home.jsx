import React, { useEffect } from "react";
import PersonalData from "../../components/PersonalData/PersonalData";
import BasicData from "../../components/BasicData/BasicData";
import HeroRank from "../../components/HeroRank/HeroRank";
import WinLoseData from "../../components/WinLoseData/WinLoseData";
import Header from "../../components/Header/Header";
import GameHot from "../../components/GameHot/GameHot";
import PersonalKill from "../../components/PersonalKill/PersonalKill";
import PlayerRank from "../../components/PlayerRank/PlayerRank";
import ParticipatedTeam from "../../components/ParticipatedTeam/ParticipatedTeam";
import "./main.css";
export default function Home() {
  const initTheme = () => {
    const currentHours = new Date().getHours();
    localStorage.setItem(
      "selected-theme",
      currentHours >= 13 && currentHours <= 24 ? "dark" : "light"
    );
    localStorage.setItem(
      "selected-icon",
      currentHours >= 0 && currentHours < 13 ? "ri-moon-line" : "ri-sun-line"
    );
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");
    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );
      document
        .querySelector("#theme-button")
        .classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
          "ri-sun-line"
        );
    }
  };
  useEffect(() => {
    initTheme();
  });
  return (
    <div className="Home_container">
      <Header></Header>
      <div className="Home_content">
        <div className="Home_content_item">
          <PersonalData title={"英雄数据堆叠图"}></PersonalData>
          <HeroRank
            width={530}
            height={430}
            title={"英雄数据轮播图"}
          ></HeroRank>
        </div>
        <div className="Home_content_item">
          <div className="Home_content_basicData">
            <BasicData
              title={"KDA最高战队"}
              dataInfo={{ name: "广州TTG", value: 5.1 }}
            ></BasicData>
            <BasicData
              title={"胜率最高战队"}
              dataInfo={{ name: "重庆狼队", value: 75 }}
            ></BasicData>
            <BasicData
              title={"得分最高战队"}
              dataInfo={{ name: "深圳DYG", value: 728 }}
            ></BasicData>
            <BasicData
              title={"助攻平均次数最多选手"}
              dataInfo={{ name: "帆帆", value: 7.5 }}
            ></BasicData>
            <BasicData
              title={"KDA最高选手"}
              dataInfo={{ name: "帆帆", value: 12 }}
            ></BasicData>
            <BasicData
              title={"击杀最多选手"}
              dataInfo={{ name: "小度", value: 6.0 }}
            ></BasicData>
          </div>
          <WinLoseData title={"战队胜负数据"}></WinLoseData>
          <div className="Home_content_participatedTeam">
            <PersonalKill title={"战队击杀数据"}></PersonalKill>
          </div>
        </div>
        <div className="Home_content_item">
          <div className="Home_content_item_gamehot">
            <GameHot title={"比赛热度"} value={112921}></GameHot>
            <GameHot title={"参赛队伍"} value={18}></GameHot>
            <GameHot title={"奖池奖金"} value={69000000}></GameHot>
          </div>
          <PlayerRank
            width={450}
            height={400}
            title={"选手排行榜"}
          ></PlayerRank>
          <ParticipatedTeam
            title={"参赛战队"}
            width={450}
            height={480}
          ></ParticipatedTeam>
          {/* <ChampionData
            title={"lpl赛季总冠军"}
            width={450}
            height={480}
          ></ChampionData> */}
        </div>
      </div>
      <div className="Home_background"></div>
    </div>
  );
}
