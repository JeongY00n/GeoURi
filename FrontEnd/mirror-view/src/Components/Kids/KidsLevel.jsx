import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.css";
import "./KidsLevel.css";
import Confetti from "./Confetti";
import { levelApi } from "../../Redux/modules/api";

const KidsLevel = () => {
  const level = useSelector((state) => state?.mirror?.level);
  const point = useSelector((state) => state?.mirror?.point);
  const levelUp = useSelector((state) => state?.mirror?.levelUp);
  const member_info = useSelector((state) => state?.mirror?.member);
  const memberKey = member_info?.memberKey;
  const serialNumber = "8DLL-44yh-x7vB-VuWK";

  // const memberKey = "fSBS-lCHb";
  // const mission = "hand_washing";
  // const requestBody = {
  //   serialNumber: serialNumber,
  //   memberKey: memberKey,
  //   mission: mission,
  // };

  // useEffect(() => {
  //   levelApi
  //     .getLevel(requestBody)
  //     .then((res) => {
  //       setLevel(res.data.data.lv);
  //       setPoint(res.data.data.exp);
  //       setLevelUp(res.data.data.levelUp);
  //       console.log(level);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (levelUp) {
  //     console.log("레벨업");

  // const script = document.createElement("script");
  // script.src =
  //   "https://tistory4.daumcdn.net/tistory/3134841/skin/images/confetti_v2.js";
  // script.async = true;
  // scriptEnd.current = script;
  // document.body.appendChild(script);

  // return () => {
  //   document.body.removeChild(scriptEnd.current);
  // };
  //   }
  // }, []);

  return (
    <div className="leveldiv">
      {levelUp && <Confetti />}
      <div className="chaimg">
        <img
          src={process.env.PUBLIC_URL + `/images/lv/lv${level}.png`}
          alt="캐릭터"
          id="levcha"
        />
        <ProgressBar id="levelBar" animated now={point} />
      </div>
    </div>
  );
};

export default KidsLevel;
