(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),c=a("Wbzz"),o=a("Xrax"),i=a("k4MR"),p=a("TSYQ"),d=a.n(p),s=a("QH2O"),m=a.n(s),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,o=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},N=a("FCXl"),g=a("9Hrx"),y=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,o=new RegExp(r+"/?(#.*)?$"),i=n.replace(o,a);return Object(u.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=b,t),y.listItem)},Object(u.b)(c.Link,{className:y.link,to:""+i},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},b))))))},t}(r.a.Component),f=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,p=void 0===b?{}:b,d=t.relativePagePath,s=t.titleType,m=p.tabs,j=p.title,g=p.theme,y=p.description,T=p.keywords,k=Object(v.a)().interiorTheme,P=Object(c.useStaticQuery)("2456312558").site.pathPrefix,E=P?n.pathname.replace(P,""):n.pathname,w=m?E.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",C=g||k;return Object(u.b)(i.a,{tabs:m,homepage:!1,theme:C,pageTitle:j,pageDescription:y,pageKeywords:T,titleType:s},Object(u.b)(O,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:C}),m&&Object(u.b)(x,{title:j,slug:E,tabs:m,currentTab:w}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:d})),Object(u.b)(N.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:w}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},foMr:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a("k1TG"),r=a("8o2o"),b=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),o={_frontmatter:c},i=l.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(i,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Problem"),Object(b.b)("p",null,"The Hyper Drive isn’t working and we need to find out why. Let’s debug the ",Object(b.b)("inlineCode",{parentName:"p"},"hyper-drive")," deployment so that we can reach light speed again."),Object(b.b)("p",null,"Here are some tips to help you solve the Hyper Drive:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Check the description of the ",Object(b.b)("inlineCode",{parentName:"li"},"deployment"),"."),Object(b.b)("li",{parentName:"ul"},"Get and save the logs of one of the broken ",Object(b.b)("inlineCode",{parentName:"li"},"pods"),"."),Object(b.b)("li",{parentName:"ul"},"Are the correct ",Object(b.b)("inlineCode",{parentName:"li"},"ports")," assigned."),Object(b.b)("li",{parentName:"ul"},"Make sure your ",Object(b.b)("inlineCode",{parentName:"li"},"labels")," and ",Object(b.b)("inlineCode",{parentName:"li"},"selectors")," are correct."),Object(b.b)("li",{parentName:"ul"},"Check to see if the ",Object(b.b)("inlineCode",{parentName:"li"},"Probes")," are correctly working."),Object(b.b)("li",{parentName:"ul"},"To fix the deployment, save then modify the yaml file for redeployment.")),Object(b.b)("h2",null,"Solution"),Object(b.b)("h3",null,"Setup environment"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Execute the command to create the Deployement, Namespace, Service below definition."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0})," oc apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/lab-setup/lab-5-debug-k8s-setup.yaml\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Check the status of the POD."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," oc get pods -n {DEV_NAMESPACE}\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Check the description of the deployment."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," oc describe deployment hyper-drive -n {DEV_NAMESPACE}\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Save logs for broken pod."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," oc logs <pod name> -n {DEV_NAMESPACE} > /home/cloud_user/debug/broken-pod-logs.log\n")),Object(b.b)("p",{parentName:"li"},"In the description you will see the following is wrong:"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Selector and Label names do not match."),Object(b.b)("li",{parentName:"ul"},"The Probe is TCP instead of HTTP Get."),Object(b.b)("li",{parentName:"ul"},"The Service Port is 80 instead of 8080."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"To fix problem, can’t do oc edit on deployement, need to delete and recreate the deployment. So export deployement and do the necessary  changes and recreate it."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," oc get deployment <deployment name> -n {DEV_NAMESPACE} -o yaml --export > hyper-drive.yml\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Delete the existing deployement."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," oc delete deployment <deployment name> -n {DEV_NAMESPACE}\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Edit the exported YAML file and apply."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," oc apply -f hyper-drive.yml -n {DEV_NAMESPACE}\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Verify the deployement."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," oc get deployment <deployment name> -n {DEV_NAMESPACE}\n")))),Object(b.b)("h2",null,"Validate"),Object(b.b)("p",null," Once you get the Hyper Drive working again. Verify it by checking the endpoints."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," kubectl get ep hyper-drive\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-5-index-mdx-ce9b91e85b815a4cb20b.js.map