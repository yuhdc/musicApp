import { v4 as uuidv4 } from "uuid";
import unaging from "../audio/【銀臨】 Yin Lin - 不老夢 Unaging Dream.mp3";
import bly from "../audio/Anna Clendening - Boys Like You (Official Acoustic Lyric Video).mp3";
import viva from "../audio/Coldplay - Viva La Vida (Official Video).mp3";
import hnkm from "../audio/Hoa Nở Không Màu - Hoài Lâm - Acoustic Version.mp3";
import btntb from "../audio/La Belle et la Bête (Subtitled).mp3";
import ncgb from "../audio/Ngày Chưa Giông Bão (OST Người Bất Tử) - Bùi Lan Hương [ Official MV ].mp3";
import ptg from "../audio/Photograph - Ed Sheeran (Lyrics).mp3";
import cot from "../audio/La La Land - City of Stars DUET - Lyrics.mp3";

const myList = () => [
  {
    name: "",
    artist: "",
    cover: "",
    id: uuidv4(),
    active: false,
    color: ["", ""],
    audio: "",
  },
  {
    name: "City of Star",
    artist: "Sebastian & Mia",
    cover: "./asset/img/cot.jpg",
    id: uuidv4(),
    active: true,
    color: ["#fadce2", "#a68ef5"],
    // audio:
    //   "https://doc-14-4g-docs.googleusercontent.com/docs/securesc/2vh0e8arpamh5nv4haep32dq9hkcbbgj/dsndro969aaj47og1c46hsklet9vv8cg/1619333325000/07018604904914775687/07018604904914775687/1OO3aaCFoXiV4_tRLjTKvQIAlgT9-648C?e=download&authuser=0",
    audio: `${cot}`,
  },
  {
    name: "Viva la Vida",
    artist: "Cold Play",
    cover: "./asset/img/viva.jpg",
    id: uuidv4(),
    active: false,
    color: ["#4a4228", "#4b2f07"],
    // audio:
    //   "https://doc-14-4g-docs.googleusercontent.com/docs/securesc/2vh0e8arpamh5nv4haep32dq9hkcbbgj/3ekkilirabjd5nplbotvuv8kbcpdjtjh/1619333475000/07018604904914775687/07018604904914775687/1f46O7NGMnevLwlvYc_K2SZk-Cx4IkTtr?e=download&authuser=0",
    audio: `${viva}`,
  },
  {
    name: "Hoa no khong mau",
    artist: "Hoai Lam",
    cover: "./asset/img/Hoa-no-khong-mau-lyric-hoai-lam.jpg",
    id: uuidv4(),
    active: false,
    color: ["#dbc273", "#7b9063"],
    // audio:
    //   "https://doc-0s-4g-docs.googleusercontent.com/docs/securesc/2vh0e8arpamh5nv4haep32dq9hkcbbgj/07kh92hihvglmc4abo64vap6p0bapvql/1619333625000/07018604904914775687/07018604904914775687/13Xog_BUJPtCV-DDXFgG9wCAPsIdw4-48?e=download&authuser=0",
    audio: `${hnkm}`,
  },
  {
    name: "Boys Like You",
    artist: "Anna Clendening",
    cover: "./asset/img/bly.jpg",
    id: uuidv4(),
    active: false,
    color: ["#4a4228", "#4b2f07"],
    // audio:
    //   "https://mp3-320s1-zmp3.zadn.vn/d1a8cb387b7c9222cb6d/9067744748290356226?authen=exp=1618292062~acl=/d1a8cb387b7c9222cb6d/*~hmac=c7e0eabe01d89aec870c3bff9bfa8c8d&amp;fs=MTYxODExOTI2MjmUsIC5N3x3ZWJWNnwxMDA4MDk5NTmUsIC4fDE3MS4yNTIdUngMTU1LjIxNw",
    audio: `${bly}`,
  },
  {
    name: "Unaging Dream",
    artist: "Yin Lin",
    cover: "./asset/img/unaging.jpg",
    id: uuidv4(),
    active: false,
    color: ["#4a4228", "#4b2f07"],
    // audio:
    //   "https://doc-00-4g-docs.googleusercontent.com/docs/securesc/2vh0e8arpamh5nv4haep32dq9hkcbbgj/la9a0hhvaevg3pj78vsdl7g6sjs0q4jn/1619333700000/07018604904914775687/07018604904914775687/1VsBYgavSvbagvTelTlhajQsxC9aXgIe9?e=download&authuser=0",
    audio: `${unaging}`,
  },
  {
    name: "La Belle et la Bête",
    artist: "hitRECORD",
    cover: "./asset/img/btntb.jpg",
    id: uuidv4(),
    active: false,
    color: ["#4a4228", "#4b2f07"],
    // audio:
    //   "https://doc-10-4g-docs.googleusercontent.com/docs/securesc/2vh0e8arpamh5nv4haep32dq9hkcbbgj/cugnp076akoacn8fii5qunqm41eiqhul/1619333850000/07018604904914775687/07018604904914775687/1XHXxdMdnuJ-dFlszUXNxmINE7NrkMVSU?e=download&authuser=0",
    audio: `${btntb}`,
  },
  {
    name: "Photograph",
    artist: "Ed Sheeran",
    cover: "./asset/img/ptg.jpg",
    id: uuidv4(),
    active: false,
    color: ["#4a4228", "#4b2f07"],
    audio: `${ptg}`,
  },
  {
    name: "Ngay chua giong bao",
    artist: "Bui Lan Huong",
    cover: "./asset/img/ncgb.jpg",
    id: uuidv4(),
    active: false,
    color: ["#4a4228", "#4b2f07"],
    audio: `${ncgb}`,
  },
];

export default myList;
