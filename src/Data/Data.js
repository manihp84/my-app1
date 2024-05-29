import { App, Calendar, Camera, Display, Envelope, Facebook, GeoAlt, Instagram, Laptop, Linkedin, Phone, Twitter, Mortarboard, PatchCheck, } from "react-bootstrap-icons";
export const HeaderData = [
    {
        id: 1,
        title: "Home",
        Link: "/"
    },
    {
        id: 2,
        title: "About-us",
        Link: "/About"
    },
    {
        id: 3,
        title: "Service",
        Link: "/Service"
    },
    {
        id: 4,
        title: "Resume",
        Link: "/Profile"
    },
    {
        id: 5,
        title: "blogs",
        link: "#home"
    },
    {
        id: 6,
        title: "case study",
        link: "#link"
    }
]
export const HeaderDataDropdown = [
    {
        id: 1,
        title: "More",
        content: [
            {
                id: 1,
                titles: "Api",
                // link: "https://preview.themeforest.net/",
                imgLink: process.env.PUBLIC_URL + "/images/logo/logo-dark.webp",
                link: "/ApiData",

            },
            {
                id: 1,
                titles: "Hooks",
                link: "/Hooksdata",
            },
        
        ]
    },
    
]
export const BannerData = [
    {
        id: 1,
        heading: "My first slide",
        imgLink: process.env.PUBLIC_URL + "/images/bannerimg/ban.jpg",
        clchange: "banner-img",
        content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
        id: 2,
        heading: "My first slide",
        imgLink: process.env.PUBLIC_URL + "/images/bannerimg/ban-1.jpg",
        clchange: "banner-img",
        content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
        id: 3,
        heading: "My first slide",
        imgLink: process.env.PUBLIC_URL + "/images/bannerimg/ban-2.jpg",
        clchange: "banner-img",
        content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },


]
export const FooterData = [
    {
        id: 1,
        title: "58 Howard Street #2 San Francisco, CA 941",
        link: "#home"
    },
    {
        id: 2,
        title: "contact@aeroland.com",
        link: "#link"
    },
    {
        id: 3,
        title: "(+68)1221 09876",
        textcolor: "text-black",
        link: "#link"
    },
    {
        id: 4,
        title: "www.mitech.xperts.com",
        textcolor: "footer-widget__list",
        link: "#link"
    },
]
export const FooterDatalist = [
    {
        id: 1,
        title: "Manage IT",

    },
    {
        id: 2,
        title: "IT Support",
    },
    {
        id: 3,
        title: "IT Consultancy",
    },
    {
        id: 4,
        title: "Cloud Computing",
    },
    {
        id: 5,
        title: "Syber Security",
    },
]
export const FooterDatalist_1 = [
    {
        id: 1,
        title: "Pick up locations",

    },
    {
        id: 2,
        title: "Terms of Payment",
    },
    {
        id: 3,
        title: "Privacy Policy",
    },
    {
        id: 4,
        title: "Where to Find Us",
    },

]
export const FooterDatalist_2 = [
    {
        id: 1,
        title: "Forum Support",
    },
    {
        id: 2,
        title: "Help & FAQ",
    },
    {
        id: 3,
        title: "Contact Us",
    },
    {
        id: 4,
        title: "Pricing and plans",
    },
    {
        id: 5,
        title: "Cookies Policy",
    },

]
export const FooterDataImg = [
    {
        id: 1,
        imgLink: process.env.PUBLIC_URL + "/images/logo/google-play.webp",
    },
    {
        id: 2,
        imgLink: process.env.PUBLIC_URL + "/images/logo/app-store.webp",
    },


]
export const DemosDataimg = [
    {
        id: 1,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/male-developer.jpg",
        content: "Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.",
    },
    {
        id: 2,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/businessman.jpg",
        content: "Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.",
    },
    {
        id: 3,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/laptop.jpg",
        content: "Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.",
    },

]
export const DemosHeading = [
    {
        id: 1,
        heading: "Hire us, why not?",
        subtitle: "section-sub-title",
    },
    {
        id: 2,
        heading_1: 'How we claim to',
        clchange: "excel?",
        heading_2: "heading",
    },

]
export const Contactheading = [
    {
        id: 1,
        heading: 'Obtaining further information by make a contact with our experienced IT staffs.',
        subtitle: "heading_1",
        content: ' We’re available for 8 hours a day! Contact to require a detailed analysis and assessment of your plan.',
    },
]
export const Contactheading_2 = [
    {
        id: 1,
        heading: 'Reach out now',
        contact: "contact_info",
        heading_2: '1900 68668',
        contact_2: "call_us",
        links: 'www.google.com',
        btntitle: 'contact us',
    },
]
export const ServiceData = [
    {
        id: 1,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/itimg-1.webp",
        heading: 'IT Design',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 2,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/itimg-2.webp",
        heading: 'IT Management',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 3,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/itimg-3.webp",
        heading: 'IT Security',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
]
export const Aboutusdata = [
    {
        id: 1,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/it-1.webp",
        heading: 'What we can do?',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 2,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/it-2.webp",
        heading: 'Become our partners?',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 3,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/it-3.webp",
        heading: 'Need a hand?',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
]
export const Aboutbannerdata = [
    {
        id: 1,
        heading: "About Mitech",
        heading_1: "Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.",
    },
]
export const Aboutservicedata = [
    {
        id: 1,
        heading: "Our company",
        heading_1: "We run all kinds of IT services that vow your",
        clchange: "success",
        textcolor: 'section-sub-title',
        textcolor_2: 'heading',
    },
]
export const Aboutservicedata_2 = [
    {
        id: 1,
        heading: "38",
        content: "Years’ Experience in IT",
        clchange: "mark-text",
        heading_2: "More About Our Success Stories",
    },

]
export const Aboutservicedata_3 = [
    {
        id: 2,
        content: "Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.",
    },
]
export const Itservicedata = [
    {
        id: 1,
        heading: "IT Services",
        heading_1: "HOME IT SERVICE",
        clchange: "text",
    },
]
export const Servicecarddata = [
    {
        id: 1,
        heading: "Preparing for your success,",
        heading_2:"we provide truly prominent IT solutions.",
    },

]
export const Servicecard_2 = [
    {
        id: 1,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/itimg-1.webp",
        heading: 'IT Design ',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 2,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/itimg-2.webp",
        heading: 'IT Management',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 3,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/itimg-3.webp",
        heading: 'Data Security',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 4,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/it-1.webp",
        heading: 'Business Reform',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 5,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/it-2.webp",
        heading: 'Infrastructure Plan',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
    {
        id: 6,
        imgLink: process.env.PUBLIC_URL + "/images/content-img/it-3.webp",
        heading: 'Firewall Advancement',
        textcolor: 'heading_01',
        content: ' We provide the most responsive and functional IT design for companies and businesses worldwide.',
        textcolor_2: 'text',
    },
]
export const Servicecontactdata = [
    {
     id:1,
     heading:'CALL FOR ADVICE NOW!',
     content: '190068666',
     clrchange: 'text-cont',
     heading_2:'Say Hello',
     content_2:'hello@mitech.com',
    },
]

export const Homecontentdata = [
    {
        id: 1,     
        imgsrc: process.env.PUBLIC_URL+"/images/content-img/mani-1.jpeg",
        heading:"Mani Ram",
        clheading: "parsonal-info-name",
        heading_2: "Ui Designer",
        clheading_2:"info-bio",
        Facebook: <Facebook color="blue" size={20} />,
        Twitter: <Twitter color="blue" size={20} />,
        Instagram: <Instagram color="orange" size={20} />,
        link:"https://www.instagram.com/mani_hp84/",
        Linkedin: <Linkedin color="blue" size={20} />,
        spheading:"Phone",
        content:"+918629072594",
        Phone: <Phone color="#E93B81" size={20} />,
        spheading_1:"Mail",
        content_2:"maniram3327cr@gmail.com",
        mail: <Envelope color="#E93B81" size={20} />,
        spheading_2:"Location",
        content_3:"Chandigarh,India",
        location: <GeoAlt color="#E93B81" size={20} />,
        spheading_3:"Birthday",
        content_4:"30/03/2000",
        Calendar: <Calendar color="#E93B81" size={20} />,
        Education: <Mortarboard color="#E93B81" size={20} />,
        heading_6:"Education",
        content_7:"Bachelor Of Arts",
        content_8:"Himachal Pradesh University",
        heading_8: "Web Development",
        heading_9: "Courses",
        content_9:"DMCA",
        content_10:"C-DAC Sujanpur",
        content_11:"Full Stack Development",
        content_12:"CBitss Chandigarh",
        clchange: "subhead",
        heading_3: "Download Cv",

    },
    
]
export const Homecontentdatatwo = [
    {
    id:1,
    heading: "About",
    clchange: "page-title",
    content: "I'm Creative Director and UI Designer from chandigarh, India, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
    content_1: "My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.",
    heading_1: "What I Do!",
    heading_2: "Ui Design",
    Laptop: <Laptop color="#E93B81" size={40} /> ,
    content_2: "Design Tools: Adobephotoshop Frontend Development:  HTML, Cascading Style Sheets (CSS), Bootstrap, JavaScript, JQuery, React Js, Responsive Design: Bootstrap, Flexbox, Grid Layout",
    heading_3: "Web Designing",
    App: <App color="#E93B81" size={40} />,
    content_3: "Design Tools: Adobe Photoshop, Frontend Development: HTML, CSS, JavaScript (Basic), React Js, Responsive Design: Bootstrap, Media Queries",
    heading_4: "Photoshop",
    Camera: <Camera color="#E93B81" size={40} />,
    content_4: "Skilled: website layouts, banners, and other visual elements,layers, masks, filters, and adjustment layers.",
    heading_5: "Web Development",
    Display: <Display color="#E93B81" size={40} />,    
    content_5: "Proficient in Python programming language with a focus on web development frameworks such as Django",
    content_6: "© 2024 All Rights Reserved by elite-themes24.",
    clchange_2: "content-wrap",
    PatchCheck: <PatchCheck color="#E93B81" size={40} />,
    heading_10: "Frontend Developer",
    content_7: "HTML, Cascading Style Sheets (CSS), Bootstrap, JavaScript, JQuery, React Js",
    },
  
]
export const cardData = [
    {
    id:1,
    title:"England",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    category:"Education",
    link:"wwww.google.com",
    imgServ:process.env.PUBLIC_URL+"/images/content-img/mani-1.jpeg",
   },
]
