import React  from "react";
import { useHistory } from "react-router";
import SettingButton from "../setting-button";
import "./styles/index.css";

const SettingLeft = ({ settingValue, handler }) => {
  const history = useHistory();

  const goToLogout = () => {
    history.push('/logout');
  }

  return (
    <div>
      <div className="setting-left-container">
        <SettingButton
          title="Language"
          value="English"
          settingValue={settingValue}
          tab="1"
          handler={handler}
        />
        <SettingButton
          title="Sound"
          value="3 level"
          settingValue={settingValue}
          tab="2"
          handler={handler}
        />
        <SettingButton
          title="Video quality"
          value="720p"
          settingValue={settingValue}
          tab="3"
          handler={handler}
        />
        <SettingButton
          title="Report"
          settingValue={settingValue}
          tab="4"
          handler={handler}
        />
        <SettingButton
          title="Support"
          settingValue={settingValue}
          tab="5"
          handler={handler}
        />
        <SettingButton
          title="Help"
          settingValue={settingValue}
          tab="6"
          handler={handler}
        />
        <SettingButton
          title="Logout"
          settingValue={settingValue}
          tab="7"
          handler={goToLogout}
        />
      </div>
    </div>
  );
};

export default SettingLeft;
