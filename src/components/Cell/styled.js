import { css } from 'emotion';

export const wrapClass = css`
  height: 200px;
  margin: 5px 5px 5px 0;
  position: relative;
  background: #181818;
`;

export const imageWrapClass = css`
  background: #ddd;
  height: 160px;
  // margin: 10px;
  // padding: 10px;
  width: 160px;
  margin-left: 8px;
  margin-top: 8px;
  display: inline-block;
`;

export const imageClass = css`
  display: block;
  opacity: 0;
  transition: opacity 600ms;
`;

export const loadedClass = css`
  opacity: 1;
`;

export const textClass = css`
  display: block;
  font-size: 20px;
  height: 62px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 200px;
  margin-top: -130px;
  color: white;
`;

export const songClass = css`
  color: #fff;
  text-decoration: none;
  display: block;
`;

export const artistClass = css`
  color: gray;
  font-size: 15px;
  text-decoration: none;
  display: block;
  margin-top: 4px;
`;

export const placeholderClass = css`
  background: #ddd;
`;

export const scoreClass = css`
  background: #000;
  border-radius: 50%;
  color: white;
  display: block;
  font-size: 13px;
  height: 28px;
  right: 8px;
  line-height: 28px;
  padding: 2px;
  position: absolute;
  text-align: center;
  top: 8px;
  width: 28px;
`;
