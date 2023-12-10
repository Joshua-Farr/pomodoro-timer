// import { useState } from "react";
import styled from "styled-components";

// const [color, setColor] = useState("#f87070");

export const SettingsMenu = ({ toggle }) => {
  const StyledMenu = styled.div`
    background-color: white;
    height: 400px;
    width: 600px;
    border-radius: 25px;
    padding: 0.75em 2em;
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
    background-color: lightblue;
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

  return (
    <MenuWrapper>
      <StyledMenu>
        <h1>Settings:</h1>
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
            <StyledInput type="number" min="0" value="25"></StyledInput>
          </SettingsWrapper>
          <SettingsWrapper>
            <span style={{ color: "gray", fontWeight: "500" }}>
              short break
            </span>
            <StyledInput type="number" min="0" value="5"></StyledInput>
          </SettingsWrapper>
          <SettingsWrapper>
            <span style={{ color: "gray", fontWeight: "500" }}>long break</span>
            <StyledInput type="number" min="0" value="10"></StyledInput>
          </SettingsWrapper>
        </TimeSettingsWrapper>

        <OtherSettingsWrapper>
          <h3 style={{ textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Font
          </h3>
          <div style={{ display: "flex", gap: "1em" }}>
            <SettingCircle
              onClick={() => {
                console.log("Settings button clicked!");
              }}
            >
              Aa
            </SettingCircle>
            <SettingCircle
              onClick={() => {
                console.log("Settings button clicked!");
              }}
            >
              Aa
            </SettingCircle>
            <SettingCircle
              onClick={() => {
                console.log("Settings button clicked!");
              }}
            >
              Aa
            </SettingCircle>
          </div>
        </OtherSettingsWrapper>
        <OtherSettingsWrapper>
          <h3 style={{ textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Color
          </h3>
          <div style={{ display: "flex", gap: "1em" }}>
            <SettingCircle
              onClick={() => {
                console.log("Settings button clicked!");
              }}
            ></SettingCircle>
            <SettingCircle
              onClick={() => {
                console.log("Settings button clicked!");
              }}
            ></SettingCircle>
            <SettingCircle
              onClick={() => {
                console.log("Settings button clicked!");
              }}
            ></SettingCircle>
          </div>
        </OtherSettingsWrapper>
      </StyledMenu>
      <StyledButton onClick={toggle}>Apply</StyledButton>
    </MenuWrapper>
  );
};
