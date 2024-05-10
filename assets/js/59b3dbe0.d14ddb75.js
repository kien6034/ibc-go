"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2381],{22709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=n(85893),a=n(11151);const s={title:"Handling Upgrades",sidebar_label:"Handling Upgrades",sidebar_position:6,slug:"/ibc/light-clients/upgrades"},r="Handling upgrades",c={id:"light-clients/developer-guide/upgrades",title:"Handling Upgrades",description:"It is vital that high-value IBC clients can upgrade along with their underlying chains to avoid disruption to the IBC ecosystem. Thus, IBC client developers will want to implement upgrade functionality to enable clients to maintain connections and channels even across chain upgrades.",source:"@site/docs/03-light-clients/01-developer-guide/06-upgrades.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/upgrades",permalink:"/main/ibc/light-clients/upgrades",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Handling Upgrades",sidebar_label:"Handling Upgrades",sidebar_position:6,slug:"/ibc/light-clients/upgrades"},sidebar:"defaultSidebar",previous:{title:"Handling Updates and Misbehaviour",permalink:"/main/ibc/light-clients/updates-and-misbehaviour"},next:{title:"Existence/Non-Existence Proofs",permalink:"/main/ibc/light-clients/proofs"}},l={},o=[{value:"Implementing <code>VerifyUpgradeAndUpdateState</code>",id:"implementing-verifyupgradeandupdatestate",level:2},{value:"Upgrade path",id:"upgrade-path",level:3},{value:"Chain specific vs client specific client parameters",id:"chain-specific-vs-client-specific-client-parameters",level:2},{value:"Security",id:"security",level:2},{value:"Document potential client parameter conflicts during upgrades",id:"document-potential-client-parameter-conflicts-during-upgrades",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"handling-upgrades",children:"Handling upgrades"}),"\n",(0,i.jsx)(t.p,{children:"It is vital that high-value IBC clients can upgrade along with their underlying chains to avoid disruption to the IBC ecosystem. Thus, IBC client developers will want to implement upgrade functionality to enable clients to maintain connections and channels even across chain upgrades."}),"\n",(0,i.jsxs)(t.h2,{id:"implementing-verifyupgradeandupdatestate",children:["Implementing ",(0,i.jsx)(t.code,{children:"VerifyUpgradeAndUpdateState"})]}),"\n",(0,i.jsxs)(t.p,{children:["The IBC protocol allows client implementations to provide a path to upgrading clients given the upgraded ",(0,i.jsx)(t.code,{children:"ClientState"}),", upgraded ",(0,i.jsx)(t.code,{children:"ConsensusState"})," and proofs for each. This path is provided in the ",(0,i.jsx)(t.code,{children:"VerifyUpgradeAndUpdateState"})," method:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// NOTE: proof heights are not included as upgrade to a new revision is expected to pass only on the last height committed by the current revision. Clients are responsible for ensuring that the planned last height of the current revision is somehow encoded in the proof verification process.\n// This is to ensure that no premature upgrades occur, since upgrade plans committed to by the counterparty may be cancelled or modified before the last planned height.\n// If the upgrade is verified, the upgraded client and consensus states must be set in the client store.\nfunc (cs ClientState) VerifyUpgradeAndUpdateState(\n  ctx sdk.Context,\n  cdc codec.BinaryCodec,\n  store sdk.KVStore,\n  newClient ClientState,\n  newConsState ConsensusState,\n  upgradeClientProof,\n  upgradeConsensusStateProof []byte,\n) error\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Please refer to the ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/upgrade.go#L27",children:"Tendermint light client implementation"})," as an example for implementation."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["It is important to note that light clients ",(0,i.jsx)(t.strong,{children:"must"})," handle all management of client and consensus states including the setting of updated ",(0,i.jsx)(t.code,{children:"ClientState"})," and ",(0,i.jsx)(t.code,{children:"ConsensusState"})," in the client store. This can include verifying that the submitted upgraded ",(0,i.jsx)(t.code,{children:"ClientState"})," is of a valid ",(0,i.jsx)(t.code,{children:"ClientState"})," type, that the height of the upgraded client is not greater than the height of the current client (in order to preserve BFT monotonic time), or that certain parameters which should not be changed have not been altered in the upgraded ",(0,i.jsx)(t.code,{children:"ClientState"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Developers must ensure that the ",(0,i.jsx)(t.code,{children:"MsgUpgradeClient"})," does not pass until the last height of the old chain has been committed, and after the chain upgrades, the ",(0,i.jsx)(t.code,{children:"MsgUpgradeClient"})," should pass once and only once on all counterparty clients."]}),"\n",(0,i.jsx)(t.h3,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,i.jsxs)(t.p,{children:["Clients should have ",(0,i.jsx)(t.strong,{children:"prior knowledge of the merkle path"})," that the upgraded client and upgraded consensus states will use. The height at which the upgrade has occurred should also be encoded in the proof."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["The Tendermint client implementation accomplishes this by including an ",(0,i.jsx)(t.code,{children:"UpgradePath"})," in the ",(0,i.jsx)(t.code,{children:"ClientState"})," itself, which is used along with the upgrade height to construct the merkle path under which the client state and consensus state are committed."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"chain-specific-vs-client-specific-client-parameters",children:"Chain specific vs client specific client parameters"}),"\n",(0,i.jsx)(t.p,{children:"Developers should maintain the distinction between client parameters that are uniform across every valid light client of a chain (chain-chosen parameters), and client parameters that are customizable by each individual client (client-chosen parameters)."}),"\n",(0,i.jsx)(t.p,{children:"When upgrading a client, developers must ensure that the new client adopts all of the new client parameters that must be uniform across every valid light client of a chain (chain-chosen parameters), while maintaining the client parameters that are customizable by each individual client (client-chosen parameters) from the previous version of the client."}),"\n",(0,i.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,i.jsxs)(t.p,{children:["Upgrades must adhere to the IBC Security Model. IBC does not rely on the assumption of honest relayers for correctness. Thus users should not have to rely on relayers to maintain client correctness and security (though honest relayers must exist to maintain relayer liveness). While relayers may choose any set of client parameters while creating a new ",(0,i.jsx)(t.code,{children:"ClientState"}),", this still holds under the security model since users can always choose a relayer-created client that suits their security and correctness needs or create a client with their desired parameters if no such client exists."]}),"\n",(0,i.jsxs)(t.p,{children:["However, when upgrading an existing client, one must keep in mind that there are already many users who depend on this client's particular parameters. ",(0,i.jsx)(t.strong,{children:"We cannot give the upgrading relayer free choice over these parameters once they have already been chosen. This would violate the security model"})," since users who rely on the client would have to rely on the upgrading relayer to maintain the same level of security."]}),"\n",(0,i.jsxs)(t.p,{children:["Thus, developers must make sure that their upgrade mechanism allows clients to upgrade the chain-specified parameters whenever a chain upgrade changes these parameters (examples in the Tendermint client include ",(0,i.jsx)(t.code,{children:"UnbondingPeriod"}),", ",(0,i.jsx)(t.code,{children:"TrustingPeriod"}),", ",(0,i.jsx)(t.code,{children:"ChainID"}),", ",(0,i.jsx)(t.code,{children:"UpgradePath"}),", etc), while ensuring that the relayer submitting the ",(0,i.jsx)(t.code,{children:"MsgUpgradeClient"})," cannot alter the client-chosen parameters that the users are relying upon (examples in Tendermint client include ",(0,i.jsx)(t.code,{children:"TrustLevel"}),", ",(0,i.jsx)(t.code,{children:"MaxClockDrift"}),", etc)."]}),"\n",(0,i.jsx)(t.h3,{id:"document-potential-client-parameter-conflicts-during-upgrades",children:"Document potential client parameter conflicts during upgrades"}),"\n",(0,i.jsxs)(t.p,{children:["Counterparty clients can upgrade securely by using all of the chain-chosen parameters from the chain-committed ",(0,i.jsx)(t.code,{children:"UpgradedClient"})," and preserving all of the old client-chosen parameters. This enables chains to securely upgrade without relying on an honest relayer, however it can in some cases lead to an invalid final ",(0,i.jsx)(t.code,{children:"ClientState"})," if the new chain-chosen parameters clash with the old client-chosen parameter. This can happen in the Tendermint client case if the upgrading chain lowers the ",(0,i.jsx)(t.code,{children:"UnbondingPeriod"})," (chain-chosen) to a duration below that of a counterparty client's ",(0,i.jsx)(t.code,{children:"TrustingPeriod"})," (client-chosen). Such cases should be clearly documented by developers, so that chains know which upgrades should be avoided to prevent this problem. The final upgraded client should also be validated in ",(0,i.jsx)(t.code,{children:"VerifyUpgradeAndUpdateState"})," before returning to ensure that the client does not upgrade to an invalid ",(0,i.jsx)(t.code,{children:"ClientState"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var i=n(67294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);