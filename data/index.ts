export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/resume/Uzair Saiyed.pdf" },
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
    reportLink: "/audit-reports/2023-12-4-password-store-report.pdf",
  },
  {
    id: 2,
    name: "Puppy Raffle",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2024-1-5"),
    reportLink: "/audit-reports/2024-1-5-puppy-raffle-report.pdf",
  },
  {
    id: 3,
    name: "TSwap",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2024-1-15"),
    reportLink: "/audit-reports/2024-1-15-tswap-report.pdf",
  },
  {
    id: 4,
    name: "Thunder Loan",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2024-1-24"),
    reportLink: "/audit-reports/2024-1-24-thunder-loan-report.pdf",
  },
  {
    id: 5,
    name: "Boss Bridge",
    platform: "CodeHawks",
    img: "/audit-images/codehawks.svg",
    iconLists: ["/audit-images/codehawks.svg"],
    date: new Date("2024-2-2"),
    reportLink: "/audit-reports/2024-2-2-boss-bridge-report.pdf",
  },
  {
    id: 6,
    name: "TraitForge",
    platform: "Code4rena",
    img: "/audit-images/c4-logo.svg",
    iconLists: ["/audit-images/c4-logo-icon.svg"],
    date: new Date("2024-08-07"),
    reportLink: "https://code4rena.com/reports/2024-07-traitforge",
  },
  {
    id: 7,
    name: "Phi",
    platform: "Code4rena",
    img: "/audit-images/c4-logo.svg",
    iconLists: ["/audit-images/c4-logo-icon.svg"],
    date: new Date("2024-08-28"),
    reportLink: "https://code4rena.com/reports/2024-08-phi",
  },
].reverse();

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

export const testimonials = [
  {
    id: 1,
    quote:
      "\"Thanks for efforts the last 2-3 months, it was pretty cool working together. I have noticed you are more of an independent guy who doesn't like taking helps if not needed as such. I wish you all the best with your preferred career you are pursuing. Let's stay in touch, sure we'd work together in the future once all of us reach where we want to.\"",
    name: "Shivraj",
    title: "Founder & Owner @Kyte Social",
    profile: "/kyte-social.png",
  },
  {
    id: 2,
    quote:
      '"Uzair is a very proactive Security Researcher. He was always active in our team meetings, asked questions, and provided useful feedback to the rest of the team. He has the potential to be a great auditor."',
    name: "Andrei Popa",
    title: "Security Researcher @Nethermind",
    profile: "/nethermind-icon.png",
  },
  {
    id: 3,
    quote:
      '"It was a pleasure to mentor Uzair during my time at Nethermind, where he interned with me on audits of various Ethereum and Starknet protocols. His passion for blockchain security was evident in his ability to thoroughly analyze code and identify key issues. On numerous occasions, he uncovered interesting vulnerabilities, which we collaboratively explored to maximize their impact and resolution. Uzair is a quick learner with strong analytical skills, and I am confident he has the potential to become an exceptional security researcher."',
    name: "Ondrej Tatyrek (Talfao)",
    title: "Founder & Auditor @CODESPECT, Ex-Security Researcher @Nethermind",
    profile: "/talfao.png",
  },

  {
    id: 4,
    quote:
      '"It was a pleasure working with you during the last 3 months on different audit projects. I appreciated your active participation in discussions and great willingness to learn. Your technical knowledge and expertise in Solidity were noticeable, and you made good progress with the team. Best of luck with your future endeavors!"',
    name: "Yasmine Bachi",
    title: "Security Researcher @Nethermind",
    profile: "/nethermind-icon.png",
  },

  // {
  //   quote:
  //     "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Uzair was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Uzair's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Uzair is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
].toReversed();

export const companies = [
  // {
  //   id: 1,
  //   name: "Kyte",
  //   img: "/kyte-social.png",
  //   // nameImg: "/kyte-social.png",
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
    date: "January 2024 - June 2024",
  },
  {
    id: 3,
    companyName: "Kyte Social",
    title: "Full Stack Web2 & Web3 Intern",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    icon: "/kyte-social.png",
    points: [
      "Developed smart contracts with Solidity and implemented ERC721, ERC1155 NFT standards using OpenZeppelin.",
      "Utilized Factory Contract pattern and implemented role-based smart contracts for token rewards with ERC20 and Chain Native Token locking.",
      "Tested smart contracts using unit testing, fuzz testing, and invariant testing with Foundry.",
      "Signed off-chain messages for reward claiming from NodeJS server using Web3JS.",
      "Integrated smart contracts with frontend using NextJS, Wagmi, Viem, EthersJS, and Web3JS.",
      "Developed a user-friendly form enabling rapid creation of custom NFT Collections, including both ERC721 and ERC1155 standards, within seconds. Significantly reduced time and effort for users by 90% while abstracting underlying complexities.",
      "Synced data to/from blockchain to MongoDB database for consistency and authentication.",
    ],
    date: "April 2024 - July 2024",
  },

  {
    id: 4,
    companyName: "Nethermind",
    title: "Smart Contract Auditor (Intern)",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    icon: "/nethermind-icon.png",
    points: [
      "Conducted security audits on various Web3 protocols, including re-staking adapters, Account Abstraction Paymasters, Bridges, and Governance modules.",
      "Reporting vulnerabilities and provided mitigations to the vulnerabilities",
      "Audites protocols, such as Symbiotic Adapter, Tsuko Paymaster-As-A-Service, DefX-Bridge, Mangrove Vault, and Berachain Governance & Proof-of-Liqiuidity.",
      "Analyzed smart-contracts across Solidity and Cairo ecosystems",
      "Idnetified 10+ findings across multiple private audits, including a few solo findings",
    ],
    date: "September 2024 - December 2024",
  },
  {
    id: 5,
    companyName: "BuildBear Labs",
    title: "Web3 Solutions Engineer & Technical Content Writer",
    className: "md:col-span-2",
    thumbnail: "https://avatars.githubusercontent.com/u/107628893", // adjust if you have a custom one
    icon: "https://avatars.githubusercontent.com/u/107628893", // add correct logo file if needed
    date: "Jan 2025 – Present",
    points: [
      "Researched and created a wide range of BuildBear tutorials, including multiple in-depth video walkthroughs, for plugins like: Across, LI.FI, Pimlico, and many more.",
      "Created end-to-end CI/CD tutorials for BuildBear, showcasing integrations with complex protocols like Uniswap V4 with Foundry and Uniswap V3 with Hardhat, covering setup & whitelisting, automated deployment, testing, etc, with GitHub Actions.",
      "Individually researched, built, and documented real-world use cases such as Uniswap V3 swaps using Pimlico’s Paymasters and Bundler; created hands-on videos as well as written tutorials & documentation, demonstrating how these flows work inside BuildBear’s Sandbox environments and their plugins.",
      "Published step-by-step tutorials integrating different protocols and products into BuildBear such as Batua, Chainlink, and PancakeSwap using BuildBear.",
      "Worked cross-functionally with product, frontend, backend, and infrastructure teams to test upcoming features, uncover edge-case failures, and deliver detailed feedback based on black-box testing strategies.",
      "Helped unblock protocol teams lacking testnet infrastructure by showcasing how BuildBear enables testing of bridge/swap logic even where native testnets for Across or LI.FI are unavailable; this drove early adoption, with both plugins receiving 50+ plugin access requests each within the first month after announcement.",
    ],
  },
].toReversed();

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
