import React, { useState, useEffect } from "react";

import CLASSES from "../Styles/classes";

import Avatar from "boring-avatars";

import useFetch from "../hooks/useFetch";

import { fetchUserInfo } from "../API/http";

function playerAvatar(userName: string, size: number) {
  const variant = "beam";
  const colors = ["#2473ce", "#6aa5e7", "#062f64"];

  return (
    <Avatar name={userName} size={size} variant={variant} colors={colors} />
  );
}

const UserInfo: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const avatarSize = screenWidth < 640 ? 45 : 60;

  const { loading, error, data: userInfo } = useFetch(fetchUserInfo, {});

  const userName = userInfo?.name?.firstname || "Guest";

  if (loading)
    return (
      <p className={CLASSES.MAIN_PAGE.UserInfo_loadingOrError}>
        Loading User...
      </p>
    );

  if (error) {
    alert(`Error: ${error.message}`);

    return (
      <div className={CLASSES.MAIN_PAGE.UserInfo_div}>
        {playerAvatar("Guest", avatarSize)}
        <p className={CLASSES.MAIN_PAGE.UserInfo_p}>
          Hi,
          <span className={CLASSES.MAIN_PAGE.UserInfo_span}>Guest</span>
        </p>
      </div>
    );
  }

  return (
    <div className={CLASSES.MAIN_PAGE.UserInfo_div}>
      {playerAvatar(userName, avatarSize)}
      <p className={CLASSES.MAIN_PAGE.UserInfo_p}>
        Hi,
        <span className={CLASSES.MAIN_PAGE.UserInfo_span}>{userName}</span>
      </p>
    </div>
  );
};

export default UserInfo;
