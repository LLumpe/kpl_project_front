import React, { useEffect } from "react";
import PersonalData from "../../components/PersonalData/PersonalData";
import BasicData from "../../components/BasicData/BasicData";
import TeamRank from "../../components/TeamRank/TeamRank";
import WinLoseData from "../../components/WinLoseData/WinLoseData";
import Header from "../../components/Header/Header";
import GameHot from "../../components/GameHot/GameHot";
import ScrollReveal from "scrollreveal";
import ChampionData from "../../components/ChampionData/ChampionData";
import PersonalKill from "../../components/PersonalKill/PersonalKill";
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
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1700,
      delay: 200,
    });
    sr.reveal(".header");
    sr.reveal(".Home_content", { delay: 1000 });
  });
  return (
    <div className="Home_container">
      <Header></Header>
      <div className="Home_content">
        <div className="Home_content_item">
          <PersonalData title={"个人数据堆叠图"}></PersonalData>
          <TeamRank width={600}></TeamRank>
          <TeamRank width={600}></TeamRank>
        </div>
        <div className="Home_content_item">
          <div className="Home_content_basicData">
            <BasicData title={"TES 胜率最高"}></BasicData>
            <BasicData title={"JDG 击杀最高"}></BasicData>
            <BasicData title={"SN 插眼最多"}></BasicData>
            <BasicData title={"V5y4 KDA最高"}></BasicData>
            <BasicData title={"IGTheShy 死亡最多"}></BasicData>
            <BasicData title={"TheSknight 击杀最高"}></BasicData>
          </div>
          <WinLoseData title={"战队胜负数据"}></WinLoseData>
          <PersonalKill title={"个人击杀统计数据"}></PersonalKill>
        </div>
        <div className="Home_content_item">
          <div className="Home_content_item_gamehot">
            <GameHot title={"比赛热度"} value={112921}></GameHot>
            <GameHot title={"参赛队伍"} value={23}></GameHot>
            <GameHot title={"奖池奖金"} value={22500000}></GameHot>
          </div>
          <TeamRank width={446}></TeamRank>
          <ChampionData title={"lpl赛季总冠军"}></ChampionData>
          <div className="Home_content_footer"></div>
        </div>
      </div>
      <div className="Home_background"></div>
    </div>
  );
}
