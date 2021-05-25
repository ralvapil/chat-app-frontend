import React from "react";
import styled from "styled-components";
import { getFormattedTimestamp } from "../../../utils/format";

const StyledContainer = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-bottom: 2px solid #f8f8f8;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-left: 22px;
  height: 100%;
  justify-content: center;
`;

const StyledMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
`;

const StyledTimeStamp = styled.span`
  font-size: 12px;
  font-weight: 300;
  text-align: right;
  color: #676767;
  margin-bottom: 6px;
`;

const StyledName = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #55596a;
  margin: 0;
  padding-bottom: 3px;
`;

const StyledPreviewText = styled.div`
  font-size: 14px;
  font-weight: ${(props) => (props.isUnread ? 500 : 300)};
  color: ${(props) => (props.isUnread ? "#55596a" : "#b4b7c1")};
  font-family: Roboto;
`;

const ProfilePicPlaceholder = styled.div`
  background: lightgrey;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px solid white;
`;

const StyledSubContainer = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledUnReadMsgCount = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgb(0, 106, 255);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 6px;
`;

const StyledUnReadPlaceholder = styled.div`
  width: 20px;
  height: 20px;
  // margin-top: 6px;
`;

export default function MobileChatListItem({
  preview,
  name,
  timestamp,
  handleConvoClick,
  unreadMsgCount,
  picture,
  isGroup,
}) {
  const isUnread = unreadMsgCount > 0;
  const formattedTimestamp = timestamp ? getFormattedTimestamp(timestamp) : "";

  return (
    <StyledContainer onClick={handleConvoClick}>
      <StyledSubContainer>
        <>
          {isGroup ? (
            <ProfilePicPlaceholder />
          ) : (
            <ProfilePic src={picture} alt="Profile" />
          )}
        </>
        <StyledTextContainer>
          <StyledName isUnread={isUnread}>{name}</StyledName>
          <StyledPreviewText isUnread={unreadMsgCount > 0}>
            {preview?.length > 23 ? preview.substring(0, 20) + "..." : preview}
          </StyledPreviewText>
        </StyledTextContainer>
        <StyledMetaContainer>
          <StyledTimeStamp>{formattedTimestamp}</StyledTimeStamp>
          {unreadMsgCount > 0 ? (
            <StyledUnReadMsgCount>{unreadMsgCount}</StyledUnReadMsgCount>
          ) : (
            <StyledUnReadPlaceholder />
          )}
        </StyledMetaContainer>
      </StyledSubContainer>
    </StyledContainer>
  );
}
