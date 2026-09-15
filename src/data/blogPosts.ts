import { slugifyHeading } from "@/src/lib/blog";

export type BlogCta = {
  heading: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
  phoneLine?: string;
  note?: string;
};

export type BlogFaq = {
  q: string;
  a: string;
};

export type BlogStatIcon = "cloud" | "sun" | "wind" | "shield" | "battery" | "zap";

export type BlogSection =
  | { type: "markdown"; markdown: string }
  | { type: "cta"; cta: BlogCta }
  | { type: "faqs"; heading: string; items: BlogFaq[] }
  | { type: "figure"; src: string; alt: string; caption: string }
  | { type: "stats"; items: { value: string; label: string; icon: BlogStatIcon }[] }
  | { type: "takeaways"; heading?: string; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | {
      type: "compare";
      left: { title: string; subtitle: string; items: string[] };
      right: { title: string; subtitle: string; items: string[] };
    };

export const relatedReads = [
  {
    title: "Residential Solar Systems",
    href: "/solar-systems/residential-solar-system",
    image: "/assets/images/hosted/bayview-0820.webp",
    label: "Solar systems",
  },
  {
    title: "Solar Battery Installation",
    href: "/services/solar-battery-installation",
    image: "/assets/images/hosted/products/sigen-battery.webp",
    label: "Batteries",
  },
  {
    title: "Solar Panel Maintenance",
    href: "/services/solar-panel-maintenance-darwin",
    image: "/assets/images/hosted/about-team.webp",
    label: "Care",
  },
  {
    title: "Our Darwin Projects",
    href: "/projects",
    image: "/assets/images/hosted/bellamack-0832-2-1-.webp",
    label: "Projects",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateIso: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  author: string;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "do-solar-panels-work-during-darwins-wet-season",
    title: "Do Solar Panels Work During Darwin's Wet Season? (2026 Guide)",
    excerpt:
      "Your panels keep working right through the wet season. They just work differently, and knowing how helps you plan for it instead of worrying about it.",
    date: "15 September 2026",
    dateIso: "2026-09-15",
    category: "Guides",
    readTime: "9 min read",
    image: "/assets/images/hosted/aerial.webp",
    imageAlt: "Aerial view of solar panels installed on a Darwin rooftop",
    author: "Oneroof Solar",
    seoTitle: "Do Solar Panels Work in Darwin's Wet Season?",
    seoDescription:
      "Yes, solar panels still work during Darwin's wet season. See how much power you'll lose, how to size your system right, and what actually protects it from storms.",
    canonicalPath: "/do-solar-panels-work-during-darwins-wet-season/",
    sections: [
      {
        type: "markdown",
        markdown: `You watch the sky turn grey in October and think, here we go again. Six months of rain, storms, and humidity that makes everything feel damp. If you're weighing up solar, or you already have it, the question on your mind is simple. Does it still pull its weight when the wet season hits, or are you paying for a system that sits idle half the year?

Short answer: your panels keep working right through the wet season. They just work differently, and knowing how helps you plan for it instead of worrying about it.

## How Solar Panels Actually Generate Power in the Rain

Solar panels don't need direct sun to make electricity. They need light, and even on a grey, overcast Darwin afternoon, plenty of light still gets through.

### Solar Panels Run on Light, Not Heat

Your panels convert photons, tiny particles of light, into electricity through the photovoltaic effect. That process doesn't care whether the sky is clear blue or thick with monsoon clouds. It just needs light to hit the cells. A hot, sunny day doesn't actually help either. Panels run a touch more efficiently when they're cooler, so a mild, overcast day isn't the write off it looks like.

### Solar Output When the Sky Is Overcast

On a heavy rain or thick cloud day, expect your system to produce somewhere between 10% and 25% of what it makes on a clear day. That's a real drop, and no honest installer will tell you otherwise. But it's a drop, not a stop. Your panels are still feeding power into your home every single day of the wet season.

### Rain Doesn't Stop the System, It Just Slows It Down

Your system is still feeding the house. The wet season just changes the rate, not whether the panels are working.`,
      },
      {
        type: "quote",
        text: "Think of it like a tap. On a sunny day the tap runs full. On a rainy day it's more of a trickle. But it's never turned off completely, and the moment the clouds break, even for twenty minutes, that trickle turns back into a proper flow.",
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "Panels keep generating through rain and cloud — they run on light, not a clear sky.",
          "On a heavy rain day, expect about 10 to 25% of clear-sky output, not zero.",
          "Size the array for February in Darwin, not a sunny-day brochure number.",
          "Wind region C/D racking and sealed connectors matter more than the rain itself.",
          "A battery is what keeps the lights on when the grid drops in a storm.",
        ],
      },
      {
        type: "stats",
        items: [
          { value: "10–25%", label: "Typical output on a heavy rain or thick cloud day versus a clear day.", icon: "cloud" },
          { value: "3,000+", label: "Hours of sunshine a year in Darwin, Zone 1 on the federal STC scale.", icon: "sun" },
          { value: "C / D", label: "Cyclone wind region rating your racking has to be built for.", icon: "wind" },
        ],
      },
      {
        type: "figure",
        src: "/assets/images/hosted/bayview-0820.webp",
        alt: "Residential solar panels installed on a Darwin rooftop",
        caption: "Darwin rooftops still generate through grey, overcast days — output drops, it does not stop.",
      },
      {
        type: "markdown",
        markdown: `## Darwin's Wet Season vs Dry Season Solar Output

The gap between your best and worst months in Darwin is bigger than most of Australia, and that's worth planning around properly rather than glossing over.

Darwin's wet season runs November through April, with January and February the wettest and cloudiest stretch. Cloud cover sits around 45 to 47% through January to March, compared to a much clearer sky through the dry season months. On a genuinely heavy, dark wet season day, you might see your system running well below half its usual output. Compare that to a bright dry season day in June, July or August, where you're looking at a real chance of sunshine above 60%, climbing to around 70% in peak dry months. That contrast is exactly why your system needs to be sized for the whole year, not just the good months.

Your dry season months don't just make up for the wet season dip, they're strong enough to carry your annual average well into worthwhile territory. Darwin gets over 3,000 hours of sunshine a year and sits in Zone 1 for solar irradiance, the strongest rating on the federal STC scale. A few soft weeks in February don't undo six months of strong, reliable dry season generation.`,
      },
      {
        type: "compare",
        left: {
          title: "Wet season",
          subtitle: "November through April",
          items: [
            "January and February are the wettest, cloudiest stretch.",
            "Cloud cover sits around 45 to 47% through January to March.",
            "A heavy dark day can put the system well below half its usual output.",
            "Expect 10 to 25% of clear-sky production on thick rain days.",
          ],
        },
        right: {
          title: "Dry season",
          subtitle: "May through October",
          items: [
            "June, July and August often sit above 60% sunshine likelihood.",
            "Peak dry months climb to around 70%.",
            "A well-sized 6.6kW system can make roughly 25 to 35kWh on a strong day.",
            "Those months carry the annual average well into worthwhile territory.",
          ],
        },
      },
      {
        type: "markdown",
        markdown: `## Sizing a Solar System That Handles Darwin's Climate

Get the size right and the wet season stops being something to worry about. Get it wrong and you'll notice every cloudy day.

Most solar quotes are built around best case, clear sky numbers. That's fine for a rough idea, but it's not what your bills actually look like in February. If your installer only ever talks about peak output, ask them straight out how the system performs across the wet season too. A system sized properly for Darwin factors in the wet season dip from day one, so your savings don't fall off a cliff every summer. That might mean a slightly larger array than a generic online calculator suggests, or panels chosen specifically for stronger low-light performance.

This is where working with a local team actually matters. One Roof Solar sizes every [residential solar system](/solar-systems/residential-solar-system) around Darwin's real seasonal swing, not a spreadsheet built for Melbourne or Perth, and talks you through what your output will realistically look like in both January and July before you sign anything.

One trick most installers won't explain unless you ask: your panel array doesn't have to match your inverter's rating one for one. It's common, and fully within Australian standards, to oversize your panels relative to the inverter, sometimes up to around 133% of its AC rating. On a clear day the extra capacity barely matters because the inverter caps out anyway. But on a heavy wet season morning or a thick overcast afternoon, that extra panel capacity is exactly what keeps your output closer to normal instead of falling off a cliff. It's a cheap, practical way to claw back some of what the wet season takes.

To put real numbers on it, a well-sized 6.6kW system in Darwin can produce roughly 25 to 35kWh on a strong dry season day, and considerably less, sometimes under half that, through a heavy wet season stretch. That's exactly why sizing for your worst month matters more than sizing for your best one.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/berrimah-0828.webp",
        alt: "Larger Darwin solar installation sized for year-round output",
        caption: "Oversizing the array against the inverter is a practical way to hold output up on overcast wet-season mornings.",
      },
      {
        type: "cta",
        cta: {
          heading: "Is Your System Ready for the Next Wet Season?",
          body: "Don't let seasonal dips or monsoon blackouts catch you off guard. Get a custom, cyclone-rated solar and battery quote tailored specifically to your home's roof layout and energy needs.",
          buttonLabel: "Get Your Free Quote",
          buttonHref: "/contact",
          phoneLine: "or call our local Darwin team today at 0483 986 444.",
        },
      },
      {
        type: "markdown",
        markdown: `## What Actually Protects Your System Through Monsoon Storms

Rain is the easy part. It's the wind, humidity and storm activity that come with the wet season that your system needs to be properly built for.

### Wind Region C/D Racking

Darwin sits in cyclone wind region C, with some areas closer to D. That means your mounting and racking needs to be rated for serious wind loading, not just standard residential fixings. This is non-negotiable for an approved installation and for your insurance, and it's the difference between a system that rides out a storm warning and one that doesn't.

### Humidity, Sealed Connectors and Preventing Corrosion

Darwin's humidity sits high for most of the year, and it's tough on unsealed electrical gear. Proper installations use IP67 or IP68 rated connectors and junction boxes as standard, which stop moisture creeping in and corroding connections over time. It's a small spec detail that makes a big difference five years down the track.

Dust, pollen and grime build up on panels through the dry season and can quietly cut your output by 5 to 10%. A proper wet season downpour washes that straight off, so your panels often come out of the wet season cleaner than they went in. If you want a professional check up as well, our [solar panel maintenance team](/services/solar-panel-maintenance-darwin) covers Darwin, Palmerston and Alice Springs.

Getting the mounting and sealing right from the start is exactly why One Roof Solar builds every install around Darwin's actual conditions. If you're weighing up your options, you can [get a solar quote in Darwin, Palmerston or Alice Springs](/) and we'll walk you through what wind rating and sealing your roof specifically needs.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/bellamack-0832-2-1-.webp",
        alt: "Cyclone-rated solar mounting on a Darwin rooftop",
        caption: "Wind region C/D racking and sealed IP67/IP68 connectors are what actually ride out monsoon humidity and storm warnings.",
      },
      {
        type: "stats",
        items: [
          { value: "IP67+", label: "Sealed connectors and junction boxes to keep moisture out of the electrics.", icon: "shield" },
          { value: "5–10%", label: "Output you can quietly lose to dry-season dust before a downpour washes it off.", icon: "zap" },
          { value: "Battery", label: "The piece that keeps lights on when grid-tied solar switches off in a blackout.", icon: "battery" },
        ],
      },
      {
        type: "markdown",
        markdown: `## Keeping the Power On When the Wet Season Hits Hardest

A cloudy day is one thing. A blackout during a storm is a different problem, and it's one solar alone doesn't solve.

### Why Grid-Tied Solar Alone Can't Back You Up in a Blackout

If you've got a standard grid-tied system with no battery, it switches off during a blackout for safety reasons, even if the sun's out. That catches a lot of people off guard the first time the power drops during a storm. Your panels aren't broken, the system is just designed to protect line workers fixing the grid. A battery changes that picture completely. It stores the power your panels generate through the day so you've got something to draw on overnight, during a blackout, or through a run of heavy cloud. Brands like Sigenergy, GoodWe, Fox ESS and Alpha ESS all offer backup modes built for exactly this kind of scenario, and you can see the options we install on our [solar battery brands page](/products/solar-battery-brands/).

A couple of things worth clearing up while we're talking batteries. First, your battery won't overcharge itself. Every battery system runs a battery management system (BMS) that automatically stops charging once it's full, so there's no risk of your Sigenergy or GoodWe unit cooking itself on a big sunny day after the rain clears. Second, your battery doesn't quietly drain itself overnight just because it's sitting there. It only discharges when your home actually draws power from it, so a fully charged battery at sunset is there for you in the morning, not mysteriously flat.

If the thought of sitting through a wet season blackout without power is what's holding you back from going all in on solar, a [solar battery installation](/services/solar-battery-installation) is the piece that actually fixes it.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/products/sigen-battery.webp",
        alt: "Home battery storage for wet season blackout backup in Darwin",
        caption: "A battery stores daytime generation for overnight use, blackouts, and stretches of heavy cloud.",
      },
      {
        type: "markdown",
        markdown: `## Is Solar Still Worth It in Darwin's Wet Season?

Yes, and the maths holds up when you look at the full year rather than just the rainy months.

Your solar savings should be worked out across twelve months, not judged off a single wet week. Darwin's Zone 1 STC rebate is the biggest available under the federal scheme, and combined with high electricity costs and strong dry season output, most systems still pay themselves off well within the expected timeframe even with the wet season dip factored in.

Some people hold off installing until the wet season passes, thinking they'll get a cleaner start. In reality you're just losing months of dry season generation you could've already banked. Installation itself isn't weather dependent, your roof still gets the same quality fit in January as it does in July, so waiting only pushes your payback date further out.

## Is That Wet Season Dip Normal, or Is Something Actually Wrong?

A drop in output through January and February is expected. What's not normal is one section of your roof underperforming compared to the rest, a sudden output cliff that doesn't recover once the sun's back, or a system producing well under 10% even on a bright day between storms. If you're seeing any of that, it's not the weather, it's worth getting it checked. Our [solar panel maintenance team](/services/solar-panel-maintenance-darwin) can pull the per-string data off your inverter and tell you in minutes whether it's a normal seasonal dip or an actual fault.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/alice-springs-0870-1-.webp",
        alt: "Solar installation across the Northern Territory climate",
        caption: "Waiting for the wet season to pass just delays dry-season generation you could already be banking.",
      },
      {
        type: "faqs",
        heading: "FAQs",
        items: [
          {
            q: "Do solar panels still work when it's raining in Darwin?",
            a: "Yes. Panels generate electricity from light, not direct sun, so they keep working through rain and cloud. Output drops on heavy rain days, typically to 10 to 25% of clear sky levels, but the system never stops producing altogether.",
          },
          {
            q: "How much less power do solar panels produce in the NT wet season?",
            a: "Expect noticeably lower output through January to March, when cloud cover sits around 45 to 47%. Dry season months from May to October run much stronger, often above 60% sunshine likelihood, which balances your annual average.",
          },
          {
            q: "Will my solar battery help during a wet season blackout?",
            a: "Yes. A battery stores power generated during the day so you've got backup through a blackout or a stretch of heavy cloud. Standard grid-tied solar without a battery switches off automatically during outages for safety.",
          },
          {
            q: "What stops my solar battery from overcharging?",
            a: "Every battery system has a built in management system that automatically stops charging once it's full. You don't need to monitor it or switch anything off manually, it handles itself.",
          },
          {
            q: "Do monsoon storms damage solar panels?",
            a: "Not when they're installed correctly. Darwin sits in cyclone wind region C to D, so panels need wind rated racking built for that classification. Rain itself doesn't harm panels, and it actually washes off built up dust and grime.",
          },
          {
            q: "Should I wait until after wet season to install solar?",
            a: "No. Installation quality isn't affected by season, and waiting just means missing out on dry season generation you could already be banking. The sooner your system's in, the sooner your payback clock starts.",
          },
        ],
      },
      {
        type: "markdown",
        markdown: `## Solar Built for Darwin's Whole Year, Not Just the Dry Season

Your panels don't clock off when the wet season rolls in. They keep converting light into power every single day between November and April, just at a lower rate than the dry months, and that dip is something a system sized properly for the Top End already accounts for.

The real question was never whether solar works during Darwin's monsoon season. It's whether your system, your racking, and your battery setup were built for Darwin's actual weather in the first place, wet season storms included, or just for a sunny day brochure photo.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Stop Paying Full Price for Wet Season Electricity",
          body: "Sizing your system for Darwin's actual climate means consistent savings all year round. Claim your federal STC rebate upfront and secure $0-deposit solar options today.",
          buttonLabel: "Claim Your Free Custom Pricing",
          buttonHref: "/contact",
          note: "We Response within 2 business hours!",
        },
      },
    ],
  },
];

export function getPostBySlug(slug?: string): BlogPost | undefined {
  if (!slug) return undefined;
  const clean = slug.replace(/^\/+|\/+$/g, "");
  return blogPosts.find((post) => post.slug === clean);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.dateIso < b.dateIso ? 1 : -1));
}

export function getPostPath(post: BlogPost): string {
  return `/${post.slug}`;
}

export function isBlogPath(pathname: string): boolean {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/blogs" || clean === "/blog") return true;
  if (clean.startsWith("/blogs/")) return true;
  return blogPosts.some((post) => clean === `/${post.slug}`);
}

export function getPostToc(post: BlogPost): { id: string; label: string }[] {
  const items: { id: string; label: string }[] = [];
  const seen = new Set<string>();

  const push = (label: string) => {
    const id = slugifyHeading(label);
    if (seen.has(id)) return;
    seen.add(id);
    items.push({ id, label });
  };

  for (const section of post.sections) {
    if (section.type === "markdown") {
      for (const match of section.markdown.matchAll(/^## (.+)$/gm)) {
        push(match[1]);
      }
    }
    if (section.type === "faqs") {
      push(section.heading);
    }
  }

  return items;
}
