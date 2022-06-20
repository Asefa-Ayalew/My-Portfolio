import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {BsCircleFill} from 'react-icons/bs'
import { IProject, IService, ISkill } from './type';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import {MdDeveloperMode} from 'react-icons/md'


export const services:IService[] = [
    {
        Icon:RiComputerLine,
        title: 'Frontend Development',
        about: 
        'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>css</b> and <b>Javascript</b>',
    },
    {
        Icon:FaServer,
        title: 'Backend Development',
        about:
        'handle database, server, api using <b>express</b> and other popular frameworks',
    },
    {
        Icon:AiOutlineApi,
        title: 'API Development',
        about:
        'I can develop robust REST API using <b>django REST API</b> and <b>node API</b>',
    },
    {
        Icon:MdDeveloperMode,
        title:'competitive coder',
        about:
        'a daily problem solver in <b> Hacker Rank </b> and <b>Leet code</b>',
    },
    {
        Icon:AiOutlineAntDesign,
        title:'UI/UX designer',
        about:
        'stunning user interface design using <b>Figma</b> and <b>Flamer</b>',
    },
    {
        Icon:RiComputerLine,
        title:"Mathematician",
        about:
        'Briliant and genius Mathematics inventor',
    },
]

export const languages:ISkill[]= [
    {
        name:'python',
        level: '100%',
        Icon:BsCircleFill,
    },
    {
        name: 'Javascript',
        level: '100%',
        Icon:BsCircleFill,
    },
    {
        name: 'React',
        level:'100%',
        Icon:BsCircleFill,
    },
    {
        name: 'Java',
        level: '98%',
        Icon:BsCircleFill,
    },
    {
        name: 'C#',
        level: '88%',
        Icon: BsCircleFill,
    },
]
export const tools:ISkill[]= [
    {
        name:'Figma',
        level: '80%',
        Icon:BsCircleFill,
    },
    {
        name: 'Photoshop',
        level: '28%',
        Icon:BsCircleFill,
    },
    {
        name: 'Illustrator',
        level:'12%',
        Icon:BsCircleFill,
    },
    {
        name: 'Painting',
        level: '8%',
        Icon:BsCircleFill,
    },
]
export const projects:IProject[] = [
    {
        name: "COVID Tracker",
        description:
        "this app shows a statisitical view about corona virus over the world",
        image_path: "/images/redFlower.jpg",
        deployed_url:"https://covid-19-tracker-by-Ase.web.app/",
        github_url:"https://github.com/Ase-Ayalew/Covid-19-tracker",
        category:["react"],
        key_techs:["React","Chart.js", "Material UI"],
    }, 
    {
        name:"Algorithm Visualizer",
        image_path:"/images/dog.jpg",
        deployed_url:"https://visual-algorithm.web.app/",
        github_url:"https://github.com/Ase-Ayalew/algorithm-visualizer",
        category:["react"],
        description:
        "A web app which shows how the algorithm (path finding or sorting) works with cool animation",
        key_techs:["react","Firebase", "Framer-Motion"],
    },
    {
        name:"Dev Talks",
        image_path:"/images/river.jpg",
        deployed_url:"https://dev-talks.web.app/",
        github_url:"https://github.com/Ase-Ayalew/dev-talks",
        category:["node","mongo","react"],
        description:
        "Social Media App for developers who can share project, create posts, ... etc",
        key_techs:["React", "Redux","Node","Express","Mongo","Rest Api", "Bootstrap"],
    },
    {
        name:"Realtime chat app",
        image_path:"/images/cat.jpg",
        deployed_url:"https://Realtime-chat-app.web.app/",
        github_url:"https://github.com/Ase-Ayalew/realtime-chat-app-developer",
        category:["node","react"],
        description:"Basic Realtime chat app where one can create a room can talk each other",
        key_techs:["React", "Redux","Node","Express","Mongo","Rest Api", "Bootstrap"],
    },
    {
        name:"Tweeter clone",
        image_path:"/images/girls.jpg",
        deployed_url:"https://dev-talks.web.app/",
        github_url:"https://github.com/Ase-Ayalew/dev-talks",
        category:["node","mongo","react"],
        description:
        "Social Media App for developers who can share project, create posts, ... etc",
        key_techs:["React", "Redux","Node","Express","Mongo","Rest Api", "Bootstrap"],
    }
]