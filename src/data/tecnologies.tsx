import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFlutter,
  SiSqlite,
  SiSwift,
  SiAngular,
  SiMysql,
} from "react-icons/si";

import { faJava } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const tecnologies = {
  html: <SiHtml5 className="w-8 h-auto" color="#E34F26" key={"html"} />,
  css: <SiCss3 className="w-8 h-auto" color="#1572B6" key={"css"} />,
  tailwind: (
    <SiTailwindcss className="w-8 h-auto" color="#06B6D4" key={"tailwind"} />
  ),
  js: <SiJavascript className="w-8 h-auto" color="#F7DF1E" key={"js"} />,
  ts: <SiTypescript className="w-8 h-auto" color="#007ACC" key={"ts"} />,
  react: <SiReact className="w-8 h-auto" color="#61DAFB" key={"react"} />,
  nextjs: <SiNextdotjs className="w-8 h-auto" color="black" key={"nextjs"} />,
  angular: <SiAngular className="w-8 h-auto" color="#DD0031" key={"angular"} />,
  python: <SiPython className="w-8 h-auto" color="#3776AB" key={"python"} />,
  django: <SiDjango className="w-8 h-auto" color="#0f6117" key={"django"} />,
  java: (
    <FontAwesomeIcon
      icon={faJava}
      className="w-6 h-auto"
      color="#007396"
      key={"java"}
    />
  ),
  mysql: <SiMysql className="w-8 h-auto" color="#4479A1" key={"mysql"} />,
  postgres: (
    <SiPostgresql className="w-8 h-auto" color="#336791" key={"postgres"} />
  ),
  slite: <SiSqlite className="w-8 h-auto" color="#003B57" key={"sqlite"} />,
  fluter: <SiFlutter className="w-8 h-auto" color="#02569B" key={"flutter"} />,
  swift: <SiSwift className="w-8 h-auto" color="#FA7343" key={"swift"} />,
  git: <SiGit className="w-8 h-auto" color="#F05032" key={"git"} />,
  github: <SiGithub className="w-8 h-auto" color="#181717" key={"github"} />,
};

export const tecnologiesArray = [
  <SiHtml5 key="html" className="w-6 h-auto" color="#E34F26" />,
  <SiCss3 key="css" className="w-6 h-auto" color="#1572B6" />,
  <SiTailwindcss key="tailwind" className="w-6 h-auto" color="#06B6D4" />,
  <SiJavascript key="js" className="w-6 h-auto" color="#F7DF1E" />,
  <SiTypescript key="ts" className="w-6 h-auto" color="#007ACC" />,
  <SiReact key="react" className="w-6 h-auto" color="#61DAFB" />,
  <SiNextdotjs key="nextjs" className="w-6 h-auto" color="black" />,
  <SiAngular key="angular" className="w-6 h-auto" color="#DD0031" />,
  <SiPython key="python" className="w-6 h-auto" color="#3776AB" />,
  <SiDjango key="django" className="w-6 h-auto" color="#0f6117" />,
  <SiPostgresql key="postgres" className="w-6 h-auto" color="#336791" />,
  <SiSqlite key="sqlite" className="w-6 h-auto" color="#003B57" />,
  <SiFlutter key="flutter" className="w-6 h-auto" color="#02569B" />,
  <SiSwift key="swift" className="w-6 h-auto" color="#FA7343" />,
  <SiGit key="git" className="w-6 h-auto" color="#F05032" />,
  <SiGithub key="github" className="w-6 h-auto" color="#181717" />,
];
