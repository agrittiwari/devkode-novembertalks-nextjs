(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},8418:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(6273),c=t(387),s=t(7190);var l={};function u(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var r=n(i.resolveHref(o,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,_=e.shallow,m=e.scroll,w=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=(r=a.default.Children.only(p))&&"object"===typeof r&&r.ref,x=n(s.useIntersection({rootMargin:"200px"}),2),b=x[0],g=x[1],j=a.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);a.default.useEffect((function(){var e=g&&t&&i.isLocalURL(d),r="undefined"!==typeof w?w:o&&o.locale,n=l[d+"%"+h+(r?"%"+r:"")];e&&!n&&u(o,d,h,{locale:r})}),[h,d,g,w,t,o]);var k={ref:j,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),r[o?"replace":"push"](t,n,{shallow:a,locale:s,scroll:c}))}(e,o,d,h,v,_,m,w)},onMouseEnter:function(e){i.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof w?w:o&&o.locale,N=o&&o.isLocaleDomain&&i.getDomainLocale(h,E,o&&o.locales,o&&o.domainLocales);k.href=N||i.addBasePath(i.addLocale(h,E,o&&o.defaultLocale))}return a.default.cloneElement(r,k)};r.default=f},7190:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,s=o.useRef(),l=n(o.useState(!1),2),u=l[0],f=l[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||u||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=t(7294),a=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},3678:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var n=t(5893),o=t(9008),a=t(7852),i=t.n(a),c=t(1664);function s(){return(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"stylesheet",href:"path/to/font-awesome/css/font-awesome.min.css"})]}),(0,n.jsxs)("div",{className:i().grid,children:[(0,n.jsx)(c.default,{href:"/csr",passHref:!0,children:(0,n.jsx)("div",{className:i().card,children:(0,n.jsx)("p",{children:" Client Side Rendering"})})}),(0,n.jsx)(c.default,{href:"/ssr",passHref:!0,children:(0,n.jsx)("div",{className:i().card,children:(0,n.jsx)("p",{children:"Server side Rendering"})})}),(0,n.jsx)(c.default,{href:"/ssg",passHref:!0,children:(0,n.jsx)("div",{className:i().card,children:(0,n.jsx)("p",{children:"Static Side Generation"})})})]}),(0,n.jsxs)("footer",{className:i().footer,children:[(0,n.jsx)("div",{className:"back",children:(0,n.jsx)("a",{href:"https://www.agrittiwari.com",children:"Agrit Tiwari\xa0"})}),"\xa0\xa0\xa0\xa0",(0,n.jsx)("div",{className:"back",children:(0,n.jsxs)("a",{href:"https://www.twitter.com/agrit_tiwari",children:[" Follow me on Twitter ",(0,n.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})]})}),"\xa0\xa0\xa0\xa0",(0,n.jsx)("div",{className:"back",children:(0,n.jsx)("a",{href:"https://www.devkode.io",children:" A Devkodemember \ud83d\udd25"})})]})]})}},7852:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",back:"Home_back__93Alp",customgrid:"Home_customgrid__hF0yE",logo:"Home_logo__27_tb"}},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);