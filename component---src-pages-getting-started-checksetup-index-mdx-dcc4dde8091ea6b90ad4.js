(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),l=a.n(i),r=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),m=a("QH2O"),p=a.n(m),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(d.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,l=o.subDirectory,s=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),y=a("9Hrx"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,a);return Object(d.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(d.b)(r.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},i))))))},t}(o.a.Component),w=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,u=t.relativePagePath,m=t.titleType,p=b.tabs,g=b.title,y=b.theme,f=b.description,A=b.keywords,x=Object(N.a)().interiorTheme,k=Object(r.useStaticQuery)("2456312558").site.pathPrefix,I=k?n.pathname.replace(k,""):n.pathname,C=p?I.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",T=y||x;return Object(d.b)(c.a,{tabs:p,homepage:!1,theme:T,pageTitle:g,pageDescription:f,pageKeywords:A,titleType:m},Object(d.b)(h,{title:o?Object(d.b)(o,null):g,label:"label",tabs:p,theme:T}),p&&Object(d.b)(v,{title:g,slug:I,tabs:p,currentTab:C}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:u})),Object(d.b)(O.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:C}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},g7kV:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return p}));var n=a("k1TG"),o=a("8o2o"),i=(a("q1tI"),a("7ljp")),l=a("013z"),r=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=s("PageDescription"),b=s("InlineNotification"),u={_frontmatter:r},m=l.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"},Object(i.b)("p",null,"The following steps will guide you on how to get access to the IBM Cloud Enterprise Sandbox")),Object(i.b)("p",null,"Congratulations on becoming part of the IBM Cloud-Native Learning Journey! You should have received a welcome email that provides details of the IBM Cloud Sandbox you’ve been assigned to and points to this welcome page. By participating in this Cloud-Native Learning Journey, you get access to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Crafted Education Journey Agenda."),Object(i.b)("li",{parentName:"ul"},"A RedHat OpenShift managed service cluster with the IBM Garage Cloud-Native Toolkit and IBM Cloud Pak for Applications pre-installed."),Object(i.b)("li",{parentName:"ul"},"The development environment pre-configured in a pay-as-you-go IBM Cloud account which you will use to perform your learning tasks.")),Object(i.b)(b,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," If you haven’t received the welcome email, it might be due to you\nnot having been given access to the IBM Cloud account yet. Please contact your\nBusiness Development Executive or your Lab Leader to validate your invite.")),Object(i.b)("h2",null,"Notification"),Object(i.b)("p",null,"The welcome email gives you information on how to access the development environment for your team."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IBM Cloud Sandbox Registration Details")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Account"),": this is the IBM Cloud account with a configured sandbox development environment that will enable you to complete the learning agenda."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Team"),": this is the name of your development team."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GitHub Organization"),": this is the GitHub organization that will be used for storing your code during your learning activities."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Resource Group"),": this is the IBM Cloud resource group where the development cluster and cloud resources have been provisioned."),Object(i.b)("li",{parentName:"ul"},"Example of the key information in your email:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Cloud               : https://cloud.ibm.com/\nAccount             : 1924691 - GSI Labs - IBM\nLocation            : London (eu-gb)\nSandbox Team        : Cloud-Native Squad\nGitHub Organization : https://github.com/gsi-enablement-one\nResource Group      : gsi-cloudnative-squad\n")))),Object(i.b)("p",null,"You must associate your email address with your public GitHub account or make sure you have a public account that is using an email address that matches the one you linked to your sandbox environment."),Object(i.b)("p",null,"To set your IBM ID in GitHub:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," (public, not Enterprise)."),Object(i.b)("li",{parentName:"ul"},"Log in to your account or create a new one."),Object(i.b)("li",{parentName:"ul"},"Navigate to your account settings."),Object(i.b)("li",{parentName:"ul"},"In Email settings make sure that the email you used as your IBMid is the primary ID for the account."),Object(i.b)("li",{parentName:"ul"},"If it is not, then add your IBMid email and verify it."),Object(i.b)("li",{parentName:"ul"},"If you are correctly verified and associated, you will receive a second email inviting you to your team’s GitHub organization.")),Object(i.b)(b,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," If you don’t associate your business email with your public GitHub account, you will not receive a Git Organization invitation and you will have issues completing the learning activities. IBM is not mixing personal email addresses with the business email that has been associated with your ",Object(i.b)("strong",{parentName:"p"},"Cloud Sandbox"),".")),Object(i.b)("h2",null,"Sandbox"),Object(i.b)("p",null,"The Cloud-Native Sandbox is designed to make it easy for you to develop and deploy cloud-native applications. It includes an OpenShift cluster with cloud services bound and open-source developer tools installed. This combination supports the development of cloud-native microservices architecture applications and CI/CD continuous deployment of these."),Object(i.b)("p",null,"The IBM Cloud Enterprise Sandbox has been configured exactly how IBM recommends by setting up a multi-tenant development team on the IBM Cloud."),Object(i.b)("p",null,"Each development team can contain up to ",Object(i.b)("strong",{parentName:"p"},"200+")," developers. Each team has been configured in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam"}),"IAM")," with its access group and a corresponding resource group that contains the resources for your team’s sandbox environment. As a member of your team’s access group, you will have access to the resources in your team’s Developer Tools environment. You are restricted from creating new cloud resources or deleting existing ones."),Object(i.b)("p",null,"The following diagram shows how access has been configured. Imagine you are the Green user: there will be some other users from your team accessing the same development cluster so all of you will be sharing the same cloud resources. The Sandbox administrators will be monitoring these to early identify and fix any issues."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"946px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.7361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADB0lEQVQ4y21UyXLbRhDlB+Y7csglOaUqh1Slcsg193yFD/bFhziWYpOSGFsUxQUgCBD7PpjBNgAJ8qUxUjmlJKjqakwvD728wQT/83T9EV9//xPWuvHCXjUNvvnhZ2wN8z853/74C65md5j0xwGi7sArCSYapYuyxfTTIzJeo2y6L/acztNPS3Uum17pMbZuj7i9XyNICkyabkCUcfrqARvdhG46StK8oIQamrJbpG31HiVMge1MFyttj+3ugL3tI2MlZH/CpO0H5EKSk8D2Bwow4YWpqi5iLXTDwnKjk9/AamsgyQqkooO2d/Cw0rAmUMNyEOcljaTHRBJgwiVu9BQrl2NpczzYBXx+hJ+3dGZ4dBgWB0Z2hkD0iHmHeytXsnILJXpUo+nPT4ApAT66JVw2CoORSLi6DTcqsU8aHLIWRlzDJB1YAcKQQwtrZbNT8rMOO92DoNF9qXBBlTm5gJtn0OMWrukToMAuqmAltdIjeGBHCGOBrV9CD0vls6iTnRFCUP4zYIe5ybEJGqz8BguHwys6BBS48kqsgxpL0g+OoFH0Kn5J7w/U1Wb0ufSB4LnllrbMSonNzlab0/Y2DViglkdVuUkb3OgH7CwXbpihI5qltETTCdX2jYOPtKggaCEN5agtZxTgUXDBBdGFoZUSdizhUItZzokSJAVHTcSO2RH22HrMkBdP9r7v4KcdFUBbHkk50kCcXzL/s3uCSYOX/7oRWnLBzqtQDC/tm/gMNyXA8VBXHYrFGvM0h8YNZN4WlXYgekjItY65H2EjbETeElKzEFc9qqWGVRjjno0c1CAWGpqWAF9/WGJ+b6B+P8Urx8NNOoe3vkb2x1+IqPLuz1u8IXLP2Br29nfwd3eImhPqd1O8J/vb6BF28AHJmysIup6Tr777Fb+9usaJKm0pkMaEsgOI13TFjnCLGiyvSCSykhhBI+JjR5TQyjNkewFdZ3AaQUm+SVlL9Xe5nM84kQyjDAOG09OQ5ndzzG5ucXV9jY/Tj5hNZ8/xF5yGf3LOw6gv+Bvmu10y6EhXgQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Workshop Teams",title:"Workshop Teams",src:"/ibm-gsi-cloudnative-journey/static/02fd938ecbad2bea7f026bfaf8836f8b/ad4e9/workshop-teams.png",srcSet:["/ibm-gsi-cloudnative-journey/static/02fd938ecbad2bea7f026bfaf8836f8b/7fc1e/workshop-teams.png 288w","/ibm-gsi-cloudnative-journey/static/02fd938ecbad2bea7f026bfaf8836f8b/a5df1/workshop-teams.png 576w","/ibm-gsi-cloudnative-journey/static/02fd938ecbad2bea7f026bfaf8836f8b/ad4e9/workshop-teams.png 946w"],sizes:"(max-width: 946px) 100vw, 946px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"You will be given access to your team’s GitHub organization and you will be expected to create all of your application source code into this organization. This is how real-world development projects work by enabling you to collaborate with your fellow team members while preventing you from creating duplicate project names."),Object(i.b)("h2",null,"Validating your IBM Cloud access"),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": If you have any issue with the following steps, please raise an issue on the ",Object(i.b)("strong",{parentName:"p"},"#gsi-labs-external")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gsicsi.slack.com/archives/CSRDJD5HA"}),"Slack Channel"),". All issues should be reported there.")),Object(i.b)("p",null,"Follow the following steps to check you can access your team’s Developer Tools environment."),Object(i.b)("p",null,"Log in and view the resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Log in to the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com"}),"IBM Cloud"),"."),Object(i.b)("li",{parentName:"ul"},"The IBM Cloud Sandbox registration welcome email will include your account information, team, GitHub organization, and resource group."),Object(i.b)("li",{parentName:"ul"},"In the IBM Cloud console, switch to the account specified in the email."),Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("em",{parentName:"li"},"Resource List"),"."),Object(i.b)("li",{parentName:"ul"},"In the Group filter, select your team’s resource group."),Object(i.b)("li",{parentName:"ul"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Expand All")," (top right) to show all its resources."),Object(i.b)("li",{parentName:"ul"},"Under Cluster, you should see the cluster named ",Object(i.b)("inlineCode",{parentName:"li"},"sandbox-ocp43-{team}")," where ",Object(i.b)("inlineCode",{parentName:"li"},"{team}")," is the name of your team. Some clusters may have a different number if there is more than one of that type.")),Object(i.b)("p",null,"Explore the Red Hat OpenShift resources and set up the CLI:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the Tags filter, enter both ",Object(i.b)("inlineCode",{parentName:"li"},"ocp")," to see just the Red Hat OpenShift cluster and services.\n",Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"776px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.61111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACXklEQVQ4y52Sy07bUBCG/QDABoFYgRC8dFddR0Rc3qCbsixSC0oIIYnvdhzfYie+++/MOEkTddUe6fPxuc35Z/6jnJ2d4fr6GhcXFzg6OsLx8TFOT09xc3NzwO3trey7uroSLi8vZcxr5+fncv7k5ARKv9/H09MTHh8fwf9bHh4eZG4fnru/v9/BY+bu7k7O9Ho9KG3bwjAMWJYFx3GkX6/X+N+mLJdLuK6L+XwuAZnFYoEoiv4ijrs+DMPNXLhHt6bwZzKZ4PX1FaZpikLuWbWu6zs0TcP7+wgf40+YlgNV06HqBvUGZqouaDSnrFYrUuTDtu0DpS71cRwLEbFcxnAXCb587eHb9x9QrRCjqYOx6kG1I2h2jJm9gpJlGZIkFVWsNs9zgeeLothRlgVWWYmXXyN8qja8IIXjxXAWVDI/wZzw46wLmNMBh9Qxc8/DOsvRborMpjHcqqqU+nINWXFMAhLyYJUmSIksW0MRNZS2ZegIKViWJGhITVuWaOsaDQVrmkaCllUlZdG5vvIybARBAC5bmqbyOpScPo02QfLzBdH0A+nsEwlR6lPAd9GQMg7IjS+fzlQxZKZq8EjA1nUmITGScrHw4I2GcMYj2B9DRIaGyp+DpB8EZBXPz894e3vDcDjEYDCAqqryAvgl+L7PKRdYExa5apj0ZNhtriOpafZq2G5Sr2ui6ejG9Q4eKyXVKqO0LcOUG/ifXa3rCu2mdv+CUlDAKisQmS48v3Mw2NSkERV/TOGL2GU2IgjCTtVG+RZRmJfkHm3gjayS2QZsdy7jMGAYSvqyvqfwN7FwOGopcKeYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Resource List",title:"Resource List",src:"/ibm-gsi-cloudnative-journey/static/c20e83462a694c1bb2b056a5b32390ac/5ff3d/devtoolsservices.png",srcSet:["/ibm-gsi-cloudnative-journey/static/c20e83462a694c1bb2b056a5b32390ac/7fc1e/devtoolsservices.png 288w","/ibm-gsi-cloudnative-journey/static/c20e83462a694c1bb2b056a5b32390ac/a5df1/devtoolsservices.png 576w","/ibm-gsi-cloudnative-journey/static/c20e83462a694c1bb2b056a5b32390ac/5ff3d/devtoolsservices.png 776w"],sizes:"(max-width: 776px) 100vw, 776px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ul"},"Click on each cloud service instance name and check that you can open each one’s dashboard."),Object(i.b)("li",{parentName:"ul"},"Click on the Red Hat OpenShift cluster names to open their dashboards."),Object(i.b)("li",{parentName:"ul"},"Switch to the ",Object(i.b)("strong",{parentName:"li"},"Access")," tab."),Object(i.b)("li",{parentName:"ul"},"Follow the instructions to install the CLI, then access the cluster from the CLI and validate that you are successfully connected."),Object(i.b)("li",{parentName:"ul"},"Press the ",Object(i.b)("em",{parentName:"li"},"OpenShift web console")," button and verify that you can open the Red Hat OpenShift console.")),Object(i.b)("p",null,"Explore the IKS resources and set up the CLI:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Return to the ",Object(i.b)("strong",{parentName:"li"},"Resource List"),"."),Object(i.b)("li",{parentName:"ul"},"Remove the ",Object(i.b)("inlineCode",{parentName:"li"},"ocp")," tags and add the ",Object(i.b)("inlineCode",{parentName:"li"},"iks")," tag."),Object(i.b)("li",{parentName:"ul"},"Repeat the same steps for your team’s Kubernetes cluster and services.")),Object(i.b)(b,{kind:"success",mdxType:"InlineNotification"},Object(i.b)("p",null,"You have completed this task if you have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Managed to access your IBM Cloud account."),Object(i.b)("li",{parentName:"ul"},"Viewed your team’s Red Hat OpenShift cluster."),Object(i.b)("li",{parentName:"ul"},"Accessed the cluster from the command line."))),Object(i.b)("h2",null,"Etiquette"),Object(i.b)("p",null,"Please remember that you are sharing a development cluster with other colleagues, so be considerate of the following rules:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Make sure you use your own namespace/project for your applications:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name your personal namespace/project using the convention ",Object(i.b)("inlineCode",{parentName:"li"},"dev-{your initials}"),", i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"dev-mjp"),"."),Object(i.b)("li",{parentName:"ul"},"Any namespaces/projects not following this approach will be deleted by the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=Um-PlX6oPBQ"}),"master builders"),"."))),Object(i.b)("li",{parentName:"ul"},"Name your applications using the convention ",Object(i.b)("inlineCode",{parentName:"li"},"{app name}-{your initials}"),", i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"inventory-bff-mjp"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Using the team’s GitHub organization will help avoid creating apps with the same name"))),Object(i.b)("li",{parentName:"ul"},"Use Slack to talk to your fellow team members and to help debug issues."),Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/github/building-a-strong-community/about-team-discussions"}),"GitHub team discussion")," feature to share knowledge."),Object(i.b)("li",{parentName:"ul"},"Do not delete anything in the cluster that is not yours.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Especially secrets and configMaps—deleting these will mess up how the environment works for you and your colleagues, and more importantly, will cause unnecessary repair work for the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=Um-PlX6oPBQ"}),"master builders"),"."),Object(i.b)("li",{parentName:"ul"},"Do not delete other people’s pipelines or deployed apps."))),Object(i.b)("li",{parentName:"ul"},"Do not create anything that can cause unnecessary stress to or load on your team’s cluster, its environment, or the IBM Cloud Sandbox account.")),Object(i.b)("p",null,"Remember:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Part of what you will learn is how to be team members working on multiple microservices in the same development cluster with other developers"),Object(i.b)("li",{parentName:"ul"},"”",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://donthitsave.com/comic/2016/07/15/it-works-on-my-computer"}),"My app runs on my computer"),"” is necessary but not sufficient, it needs to run in the OpenShift or IKS clusters as well."),Object(i.b)("li",{parentName:"ul"},"IBM Cloud is like one big Lego set of software and services.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"After this course, you will be on the way to become a master builder. It’s a lot of fun!")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-checksetup-index-mdx-dcc4dde8091ea6b90ad4.js.map