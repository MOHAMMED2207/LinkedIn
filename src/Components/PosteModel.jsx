import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import { Get_Articles } from "../Redux/Action/Action";
const PosteModel = ({ ShowModel, HandelOpenPost, LIKENumer }) => {
  const user = useSelector((state) => state.userReducer.user);
  const articles = useSelector((state) => state.ArticlesReducer.Articles);
  const dispatch = useDispatch();
  const [Textpost, setTextpost] = useState("");
  const [DataArea, setDataArea] = useState("");
  const [URLImg, setURLImg] = useState("");
  const [URLVEDIO, setURLVEDIO] = useState("");
  const Clear = () => {
    setTextpost("");
    setURLImg("");
    setURLVEDIO("");
    setDataArea("");
    HandelOpenPost();
  };

  const HandelIMAGE = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image , the file is a ${typeof image}`);
      return;
    } else {
      setURLImg(image);
    }
  };
  const HandlePostArticles = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      id: Math.random(),
      image: URLImg,
      video: URLVEDIO,
      description: Textpost,
      user: user,
      comments: 2,
      likes: LIKENumer,
      timestamp: new Date().toISOString(),
    };
    dispatch(Get_Articles(payload));
    Clear();

    if (articles) {
      toast.success("Add Success", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Please try again", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      {ShowModel && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={Clear}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <ShareContent>
              <UserInfo>
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* <span >{user.displayName}</span> */}
                  {/* <span style={{opacity:"0.5", fontSize:"13px"}}>{user.email}</span> */}
                </div>
              </UserInfo>
              <Editor>
                <textarea
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                  value={Textpost}
                  onChange={(e) => setTextpost(e.target.value)}
                />
              </Editor>

              {DataArea === "image" ? (
                <UploadImage>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    name="imge"
                    onChange={HandelIMAGE}
                  />
                  <p>
                    <label
                      style={{
                        cursor: "pointer",
                        display: "block",
                        marginBottom: "15px",
                      }}
                      htmlFor="file"
                    >
                      Select an image to share
                    </label>
                  </p>
                  {URLImg && <img src={URL.createObjectURL(URLImg)} alt="" />}
                </UploadImage>
              ) : (
                DataArea === "vedio" && (
                  <>
                    <input
                      style={{ width: "100%", height: "30px" }}
                      type="text"
                      onChange={(e) => setURLVEDIO(e.target.value)}
                      value={URLVEDIO}
                      placeholder="Please input a video link"
                    />
                    {URLVEDIO && <ReactPlayer width="100%" url={URLVEDIO} />}
                  </>
                )
              )}
            </ShareContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton
                  onClick={() => {
                    setDataArea("image");
                    setURLVEDIO("");
                  }}
                >
                  <img src="/images/share-image.svg" alt="" />
                </AssetButton>
                <AssetButton
                  onClick={() => {
                    setDataArea("vedio");
                    setURLImg("");
                  }}
                >
                  <img src="/images/share-video.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/share-comment.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton
                onClick={(e) => HandlePostArticles(e)}
                disabled={!Textpost & !URLVEDIO & !URLImg ? true : false}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 99%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
  button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  align-items: center;
  h2 {
    line-height: 1.5;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    background: none;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
  svg,
  img {
    pointer-events: none;
  }
`;
const ShareContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  sv,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    line-height: 1.5;
    font-size: 16px;
    margin-left: 5px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 16px 16px;
`;
const AssetButton = styled.button`
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  font-size: 14px;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  display: grid;
  place-items: center;
  ${AssetButton} {
    svg,
    img {
      margin-right: 5px;
    }
    padding: 10px;
    height: 30px;
    border-radius: 30px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
const PostButton = styled.button`
  min-with: 60px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? "rgb(235,235,235)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgb(0,0,0,0.25)" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 500;
  font-size: 16px;
  border-radius: 30px;
  &:hover {
    background: ${(props) => (props.disabled ? "" : "#004182")};
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: sans-serif;
    outline: none;
    border: none;
    line-height: 2.5;
  }
`;
const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
export default PosteModel;
