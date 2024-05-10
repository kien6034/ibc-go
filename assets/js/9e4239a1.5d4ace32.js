"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7842],{18366:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var n=i(85893),o=i(11151);const l={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/ibc/light-clients/localhost/integration"},s="Integration",c={id:"light-clients/localhost/integration",title:"Integration",description:"The 09-localhost light client module registers codec types within the core IBC module. This differs from other light client module implementations which are expected to register codec types using the AppModuleBasic interface.",source:"@site/versioned_docs/version-v7.4.x/03-light-clients/03-localhost/02-integration.md",sourceDirName:"03-light-clients/03-localhost",slug:"/ibc/light-clients/localhost/integration",permalink:"/v7/ibc/light-clients/localhost/integration",draft:!1,unlisted:!1,tags:[],version:"v7.4.x",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/ibc/light-clients/localhost/integration"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v7/ibc/light-clients/localhost/overview"},next:{title:"ClientState",permalink:"/v7/ibc/light-clients/localhost/client-state"}},r={},a=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"integration",children:"Integration"}),"\n",(0,n.jsxs)(t.p,{children:["The 09-localhost light client module registers codec types within the core IBC module. This differs from other light client module implementations which are expected to register codec types using the ",(0,n.jsx)(t.code,{children:"AppModuleBasic"})," interface."]}),"\n",(0,n.jsxs)(t.p,{children:["The localhost client is added to the 02-client submodule param ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0-rc0/proto/ibc/core/client/v1/client.proto#L102",children:(0,n.jsx)(t.code,{children:"allowed_clients"})})," by default in ibc-go."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"var (\n  // DefaultAllowedClients are the default clients for the AllowedClients parameter.\n  DefaultAllowedClients = []string{exported.Solomachine, exported.Tendermint, exported.Localhost}\n)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>s});var n=i(67294);const o={},l=n.createContext(o);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);