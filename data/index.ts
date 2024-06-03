export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/resume/Uzair Saiyed (SCET, India).pdf" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Brewing Magical Potions: The Art of Creating Enchanting Websites & Smart Contracts",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end capitalize",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Remote or Hybrid? Doesn't Matter. I'm here to conjure up magic no matter the time zone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start capitalize",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center capitalize",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building Web3, Auditing Smart Contracts alongside Web2",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start capitalize",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Learning and getting better at breaking smart contracts by the day",
    description: "What drives me everyday?!",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center capitalize",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Intrigued? Reach out and let's weave some digital magic together!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName:
      "justify-center md:max-w-full max-w-60 text-center capitalize",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 3,
    title: "Pumpkin-Index (Fantom 🏆)",
    isHackathonWinner: true,
    des: "An index token is like a basket that holds many different types of cryptocurrencies at once, allowing investors to invest in several cryptocurrencies through one token.",
    deployed_url: "https://pumpkin-protocol-fantom.vercel.app/",
    img: "/project-images/Pumpkin-Index/1.JPG",

    link: "https://github.com/JustUzair/Pumpkin-Protocol",
    iconLists: ["/eth.png", "/next.svg"],
    category: ["web3-fullstack", "smart-contracts"],
    key_techs: ["React", "Hardhat", "Solidity", "Next.js", "Remix", "DeFi"],
  },
  {
    id: 4,
    title: "ThetaFans (Theta Network 🏆)",
    isHackathonWinner: true,
    des: "Thetafans solves the problem of costly intermediaries in content monetization by leveraging blockchain technology, enabling direct and secure transactions between creators and fans without the need for intermediaries, such as payment processors, resulting in increased revenue for creators.",
    deployed_url: "https://thetafans.vercel.app/",
    img: "/project-images/ThetaFans/1.jpg",
    link: "https://github.com/JustUzair/ThetaFans",
    iconLists: ["/eth.png", "/next.svg"],
    category: ["web3-fullstack", "smart-contracts"],
    key_techs: ["React", "Hardhat", "Solidity", "Next.js", "Remix"],
  },
  {
    id: 6,
    title: "Draggle",
    isHackathonWinner: false,
    des: "Multi-Tenant SaaS Website Builder with Stripe Connect & Team Management",
    deployed_url: "https://draggle.vercel.app/",
    link: "https://github.com/JustUzair/draggle",
    img: "/project-images/Draggle/1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/c.svg",
      // "/three.svg"
      // , "/fm.svg"
    ],
    category: ["web2"],
  },
  {
    id: 7,
    title: "Motion",
    isHackathonWinner: false,
    des: "Notion Clone",
    deployed_url: "https://motion-justuzair.vercel.app/",
    link: "https://github.com/JustUzair/notion-clone",
    img: "/project-images/Notion-Clone/1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/c.svg",
      // "/three.svg"
      // , "/fm.svg"
    ],
    category: ["web2"],
  },
  {
    id: 11,
    title: "Pumpkin-Index V2",
    isHackathonWinner: false,
    des: "An index token is like a basket that holds many different types of cryptocurrencies at once, allowing investors to invest in several cryptocurrencies through one token.",
    deployed_url: "https://tokenforge-zk.vercel.app/",
    img: "/project-images/Pumpkin-Index-V2/1.png",

    link: "https://github.com/JustUzair/zk-index-polygon",
    iconLists: ["/eth.png", "/next.svg"],
    category: ["web3-fullstack", "smart-contracts"],
    key_techs: ["React", "Hardhat", "Solidity", "Next.js", "Remix", "DeFi"],
  },
  {
    id: 8,
    title: "ERC1155-Factory",
    isHackathonWinner: false,
    des: "ERC1155 Standard NFT Project with Foundry",

    link: "https://github.com/JustUzair/erc1155-with-factory-foundry",
    img: "/eth.png",
    iconLists: ["/forge.png", "/eth.png"],
    category: ["smart-contracts"],
  },
  {
    id: 9,
    title: "Event-Rewards",
    isHackathonWinner: false,
    des: "Native & ERC20 Token Locking and Claiming using Signature",

    link: "https://github.com/JustUzair/event-rewards-lock-and-claim-erc20-and-native",
    img: "/eth.png",
    iconLists: ["/forge.png", "/eth.png"],
    category: ["smart-contracts"],
  },
  {
    id: 10,
    title: "ERC4626 Vault",
    isHackathonWinner: false,
    des: "ERC4626 Tokenized Vault with Basic Strategy",

    link: "https://github.com/JustUzair/erc4626-tokenized-vault",
    img: "/eth.png",
    iconLists: ["/forge.png", "/eth.png"],
    category: ["smart-contracts"],
  },
  {
    id: 12,
    title: "CCIP Cross-Chain NFT",
    isHackathonWinner: false,
    des: "Chainlink Inter-operability protocol Cross-Chain NFT",

    link: "https://github.com/JustUzair/ccip-cross-chain-nft-minter",
    img: "/eth.png",
    iconLists: ["/forge.png", "/eth.png"],
    category: ["smart-contracts"],
  },
  {
    id: 13,
    title: "Chainlink Automated NFTs",
    isHackathonWinner: false,
    des: "Chainlink Automated NFTs",

    link: "https://github.com/JustUzair/chainlink-automation-nft",
    img: "/eth.png",
    iconLists: ["/forge.png", "/eth.png"],
    category: ["smart-contracts"],
  },
  {
    id: 14,
    title: "Foundry Alogrithmic StableCoin",
    isHackathonWinner: false,
    des: "ERC20 Alogrithmic StableCoin with Liquidation ",

    link: "https://github.com/JustUzair/chainlink-automation-nft",
    img: "/eth.png",
    iconLists: ["/forge.png", "/eth.png"],
    category: ["smart-contracts"],
  },

  {
    id: 1,
    title: "Natours",
    isHackathonWinner: false,
    des: "A tours and travels website for trekking and exploring nature. The website includes functionalities like JWT Authentication, Sign Up, Login, Forgot Password, Reset Password, Upload Profile Photo, Pay and Book your tour, Submit, edit and remove their reviews, receive emails in real time, and much more. In addition to all this, the website is taken care of responsiveness, optimizations, security, etc.",
    deployed_url: "https://natours-8l3p.onrender.com/",
    img: "/project-images/Natours/3.JPG",

    link: "https://github.com/JustUzair/Natours",
    iconLists: ["/eth.png", "/mern.png"],
    category: ["web2"],

    key_techs: [
      "NodeJs",
      "MongoDB",
      "Express",
      "Cloudinary API",
      "Pug Template",
      "SendGrid",
    ],
  },

  {
    id: 2,
    title: "Mintrrs",
    isHackathonWinner: false,
    des: "An NFT minting site that generates different Arts based on the layers generated and uploaded by the artists. The website is a crossover between Web2 and Web3, where artist can generate upto hundreds and thousands of arts just with a few scribbles",
    deployed_url: "https://mintrrs.onrender.com/",
    img: "/project-images/Mintrrs/1.JPG",

    link: "https://github.com/JustUzair/NFT-Generator",
    iconLists: ["/eth.png", "/mern.png"],
    category: ["web3-fullstack", "smart-contracts", "web2"],

    key_techs: [
      "NodeJs",
      "MongoDB",
      "Express",
      "Pug Template",
      "SendGrid",
      "Metamask",
    ],
  },

  {
    id: 5,
    title: "NEKO-DEX",
    isHackathonWinner: false,
    des: "A Cute Cat-Themed DeFi Protocol on Polygon,OKX & Fantom Networks, the protocol includes Decentralized Exchange, Liquidity Pools, LP Tokens Staking, Donations, AAVE Staking, and so much more.",
    deployed_url: "https://neko-dex.vercel.app/",
    img: "/project-images/NEKO-DEX/1.png",
    link: "https://github.com/JustUzair/NEKO-DEX",
    iconLists: ["/eth.png", "/next.svg"],
    category: ["web3-fullstack", "smart-contracts"],
    key_techs: ["React", "Hardhat", "Solidity", "Next.js", "Remix", "DeFi"],
  },
];

