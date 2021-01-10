import React from "react";
import Styled from "styled-components";
import item1 from "../../Assets/Images/item1.png";
import item2 from "../../Assets/Images/item2.png";
import item3 from "../../Assets/Images/item3.png";
import item4 from "../../Assets/Images/Item4.png";
import item5 from "../../Assets/Images/item5.png";
import item6 from "../../Assets/Images/item6.jpg";
import item7 from "../../Assets/Images/item7.png";
import item8 from "../../Assets/Images/item8.jpg";
import item9 from "../../Assets/Images/item9.png";
import item10 from "../../Assets/Images/item10.png";
import item11 from "../../Assets/Images/item11.png";
import item12 from "../../Assets/Images/item12.png";
import item13 from "../../Assets/Images/item13.png";
import item14 from "../../Assets/Images/item14.png";
import item15 from "../../Assets/Images/item15.png";
import item16 from "../../Assets/Images/item16.png";
import cssClasses from "./Cards.module.scss";

const Div = Styled.div`
  width:400px;
  height:250px;
  overflow: hidden;
  display:inline-block;
  position: relative;
  box-shadow: 5px 2px 10px #ececec,-2px -2px 15px #ececec;
  box-sizing: border-box;
  &::before{  
      content:"";
      background: url("${(props) => props.imgUrl}") no-repeat center/cover;
      position: absolute;
      width:100%;
      height:100%;
      transition: all 0.9s ease;
  }
  &::after{  
    content:"";
    position: absolute;
    background-color: rgba(253,165,15, 0.9);
    width:100%;
    height:100%;
    transform: translateY(-100%);
    transition: all 0.5s ease;
}
  &:hover::before{
      transform:scale(1.2);
  }
  &:hover::after{
    transform:translateY(0); 
}
@media only screen and (max-width: 768px){
  width:100vw;
}
  `;

const arr = [
  {
    imgUrl: item1,
    link: "https://sirbh.github.io/Hotel-BT/",
    description:"Simple website made using HTML/CSS for an Hotel. It is resposive and looks good across all kind of devices like phone,tablet and PCs."  },
  {
    imgUrl: item2,
    link: "https://sirbh.github.io/EdgeLedger/",
    description:
      "Website built using HTML/CSS for an hypothetical Firm called Edgeledger. Made with responsive Design and Uses Flex-box for Layouts",
  },
  {
    imgUrl: item3,
    link: "https://burgurbuilder-468fb.web.app/",
    description:"Burger Builder App where user can built and place order by adding topings of there choice. FrontEnd is in React JS and Backend is powered by Google Firebase. Almost all important react libraries like redux,context-api,axios,router,forms etc are used." 
    },
  {
    imgUrl: item4,
    link: "https://sirbh.github.io/ProjectPlannerApp/",
    description:
      'Project Planner App  can help in managing daily activities. Built using Javascript, HTML, CSS. User can simply drag and drop the project-items to manage daily tasks'
  },
  {
    imgUrl: item14,
    link: "https://sirbh.github.io/GridWebsite/",
    description:"Grid website for hypothetical new channel built using CSS Grid and HTML"
  },
  {
    imgUrl: item5,
    description:
      "Text Extractor is a command line tool which can be used to extract text from multiple html files of same pattern. Built using Java and Regex. I made this tool at AuthBridge to automate the process of Text Extraction from HTML files",
  },
  {
    imgUrl: item6,
    description:
      "PDFTool is a pdf processor with User-Interface built in ReactJS and Backed by Spring Boot and Java PDF box. User can add Bookmarks, Extract-text, Convert and Process multiple Pdf files.",
  },
  
 
  {
    imgUrl: item15,
    link: "https://sirbh.github.io/NeomorphicMusicPlayer/",
    description:"Simple Music Player app with Screen to display the lyrics. Built using React JS. Sass is used to add neomorphic effect."
    },
    
  {
    imgUrl: item7,
    link: "https://sirbh.github.io/NeomorphicReactJSFormComponents/",
    description:
     "This is a simple Form library for react with ready to use neomorphic styled form elements"  },
  {
    imgUrl: item8,
    description:
     "LSmart is a RFID based Library automation System on which I worked at Libsys. I desinged the flow and interaction of the various components like Check-In ,Check-out, Renew etc. It was built using Angular and Backed by Java-Spring Backend. All important concepts like routing, HTTP client, LazyLoading, Forms etc were used"  },
  {
    imgUrl: item9,
    link: "https://github.com/sirbh/2D-MapperWithRadarSystem",
    description:
      "2DMapper and Radar system. This was my Final year Project built on Arduino Development Board. This electronic systems can create 2-D map of its surrounding which can be processed by matlab and Radar system which can locate and show detection of objects in 10 m range.",
  },
  {
    imgUrl: item10,
    link: "https://sirbh.github.io/timeline/",
    description:"Basic HTML Webiste for timline display with animation and lazy loading"
  },
  {
    imgUrl: item11,
    link: "https://sirbh.github.io/DropDown/",
    description:"DropDown menu project built in HTML/CSS"
  },
  {
    imgUrl: item12,
    link: "https://sirbh.github.io/HamburgerMenu/",
    description:"Responsive Hamburger menu for PC and mobile devices"
  },
  {
    imgUrl: item13,
    link: "https://sirbh.github.io/PresentationWebsite/",
    description:"Presentation Website in HTML/CSS with animation"
  },
  {
    imgUrl: item16,
    link: "https://sirbh.github.io/CollegeDunia/",
    description:"Infinite scrolling in React JS"
  }
];

const Cards = (props) => {
  console.log(props);
  return arr.map((project, id) => (
    <Div key={id} imgUrl={project.imgUrl} className={cssClasses.Card}>
      <p>{project.description}</p>
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Go To Project
        </a>
      ) : null}
    </Div>
  ));
};

export default Cards;
