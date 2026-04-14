const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="/Users/jamalwilliams/code/anarrativelens.com/src/components/Testimonials.astro";const s={title:"Components/Testimonials",component:o,argTypes:{heading:{control:"text"},subheading:{control:"text"},testimonials:{control:"object"}}},e={args:{heading:"What Our Muses Say",subheading:"Real stories of transformation from businesses that found their voice."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'What Our Muses Say',
    subheading: 'Real stories of transformation from businesses that found their voice.'
  }
}`,...e.parameters?.docs?.source}}};const t=["Default"];export{e as Default,t as __namedExportsOrder,s as default};
