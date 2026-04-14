const t=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};t.isAstroComponentFactory=!0;t.moduleId="/Users/jamalwilliams/code/anarrativelens.com/src/components/Hero.astro";const r={title:"Components/Hero",component:t,argTypes:{heading:{control:"text"},subheading:{control:"text"},cta:{control:"text"},ctaLink:{control:"text"},secondaryCta:{control:"text"},secondaryCtaLink:{control:"text"}}},e={args:{heading:"TOOLS. STRATEGY. SUPPORT. ALL IN ONE SYSTEM.",subheading:"HOLISTIC SUPPORT FOR YOUR BUSINESS GROWTH.",cta:"Book Your Free Growth Story Session",ctaLink:"/contact",secondaryCta:"Explore The System",secondaryCtaLink:"/system"}},o={args:{heading:"Find Your Voice.",subheading:"Tell Your Story. Transform Your Business.",cta:"Get Started",ctaLink:"/contact"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'TOOLS. STRATEGY. SUPPORT. ALL IN ONE SYSTEM.',
    subheading: 'HOLISTIC SUPPORT FOR YOUR BUSINESS GROWTH.',
    cta: 'Book Your Free Growth Story Session',
    ctaLink: '/contact',
    secondaryCta: 'Explore The System',
    secondaryCtaLink: '/system'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Find Your Voice.',
    subheading: 'Tell Your Story. Transform Your Business.',
    cta: 'Get Started',
    ctaLink: '/contact'
  }
}`,...o.parameters?.docs?.source}}};const n=["Default","Minimal"];export{e as Default,o as Minimal,n as __namedExportsOrder,r as default};
