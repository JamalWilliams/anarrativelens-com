const n=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};n.isAstroComponentFactory=!0;n.moduleId="/Users/jamalwilliams/code/anarrativelens.com/src/components/GrowthAct.astro";const o={title:"Components/GrowthAct",component:n,argTypes:{act:{control:"text"},title:{control:"text"},description:{control:"text"},features:{control:"object"},price:{control:"text"},setup:{control:"text"}}},e={args:{act:"1",title:"Set The Stage",description:"Build a strong digital foundation that works while you sleep.",features:["3-5 Page Branded Website","CRM & Pipeline Management","Calendar & Booking System","Basic Marketing Automation"],price:"$297",setup:"$497"}},t={args:{act:"2",title:"Rising Action",description:"Drive momentum and scale your impact with AI-driven systems.",features:["Advanced Sales Funnels","Marketing Automation","AI Employees & Chatbots","Reputation & Listing Management"],price:"$497",setup:"$997"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    act: '1',
    title: 'Set The Stage',
    description: 'Build a strong digital foundation that works while you sleep.',
    features: ['3-5 Page Branded Website', 'CRM & Pipeline Management', 'Calendar & Booking System', 'Basic Marketing Automation'],
    price: '$297',
    setup: '$497'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    act: '2',
    title: 'Rising Action',
    description: 'Drive momentum and scale your impact with AI-driven systems.',
    features: ['Advanced Sales Funnels', 'Marketing Automation', 'AI Employees & Chatbots', 'Reputation & Listing Management'],
    price: '$497',
    setup: '$997'
  }
}`,...t.parameters?.docs?.source}}};const a=["Act1","Act2"];export{e as Act1,t as Act2,a as __namedExportsOrder,o as default};
