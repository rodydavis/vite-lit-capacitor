import{r as p,e as c,s as f,$ as u,S as d,n as m,a as g}from"./vendor.1d500c55.js";const h=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};h();var v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,s=(i,r,a,o)=>{for(var e=o>1?void 0:o?y(r,a):r,t=i.length-1,n;t>=0;t--)(n=i[t])&&(e=(o?n(r,a,e):n(e))||e);return o&&e&&v(r,a,e),e};let l=class extends f{constructor(){super(...arguments);this.name="World",this.count=0}render(){return u`
      <main>
        <header><span class="title"> Hello, ${this.name}! </span></header>
        <section>
          <button @click=${this._onClick} part="button">
            Click Count: ${this.count}
          </button>
          <slot></slot>
        </section>
      </main>
    `}_onClick(){this.count++}foo(){return"foo"}firstUpdated(){d.setOverlaysWebView({overlay:!0}),(async()=>{await d.setStyle({style:g.Dark})})()}};l.styles=p`
    main {
      --bg-color: #f0f0f0;
      --fg-color: #000;
      --app-bar-color: navy;
      --app-bar-on-color: white;
      display: flex;
      flex-direction: column;
      width: 100%;
      /* Settings for the notch */
      background-color: var(--app-bar-color);
      padding-top: var(--inset-top);
      height: calc(100% - var(--inset-top));
    }
    header {
      background-color: var(--app-bar-color);
      color: var(--app-bar-on-color);
      padding: 1rem;
      padding-left: var(--inset-left);
      padding-right: var(--inset-right);
    }
    .title {
      padding-left: 1rem;
    }
    section {
      background-color: var(--bg-color);
      color: var(--fg-color);
      flex: 1;
      /* Settings for the notch */
      padding-bottom: calc(var(--inset-bottom) + 1rem);
      padding-left: calc(var(--inset-left) + 1rem);
      padding-right: calc(var(--inset-right) + 1rem);
      padding-top: 1rem;
    }
    @media (prefers-color-scheme: dark) {
      section {
        color: var(--bg-color);
        background-color: var(--fg-color);
      }
    }
  `;s([c()],l.prototype,"name",2);s([c({type:Number})],l.prototype,"count",2);l=s([m("my-element")],l);
