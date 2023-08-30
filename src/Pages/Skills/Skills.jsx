import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Skills.css";
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
import { GiStrongMan } from "react-icons/gi";
import {GrArchlinux} from "react-icons/gr";
export const Skills = () => {
  //Skill Click
  const [clicked, setClicked] = useState(false);
  const click = () => {
    setClicked(true);
  };
  const notClick = () => {
    setClicked(false);
  };
  //Academia Click

  const [clicked1, setClicked1] = useState(false);
  const click1 = () => {
    setClicked1(true);
  };
  const notClick1 = () => {
    setClicked1(false);
  };

  //Experience Click

  const [clicked2, setClicked2] = useState(false);
  const click2 = () => {
    setClicked2(true);
  };
  const notClick2 = () => {
    setClicked2(false);
  };

  //Personal Gains Click
  const [clicked3, setClicked3] = useState(false);
  const click3 = () => {
    setClicked3(true);
  };
  const notClick3 = () => {
    setClicked3(false);
  };
  return (
    <div>
      <div className="skill-set">
        <em>
          In this page, to view a section, hover on the section and leave the
          cursor on it.
        </em>
        <h1>
          Skills<span>.</span>
        </h1>
        <div className="Skill-header">
          <div onMouseEnter={click} onMouseLeave={notClick} className="click">
            <small>Skills</small>
          </div>
          <div className="click" onMouseEnter={click1} onMouseLeave={notClick1}>
            <small>Academia</small>
          </div>
          <div className="click" onMouseEnter={click2} onMouseLeave={notClick2}>
            <small>Experience</small>
          </div>
          <div className="click" onMouseEnter={click3} onMouseLeave={notClick3}>
            <small>Personal Gains</small>
          </div>
          <div ><Link to="/Skillrank"><GrArchlinux className="next-page" title="Next Page"/></Link></div>
        </div>
        {clicked && (
          <div className="skill-details">
            <div className="skill-front">
              Web Development:{" "}
              <span>
                <AiFillHtml5 className="skill-icons" />{" "}
                <SiCss3 className="skill-icons" />{" "}
                <SiJavascript className="skill-icons" />
                <DiJavascript className="skill-icons" />
              </span>
              <SiReact className="skill-icons" />{" "}
              <TbBrandNextjs className="skill-icons" />{" "}
              <BiLogoVuejs className="skill-icons" />{" "}
              <TbBrandThreejs className="skill-icons" />
              <TbBrandFramerMotion className="skill-icons" />
            </div>
            <div className="skill-front">
              UI/UX Design: <BiLogoFigma className="skill-icons" />
            </div>
            <div className="skill-front">
              Blockchain Development: <SiSolidity className="skill-icons" />{" "}
              <SiEthereum className="skill-icons" />
            </div>
            <div className="skill-front">
              Accounting: <AiFillAccountBook className="skill-icons" />{" "}
              <PiMicrosoftExcelLogoFill className="skill-icons" />
              <SiMicrosoftaccess className="skill-icons" />
              <SiQuickbooks className="skill-icons" />
            </div>
            <div className="skill-front">
              Backend: <IoLogoNodejs className="skill-icons" />
            </div>
            <div className="skill-front">
              Database <TbSql className="skill-icons" /> :{" "}
              <SiMicrosoftsqlserver className="skill-icons" />{" "}
              <SiMysql className="skill-icons" />{" "}
              <BiLogoPostgresql className="skill-icons" />{" "}
              <DiSqllite className="skill-icons" />
            </div>
            <div className="skill-front">
              {" "}
              WEB3: <SiWeb3Dotjs />
            </div>
          </div>
        )}
        {clicked1 && (
          <div className="exp-data">
            <div className="exp-front">
              Accounting & Finance -{" "}
              <span>Bachelor of COMMERCE -Finance Option</span>
            </div>
            <div className="exp-front">
              Information Technology : Diploma in Information Technology
            </div>

            <div className="exp-front">
              Information Technology : Certificate in Programming
            </div>
          </div>
        )}
        {clicked2 && (
          <div className="ac-data">
            <div className="ac">
              2019- I hard coded a dummy social website, replica of facebook.
              (Non-Responsive)
            </div>
            <div className="ac">
              {" "}
              2020 - Worked on a Blockchain Project (Building a Simple dApp)
            </div>
            <div className="ac">2022 - Worked on Solo Projects</div>
            <div className="ac">
              2023 - A Front End developer at Crafted Sole{" "}
            </div>
            <div className="ac">2023/07 - A UI/UX Designer at Crafted Sole</div>
          </div>
        )}
        {clicked3 && (
          <div className="pg-data">
            <div className="pg">
              I believe, that with my ambition and ever knowledge-yearning mind
              , I have gone a long way into the web development verse and still
              there's more to experience. These baby steps are just a stepping
              stone to each level.
            </div>
          </div>
        )}

        <GiStrongMan className="skill-big-icon-log" />
      </div>
    </div>
  );
};
