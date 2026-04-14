const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="/Users/jamalwilliams/code/anarrativelens.com/src/components/PortfolioSection.astro";const t={title:"Components/PortfolioSection",component:o,argTypes:{heading:{control:"text"},subheading:{control:"text"},projects:{control:"object"}}},e={args:{heading:"Featured Stories",subheading:"A glimpse into the narratives we've helped build and capture."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Featured Stories',
    subheading: 'A glimpse into the narratives we\\'ve helped build and capture.'
  }
}`,...e.parameters?.docs?.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,t as default};
