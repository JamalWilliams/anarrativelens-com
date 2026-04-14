import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import fs from 'node:fs/promises';
import path from 'node:path';

const VAULT_PATH = process.env.VAULT_CONTENT_PATH || '/Users/jamalwilliams/Vault/Websites/anarrativelens.com';

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: path.join(VAULT_PATH, "pages") }),
  schema: z.object({
    title: z.string(),
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      text: z.string().optional(),
      cta: z.string().optional(),
      ctaLink: z.string().optional(),
      backgroundImage: z.string().optional(),
    }).optional(),
    sections: z.array(z.discriminatedUnion("type", [
      z.object({
        type: z.literal("eyebrow-title"),
        eyebrow: z.string().optional(),
        title: z.string(),
        text: z.string().optional(),
        alignment: z.enum(["left", "center", "right"]).default("left"),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
        padding: z.enum(["normal", "large"]).default("normal"),
      }),
      z.object({
        type: z.literal("header-section"),
        eyebrow: z.string().optional(),
        heading: z.string(),
        text: z.string().optional(),
        alignment: z.enum(["left", "center", "right"]).default("left"),
        backgroundVariant: z.enum(["default", "subtle", "accent"]).default("default"),
        maxWidth: z.enum(["narrow", "medium", "wide"]).default("wide"),
      }),
      z.object({
        type: z.literal("asymmetric-feature-grid"),
        eyebrow: z.string().optional(),
        heading: z.string(),
        features: z.array(z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
        })),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("stats"),
        stats: z.array(z.object({
          value: z.string(),
          label: z.string(),
        })),
        columns: z.union([z.literal(2), z.literal(3), z.literal(4)]).optional(),
        padding: z.enum(["normal", "large"]).default("normal"),
      }),
      z.object({
        type: z.literal("details-table"),
        eyebrow: z.string().optional(),
        title: z.string(),
        rows: z.array(z.object({
          title: z.string(),
          description: z.string(),
        })),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
        padding: z.enum(["normal", "large"]).default("normal"),
      }),
      z.object({
        type: z.literal("split-heading"),
        title: z.string(),
        text: z.string(),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
        padding: z.enum(["normal", "large"]).default("normal"),
      }),
      z.object({
        type: z.literal("two-column"),
        eyebrow: z.string().optional(),
        heading: z.string(),
        text: z.string().optional(),
        image: z.string(),
        imageAlt: z.string().default(""),
        cta: z.string().optional(),
        ctaLink: z.string().optional(),
        imageOnRight: z.boolean().default(true),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("detailed-feature"),
        eyebrow: z.string().optional(),
        heading: z.string(),
        text: z.string().optional(),
        listItems: z.array(z.string()),
        statementText: z.string().optional(),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("narrative-cards"),
        eyebrow: z.string().optional(),
        title: z.string(),
        cards: z.array(z.object({
          pill: z.string(),
          title: z.string(),
          text: z.string(),
          link: z.string(),
        })),
        cta: z.string().optional(),
        ctaLink: z.string().optional(),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
        alignment: z.enum(["left", "center", "right"]).default("center"),
      }),
      z.object({
        type: z.literal("centered-text"),
        text: z.string(),
        padding: z.enum(["normal", "large"]).default("normal"),
      }),
      z.object({
        type: z.literal("problem-solution-grid"),
        heading: z.string(),
        subheading: z.string().optional(),
        problemsTitle: z.string(),
        problems: z.array(z.object({
          title: z.string(),
          description: z.string(),
        })),
        solutionsTitle: z.string(),
        solutions: z.array(z.object({
          title: z.string(),
          description: z.string(),
        })),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("growth-act-grid"),
        eyebrow: z.string().optional(),
        heading: z.string().optional(),
        acts: z.array(z.object({
          act: z.string(),
          title: z.string(),
          subtitle: z.string().optional(),
          description: z.string(),
          features: z.array(z.string()),
          price: z.string().optional(),
          setup: z.string().optional(),
          variant: z.enum(["light-brown", "green"]).default("light-brown"),
          ctaLink: z.string().optional(),
        })),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("feature-list"),
        eyebrow: z.string().optional(),
        heading: z.string(),
        subheading: z.string().optional(),
        items: z.array(z.object({
          title: z.string(),
          description: z.string(),
        })),
        footerText: z.string().optional(),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("benefit-card-grid"),
        eyebrow: z.string().optional(),
        heading: z.string(),
        cards: z.array(z.object({
          eyebrow: z.string().optional(),
          title: z.string(),
          description: z.string(),
          benefit: z.string(),
        })),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("pricing-table"),
        eyebrow: z.string().optional(),
        heading: z.string().optional(),
        subheading: z.string().optional(),
      }),
      z.object({
        type: z.literal("portfolio-section"),
        title: z.string().optional(),
        subtitle: z.string().optional(),
      }),
      z.object({
        type: z.literal("testimonials"),
        title: z.string().optional(),
        subtitle: z.string().optional(),
      }),
      z.object({
        type: z.literal("product-grid"),
        products: z.array(z.object({
          title: z.string(),
          price: z.string(),
          description: z.string(),
          category: z.string(),
          link: z.string().optional(),
        })),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("legal-support"),
        title: z.string(),
        description: z.string(),
        backgroundVariant: z.enum(["default", "subtle"]).default("subtle"),
      }),
      z.object({
        type: z.literal("insight-grid"),
        posts: z.array(z.any()).optional(), // Will be populated in the component or passed
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
      z.object({
        type: z.literal("split-contact"),
        heading: z.string(),
        text: z.string(),
        email: z.string(),
        phone: z.string(),
        hours: z.object({
          days: z.string(),
          times: z.string(),
          note: z.string(),
        }),
        card: z.object({
          icon: z.string(),
          title: z.string(),
          text: z.string(),
          cta: z.string(),
          ctaLink: z.string(),
          footer: z.string(),
        }),
        backgroundVariant: z.enum(["default", "subtle"]).default("default"),
      }),
    ])).optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: path.join(VAULT_PATH, "posts") }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,json}", base: path.join(VAULT_PATH, "data", "testimonials") }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    content: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(true),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,json}", base: path.join(VAULT_PATH, "data", "projects") }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string().optional(),
    image: z.string(),
    link: z.string(),
    featured: z.boolean().default(true),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,json}", base: path.join(VAULT_PATH, "data", "features") }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().default(0),
  }),
});

const pricing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,json}", base: path.join(VAULT_PATH, "data", "pricing") }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    eyebrow: z.string().optional(),
    description: z.string().optional(),
    features: z.array(z.string()),
    price: z.string(),
    setup: z.string().optional(),
    cta: z.string().default("Start This Act"),
    ctaLink: z.string().default("/contact"),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { pages, posts, testimonials, projects, features, pricing };
