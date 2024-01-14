import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PosteModel from "./PosteModel";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  faComment,
  faPaperPlane,
  faPlus,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  const [LIKENumer, setLIKENumer] = useState(0);
  const [ShowModel, setShowModel] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const Loding = useSelector((state) => state.ArticlesReducer.Loding);
  const articles = useSelector((state) => state.ArticlesReducer.Articles);

  const HandelOpenPost = () => {
    setShowModel(!ShowModel);
  };

  return (
    <Container>
      <ShareBox>
        <div>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <img src="/images/user.svg" alt="" />
          )}
          <button className="btn1" onClick={HandelOpenPost}>
            Start a post
            <FontAwesomeIcon
              icon={faPlus}
              style={{ color: "#000", fontSize: "small" }}
            />
          </button>
        </div>
        <div>
          <button className="btn" onClick={HandelOpenPost}>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button className="btn" onClick={HandelOpenPost}>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>
          <button className="btn" onClick={HandelOpenPost}>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button className="btn" onClick={HandelOpenPost}>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>

      {articles.length <= 0 ? (
        <Para>There are no articles</Para>
      ) : (
        <Content>
          {Loding && <img src="images/loader.svg" alt="" />}
          {articles.length > 0 &&
            articles.map((article, index) => (
              <Article key={index}>
                <SharedActor>
                  <Link>
                    {article.user && article.user.photoURL ? (
                      <img src={article.user.photoURL} alt="" />
                    ) : (
                      <img src="/images/photo.svg" alt="" />
                    )}
                    <div>
                      <span>{article.user && article.user.displayName}</span>
                      <span>{article.timestamp}</span>
                    </div>
                  </Link>
                  <button>
                    <img src="/images/ellipsis.svg" alt="" />
                  </button>
                </SharedActor>
                <Description>{article.description}</Description>
                <SharedImg>
                  <Link>
                    {!article.image && article.video ? (
                      <ReactPlayer width="100%" url={article.video} />
                    ) : (
                      article.image && <img src={article.image} alt="" />
                    )}
                  </Link>
                </SharedImg>
                <SocialCounts>
                  <div>
                    <button>
                      <img
                        src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
                        alt=""
                      />
                      <img
                        src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
                        alt=""
                      />
                      <span>{article.likes}</span>
                    </button>
                  </div>
                  <div>
                    <Link>{article.comments} comments</Link>
                  </div>
                  <div>
                    <Link>1 share</Link>
                  </div>
                </SocialCounts>
                <SocialActions>
                  <button
                    // onClick={() => {
                    //   article.likes += 1;
                    // }}

                    onClick={() => setLIKENumer(LIKENumer + 1)}
                    disabled={article.likes >= 1 ? true : false}
                  >
                    <FontAwesomeIcon
                      className="like"
                      icon={faThumbsUp}
                      style={{ fontSize: "19px" }}
                    />
                    <span className="spanLike">Like</span>
                  </button>
                  <button>
                    <FontAwesomeIcon
                      icon={faComment}
                      style={{ color: "#898080", fontSize: "19px" }}
                    />
                    <span>Comment</span>
                  </button>
                  <button>
                    <FontAwesomeIcon
                      style={{ color: "#898080", fontSize: "19px" }}
                      icon={faShare}
                    />{" "}
                    <span>Share</span>
                  </button>
                  <button>
                    <FontAwesomeIcon
                      style={{ color: "#898080", fontSize: "19px" }}
                      icon={faPaperPlane}
                    />{" "}
                    <span>Send</span>
                  </button>
                </SocialActions>
              </Article>
            ))}
        </Content>
      )}

      <PosteModel
        LIKENumer={LIKENumer}
        ShowModel={ShowModel}
        HandelOpenPost={HandelOpenPost}
      />
    </Container>
  );
};
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 1px rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    .btn {
      outline: none;
      color: rgba(0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      width: 25%;
      margin: auto;
      justify-content: center;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s ease;
      border-radius: 5px;

      &:hover {
        background: rgba(0, 0, 0, 0.08);
      }
    }
    .btn1 {
      outline: none;
      color: rgba(0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      width: 25%;
      margin: auto;
      justify-content: start;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s ease;
      border-radius: 5px;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding: 0px 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background: white;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 500;
        font-size: 14px;
        text-align: left;
        display: flex;
        justify-content: space-between;
        &:hover {
          background: rgba(0, 0, 0, 0.08);
        }
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px;
        }
        span {
          color: #70b5f9;
          margin-top: 2px;
        }
      }
    }
  }
`;
const Content = styled.div`
  text-align: center;
  & > img {
    width: 70px;
  }
`;
const Para = styled.div`
  width: 100%;
  font-size: xx-large;
  font-weight: 700;
  text-transform: capitalize;
  margin: 59px auto;
  color: #737373bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      gap: 7px;
      margin: 6px 10px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(2),
        &:nth-child(3) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    ouline: none;
  }
`;
const Description = styled.div`
  padding: 7px 28px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  diplay: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  div {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      border: none;
      background-color: white;
    }
  }
`;
const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  flex-wrap: wrap;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: rgba(0, 0, 0, 0.6);
    border: none;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
    width: calc(100% / 4);
    height: 60px;
    justify-content: center;
    gap: 7px;

    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
        margin-top: 3px;
        font-weight: 600;
      }
    }
    .like {
      color: "#898080";
    }
    &:disabled .like {
      color: blue;
    }
    &:disabled .spanLike {
      color: blue;
    }
  }
`;
export default Main;
