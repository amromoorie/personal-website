(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5703:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(9177)}])},2558:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5893),s=n(7294);function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"text-sm",children:(0,r.jsx)("article",{className:"",children:"\xa9 2022 Amr Abdelkamel | web developer"})})})}var i=n(5021),c=n(1655),o=n(1664);function l(e){var t=e.dark,n=void 0!==t&&t,s=n?" bg-secondary pt-3 pb-2 pl-2 top-0 inset-x-0 fixed text-accent":"z-10 bg-white pt-3 pb-2 pl-2 top-0 inset-x-0 fixed border-[0.13rem] border-b-accent text-gray-600";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:s,children:(0,r.jsx)("h1",{className:"text-3xl pb-1 font-extrabold",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})})})})}function d(){return(0,r.jsxs)("div",{className:"menu-icon space-y-1",children:[(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"})]})}var x=n(1163),m=[{key:1,name:"Home",link:"/"},{key:2,name:"About",link:"/about"},{key:3,name:"Projects",link:"/projects"},{key:4,name:"Blog",link:"/blog"}];function h(){var e=(0,x.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"pt-[10rem] text-accent flex flex-col items-center text-2xl",children:(0,r.jsx)("ul",{className:"space-y-10",children:m.map((function(t){return(0,r.jsx)("li",{className:"hover:underline underline-offset-3 ".concat(e.pathname===t.link?"underline underline-offset-3 decoration-cool ":""),children:(0,r.jsx)(o.default,{href:t.link,children:(0,r.jsx)("a",{children:t.name})})},t.key)}))})})})}function u(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"z-100 top-0 right-0 fixed bg-secondary w-full h-full ease-out duration-200 ".concat(t?"translate-x-0":"translate-x-full"," "),children:[(0,r.jsx)(l,{dark:!0}),(0,r.jsx)(h,{}),(0,r.jsx)(c.Z,{color:"border-accent",mt:"10"}),(0,r.jsx)("section",{className:"flex justify-center",children:(0,r.jsx)(i.Z,{styleSocialItems:"flex space-x-8 pt-7",socialNames:!1,linkStyle:"w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent"})}),(0,r.jsx)("section",{className:"absolute bottom-1 left-1 text-accent",children:(0,r.jsx)(a,{})})]}),t?(0,r.jsxs)("button",{className:"z-100 close text-accent fixed top-0 right-0 mr-4 mt-4",onClick:function(){return n(!t)},children:[(0,r.jsx)("aside",{className:"font-semibold inline align-top text-lg underline underline-offset-3 hover:text-important",children:"Close"})," "]}):(0,r.jsx)("button",{onClick:function(){return n(!t)},className:"fixed z-10 top-0 right-0 mr-4 mt-[1.21rem]",children:(0,r.jsx)(d,{})})]})}var p=n(1914),f=n(6486);function j(){var e=(0,s.useContext)(p.I),t=(0,x.useRouter)().pathname,n=(0,s.useState)(0),a=n[0],i=n[1],c=(0,s.useState)(!1),l=c[0],d=c[1],h=(0,f.debounce)((function(){var e=window.pageYOffset;d(a<e&&a-e<100||e<-10),i(e)}),70);return(0,s.useEffect)((function(){return window.addEventListener("scroll",h),function(){return window.removeEventListener("scroll",h)}}),[a,l,h]),(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("section",{className:"z-10 border-[0.13rem] border-t-accent bg-white block fixed inset-x-0 bottom-0 tranistion duration-100 ".concat(l?"translate-y-full":""," "),children:(0,r.jsx)("nav",{className:" py-2 text-primary font-extrabold text-xl ",children:(0,r.jsx)("ul",{className:"px-3 flex justify-around flex-row space-x-5",children:m.map((function(e,n){return(0,r.jsx)("li",{className:"py-2 w-full bg-accent rounded-full inline-block text-center ".concat(t===e.link?"text-important":""),children:(0,r.jsx)(o.default,{href:e.link,children:(0,r.jsx)("a",{className:"block text-xs hover:text-important",children:e.name})})},e.key)}))})})})})}function g(){var e=(0,x.useRouter)().pathname;return(0,r.jsx)("nav",{className:" text-important text-2xl",children:(0,r.jsx)("ul",{className:" flex flex-row space-x-5 lg:space-x-12",children:m.map((function(t){return(0,r.jsx)("li",{className:"hover:cursor-pointer px-5 py-2 hover:bg-accent hover:rounded-lg ".concat(e===t.link?"bg-accent rounded-lg ":""),children:(0,r.jsx)(o.default,{href:t.link,children:(0,r.jsx)("a",{children:t.name})})},t.key)}))})})}function b(e){var t=e.dark,n=void 0!==t&&t,s="flex flex-row justify-between pt-2 pb-1 pr-4 pl-2 top-0 inset-x-0 fixed  sm:px-4 ... lg:px-8 ".concat(n?"bg-secondary text-accent":"z-10 bg-white border-[0.13rem] border-b-accent text-gray-600");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:s,children:[(0,r.jsx)("h1",{className:"text-3xl font-extrabold pt-[0.18rem]",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})}),(0,r.jsx)(g,{})]})})}function y(){return(0,r.jsxs)("footer",{className:"mt-44 px-10 py-10 flex justify-between items-center absolute bottom-1 inset-x-0 border-solid border-x-0 border-4 border-b-0 border-accent-700",children:[(0,r.jsx)(a,{}),(0,r.jsx)(i.Z,{socialNames:!1,styleSocialItems:"flex justify-center items-center space-x-10 mr-10",linkStyle:" w-6 h-6 rounded-full hover:scale-125 hover:text-important hover:rotate-[5deg]"})]})}function N(){return(0,r.jsx)("footer",{className:"absolute bottom-1 left-1 text-gray-600",children:(0,r.jsx)(a,{})})}function v(e){var t=e.children,n=(0,s.useContext)(p.I);return(0,r.jsx)("div",{className:"sm:mx-4 lg:mx-8 mx-2 relative mt-[1.5rem] py-[5rem] break-words text-gray-600",children:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),(0,r.jsx)(u,{}),(0,r.jsx)(j,{}),t,(0,r.jsx)(N,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{}),t,(0,r.jsx)(y,{})]})})}},5021:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),s=n(1664),a=n(2814),i=n(1417),c=[{name:"Twitter",link:"https://twitter.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:i.mdU})},{name:"Instagram",link:"https://instagram.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:i.Zzi})},{name:"LinkedIn",link:"https://linkedin.com/in/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:i.D9H})},{name:"Github",link:"https://github.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:i.zhw})}];function o(e){var t=e.styleSocialItems,n=e.linkStyle,a=e.socialNames,i=void 0===a||a;return(0,r.jsx)("section",{className:"".concat(t||"mt-10 grid grid-cols-2 gap-7 -z-1d0"),children:c.map((function(e){return(0,r.jsx)(s.default,{href:e.link,children:(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",className:"2xl pt-1 text-center font-semibold opacity-75 tracking-wider text-important",children:(0,r.jsxs)("div",{className:"".concat(n||"flex flex-col p-2 w-24 h-24 space-y-4 rounded-3xl hover:scale-110 hover:bg-accent"),children:[e.icon,i&&(0,r.jsx)("p",{className:"text-sm",children:e.name})]})})},e.name)}))})}},1655:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);function s(e){var t=e.color,n=void 0===t?"border-secondary":t,s=e.mt,a=void 0===s?"10":s;return(0,r.jsx)("hr",{className:"border mx-5 opacity-30 ".concat(n," mt-").concat(a)})}},1774:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);function s(e){var t=e.children,n=e.size,s=e.styles;return(0,r.jsxs)("h2",{className:"pt-5 text-4xl text-primary ".concat(n||"text-3xl"," ").concat(s||""),children:[(0,r.jsx)("span",{className:"text-important hover:opacity-100",children:"# "}),t]})}},313:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),s=n(1664);function a(e){var t=e.children,n=e.href,a=e.rel,i=void 0===a?{}:a,c=e.styles;return(0,r.jsx)("span",{className:"hover:underline text-important underline hover:text-cool ".concat(c||""),children:(0,r.jsx)(s.default,{href:n,rel:i,children:(0,r.jsx)("a",{children:t})})})}},9177:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),s=n(9008),a=(n(1664),n(1163)),i=n(2558),c=n(1774),o=n(313),l=[{id:1,url:"https://amromoorie.github.io/apple-varieties/",name:"apple varieties",description:"fully responsive landing page up to XL screens made with Tailwind.",features:["informative site"],technologies:["React","Tailwind","Nodejs","Cheerio"],notes:"project originally meant for experimenting with web scraping with puppeteer & cheerio but ended with a nice design work! based on a real article."},{id:2,url:"https://amromoorie.github.io/Rick-and-Morty_Try-Graphql/",name:"rick and morty",description:"simple project to experiment with graphql made using the Rick and Morty Api. Project made with React & Tailwind for smooth development",features:["know basic Rick and Morty related info by navigating the gallery","each character in the gallery has the info that can be shown when clicked"],technologies:["React","Graphql","Tailwind"],notes:""},{id:3,url:"https://amromoorie.github.io/Taskify/",name:"taskify",description:"Simple todo app using react hooks with data persistent upon page reload (F5) using local storage.",features:["add","delete","mark complete","show total number of todos","filter out completed todos/tasks","star more features to come!"],technologies:["React"],notes:""}];n(7294);function d(e){var t=e.projectData;return(0,r.jsxs)("article",{className:"pl-3 py-5 border-2 border-accent rounded-lg space-y-4",children:[(0,r.jsxs)(c.Z,{size:"text-2xl",className:"pl-4 ",children:["project repo:"," ",(0,r.jsx)("p",{className:"inline-block text-secondary underline italic",children:t.name})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-2xl italic font-mono",children:"Description: "}),(0,r.jsx)("p",{className:"text-gray-700 text-secondary",children:t.description})]}),(0,r.jsxs)("h2",{className:"",children:["Preview:"," ",(0,r.jsx)("span",{className:"italic",children:(0,r.jsx)(o.Z,{href:t.url,children:t.url})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"",children:"Features: "}),(0,r.jsx)("ul",{className:"pl-10 text-secondary",children:t.features.map((function(e,t){return(0,r.jsx)("li",{className:"list-disc text-secondary",children:e},t)}))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"",children:"Technologies: "}),(0,r.jsx)("ul",{className:"pl-10 text-secondary",children:t.technologies.map((function(e,t){return(0,r.jsx)("li",{className:"list-disc",children:e},t)}))})]}),t.notes&&(0,r.jsxs)("h2",{className:"italic font-mono",children:["Notes: ",(0,r.jsx)("span",{className:"text-gray-500 ",children:t.notes})]})]})}function x(){return(0,r.jsx)("section",{className:"space-y-4",children:l.map((function(e){return(0,r.jsx)(d,{projectData:e},e.id)}))})}function m(){var e="https://amromoorie.com"+(0,a.useRouter)().pathname;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"my portofolio!"}),(0,r.jsx)("link",{rel:"canonical",href:e}),(0,r.jsx)("meta",{property:"og:description",content:"Here's a my portofolio. Hope you find it interesting!"},"description")]}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h2",{className:"text-5xl italic text-right text-bg-secondary mx-11 my-11 underline ... lg:mr-72",children:"Portofolio"}),(0,r.jsx)("h3",{className:" italic",children:"Note that my portofolio is under development"}),(0,r.jsxs)("h4",{className:"pb-5",children:["you can check my lates work on"," ",(0,r.jsx)(o.Z,{href:"https://github.com/amromoorie",rel:"github",styles:"",children:"Github repo"})]}),(0,r.jsx)("section",{className:"mb-44 max-w-4xl",children:(0,r.jsx)(x,{})})]})]})}}},function(e){e.O(0,[662,112,956,774,888,179],(function(){return t=5703,e(e.s=t);var t}));var t=e.O();_N_E=t}]);