export const audits = [
  {
    id: 1,
    name: "Password Store",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2023-12-4"),
    pdfFile: "/audit-reports/2023-12-4-password-store-report.pdf",
  },
  {
    id: 2,
    name: "Puppy Raffle",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2024-1-5"),
    pdfFile: "/audit-reports/2024-1-5-puppy-raffle-report.pdf",
  },
  {
    id: 3,
    name: "TSwap",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2024-1-15"),
    pdfFile: "/audit-reports/2024-1-15-tswap-report.pdf",
  },
  {
    id: 4,
    name: "Thunder Loan",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2024-1-24"),
    pdfFile: "/audit-reports/2024-1-24-thunder-loan-report.pdf",
  },
  {
    id: 5,
    name: "Boss Bridge",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2024-2-2"),
    pdfFile: "/audit-reports/2024-2-2-boss-bridge-report.pdf",
  },
  // {
  //   id: 6,
  //   name: "Password Store",
  //   platform: "CodeHawks",
  //   date: new Date("2023-12-4"),
  //   pdfFile: "/audit-reports/2023-12-4-password-store-report.pdf",
  // },
];

// export const projects = [
//   {
//     id: 1,
//     title: "3D Solar System Planets to Explore",
//     des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
//     img: "/p1.svg",
//     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
//     link: "/ui.earth.com",
//   },
//   {
//     id: 2,
//     title: "Yoom - Video Conferencing App",
//     des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//     img: "/p2.svg",
//     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
//     link: "/ui.yoom.com",
//   },
//   {
//     id: 3,
//     title: "AI Image SaaS - Canva Application",
//     des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//     img: "/p3.svg",
//     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
//     link: "/ui.aiimg.com",
//   },
//   {
//     id: 4,
//     title: "Animated Apple Iphone 3D Website",
//     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
//     img: "/p4.svg",
//     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//     link: "/ui.apple.com",
//   },
// ];
export const testimonials = [];
// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

