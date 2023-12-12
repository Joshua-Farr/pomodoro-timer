import { useContext, useState } from "react";
import { TimerContext } from "../App";
import styled from "styled-components";
import { Settings } from "../Interfaces";
import CloseIcon from "@mui/icons-material/Close";

export const SettingsMenu = ({ toggle }) => {
  const { settings, setSettings } = useContext(TimerContext);
  const [tempSettings, setTempSettings] = useState<Settings>(settings);

  const StyledMenu = styled.div`
    background-color: white;
    height: 400px;
    width: 600px;
    border-radius: 25px;
    padding: 0.75em 2em;
    font-family: ${settings.font};
  `;

  const StyledButton = styled.button`
    background-color: #f87070;
    color: white;
    padding: 0.75em 2.5em;
    border-radius: 25px;
    margin-top: -25px;
    border: none;

    &:hover {
      cursor: pointer;
    }
  `;

  const MenuWrapper = styled.div`
    position: absolute;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  `;

  const StyledInput = styled.input`
    padding: 5px;
    padding-left: 10px;
    font-weight: 700;
    border: none;
    background-color: #eef1fa;
    border-radius: 10px;
  `;

  const SettingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
  `;

  const TimeSettingsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 0.75em;
    border-bottom: 1px solid #a5a7ad;
    padding-bottom: 1.25em;
  `;

  const OtherSettingsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 0.75em;
    border-bottom: 1px solid #a5a7ad;
    padding-bottom: 1.25em;
    justify-content: space-between;
  `;

  const SettingCircle = styled.div`
    height: 40px;
    width: 40px;
    color: black;
    background-color: ${settings.color};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 1px;

    &:hover {
      cursor: pointer;
    }
  `;

  const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const ExitButton = styled.div`
    border: 2px solid lightgray;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 24px;
    border-radius: 50%;
    padding: none;
    margin: none;
    F &:hover {
      cursor: pointer;
    }
  `;

  console.log(tempSettings);

  const hadleSettingSettings = () => {
    console.log("Saving settings!");
    setSettings(tempSettings);
    toggle();
  };

  return (
    <MenuWrapper>
      <StyledMenu>
        <MenuHeader>
          <h1>Settings:</h1>
          <ExitButton onClick={toggle}>
            <CloseIcon />
          </ExitButton>
        </MenuHeader>
        <h3
          style={{
            textTransform: "uppercase",
            letterSpacing: "2.5px",
          }}
        >
          Time (minutes)
        </h3>
        <TimeSettingsWrapper>
          <SettingsWrapper>
            <span style={{ color: "gray", fontWeight: "500" }}>pomodoro</span>
            <StyledInput
              type="number"
              min="1"
              value={tempSettings.pomodoro}
              onChange={(e) => {
                console.log(
                  "Changing the settings of pomodoro to ",
                  e.target.value
                );
                setTempSettings((prev: Settings) => ({
                  ...prev,
                  pomodoro: parseInt(e.target.value, 10),
                }));
              }}
            ></StyledInput>
          </SettingsWrapper>
          <SettingsWrapper>
            <span style={{ color: "gray", fontWeight: "500" }}>
              short break
            </span>
            <StyledInput
              type="number"
              min="1"
              value={tempSettings.short}
              onChange={(e) => {
                console.log(
                  "Changing the settings of pomodoro to ",
                  e.target.value
                );
                setTempSettings((prev: Settings) => ({
                  ...prev,
                  short: parseInt(e.target.value, 10),
                }));
              }}
            ></StyledInput>
          </SettingsWrapper>
          <SettingsWrapper>
            <span style={{ color: "gray", fontWeight: "500" }}>long break</span>
            <StyledInput
              type="number"
              min="1"
              value={tempSettings.long}
              onChange={(e) => {
                console.log(
                  "Changing the settings of pomodoro to ",
                  e.target.value
                );
                setTempSettings((prev: Settings) => ({
                  ...prev,
                  long: parseInt(e.target.value, 10),
                }));
              }}
            ></StyledInput>
          </SettingsWrapper>
        </TimeSettingsWrapper>
        {/* 
        <OtherSettingsWrapper>
          <h3 style={{ textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Font
          </h3>
          <div style={{ display: "flex", gap: "1em" }}>
            <SettingCircle
              style={{ background: "lightgray", fontFamily: "Archivo Narrow" }}
              onClick={() => {
                console.log("Settings button clicked!");
                setTempSettings((prev) => {
                  return { ...prev, font: "Archivo Narrow" };
                });
              }}
            >
              Aa
            </SettingCircle>
            <SettingCircle
              style={{ background: "lightgray", fontFamily: "Kalnia" }}
              onClick={() => {
                console.log("Settings button clicked!");
                setTempSettings((prev) => {
                  return { ...prev, font: "Kalnia" };
                });
              }}
            >
              Aa
            </SettingCircle>
            <SettingCircle
              style={{ background: "lightgray", fontFamily: "Montserrat" }}
              onClick={() => {
                console.log("Settings button clicked!");
                setTempSettings((prev) => {
                  return { ...prev, font: "Montserrat" };
                });
              }}
            >
              Aa
            </SettingCircle>
          </div>
        </OtherSettingsWrapper> */}
        <OtherSettingsWrapper>
          <h3 style={{ textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Color
          </h3>
          <div style={{ display: "flex", gap: "1em" }}>
            <SettingCircle
              style={{ background: "#f87070" }}
              onClick={() => {
                setTempSettings((prev) => {
                  return { ...prev, color: "#f87070" };
                });
                console.log("Settings button clicked!");
              }}
            ></SettingCircle>
            <SettingCircle
              style={{ background: "#6ff3f8" }}
              onClick={() => {
                setTempSettings((prev) => {
                  return { ...prev, color: "#6ff3f8" };
                });
                console.log("Settings button clicked!");
              }}
            ></SettingCircle>
            <SettingCircle
              style={{ background: "#D981f9" }}
              onClick={() => {
                setTempSettings((prev) => {
                  return { ...prev, color: "#D981f9" };
                });
                console.log("Settings button clicked!");
              }}
            ></SettingCircle>
          </div>
        </OtherSettingsWrapper>
      </StyledMenu>
      <StyledButton
        onClick={() => {
          console.log("Apply button has been clicked!");
          hadleSettingSettings();
        }}
      >
        Apply
      </StyledButton>
    </MenuWrapper>
  );
};
