import{j as e}from"./jsx-runtime-1a9d9a93.js";import"./index-8b3efc3f.js";import{P as o}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const r=({primary:s,backgroundColor:t,size:i,label:u,...h})=>{const y=s?"storybook-button--primary":"storybook-button--secondary";return e.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${i}`,y].join(" "),style:t&&{backgroundColor:t},...h,children:u})};r.propTypes={primary:o.bool,backgroundColor:o.string,size:o.oneOf(["small","medium","large"]),label:o.string.isRequired,onClick:o.func};r.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};r.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}};const l=({user:s,onLogin:t,onLogout:i,onCreateAccount:u})=>e.jsx("header",{children:e.jsxs("div",{className:"storybook-header",children:[e.jsxs("div",{children:[e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{fill:"none",fillRule:"evenodd",children:[e.jsx("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e.jsx("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e.jsx("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),e.jsx("h1",{children:"Acme"})]}),e.jsx("div",{children:s?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"welcome",children:["Welcome, ",e.jsx("b",{children:s.name}),"!"]}),e.jsx(r,{size:"small",onClick:i,label:"Log out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"small",onClick:t,label:"Log in"}),e.jsx(r,{primary:!0,size:"small",onClick:u,label:"Sign up"})]})})]})});l.propTypes={user:o.shape({name:o.string.isRequired}),onLogin:o.func.isRequired,onLogout:o.func.isRequired,onCreateAccount:o.func.isRequired};l.defaultProps={user:null};l.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{name:{name:"string",required:!0}}},required:!1},onLogin:{description:"",type:{name:"func"},required:!0},onLogout:{description:"",type:{name:"func"},required:!0},onCreateAccount:{description:"",type:{name:"func"},required:!0}}};const k={title:"Example/Header",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}},a={args:{user:{name:"Jane Doe"}}},n={};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    user: {
      name: "Jane Doe"
    }
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,f,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const q=["LoggedIn","LoggedOut"];export{a as LoggedIn,n as LoggedOut,q as __namedExportsOrder,k as default};
