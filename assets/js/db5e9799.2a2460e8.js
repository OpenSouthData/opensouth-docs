"use strict";(self.webpackChunkopensouth_docs=self.webpackChunkopensouth_docs||[]).push([[601],{3454:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(4848),t=s(8453);const r={sidebar_position:7,title:"API Documentation"},a=void 0,o={id:"api-documentation",title:"API Documentation",description:"API Overview",source:"@site/docs/api-documentation.md",sourceDirName:".",slug:"/api-documentation",permalink:"/opensouth-docs/api-documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenSouthData/opensouth-docs/tree/main/docs/api-documentation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"API Documentation"},sidebar:"tutorialSidebar",previous:{title:"Data Quality and Checks",permalink:"/opensouth-docs/data-quality-and-checks"},next:{title:"Glossary of Terms",permalink:"/opensouth-docs/glossary-of-terms"}},l={},d=[{value:"API Overview",id:"api-overview",level:2},{value:"Accessing the API",id:"accessing-the-api",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Authentication",id:"authentication",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Support and Feedback",id:"support-and-feedback",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"api-overview",children:"API Overview"}),"\n",(0,i.jsx)(n.p,{children:"The Open South API provides developers with programmatic access to datasets available on the Open South platform. This API allows for seamless integration of Open South data into applications, services, and research projects, enabling automated data retrieval and analysis. Our API is designed to be easy to use, secure, and scalable, supporting a wide range of use cases from simple data queries to complex data manipulation tasks."}),"\n",(0,i.jsx)(n.h2,{id:"accessing-the-api",children:"Accessing the API"}),"\n",(0,i.jsxs)(n.p,{children:["The Open South API is available at the following endpoint: ",(0,i.jsx)(n.a,{href:"https://documenter.getpostman.com/view/23812062/2sA3dyjBdN",children:"Open South API Documentation"})]}),"\n",(0,i.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Retrieval:"})," Access detailed datasets across various categories."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Search and Filter:"})," Apply search queries and filters to retrieve specific data points."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Integration:"})," Integrate Open South data into your applications, websites, or research tools."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Real-time Data:"})," Access up-to-date data for real-time applications and analysis."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:"To use the API, you must authenticate your requests. Authentication is typically done via API keys, which you can obtain by creating an account on the Open South platform and generating an API key from your profile settings."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Obtaining an API Key:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Log in to your Open South account."}),"\n",(0,i.jsx)(n.li,{children:"Navigate to 'Profile Settings' and select 'API Keys.'"}),"\n",(0,i.jsx)(n.li,{children:"Click 'Generate New API Key' and copy the key provided."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Using the API Key:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Include your API key in the request headers as follows:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Authorization: Bearer YOUR_API_KEY"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Get All Datasets:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"/datasets"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method:"})," ",(0,i.jsx)(n.code,{children:"GET"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description:"})," Retrieve a list of all datasets available on the platform."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example Request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /datasets HTTP/1.1\nHost: api.opensouth.io\nAuthorization: Bearer YOUR_API_KEY\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Get Dataset by ID:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"/datasets/{id}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method:"})," ",(0,i.jsx)(n.code,{children:"GET"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description:"})," Retrieve detailed information about a specific dataset."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example Request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /datasets/12345 HTTP/1.1\nHost: api.opensouth.io\nAuthorization: Bearer YOUR_API_KEY\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Search Datasets:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"/datasets/search"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method:"})," ",(0,i.jsx)(n.code,{children:"GET"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description:"})," Search for datasets based on specific criteria such as keywords, tags, and date ranges."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"query:"})," Search query (string)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tags:"})," Filter by tags (comma-separated list)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"start_date"})," and ",(0,i.jsx)(n.code,{children:"end_date:"})," Filter by date range (YYYY-MM-DD)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example Request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /datasets/search?query=health&tags=africa,2023&start_date=2023-01-01&end_date=2023-12-31 HTTP/1.1\nHost: api.opensouth.io\nAuthorization: Bearer YOUR_API_KEY\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Integrating Data into a Website:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the API to fetch the latest datasets and display them on your website, allowing visitors to interact with the data directly."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Automating Data Analysis:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Leverage the API to automate the retrieval of datasets for regular analysis, reducing manual data handling and increasing efficiency."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Building Data-Driven Applications:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create applications that utilize Open South data to provide insights, visualizations, or decision-making tools for users."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsx)(n.p,{children:"The API uses standard HTTP status codes to indicate the success or failure of an API request. Common status codes include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"200 OK"}),": The request was successful."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"400 Bad Request"}),": The request was invalid or cannot be served."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"401 Unauthorized"}),": Authentication failed or the API key is missing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"404 Not Found"}),": The requested resource could not be found."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"500 Internal Server Error"}),": An error occurred on the server."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"support-and-feedback",children:"Support and Feedback"}),"\n",(0,i.jsxs)(n.p,{children:["For any issues, questions, or feedback regarding the Open South API, please contact our support team at ",(0,i.jsx)(n.a,{href:"mailto:support@opensouth.io",children:"support@opensouth.io"})," or visit our ",(0,i.jsx)(n.a,{href:"https://data.opensouth.io/contact",children:"Help Center"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);