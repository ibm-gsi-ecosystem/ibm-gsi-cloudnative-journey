(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),c=a("Wbzz"),i=a("Xrax"),o=a("k4MR"),d=a("TSYQ"),p=a.n(d),s=a("QH2O"),j=a.n(s),O=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(O.b)("div",{className:p()(j.a.pageHeader,(t={},t[j.a.withTabs]=b.length,t[j.a.darkMode]="dark"===n,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:j.a.text},a)))))},u=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,i=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(O.b)("div",{className:"bx--row "+u.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),v=a("9Hrx"),h=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),o=n.replace(i,a);return Object(O.b)("li",{key:e,className:p()((t={},t[h.selectedItem]=b,t),h.listItem)},Object(O.b)(c.Link,{className:h.link,to:""+o},e))}));return Object(O.b)("div",{className:h.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",{"aria-label":t},Object(O.b)("ul",{className:h.list},b))))))},t}(r.a.Component),f=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,d=void 0===b?{}:b,p=t.relativePagePath,s=t.titleType,j=d.tabs,u=d.title,v=d.theme,h=d.description,x=d.keywords,T=Object(w.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,C=k?n.pathname.replace(k,""):n.pathname,D=j?C.split("/").filter(Boolean).slice(-1)[0]||l()(j[0],{lower:!0}):"",P=v||T;return Object(O.b)(o.a,{tabs:j,homepage:!1,theme:P,pageTitle:u,pageDescription:h,pageKeywords:x,titleType:s},Object(O.b)(m,{title:r?Object(O.b)(r,null):u,label:"label",tabs:j,theme:P}),j&&Object(O.b)(y,{title:u,slug:C,tabs:j,currentTab:D}),Object(O.b)(f.a,{padded:!0},a,Object(O.b)(g,{relativePagePath:p})),Object(O.b)(N.a,{pageContext:t,location:n,slug:C,tabs:j,currentTab:D}),Object(O.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pVvV:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("k1TG"),r=a("8o2o"),b=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},o=i("PageDescription"),d=i("InlineNotification"),p=i("Tabs"),s=i("Tab"),j={_frontmatter:c},O=l.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(O,Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(o,{mdxType:"PageDescription"},Object(b.b)("p",null,"Topics for developers to understand advanced Cloud-Native concepts.")),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},Object(b.b)("em",{parentName:"strong"},"Developer advanced journey is still under development"))),Object(b.b)(d,{mdxType:"InlineNotification"},Object(b.b)("p",null,"Before you proceed, make sure you have completed developer intermediate journey and have IBM Cloud Sandbox invite. It is a paid IBM Cloud account with the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../getting-started/devenvsetup"}),"Developer Tools environment")," already installed and ready for you to use, including both a Kubernetes cluster and an OpenShift cluster. (The environment is locked down to prevent creating any new services.) Also, before proceeding:")),Object(b.b)("p",null,"This set of tasks focuses on the advanced Developer concepts: How to use the Developer Tools environment to perform the software delivery lifecycle (SDLC)."),Object(b.b)("h3",null,"Learning Tasks"),Object(b.b)("p",null,"The learning tasks help you understand the tasks in the advanced Developer Experience. Developer intermediate focuses on being able to use the environment well enough to develop and deploy a basic cloud-native application. Developer advanced focuses on using the SDLC to iteratively develop, deliver, operate, secure, and manage applications. As a team executes the key agile ceremonies using the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/cloud/"}),"Garage Method"),", it’s important for developers and architects to understand what is involved in moving software components consistently and reliably from ",Object(b.b)("em",{parentName:"p"},"dev")," to ",Object(b.b)("em",{parentName:"p"},"test")," and on to ",Object(b.b)("em",{parentName:"p"},"production"),"."),Object(b.b)("p",null,"These learning tasks are more advanced than those from the developer intermediate experience, so take your time and do some research on the topic before jumping into the task."),Object(b.b)(p,{mdxType:"Tabs"},Object(b.b)(s,{label:"Over the Web",mdxType:"Tab"},Object(b.b)("h2",null,"Before the Workshop"),Object(b.b)("p",null,"Please complete these tasks before attending the first session. This will help you get started quickly with the practical exercises."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Link"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Welcome Message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Welcome to Cloud-Native Workshop"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/getting-started/introduction"}),"Introduction")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Prerequisites"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Install the prerequisite tools"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/getting-started/prereqs"}),"Setup Prerequisites")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sandbox Access"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Validate access to your Development Cluster"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/getting-started/checksetup"}),"Validate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"DevSecOps")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevSecOps"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevSecOps Overview"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/devsecops"}),"DevSecOps")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Advanced Container Security"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevSecOps with Aqua CSP"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/devsecops-aquasec-csp"}),"Container Security")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Advanced Container Security"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevSecOps with Twistlock"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/devsecops-twistlock"}),"Container Security")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add security to CI/CD"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevSecOps with Trivy"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/devsecops-trivy"}),"Incorporate CI/CD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Operators")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Operator Overview"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Operators are a method of packaging, deploying, and managing a Kubernetes application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/operator-overview"}),"Operator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Operator Labs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Developing operator step by step"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/operator-lab/lab"}),"Operator Labs")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"45 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Advanced Application Modernization")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Modernization Process"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Drivers and Process for modernization of legacy application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/appmod-overview/"}),"Overview")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Modernize Legacy Application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scan the Legacy Application (Step - 1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/appmod-exercise-part1/"}),"Scan")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Analyze with TA"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Analyze the Legacy Application (Step - 2)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/appmod-exercise-part2/"}),"Analyze")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrate to Openshift"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrate the Legacy Appliation (Step - 3)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-2/appmod-exercise-part3/"}),"Migrate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Advanced Microservices Techniques")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Servimesh & KNative"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Modify inventory application with service mesh"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kiali, jaeger"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Events with Kafka"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(b.b)(s,{label:"Self Paced",mdxType:"Tab"}),Object(b.b)(s,{label:"In Person",mdxType:"Tab"})),Object(b.b)("p",null,"Once you have completed these tasks, you will have completed the learning requirements for both the intermediate and the advanced Experience. For intermediate journey, you created your first app and CI pipeline, and then extended that into a 3-tier polyglot solution. For advanced journey, you worked with your application’s logs, monitored your app, and moved your code from ",Object(b.b)("em",{parentName:"p"},"dev")," to ",Object(b.b)("em",{parentName:"p"},"test"),"."),Object(b.b)("p",null,"What is very clear is that the Developer Tools environment—an application architecture that combines a Red Hat OpenShift or Kubernetes cluster with powerful cloud services, packaged with a development environment with a CI/CD pipeline incorporating best-of-breed open source tools—gives you a powerful development platform that enables you to build any form of cloud-native application. These skills form the foundation not only to develop applications for Kubernetes and OpenShift, but to develop applications that leverage the IBM Cloud Paks as well."),Object(b.b)("h3",null,"Review Learning Tasks"),Object(b.b)("p",null,"Working with colleagues review your learning tasks. The Cloud Ecosystem team is looking for feedback from three perspectives:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"What went well?")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"What needs improvement?")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Next steps?"))),Object(b.b)("p",null,"Developers will begin the learning journey with different skill levels and familiarity with this material, but will complete the Cloud-Native enablement with a more detailed understanding of how to build solutions for the IBM Cloud. Each student’s ",Object(b.b)("strong",{parentName:"p"},"Next Steps")," will help identify that person’s skill gaps to ensure they cover the topics needed to complete the learning journey successfully."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-2-index-mdx-fb5670c86eda34c85013.js.map