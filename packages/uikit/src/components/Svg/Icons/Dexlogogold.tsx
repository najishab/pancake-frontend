import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1006.4 1006.9" style={{fill: "#dbb16e",}} {...props}>
      <path d="M973.5 892.7c1.3-2.1 2.7-4.2 4-6.3 4.3-7.1 5-14.8 3.3-22.8-1.2-5.3-3.5-10.1-6.4-14.7-4.6-7.2-10.1-13.8-16.2-19.8-5.8-5.7-11.8-11.2-18-16.3-5.9-4.9-11.8-9.8-17.7-14.6-1.5-1.2-3.1-2.4-4.7-3.6-1.7-1.3-2.6-1.2-3.8.5-1.9 2.5-3.8 5.1-5.7 7.7-3.5 4.6-7 9.3-10.6 13.8-3.3 4.1-6.7 8.1-10.1 12.1-3.1 3.7-6.5 7.1-9.5 10.8-6 7.2-12.7 13.9-19.4 20.5-4.8 4.7-9.5 9.4-14.4 13.9-4.6 4.2-9.4 8.2-14.1 12.3-3.1 2.7-6.1 5.3-9.3 7.8-6 4.8-12.1 9.5-18.2 14.1-5.3 3.9-10.6 7.8-16 11.5-7 4.7-14.1 9.3-21.3 13.7-8 4.9-16.3 9.5-24.5 14.1-3.7 2.1-7.6 4-11.4 5.9-5.1 2.5-10.2 5.1-15.3 7.5-4.9 2.3-9.8 4.4-14.7 6.5-10.1 4.3-20.2 8.4-30.7 11.8-5.8 1.9-11.6 4-17.5 5.8-6.7 2-13.5 4-20.2 5.7-9.2 2.3-18.5 4.6-27.8 6.5-9.1 1.9-18.3 3.4-27.5 4.7-7.7 1.1-15.5 1.7-23.2 2.8-6.3.8-12.7 1.2-19 1.5-8.5.3-17.1.7-25.6.8-9.2.1-18.4 0-27.6-.4-9.3-.4-18.6-.9-27.8-2.2-7.9-1.1-15.9-1.8-23.8-3-10-1.5-19.9-3.2-29.8-5.4-9.3-2-18.6-4.2-27.8-6.7-6.6-1.7-13.1-3.7-19.5-5.8-7-2.2-14-4.5-20.9-7-10.5-3.7-20.9-8-31.1-12.5-11.1-4.9-22.1-10.2-32.8-15.9-10.6-5.7-21.1-11.7-31.2-18.1-7.5-4.7-14.9-9.6-22.2-14.7-4.8-3.4-9.6-6.9-14.3-10.5-5.3-4.1-10.6-8.2-15.7-12.5-7.7-6.3-15.2-12.9-22.4-19.8-5.8-5.5-11.6-11-17.2-16.7-3.6-3.7-7.1-7.4-10.6-11.2-4.5-5-8.9-9.9-13.2-15-3.9-4.6-7.7-9.3-11.4-14-3.3-4.2-6.6-8.5-9.8-12.8-3.6-4.9-7.3-9.9-10.7-15C83 780 78 772.2 73 764.2c-3.6-5.9-7.1-11.8-10.4-17.9-4.8-9.1-9.5-18.2-14.1-27.5-2.5-5-4.7-10.1-6.9-15.3-3.2-7.5-6.4-14.9-9.3-22.5-2.5-6.4-4.7-13-6.8-19.5-2.3-7-4.5-14-6.5-21-2.3-8-4.5-16-6.2-24.2-1.6-7.9-3.4-15.8-4.9-23.8-1.2-6.3-2-12.8-3-19.2-1.3-8.9-2.3-17.8-3-26.8-.4-5.4-.7-10.7-1-16.1-.9-14.6-.7-29.1-.4-43.7.1-4.4.4-8.8.7-13.1.7-9.2 1.3-18.4 2.4-27.5 1.2-9.9 2.7-19.8 4.3-29.6 1.1-6.9 2.5-13.8 4-20.6 1.7-7.7 3.6-15.4 5.7-23 2-7.5 4.2-15 6.5-22.4 1.9-6 3.9-11.9 6.1-17.7 3.1-8.3 6.2-16.6 9.6-24.8 4.3-10.3 8.9-20.5 14.1-30.4 1.8-3.4 3.4-6.9 5.2-10.2 3.2-6 6.5-11.9 9.9-17.8 5.2-9.1 10.9-18 16.7-26.7 6.1-9.1 12.6-17.9 19.3-26.6 8.2-10.7 17-20.9 26-31 4.5-5 9.2-9.7 13.9-14.5 6.2-6.2 12.4-12.4 18.9-18.3 5.4-5 11-9.7 16.6-14.5 7.6-6.5 15.5-12.6 23.5-18.5 4.8-3.6 9.7-7.1 14.7-10.5 7.3-4.9 14.6-9.7 22-14.4 3.3-2.1 6.8-4.1 10.2-6 4.9-2.8 9.9-5.6 14.9-8.3 5.7-3 11.4-6 17.2-8.9 8.8-4.4 17.8-8.4 26.9-12.2 10.4-4.4 20.9-8.5 31.6-12 6.9-2.3 13.7-4.6 20.6-6.6 7.9-2.3 15.8-4.4 23.8-6.3 7.8-1.9 15.6-3.6 23.4-5.2 5.8-1.2 11.7-2 17.5-2.9 9.4-1.6 18.9-2.7 28.4-3.5 8.5-.7 17-1.2 25.6-1.9 12.4-.9 24.8-.6 37.1-.4 6.1.1 12.3.5 18.4 1 8.2.6 16.4 1.4 24.5 2.2 5.1.5 10.2 1.3 15.3 2 6 .9 11.9 1.8 17.8 2.9 8.9 1.7 17.9 3.3 26.7 5.7 3.9 1.1 7.9 1.8 11.8 2.9 6 1.6 12 3.4 18 5.2 1.5.4 2.9 1 4.4 1.4 9.9 2.8 19.6 6.4 29.2 10.1 7.5 2.8 14.9 5.8 22.1 9.2 4 1.9 8 3.5 12 5.5 7.8 3.8 15.5 7.7 23.2 11.6 11.1 5.8 21.8 12.2 32.3 18.9 6.8 4.3 13.5 8.9 20.1 13.7 6.9 4.9 13.7 9.9 20.3 15.1 9.2 7.2 18.2 14.7 26.8 22.7 6.4 6 12.7 12 19 18.2 9 8.9 17.5 18.1 25.7 27.7 7.5 8.9 14.9 17.8 21.7 27.2 5.3 7.4 10.6 14.8 15.7 22.3 3.8 5.6 7.4 11.4 11 17.2 3.4 5.6 6.6 11.4 9.8 17.1 5.9 10.5 11.3 21.3 16.4 32.2 3.3 7.1 6.3 14.2 9.3 21.4 2.9 7.2 5.7 14.5 8.3 21.8 2.5 7.1 4.9 14.3 7.2 21.5 3.1 9.8 5.8 19.8 8.2 29.8 4 16.9 7.3 33.9 9.4 51.1.5 4 1.2 8 1.5 12.1.7 8.1 1.3 16.2 1.9 24.3.8 10.8.9 21.7.8 32.5-.1 11.8-.4 23.7-1.5 35.5-.7 7.1-1.2 14.2-2 21.3-1.1 8.8-2.2 17.6-3.8 26.3-1.7 9.2-3.5 18.3-5.6 27.4-2 8.5-4.2 17-6.5 25.5-2.5 9-5.4 17.8-8.3 26.7-2.3 7-5 13.8-7.7 20.6-2.2 5.7-4.8 11.3-7.2 17-5.2 12.3-11.3 24.2-17.5 36.1-3.2 6-6.6 11.8-10.1 17.7-3.8 6.4-7.8 12.7-11.7 19-.2.4-.5.7-.7 1.1-.9 1.6-.8 2.3.5 3.5 1.5 1.4 3.1 2.8 4.6 4.2 4.9 4.7 9.9 9.3 14.8 14 3.4 3.3 6.7 6.7 9.9 10.1 7.7 8.2 15.2 16.7 21.2 26.3 3.8 6.1 7.1 12.4 8.9 19.3 1.7 6.3 1.8 12.8.4 19.2-.9 3.9-2.9 7.3-5.2 10.6-.6.9-1.3 1.8-2 2.6-1.2.5-2.1 1.5-3.6 1.8zM437.6 107.5c-1.1-1.5-1-3.4-1.3-5.2-.2-1.2-.1-2.4-.4-3.6-1.2-4.6-1.5-9.3-2.4-13.9-.9-5-1.6-9.9-2.4-14.9-.2-1.1-.3-2.2-.5-3.2-.7-4.5-1.3-9.1-2.1-13.7-.6-3.8-.4-4.4 3.6-4.9 5.1-.7 10.2-1.3 15.3-2.1 2.8-.4 5.7-.6 8.5-.9 6.3-.7 12.7-.9 19-1.3 15.5-.9 31.1-.8 46.7-.2 2.6.1 5.2.8 7.8.7 7.7-.1 15.3 1.2 22.9 1.7 2.3.2 4.5.8 6.8 1.1 3.6.5 7.2 1 10.8 1.3 6.5.7 13 2 19.4 3.3s12.8 2.7 19.2 4.1c11.1 2.5 22 5.7 32.9 9.1 6.5 2 12.9 4.3 19.3 6.6 6.4 2.4 12.7 4.8 19 7.4 6.5 2.7 12.9 5.5 19.2 8.5 7.1 3.4 14.2 7 21.1 10.6 5.6 2.9 11.2 6.1 16.7 9.2 3.5 2 6.9 4.2 10.3 6.4 2.8 1.8 5.5 3.5 8.3 5.3 3.4 2.2 6.8 4.4 10 6.9 2.4 1.8 5.1 3.4 7.6 5.2 4.6 3.4 9 6.9 13.5 10.4 2.2 1.7 4.2 3.6 6.4 5.1 4.5 3.1 8.4 7 12.7 10.4 3.6 2.9 6.9 6.1 10.3 9.2 3.9 3.7 7.9 7.3 11.6 11.2 4.8 5.1 10 9.8 14.4 15.3 3.6 4.4 7.7 8.4 11.4 12.7 5.1 6 10 12.2 15 18.3 1.7 2.1 3.4 4.3 5 6.5 1.9 2.6 3.8 5.4 5.7 8 2 2.8 4 5.5 5.9 8.3 2.6 3.8 5 7.7 7.5 11.6 2.9 4.5 5.8 9 8.6 13.6 2.4 3.9 4.5 8 6.8 12 2.1 3.8 4.2 7.7 6.3 11.5.9 1.7 1.8 3.5 2.7 5.3 1.6 3.2 3.2 6.5 4.7 9.8 2.3 5.2 4.6 10.4 6.8 15.7 2.2 5.2 4.4 10.5 6.5 15.8.6 1.4 1 2.9 1.5 4.4 2 5.5 4 10.9 5.9 16.4 1.4 3.9 2.7 7.9 3.8 11.9 1.8 6.3 3.4 12.7 5.1 19 .5 2 1 4 1.5 6.1 1.2 5 2.5 10 3.4 15.1 1 6 2.7 12 3.3 18.1.5 5.1 1.5 10.2 2.3 15.2.3 1.8.3 3.7.6 5.6.3 2.2.7 4.3.9 6.5.3 3.3 0 6.6 1 9.8.3.9.2 2 .2 2.9.1 2.7.2 5.5.3 8.2.1 3.5-.3 7 .7 10.5.1.4.1.9.1 1.3V522c0 .9-.2 1.7-.2 2.6-.1 1.3-.3 2.6-.4 3.9-.1 1.8 0 3.5-.1 5.3-.2 5.2.1 10.5-1.3 15.7-.2.6 0 1.3 0 2-.2 3-.3 5.9-.6 8.9-.1 1.4-.6 2.8-.8 4.2-.7 5.5-1.3 11.1-2.1 16.6-.3 2.7-.8 5.4-1.3 8.1-1.1 5.6-2.5 11.1-3.5 16.7-.9 5.5-2.6 10.8-3.8 16.3-.7 3.1-1.5 6.2-2.3 9.2-1.1 4-2.2 8-3.4 12-1.6 5.2-3.5 10.4-5.2 15.6-3.7 11.7-8.2 23.1-13.1 34.4-.7 1.5-1.2 3.1-1.9 4.5-.6 1.3-1.6 1.7-3 1.3-.5-.2-1-.4-1.5-.7-3.2-1.5-6.4-3-9.5-4.4-2.4-1.1-4.8-2.2-7.2-3.2-1.6-.7-2.2-.4-2.9 1.1-1 1.9-1.9 3.9-2.9 5.9-2.8 5.6-5.5 11.2-8.4 16.7-1.9 3.8-3.9 7.6-6 11.3-2.8 4.9-5.8 9.8-8.7 14.7-1 1.6-.9 2.1.6 3.3 2.9 2.3 5.9 4.6 8.8 6.9 6.4 5.1 12.8 10.3 19.2 15.5 3.9 3.2 7.7 6.5 11.6 9.7 1.8 1.5 3 2.3 4.7-.5.3-.5.7-.9.9-1.3 4.2-6.8 8.6-13.5 12.5-20.4 4.5-7.8 8.8-15.7 12.9-23.7 4.2-8.3 8.2-16.7 12-25.2 4.5-10 8.6-20.2 12.2-30.5 2.4-6.8 4.7-13.7 6.9-20.6 2-6.2 3.9-12.3 5.6-18.6 2.7-9.8 5.2-19.7 7.1-29.8 1.7-9.3 3.7-18.5 5.1-27.8 2-13.4 3.5-27 4.5-40.5.8-10.6.9-21.2 1.1-31.9.1-5.8-.2-11.6-.3-17.4-.1-13.2-1.3-26.3-2.7-39.4-1-8.9-2.2-17.8-3.7-26.7-1.7-10.5-3.8-20.9-6.2-31.3-1.8-7.8-3.8-15.5-6.1-23.2-2-7-4.2-14.1-6.5-21-3.1-9.1-6.4-18.2-10-27.1-3.5-8.6-7.1-17.2-11.1-25.6-3.4-7.2-7-14.4-10.7-21.5-3.3-6.4-6.8-12.7-10.5-19-3.3-5.7-6.8-11.2-10.3-16.8-3.1-4.9-6.2-9.8-9.5-14.6-4.7-6.7-9.5-13.4-14.5-19.9-4.4-5.9-8.9-11.6-13.7-17.2-6.5-7.6-13.1-15-19.8-22.4-4.6-5-9.4-9.8-14.2-14.6s-9.9-9.3-14.9-13.9c-8.4-7.7-17.1-15.1-26.1-22.1-10.4-8.2-21.2-16-32.2-23.3-3.1-2.1-6.2-4.1-9.3-6.1-3.6-2.3-7.3-4.5-11-6.6-6.5-3.7-12.9-7.4-19.4-11-4.8-2.6-9.6-5.2-14.6-7.6-7.3-3.5-14.7-6.8-22.1-10.1-5.2-2.3-10.5-4.5-15.8-6.6-7.2-2.8-14.3-5.4-21.6-7.9-5.7-2-11.4-3.8-17.2-5.5-7.1-2.1-14.3-4.3-21.5-6-9.4-2.3-18.8-4.4-28.2-6.2-12.8-2.5-25.7-4.3-38.7-5.9-7.9-1-15.9-1.5-23.9-2.1-15.7-1.1-31.3-1.1-47-.7-8.5.2-17.1.8-25.6 1.4-5 .3-10.1.8-15 1.4-11.6 1.6-23.2 3.1-34.8 5.3-10.2 1.9-20.4 4.2-30.5 6.7-7.2 1.8-14.4 4-21.5 6.1-7.9 2.2-15.7 4.8-23.4 7.7-8.4 3.2-16.9 6.3-25.1 9.7-8.4 3.5-16.6 7.4-24.9 11.2-4.7 2.2-9.2 4.5-13.8 7-6.6 3.5-13.1 7.1-19.5 10.8-5.4 3.1-10.8 6.3-16 9.7-5.1 3.2-10 6.7-15 10.1-4.9 3.3-9.8 6.7-14.5 10.2-4.8 3.5-9.4 7.2-14 10.9-3.7 2.9-7.4 5.8-11 8.9-4.6 3.9-9.1 7.9-13.6 11.9-4.9 4.4-9.8 8.8-14.4 13.4-5.5 5.5-10.9 11.1-16.2 16.8-6.6 7.1-12.9 14.3-19 21.8-6.2 7.4-12.1 15-17.8 22.8-4.9 6.6-9.5 13.4-14 20.3-5.2 7.9-10.2 15.9-15 24-4.7 8-9.1 16.2-13.3 24.6-4.3 8.5-8.4 17.1-12.2 25.8-3.6 8.3-7.1 16.7-10.2 25.3-2 5.6-4.1 11.1-5.9 16.7-2.1 6.4-4 12.7-5.9 19.2-2 7.2-4 14.4-5.8 21.6-1.3 5.1-2.3 10.3-3.3 15.4-1.7 8.9-3.4 17.9-4.8 26.9-1.2 7.9-2.1 15.9-2.9 23.8-1.1 6.6-1.7 13.4-2.2 20.1-.9 14.3-1 28.7-.7 43.1.2 7.5.4 14.9.9 22.3.5 6.9 1.2 13.8 2 20.6.8 7.2 1.6 14.4 2.8 21.5 1.4 8.7 3.2 17.2 4.8 25.8 1.6 8.4 3.6 16.7 5.9 25 2.1 7.7 4.4 15.4 6.8 23 1.8 5.7 3.7 11.2 5.7 16.8 4.5 12.5 9.5 24.8 15 36.8 2.2 4.9 4.4 9.8 6.8 14.6 3.7 7.2 7.5 14.4 11.4 21.5 2 3.8 4.2 7.5 6.4 11.1 2.9 4.8 5.8 9.5 8.8 14.3 2.2 3.4 4.2 6.9 6.6 10.2 4.7 6.8 9.6 13.6 14.4 20.4 3.2 4.3 6.4 8.6 9.8 12.8 5.1 6.3 10.3 12.5 15.6 18.7 2.9 3.4 5.9 6.8 9 10 4.8 5.1 9.7 10.2 14.7 15.1 5.1 5 10.2 9.9 15.5 14.8 4.8 4.4 9.6 8.6 14.6 12.8 5.8 4.8 11.6 9.7 17.6 14.3 6.5 5 13.2 9.8 20 14.5 6.9 4.8 14 9.4 21.1 13.9 7 4.3 14.1 8.4 21.3 12.4 4.3 2.4 8.7 4.5 13.1 6.9 9.4 5 19 9.4 28.8 13.6 4.7 2 9.5 4 14.3 5.9 5.8 2.3 11.6 4.5 17.5 6.5 7.6 2.6 15.2 5.1 22.8 7.4 6.3 1.9 12.6 3.6 19 5.3 4.1 1.1 8.3 2.1 12.5 3 7.6 1.7 15.2 3.3 22.8 4.8 3.9.8 7.8 1.3 11.7 1.9 5.1.8 10.2 1.6 15.3 2.2 7.7.9 15.5 1.7 23.2 2.3 9.4.7 18.8 1.4 28.2 1.6 9.6.2 19.3.4 28.9-.3 6.7-.5 13.4-.6 20-1.1 7.5-.6 15.1-1.2 22.6-2.1 12.3-1.5 24.5-3.4 36.7-5.9 9.1-1.8 18.2-3.8 27.2-6.2 8.3-2.2 16.5-4.6 24.6-7.1 6.3-1.9 12.5-3.9 18.7-6.2 8-3 15.9-6.2 23.8-9.4 6.3-2.6 12.4-5.4 18.6-8.2 9.2-4.2 18.2-8.8 27-13.6 5.8-3.2 11.5-6.3 17.1-9.8 7.6-4.6 15.1-9.4 22.4-14.3 7.2-4.8 14.2-9.9 21.2-15 4.6-3.3 9.1-6.9 13.5-10.5 4.4-3.6 8.8-7.2 13.1-11 4.9-4.2 9.7-8.5 14.5-12.9 5.1-4.8 10.2-9.7 15.1-14.6 4.5-4.6 9-9.3 13.3-14.1 4.5-4.8 8.9-9.7 13.1-14.7 7.2-8.6 14.1-17.3 20.7-26.3 1.4-1.9 2.8-3.9 4.2-5.9 1.5-2.1 1.4-2.9-.6-4.4-2.7-2-5.4-4.1-8.2-6l-16.5-11.4c-4.9-3.3-9.8-6.6-14.8-9.8-1-.7-2.1-1.3-3.1-1.8-.9-.5-1.7-.4-2.4.4-.8.9-1.6 1.8-2.2 2.8-1.8 2.5-3.5 5.1-5.3 7.5-3.7 4.9-7.5 9.7-11.2 14.6-5.9 7.6-12.3 14.8-18.8 22-4.2 4.6-8.7 9-13 13.5-6.3 6.5-12.9 12.8-19.8 18.7-1.2 1.1-2.4 2.3-3.6 3.3-7.6 6.3-15.1 12.6-23 18.6-10.4 7.9-21.1 15.3-32.1 22.3-8.2 5.2-16.5 10-25 14.6-9.1 4.8-18.3 9.5-27.6 13.8-5.4 2.5-10.9 4.6-16.3 7-7.9 3.5-16.1 6.3-24.3 9.2-9.4 3.3-19 6.1-28.6 8.6-8.7 2.2-17.4 4.5-26.3 6-7.1 1.3-14.2 2.6-21.4 3.7-5.2.8-10.4 1.2-15.7 2-7 1-14 1.5-21 1.9-11.9.7-23.9.9-35.8.7-11.2-.2-22.4-.6-33.5-1.8-4.4-.5-8.7-1-13-1.5-8.8-1-17.6-2.3-26.3-4-6.9-1.3-13.8-2.7-20.6-4.3-8.3-1.9-16.6-4.1-24.8-6.5-8.3-2.5-16.5-5.2-24.7-8.1-8.5-3.1-17-6.5-25.3-10.1-8.4-3.6-16.5-7.5-24.7-11.6-8.1-4.1-16-8.5-23.9-13.2-9.1-5.3-18-10.9-26.6-17-5.4-3.9-10.8-7.8-16.2-11.8-3.8-2.8-7.5-5.7-11.1-8.7-5.8-4.8-11.6-9.8-17.3-14.7-.7-.6-1.4-1.4-1.9-2.2-2.1-3.5 0-8 4-8.6 2.1-.3 3.8.4 5.4 1.8 6.3 5.8 12.7 11.4 19.5 16.6 6.1 4.7 12.1 9.5 18.3 14 8.9 6.4 18 12.4 27.4 18.1 8.6 5.2 17.4 10.2 26.4 14.8 8.1 4.2 16.3 8 24.6 11.7 8.6 3.8 17.4 7.3 26.3 10.4 4.9 1.7 9.7 3.3 14.6 4.9 4.8 1.5 9.6 3 14.5 4.3 6.6 1.8 13.3 3.5 20 5.2 2.8.7 5.6 1.2 8.4 1.8 5.7 1.1 11.4 2.4 17.1 3.3 8.5 1.3 16.9 2.4 25.4 3.5 11.4 1.5 22.9 2 34.4 2.3 9.9.3 19.7.2 29.6-.2 15.3-.6 30.6-2.1 45.8-4.3 10.7-1.6 21.4-3.7 32-6.1 2.8-.6 5.5-1.3 8.3-2 3.5-.9 7-1.7 10.5-2.7 5.8-1.7 11.5-3.5 17.3-5.4 6-2 12-4 18-6.2 5.8-2.2 11.6-4.6 17.3-7 5.1-2.2 10.2-4.5 15.3-6.9 6.4-3.1 12.8-6.3 19.1-9.6 3.8-2 7.6-4 11.2-6.2 5.8-3.4 11.5-6.9 17.1-10.5 5-3.2 10-6.4 14.8-9.8 6.7-4.8 13.3-9.7 19.8-14.7 4.4-3.4 8.8-6.9 13-10.6 5.2-4.5 10.4-9.1 15.5-13.8 3.8-3.5 7.5-7 11.2-10.7 3-3 5.9-6.2 8.8-9.3 4.7-5.1 9.4-10.1 13.9-15.3 6.9-8 13.4-16.2 19.6-24.7 2.1-2.9 4.1-5.9 6.2-8.9 1-1.4.8-2.4-.6-3.3-.5-.3-.9-.7-1.3-.9-9.3-5.7-18.7-11.5-28.1-17.1-8.5-5.1-17-10-25.5-15-2.2-1.3-4.4-2.5-6.5-3.8-3.5-2-7-4.1-10.5-6.1l-18.6-10.5-18-10.2c-6-3.4-12.1-6.7-18.1-10-6.6-3.7-13.2-7.3-19.8-11-5.8-3.2-11.7-6.5-17.6-9.7-6.2-3.4-12.5-6.9-18.7-10.3-6.1-3.4-12.3-6.8-18.4-10.2-8.5-4.8-17-9.6-25.4-14.4-8.1-4.6-16.2-9.3-24.2-14-10-5.9-19.9-12-29.6-18.4-9.8-6.4-19.4-13.1-28.8-20.2-10.3-7.8-20.3-16-29.5-25.1-7.5-7.5-14.6-15.4-20.2-24.5-4-6.6-7.1-13.5-8.4-21.2-.9-5-.3-9.8 1.1-14.6.6-2.1 1.5-4.2 2.5-6.1 3.8-6.8 9.2-12 15.6-16.2 5.4-3.5 11.3-5.9 17.4-7.8 6.9-2.1 14.1-3.4 21.3-4.1 8.8-.9 17.7-1.4 26.6-1.3 7.7.1 15.3.3 23 .4.7 0 1.5.3 2.2-.7-.2-.3-.3-.7-.6-.9-.9-.6-1.9-1.2-2.8-1.6-3.1-1.5-6.1-2.9-9.2-4.3-9.4-4.4-19.1-8.3-28.8-12.1-7.4-2.8-14.8-5.5-22.2-8.1-8.3-2.8-16.6-5.6-25-8.1-12.7-3.8-25.4-7.5-38.3-10.7-8.5-2.1-17-4.2-25.6-6.2-5.9-1.4-11.8-2.5-17.7-3.8-2.1-.5-4.3-.8-6.5-1.1-1.2-.2-1.9.6-1.6 1.8.1.3.2.6.3 1 .6 1.6 1.2 3.3 1.8 4.9 3.2 8.9 6.4 17.7 9.6 26.6 1.1 3.1 2 6.3 3 9.4 1.7 5.4 3.5 10.9 5.1 16.3 1.1 3.8 2.1 7.6 3.1 11.4 1.8 7.1 3.7 14.2 5.4 21.3 1.1 4.7 2.1 9.4 3 14.1 1.7 8.8 3.5 17.6 4.9 26.5 1.4 9.1 2.3 18.3 3.3 27.4.3 2.9.6 5.9.8 8.8.2 3.3.3 6.6.4 9.9.1 12.1.2 24.1-1.4 36.1-1.1 8-2.4 16-4.6 23.9-2 7.2-4.7 14.1-8.5 20.6-3.3 5.7-7.5 10.5-12.5 14.7-2.2 1.8-4.6 3.4-7.1 4.7-4.9 2.5-10 4-15.3 4.6-4.6.5-9.2.6-13.8-.1-4.8-.7-9.4-2.2-13.8-4.1-4.9-2-9.4-4.7-13.8-7.6-6.8-4.4-13.2-9.5-19.1-15-5-4.6-9.8-9.4-14.5-14.4-4.7-5-9.3-10.2-13.6-15.6-4.9-6-9.6-12.2-14.3-18.4-3.4-4.5-6.7-9-9.8-13.6-5-7.5-9.8-15.1-14.6-22.6-6.6-10.2-12.5-20.9-18.3-31.6-2.4-4.4-4.7-8.9-6.9-13.4-3.2-6.5-6.4-13-9.4-19.5-2.5-5.6-4.8-11.3-7.1-17-1.9-4.9-3.8-9.8-5.4-14.8-2-6.4-3.6-12.9-4.6-19.5-1.6-10.3-2.4-20.7-1.4-31.1.4-4.7 1-9.4 2.2-13.9 2.2-7.9 5.2-15.3 9.9-22.1 6.2-9.1 14.2-16.4 23.5-22.1 6.8-4.2 14.2-7.4 21.7-10 7.6-2.6 15.4-4.6 23.2-6 16.8-3 33.7-3.9 50.8-3.6 2.1 0 4.2 0 6.2.2 2.5.2 3.7-.4 2.3-3.5-.7-1.5-1.3-3-1.9-4.5-5.1-12.3-10.6-24.5-16.5-36.6-5.9-12.1-12-24.1-18.5-35.9-3-5.5-6.1-10.9-9.2-16.3-3.6-6-7.2-12-11-18-3-4.8-6.1-9.6-9.2-14.4-3.3-5-6.8-10-10.2-14.9-3.3-4.7-6.5-9.4-9.9-13.9-4.7-6.3-9.6-12.5-14.5-18.7-6.4-8.2-13.1-16.2-20-23.9-2.4-2.7-4.7-5.4-7.1-8.2-.3-.3-.9-.7-.1-1.4 3.1 2.9 6.3 5.8 9.3 8.7 3.5 3.4 7 6.9 10.5 10.4s6.9 7 10.3 10.6c3.5 3.7 6.9 7.4 10.2 11.1 5.1 5.7 10.1 11.5 15.1 17.3 3.2 3.7 6.3 7.6 9.4 11.4 4.8 6 9.5 12 14.1 18.1 3.5 4.6 6.9 9.3 10.3 14.1 3.5 4.9 7 9.8 10.4 14.8 4.8 7.1 9.5 14.2 14 21.5 5 8 9.9 16 14.7 24.1 3.6 6.1 7.1 12.4 10.4 18.6 4 7.3 7.8 14.8 11.6 22.1 1.3 2.5 2.6 5.1 3.8 7.6.6 1.3 1.7 2 3.1 2.2.4.1.9 0 1.3.1 6.8 1 13.7 1.9 20.5 3 6.3 1.1 12.5 2.4 18.7 3.7 4.1.8 8.1 1.7 12.2 2.7 6.5 1.6 13 3.3 19.4 4.9 4.1 1 8.3 2 12.4 3.2 6.5 1.8 13.1 3.7 19.6 5.6 8.8 2.6 17.6 5.3 26.4 8 11.8 3.7 23.5 7.6 35.1 12 7.4 2.8 14.7 5.6 22.1 8.5 12.4 4.9 24.5 10.6 36.4 16.8 9.6 5 19 10.5 27.7 17.1 6.6 5 12.7 10.4 17.6 17.1 2.1 2.9 3.7 5.9 5 9.2 1.9 5 1.7 10.1 1.1 15.3-.5 4.6-2.7 8.5-5.8 11.9-3.6 4-8.2 6.6-13.2 8.2-6.2 2-12.5 3.2-19 3.8-7.7.7-15.3.8-23 .7-12.4-.2-24.8-.5-37.2-.8-7.8-.2-15.6.1-23.3.7-5 .4-10 1.2-14.8 2.8l-1.5.6c-.9.5-1.1 1.3-.6 2.2.2.3.3.6.5.8 1.6 1.8 3.1 3.7 4.8 5.4 3.6 3.5 7.1 7.1 10.9 10.5 5.6 4.9 11.4 9.6 17.2 14.3 4.5 3.6 9.2 7 13.9 10.5 6.3 4.6 12.5 9.2 18.8 13.8 4.7 3.4 9.6 6.6 14.3 9.9 4.8 3.4 9.6 6.9 14.5 10.3 5 3.5 10.1 7 15.1 10.5 9 6.2 18 12.5 27.1 18.6 7.2 4.9 14.4 9.6 21.6 14.4 9.8 6.5 19.5 13 29.3 19.5 6.8 4.5 13.5 8.9 20.3 13.4 9.8 6.6 19.7 13.2 29.5 19.8 5.3 3.5 10.5 7.1 15.8 10.7s10.5 7.1 15.8 10.7c5.7 3.9 11.3 7.9 17 11.9 6.8 4.8 13.6 9.6 20.4 14.5 5.9 4.2 11.7 8.6 17.5 12.9 1.8 1.3 3.5 2.6 5.3 3.9 1.3.9 2.2.7 3.1-.6.2-.3.3-.6.5-.8 3.8-6.6 7.7-13.2 11.5-19.9 2.1-3.7 4-7.5 5.9-11.3 2.1-4.2 4.2-8.5 6.1-12.7 1.5-3.3 1.4-3.4-1.8-5-1-.5-2-1-3-1.4-3.7-1.7-7.4-3.3-11.1-4.9-1-.5-2-.9-3-1.4-1.2-.7-1.4-1.5-1-2.8.1-.4.3-.8.5-1.2 1-2.4 2.1-4.8 3.1-7.2 2.2-5.5 4.6-10.9 6.6-16.5 4.7-13.1 8.9-26.4 12.3-39.9 2-8.1 3.7-16.2 5.4-24.4.6-2.6 1-5.2 1.4-7.8.9-5.7 1.7-11.5 2.5-17.2.1-.8.3-1.5.3-2.3.5-6.7 1.4-13.3 1.8-20 .3-5.6 1.1-11.1 1.1-16.7-.1-12.6.5-25.2-.8-37.8-.4-4.2-.3-8.6-.9-12.8-.9-6-1-12-2.2-17.9-.3-1.7-.3-3.5-.6-5.2-.7-4-1.6-8-2.2-11.9-.9-6-2.3-11.8-3.6-17.7-1-4.7-2.2-9.4-3.6-14-1.1-3.6-2-7.2-3-10.8-2.6-9.1-5.7-18-9.1-26.7-1.7-4.5-3.5-9-5.4-13.4-2-4.8-4-9.5-6.2-14.1-1.9-4.2-4-8.3-6.1-12.4-3.2-6.1-6.4-12.2-9.8-18.2-3.2-5.6-6.7-11-10.1-16.5-2.5-3.9-5.2-7.6-7.6-11.5-1.3-2.1-2.9-4.1-4.4-6.1-1.8-2.5-3.5-5-5.4-7.5-2.2-2.9-4.5-5.7-6.7-8.5-2.6-3.4-5.2-6.8-8-10-3.2-3.9-6.6-7.6-9.9-11.4-.4-.5-.9-1-1.3-1.5-3.7-3.8-7.3-7.6-11-11.3-4.8-4.8-9.7-9.5-14.6-14.2-2.2-2.1-4.6-4.1-6.9-6-4.2-3.6-8.2-7.2-12.5-10.6-5-4-10.2-7.9-15.4-11.7-3.5-2.6-7.1-5.1-10.7-7.6-3.3-2.2-6.7-4.2-9.9-6.4-6.1-4.1-12.5-7.7-18.9-11.3-8.5-4.8-17.2-9.1-26-13.3-7.5-3.6-15.2-6.8-22.9-9.9-5.6-2.2-11.3-4.2-17-6.2-10.8-3.9-21.9-7.1-33-9.9-10.1-2.5-20.3-4.6-30.5-6.4-13.4-2.4-26.9-3.9-40.4-5-9.6-.8-19.3-1-28.9-1-10.8 0-21.7.4-32.5 1.4-8.5.7-17 1.6-25.5 2.8-1.8-.2-2.9.1-4.1-.5zm-22.4 444.1c-.1-3.6-.1-7.2-.3-10.8-.5-9.8-1.2-19.7-2.1-29.5-.9-9.3-2.2-18.5-3.6-27.7-.9-6-2.1-11.9-3.1-17.8-1.3-8.2-3.2-16.4-5-24.5-2.2-9.6-4.5-19.2-7.4-28.7-2.3-7.7-4.6-15.3-6.9-23-.2-.8-.6-1.6-.9-2.5-.5-1.8-1.8-2.6-3.6-2.8-3.9-.4-7.8-1-11.8-1.3-12.1-.9-24.3-1.2-36.5-.5-4 .2-8.1.6-12.1 1.1-7.6 1-15.1 2.6-22.3 5.3-5.6 2.1-10.7 5-15.3 8.8-7.2 6.1-11.3 13.8-12.6 23.1-1.1 7.5-.5 14.9.9 22.2.8 4.3 1.9 8.5 3.2 12.7 2 6.5 4.4 12.9 7.1 19.1 4.3 10 9.1 19.7 14.4 29.1 3.4 5.9 6.6 11.9 10.2 17.7 4.5 7.4 9.3 14.6 14 21.8 3.4 5.1 6.7 10.3 10.2 15.3 7.3 10.4 14.6 20.8 22.5 30.7 8.1 10.1 16.3 20 25.8 28.9 3.4 3.1 7 6 11 8.3 1.6.9 3.3 1.7 5.1 2.3 4.7 1.4 7.1.2 9.4-4.1 2-3.8 3-8 3.9-12.2 1.8-8.3 2.9-16.6 3.6-25 1.1-11.9 1.9-23.9 2.2-36z" />
    <path d="M405.9 77.8c3.1.1 5.7 2.7 5.6 5.7-.1 2.8-2.6 6-6 5.7-3.1-.2-5.5-2.7-5.4-5.9.1-3 2.8-5.6 5.8-5.5zM71.3 538.6c.1 3.1-2.1 5.3-5.3 5.4-3.3.1-5.9-2.2-5.9-5.2-.1-3.3 2.5-5.9 5.7-5.9 2.9-.1 5.5 2.6 5.5 5.7zM119.5 725.4c-2.9.1-5.7-2.5-5.8-5.5-.2-4 3.2-5.9 5.7-5.9 3 0 5.5 2.3 5.7 5.2 0 3.2-2.6 6.1-5.6 6.2zM274.2 130.9c3.2-.1 5.7 3.2 5.6 5.7-.1 3.1-2.9 5.8-6.1 5.6-3.1-.1-5.4-2.7-5.3-5.9.1-3.1 2.5-5.4 5.8-5.4zM94.1 346.1c3.1.1 5.6 2.7 5.4 5.8-.1 3.2-2.6 5.6-5.8 5.4-3.2-.1-5.6-2.6-5.5-5.8.2-3 2.8-5.5 5.9-5.4zM144.6 765.5c-3.1 0-5.7-2.5-5.7-5.6 0-3.1 2.4-5.6 5.6-5.7 3.3-.1 5.8 2.5 5.8 5.8-.1 3.3-2.5 5.6-5.7 5.5zM315.8 108.5c3.1-.1 5.7 2.4 5.8 5.5.1 3.1-2.3 5.6-5.5 5.7-3.3.1-6-2.4-6-5.6.1-3.1 2.5-5.5 5.7-5.6zM65.1 496.6c-3.2 0-5.6-2.4-5.7-5.5 0-3.4 2.3-5.8 5.7-5.8 3 0 5.6 2.6 5.6 5.6-.1 3.2-2.6 5.7-5.6 5.7zM71.7 580.2c3.2-.1 5.6 3 5.4 5.8-.2 3.1-2.8 5.5-5.9 5.5-3.1-.1-5.4-2.7-5.4-5.8.2-2.8 2.4-5.8 5.9-5.5zM365.5 96.5c0 3.2-2.5 5.5-5.7 5.5-3.1-.1-5.6-2.6-5.5-5.7.1-3.1 2.5-5.6 5.6-5.7 3.3 0 5.7 2.5 5.6 5.9zM234.8 157.9c3-.1 5.6 2.5 5.7 5.6 0 3.3-2.2 5.5-5.5 5.7-3.1.1-5.6-2.3-5.9-5.3-.3-3.6 3-6 5.7-6zM160.6 229.4c-.2-3.2 2.4-5.6 5.4-5.7 3.1-.1 5.6 2.3 5.7 5.5.1 3.1-2.4 5.6-5.5 5.7-3.2 0-5.5-2.3-5.6-5.5zM79.1 402.7c-3-.1-5.7-2.8-5.5-5.8.1-2.8 2.5-5.8 6-5.6 3 .1 5.4 2.8 5.3 5.9-.1 3-2.8 5.5-5.8 5.5zM82.5 626.4c3 0 5.7 2.7 5.7 5.7 0 3.4-3 5.7-5.6 5.6-2.9-.1-5.6-2.3-5.7-5.6-.1-3.8 3.3-5.7 5.6-5.7zM179.7 797.2c0 3.5-2 5.3-5.6 5.7-3.1.3-5.7-2.4-5.7-5.5 0-3.2 2.3-5.6 5.6-5.7 3.4-.1 5.7 2.1 5.7 5.5zM198.7 200.1c-3.7.2-5.6-3.1-5.6-5.5 0-3.3 2.6-5.8 5.8-5.7 2.9.1 5.4 2.6 5.4 5.5 0 2.6-1.7 5.8-5.6 5.7zM137.5 273c-3.1 0-5.5-2.5-5.4-5.8.1-3.2 2.2-5.5 5.3-5.5 3.4-.1 5.8 2.1 5.9 5.4.1 3-2.7 6.1-5.8 5.9zM104.2 676.9c0 3.2-2.4 5.5-5.7 5.5-3.2 0-5.6-2.3-5.7-5.5-.1-3.1 2.7-5.9 5.8-5.8 2.9.1 5.6 2.9 5.6 5.8zM69.6 449.2c-3.1 0-5.7-2.6-5.6-5.6 0-3.1 2.5-5.6 5.6-5.6 2.7 0 5.6 1.7 5.7 5.5 0 3-2.7 5.7-5.7 5.7zM118.8 308.2c0 3.4-2.2 5.7-5.4 5.7-2.9 0-5.6-2.6-5.7-5.6-.1-3.1 2.4-5.6 5.5-5.7 3.3 0 5.6 2.3 5.6 5.6z" />
    </Svg>
  );
};

export default Icon;