export const experiences = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperiences = [
  {
    id: 1,
    companyName: "Studiovity",
    title: "Backend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    icon: "",
    points: [
      "Developed and maintained REST APIs using NodeJS, ExpressJS and MongoDB",
      "Implemented Receipt / PDF generation on the backend side",
      "Writing documentation for the APIs implemented by other developers as well as myselves",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
    date: "July 2023 - September 2023",
  },
  {
    id: 2,
    companyName: "Kyte Social",
    title: "Full Stack Web2 & Web3 Intern",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    icon: "/kyte-social.png",
    points: [
      "Developed REST APIs using NodeJS (TypeScript), ExpressJS, and MongoDB for scalable backend services.",
      "Implemented smart contracts with Solidity and Foundry, enhancing blockchain security and functionality.",
      "Created a Token Rewards system for users to lock funds, claimable upon admin verification.",
      "Integrated smart contracts on the frontend using Wagmi, Viem, and TypeScript for seamless interactions.",
      "Synchronized data between smart contracts and backend systems with Node, MongoDB, and Express Server.",
    ],
    date: "April 2024 - Current",
  },

  {
    id: 2,
    companyName: "The League DeFi",
    title: "Founding Full Stack Web2 & Web3 Engineer",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    icon: "/the-league.webp",
    points: [
      "The League is a Competitive DeFi Trading platform with Team Dynamics.",
      "Developing & Testing Smart Contracts using Solidity and Foundry for EVM compatible blockchains .",
      "Developing Frontend using NextJS and TypeScript and integrating smart contracts using Wagmi & Viem ",
      "Implementing APIs using serverless architecture provided by NextJS",
    ],
    date: "January 2024 - Current",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/JustUzair",
  },
  {
    id: 2,
    img: "/twit.svg",
    href: "https://x.com/0xJustUzair",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://linkedin.com/in/0xJustUzair",
  },
  {
    id: 4,
    img: "/linktree.svg",
    href: "https://linktr.ee/JustUzair",
  },
];
