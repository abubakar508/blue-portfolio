import React from "react";
import { Link } from "react-router-dom";
import { AiFillHtml5, AiFillAccountBook } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiSolidity,
  SiEthereum,
  SiMicrosoftaccess,
  SiQuickbooks,
  SiMicrosoftsqlserver,
  SiMysql,
  SiWeb3Dotjs,
} from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandThreejs,
  TbBrandFramerMotion,
  TbSql,
} from "react-icons/tb";
import { BiLogoVuejs, BiLogoFigma, BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { DiSqllite } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import "./Skillrank.css";
import { GrArchlinux } from "react-icons/gr";

export const Skillrank = () => {
  return (
    <div>
      <section className="Skillrank">
        <div className="skill-rank-cont">
          <Link to="/Skills" title="Previous Page" className="skill-link">
            <GrArchlinux className="skill-rank-icon" /> Go Back to Skills
          </Link>
          <div className="rank-title">
          <h2>
            Proffesional Skills by Percentage<span>.</span>
          </h2>
          </div>
          <div className="skill-rank-item">
            <span>
              Web Development :
              <AiFillHtml5 className="skill-icons" />{" "}
              <SiCss3 className="skill-icons" />{" "}
              <SiJavascript className="skill-icons" />
              <DiJavascript className="skill-icons" />
              <SiReact className="skill-icons" />{" "}
              <TbBrandNextjs className="skill-icons" />{" "}
              <BiLogoVuejs className="skill-icons" />{" "}
              <TbBrandThreejs className="skill-icons" />
              <TbBrandFramerMotion className="skill-icons" />
            </span>
            <div className="skills-bar" title="85%"></div>
          </div>

          <div className="skill-rank-item">
            <span>
              UI/UX Design :
              <BiLogoFigma className="skill-icons" />
            </span>
            <div className="skills-bar-1" title="92%"></div>
            <div className="skill-rank-item">
              <span>
                Backend :<IoLogoNodejs className="skill-icons" />
              </span>
              <div className="skills-bar-4" title="50%"></div>
            </div>
          </div>
          <div className="skill-rank-item">
            <span>
              Blockchain Development :
              <SiSolidity className="skill-icons" />{" "}
              <SiEthereum className="skill-icons" />
            </span>
            <div className="skills-bar-2" title="70%"></div>
          </div>
          <div className="skill-rank-item">
            <span>
              Accounting & Finance :
              <AiFillAccountBook className="skill-icons" />{" "}
              <PiMicrosoftExcelLogoFill className="skill-icons" />
              <SiMicrosoftaccess className="skill-icons" />
              <SiQuickbooks className="skill-icons" />
            </span>
            <div className="skills-bar-3" title="99%"></div>
          </div>

          <div className="skill-rank-item">
            <span>
              Database :<TbSql className="skill-icons" /> :{" "}
              <SiMicrosoftsqlserver className="skill-icons" />{" "}
              <SiMysql className="skill-icons" />{" "}
              <BiLogoPostgresql className="skill-icons" />{" "}
              <DiSqllite className="skill-icons" />
            </span>
            <div className="skills-bar-5" title="39%"></div>
          </div>
          <div className="skill-rank-item">
            <span>
              WEB3 :<SiWeb3Dotjs className="skill-icons"/>
            </span>
            <div className="skills-bar-6" title="40%"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
