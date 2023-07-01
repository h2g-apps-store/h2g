// import images
import Hero_person from "../assets/images/Hero/person.png";

import figma from "../assets/images/Skills/figma.png";
import nodejs from "../assets/images/Skills/node.png";
import ps from "../assets/images/Skills/ps.png";
import python from "../assets/images/Skills/python.png";
import reactjs from "../assets/images/Skills/react.png";
import sketch from "../assets/images/Skills/sketch.png";

import services_logo2 from "../assets/images/Services/consultation.png";
import services_logo3 from "../assets/images/Services/developpement-mobile.png";
import services_logo1 from "../assets/images/Services/developpeur.png";

import project1 from "../assets/images/projects/img1.png";
import project2 from "../assets/images/projects/img2.png";
import project3 from "../assets/images/projects/img3.png";
import person_project from "../assets/images/projects/person.png";

import avatar1 from "../assets/images/Testimonials/avatar1.png";
import avatar2 from "../assets/images/Testimonials/avatar2.png";
import avatar3 from "../assets/images/Testimonials/avatar3.png";
import avatar4 from "../assets/images/Testimonials/avatar4.png";

import Hireme_person from "../assets/images/Hireme/person.png";
import Hireme_person2 from "../assets/images/Hireme/person2.png";

// import icons from react-icons
import { BiUser } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

import { LuContact } from "react-icons/lu";

export const content = {
  nav: [
    {
      id: 1,
      link: "#home",
      icon: BiUser,
    },
    {
      id: 2,
      link: "#skills",
      icon: GiSkills,
    },
    {
      id: 3,
      link: "#services",
      icon: MdOutlineMiscellaneousServices,
    },
    {
      id: 4,
      link: "#projects",
      icon: FaProjectDiagram,
    },
    {
      id: 5,
      link: "#contact",
      icon: LuContact,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Herman",
    LastName: "GEKU",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Compétences",
    subtitle: "MES MEILLEURES COMPÉTENCES",
    skills_content: [
      {
        name: "Html & Css",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "TypeScript",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Express js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "React js ",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "React Native",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Mysql",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Prisma",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "CE QUE J'OFFRE",
    service_content: [
      {
        title: "Développement Web",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Développement mobile",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Conseils et consultation",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projet",
    subtitle: "Mes Projets",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
