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
  | { type: "figure"; src: string; alt: string }
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
  heroStats?: { value: string; label: string; icon: BlogStatIcon }[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "solar-panel-cyclone-protection",
    title: "How to Protect Your Solar Panels From Cyclones and Storms in Darwin, NT",
    excerpt:
      "What actually protects solar panels in Darwin, Palmerston and Alice Springs, what to do before, during and after a storm, and why the install matters more than the panel brand on the box.",
    date: "16 September 2026",
    dateIso: "2026-09-16",
    category: "Guides",
    readTime: "8 min read",
    image: "/assets/images/hosted/bellamack-0832-2-1-.webp",
    imageAlt: "Cyclone-rated solar panels installed on a Darwin rooftop",
    author: "Oneroof Solar",
    seoTitle: "How to Protect Your Solar Panels From Cyclones in Darwin, NT",
    seoDescription:
      "How to protect solar panels from cyclones and storms in Darwin, Palmerston and Alice Springs. Wind ratings, humidity protection, prep checklist and post-storm steps.",
    canonicalPath: "/blog/solar-panel-cyclone-protection/",
    heroStats: [
      { value: "Region C", label: "Darwin & Palmerston", icon: "wind" },
      { value: "Region A", label: "Alice Springs", icon: "sun" },
      { value: "IP67+", label: "Sealed connectors", icon: "shield" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `Every November, the same feeling creeps back in. The clouds build up over the harbour, the humidity climbs, and somewhere on the news there's a cyclone watch for the Top End. If you've got solar panels on your roof, there's a second thought that follows close behind: will they hold?

You're not being paranoid. You spent real money on that system. A cyclone warning while you're staring up at a roof full of glass and aluminium is a fair thing to worry about. This guide walks you through what actually protects solar panels in Darwin, Palmerston and Alice Springs, what to do before, during and after a storm, and why the install itself matters more than the panel brand on the box.

## Are Solar Panels Built to Survive a Cyclone?

Yes, a properly rated system is built to take a serious beating. Solar panels sold in Australia go through wind load and hail impact testing before they're allowed on the market. The glass is tempered, not standard glass, and the frames are aluminium for strength without adding weight to your roof.

That said, "solar panels are tough" isn't the whole story. A panel rated to survive 200km/h winds in a lab test still fails on your roof if the racking underneath it isn't rated for your wind zone, or if it wasn't bolted down properly in the first place. The panel is only as strong as what it's screwed into.`,
      },
      {
        type: "quote",
        text: "The panel is only as strong as what it's screwed into.",
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "A panel can pass a lab wind test and still fail if the racking is not rated for your wind zone.",
          "Darwin and Palmerston sit in Wind Region C. Alice Springs sits in Wind Region A.",
          "Debris, wind uplift, flooding and lightning are the usual failure points, not just wind on the glass.",
          "Prep before the warning: secure loose items, know isolation, charge the battery, confirm cyclone-rated racking.",
          "After the storm, inspect from the ground and call a licensed electrician. Do not reconnect it yourself.",
        ],
      },
      {
        type: "stats",
        items: [
          { value: "Region C", label: "Darwin and Palmerston under AS/NZS 1170.2, the cyclonic northern coastline zone.", icon: "wind" },
          { value: "Region A", label: "Alice Springs is non-cyclonic. Heat, UV and dust are the bigger threats there.", icon: "sun" },
          { value: "IP67 / IP68", label: "Sealed connectors and junction boxes that keep wet-season moisture out of the wiring.", icon: "shield" },
        ],
      },
      {
        type: "figure",
        src: "/assets/images/hosted/bayview-0820.webp",
        alt: "Residential solar panels installed on a Darwin rooftop",
      },
      {
        type: "markdown",
        markdown: `## Wind Regions: Why Darwin and Palmerston Aren't the Same as Alice Springs

This is the bit most solar guides skip, and it matters a lot if you live in the NT.

Darwin and Palmerston sit in Wind Region C under AS/NZS 1170.2, the cyclonic zone that covers Australia's northern coastline. Racking, brackets and fixings here need to be engineered to handle sustained cyclonic loads, not just everyday coastal gusts. If your installer quoted you a standard mounting system without mentioning wind region compliance, that's worth asking about.

Alice Springs is a different story. It sits in Wind Region A, which is non-cyclonic. Your panels there aren't fighting cyclones, they're fighting extreme heat, UV degradation and the odd dust storm. A system built for Alice Springs conditions doesn't need cyclone-grade racking, but it does need components that can handle months of 40 plus degree days without the mounting hardware warping or the wiring perishing.

If you're comparing quotes, make sure whoever you're talking to actually understands this difference. A generic "solar package" pitched the same way for Darwin and Alice Springs is a red flag.`,
      },
      {
        type: "compare",
        left: {
          title: "Darwin and Palmerston",
          subtitle: "Wind Region C",
          items: [
            "Cyclonic zone under AS/NZS 1170.2 covering Australia's northern coastline.",
            "Racking, brackets and fixings need to handle sustained cyclonic loads.",
            "A standard mounting system with no wind region mention is worth questioning.",
            "Humidity and wet-season moisture sit on top of the wind load.",
          ],
        },
        right: {
          title: "Alice Springs",
          subtitle: "Wind Region A",
          items: [
            "Non-cyclonic. Panels are not fighting cyclones.",
            "The real fight is extreme heat, UV degradation and the odd dust storm.",
            "Cyclone-grade racking is not the requirement here.",
            "Hardware still has to handle months of 40 plus degree days without warping or wiring perishing.",
          ],
        },
      },
      {
        type: "cta",
        cta: {
          heading: "Want a system built for your exact location and roof type?",
          body: "Our residential solar systems are designed and installed to match Darwin, Palmerston and Alice Springs conditions, not a one-size-fits-all national spec.",
          buttonLabel: "View Residential Solar Systems",
          buttonHref: "/solar-systems/residential-solar-system",
        },
      },
      {
        type: "figure",
        src: "/assets/images/hosted/alice-springs-0870-1-.webp",
        alt: "Solar installation in Alice Springs NT",
      },
      {
        type: "markdown",
        markdown: `## What Actually Damages Panels in a Storm

It's rarely the wind alone that cracks a panel. It's usually one of these:

- **Flying debris.** Loose furniture, tree branches, tools left on the roof or in the yard become projectiles in a cyclone.
- **Wind uplift.** Panels installed too close to the roof edge, or on racking that wasn't torqued down properly, can lift and tear away.
- **Hail.** Large hailstones above 25mm can crack tempered glass, though this is a bigger risk further south than in the Top End.
- **Flooding.** Your panels might survive fine while your inverter or switchboard cops water damage instead.
- **Lightning surges.** A nearby strike can fry an inverter or monitoring system even without touching the panels directly.

Splitting these out matters because "protecting your solar system" isn't just about the panels on the roof. Half the real risk sits in the electrical components underneath them.

## Before the Cyclone: Your Prep Checklist

Do this well before the storm hits, not the night before.

1. Secure loose items around the property. Outdoor furniture, garden tools, trampolines, anything that could become airborne and hit your panels.
2. Trim overhanging branches that could snap and land on the array.
3. Know your isolation procedure. Every inverter has a shutdown process, usually printed on a label at the inverter or main switchboard. Read it now, not during a cyclone warning.
4. Charge your battery fully and test the blackout function, so it's ready to carry your essentials if the grid goes down.
5. Get your mounting checked if you've never had it inspected, especially on an older system that predates recent wind region updates.
6. Confirm you've got cyclone-rated racking. Not all racking sold in Australia is built for Wind Region C. Ask your installer for the racking's actual wind rating, not just a general "it's strong" answer.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/bellamack-0832-2-1-.webp",
        alt: "Cyclone-rated solar mounting on a Darwin rooftop",
      },
      {
        type: "markdown",
        markdown: `## Humidity and Corrosion: The Slower Threat Nobody Warns You About

A cyclone isn't the only thing coming for your solar system. Humidity is slower, but it's working on your system every single day of the wet season, not just during a named storm.

### Sealed Connectors and Junction Boxes

Look for IP67 or IP68 rated connectors and junction boxes on any system you're buying. That IP rating just tells you how well sealed a component is against dust and water. IP67 means it can handle being dunked in shallow water briefly, IP68 goes further. In Darwin's wet season, that seal is what stops moisture creeping into your wiring and slowly corroding the connections long before a cyclone ever shows up.

### Cable Conduit and Termite Protection

This one's specific to the NT and it rarely gets a mention. Cable runs from your roof down to the switchboard need proper conduit, and in the Top End that conduit needs to hold up against termites as much as moisture. Termites will chew through unprotected cable sheathing if it's run through or near timber, and a damaged cable is a fire and safety risk long before it's a performance one. Ask your installer what conduit they're using and whether it's rated for termite-prone areas, not just weatherproof.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Got a battery, or thinking about adding one before storm season?",
          body: "Don't sit in the dark waiting for the grid to come back on.",
          buttonLabel: "Explore Solar Battery Installation",
          buttonHref: "/services/solar-battery-installation",
          phoneLine: "or call our local Darwin team today at 0483 986 444.",
        },
      },
      {
        type: "figure",
        src: "/assets/images/hosted/products/sigen-battery.webp",
        alt: "Home battery storage for storm season backup in Darwin",
      },
      {
        type: "markdown",
        markdown: `## During the Cyclone: What to Do (and Not Do)

Stay away from the roof, full stop. Don't climb up to check on anything, no matter how tempting it is to see if a panel has shifted.

Don't assume your system is safe just because the power company has cut your connection. Solar panels keep generating electricity in daylight even when the grid is down, so treat the wiring as live at all times.

If you're forced onto the roof for an unrelated emergency, stay well clear of the panels and any exposed wiring. Monitor your battery level and cut back on non-essential power use to stretch what you've got.

## After the Cyclone: Inspecting and Recommissioning Safely

Check your system from the ground first. Look for panels that have shifted, cracked glass, loose or hanging wiring, and any flooding around the inverter or switchboard.

Don't touch switches or try to reconnect anything yourself, even if everything looks dry. Storms leave moisture in places you can't see, and a system that looks fine from the ground can still have internal damage. This is a job for a licensed electrical contractor, ideally one who installed your system or knows NT wind-region requirements.

Take photos of anything that looks off before you call anyone. Insurers ask for this, and it speeds up any claim considerably.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Not sure if your current setup is cyclone ready, or storm season caught you without cover?",
          body: "We'll walk you through what a properly wind-rated system looks like for your roof.",
          buttonLabel: "Get a Solar Quote",
          buttonHref: "/contact",
        },
      },
      {
        type: "figure",
        src: "/assets/images/hosted/about-team.webp",
        alt: "Oneroof Solar Darwin installation team",
      },
      {
        type: "markdown",
        markdown: `## Choosing an Installer Who Actually Understands Top End Weather

This is where a lot of NT homeowners get burned. A cheap quote from a fly-in installer might look tempting, but if they're not local and not across wind region requirements, you're the one left holding a warranty that's worth nothing when the company's gone.

Look for an installer who is SAA accredited (Solar Accreditation Australia now handles this, not the old Clean Energy Council accreditation many sites still reference), who can explain your wind region rating without googling it in front of you, and who's still going to be around next cyclone season if you need a repair or inspection.

Also check what you're eligible for. Most NT solar buyers currently qualify for the STC (Small-scale Technology Certificate) rebate, and eligible battery installs may also get a discount through the Cheaper Home Batteries Program. Ask your installer to walk you through what applies to your system rather than assuming a flat rebate figure.

## Bringing It Back to Your Roof

Protecting your solar panels from a Darwin cyclone or a Top End storm season isn't really about the panels themselves, it's about everything holding them up and feeding power away from them.

A tempered glass panel bolted to Wind Region C racking by an SAA accredited local installer will ride out a cyclone that would tear apart the same panel on a bargain mounting kit. That's the whole equation: the right panel, on the right rating, for the right part of the NT, installed by someone who'll still take your call after the storm passes.

If you're in Darwin, Palmerston or Alice Springs and you want to know exactly where your current system, or your next one, stands against that standard, that's a conversation worth having before the next cyclone watch goes up, not during it.`,
      },
    ],
  },
  {
    slug: "solar-worth-it-darwin-cost-savings",
    title: "Is Solar Worth It in Darwin? Full Cost & Savings Breakdown",
    excerpt:
      "With year-round sunshine, Darwin has strong solar potential, but the payback depends on your usage, system size and install price. Here is the full cost and savings breakdown.",
    date: "14 October 2026",
    dateIso: "2026-10-14",
    category: "Guides",
    readTime: "7 min read",
    image: "/assets/images/hosted/bayview-0820.webp",
    imageAlt: "Residential solar system installed on a Darwin rooftop",
    author: "Oneroof Solar",
    seoTitle: "Is Solar Worth It in Darwin? Cost & Savings Breakdown",
    seoDescription:
      "Find out if solar is worth it in Darwin. Explore installation costs, potential savings, payback periods, rebates and NT climate considerations.",
    canonicalPath: "/blog/solar-worth-it-darwin-cost-savings/",
    heroStats: [
      { value: "31.68c", label: "Jacana usage rate / kWh", icon: "zap" },
      { value: "9.33c", label: "Feed-in tariff / kWh", icon: "sun" },
      { value: "~5 yrs", label: "Example payback period", icon: "battery" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `With plenty of sunshine throughout the year, Darwin offers good potential for rooftop solar. However, installing a solar system is a significant investment, and homeowners naturally want to know whether the savings will justify the cost.

The answer depends on your electricity usage, system size, installation price and how much solar power you use during the day. Darwin's tropical climate and seasonal weather also make choosing the right installation important.

## How Much Does Solar Installation Cost in Darwin?

The cost of solar installation in Darwin depends on your system size, panel and inverter quality, roof design, installation requirements and whether you include a battery.

Your quote should clearly show:

- Solar panels, inverter and mounting equipment
- Installation and any additional electrical work
- Applicable incentives and the final price
- Optional battery storage and its installation cost

Compare quotes based on equipment quality, warranties and installation standards, not just the lowest price.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Stop overpaying for electricity in Darwin's heat.",
          body: "Request a quick, site-specific estimate to discover your exact payback timeframe.",
          buttonLabel: "Calculate Your Savings with OneRoof Solar",
          buttonHref: "/contact",
        },
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "Your savings come mainly from using your own solar power instead of buying it from the grid.",
          "Jacana's 2026-27 rates: 31.6788c/kWh usage and 9.33c/kWh feed-in. Your tariff may differ.",
          "An illustrative system could return around $1,364 of value a year, used and exported combined.",
          "A $6,000 net system saving $1,200 a year pays back in roughly five years.",
          "Get a personalised estimate rather than relying on generic savings claims.",
        ],
      },
      {
        type: "markdown",
        markdown: `## How Much Can You Save with Solar Panels?

Your savings mainly come from using the electricity your panels generate instead of buying it from your retailer. Any eligible electricity exported to the grid may also earn feed-in credits.

Jacana Energy's published residential rates for 1 July 2026 to 30 June 2027 list a standard usage rate of 31.6788 cents per kWh and a standard Anytime feed-in tariff of 9.33 cents per kWh. Your actual rates may differ depending on your tariff and retailer.

### Example of Potential Annual Solar Savings

As an illustration, if 3,600 kWh of solar electricity replaces grid power at 31.6788 cents, that is about **$1,140** a year. Add 2,400 kWh exported at 9.33 cents, worth about **$224**, and the total estimated annual value lands near **$1,364**.

This is an illustrative calculation, not a guaranteed savings forecast. Actual results depend on solar production, household consumption, tariffs and system performance. The best way to improve savings is often to run appliances such as washing machines and dishwashers during sunny hours, when your system is generating electricity.`,
      },
      {
        type: "stats",
        items: [
          { value: "$1,140", label: "Est. value of 3,600 kWh used at home at 31.68c/kWh.", icon: "zap" },
          { value: "$224", label: "Est. feed-in credit for 2,400 kWh exported at 9.33c/kWh.", icon: "sun" },
          { value: "$1,364", label: "Total illustrative annual value, not a guaranteed forecast.", icon: "battery" },
        ],
      },
      {
        type: "figure",
        src: "/assets/images/hosted/berrimah-0828.webp",
        alt: "Solar installation sized for a Darwin household's energy use",
      },
      {
        type: "markdown",
        markdown: `## What Is the Solar Panel Payback Period?

The payback period is the time it takes for your accumulated electricity savings to cover the net cost of your solar system.

For example, if a system costs $6,000 after applicable incentives and delivers $1,200 in annual savings, the simple payback period would be approximately five years.

This is only an example. Actual payback can be longer or shorter depending on your final installation price, energy usage, electricity rates and system performance. Maintenance costs and future tariff changes can also affect the result.

## Are Solar Batteries Worth It in Darwin?

A solar battery stores excess daytime electricity for use at night or when your panels are not generating enough power.

A battery may be useful if your household uses substantial electricity after sunset or wants more control over when it uses stored solar energy. However, it adds to the initial investment, so its financial value depends on your usage pattern, battery price and available incentives.

Compare the cost of solar alone with a solar-and-battery package before deciding. You may prefer to install solar first and consider a [battery](/services/solar-battery-installation) later.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Keep your AC running through the night without grid anxiety.",
          body: "Talk to our Darwin battery specialists to see if adding storage makes financial sense for you.",
          buttonLabel: "Explore Battery & Solar Packages",
          buttonHref: "/services/solar-battery-installation",
        },
      },
      {
        type: "figure",
        src: "/assets/images/hosted/products/sigen-battery.webp",
        alt: "Home battery storage for a Darwin solar system",
      },
      {
        type: "markdown",
        markdown: `## Can Darwin's Climate Affect Solar Performance?

Darwin's strong sunshine can support solar generation, but tropical conditions require careful system design and installation.

Consider these local factors:

- **Cyclones and strong winds:** Suitable mounting equipment and installation practices are important for the site's wind conditions.
- **Heavy rain and humidity:** Quality components, suitable enclosures and properly installed electrical connections help protect the system.
- **Heat:** Solar panels can become less efficient as temperatures rise, so equipment selection and system design matter.
- **Roof condition:** Your roof should be assessed for suitability before installation.

Solar panels do not eliminate weather-related risks. Choosing appropriate equipment and an experienced installer can help protect your investment.

## Solar Rebates and Incentives in Darwin

Eligible solar installations may qualify for an upfront discount through Australia's Small-scale Renewable Energy Scheme. This is commonly arranged through an installer or registered agent in exchange for the right to claim Small-scale Technology Certificates (STCs). The benefit depends on eligibility and installation details.

Battery incentives have separate rules and can change over time. Ask your installer to confirm which incentives apply to your installation and show them clearly in your written quote. Check the Clean Energy Regulator's official STC guidance for details.

## Is Solar Worth It for Your Darwin Home?

Solar may be a worthwhile investment if your home uses a good amount of electricity during daylight hours, your roof is suitable and the installation cost is reasonable.

Before making a decision, consider your recent electricity bills, daytime energy use, expected system output, feed-in tariff and the net installation price. Ask for a personalised estimate rather than relying on generic savings claims.`,
      },
      {
        type: "quote",
        text: "A well-designed system that matches your household's energy use is more valuable than simply choosing the largest or cheapest option.",
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "Is solar worth it in Darwin, NT?", a: "Solar can be worthwhile in Darwin because of its strong sunshine and potential to reduce electricity purchases. Your savings depend on your household's daytime electricity use, system cost and applicable electricity rates." },
          { q: "How much can you save with solar panels in Darwin?", a: "Your savings depend on how much solar electricity you use at home and how much excess power you export. Reviewing your electricity bills and getting a system-specific estimate can help you understand your potential savings." },
          { q: "How long does it take for solar panels to pay for themselves?", a: "The payback period depends on the installation cost after applicable incentives and the annual savings your system generates. A lower upfront cost and greater use of solar electricity at home can help shorten the payback period." },
          { q: "Are solar batteries worth the extra cost in Darwin?", a: "A solar battery may be worthwhile if you use a lot of electricity at night or want to use more of your own solar power. However, the additional cost means you should compare the expected savings with the battery's price and applicable incentives." },
          { q: "Do solar panels work well during Darwin's wet season?", a: "Yes, solar panels can still generate electricity during Darwin's wet season, but cloudy weather and heavy rain can reduce production compared with sunny conditions. A properly designed system should account for seasonal changes in solar generation." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Ready to Cut Your Jacana Power Bills?",
          body: "Don't rely on generic estimates. Get a personalised solar design and accurate return-on-investment breakdown tailored to Darwin's tropical conditions.",
          buttonLabel: "Request Your Custom Solar Proposal",
          buttonHref: "/contact",
          phoneLine: "or call OneRoof Solar on 0483 986 444.",
        },
      },
    ],
  },
  {
    slug: "solar-panel-cost-darwin-alice-springs",
    title: "Average Solar Panel Cost in Darwin & Alice Springs (2026 Price Guide)",
    excerpt:
      "What really drives the price of a solar system in the NT, how to compare 6.6kW and 10kW options, what the 20% rule means and which panel specs matter for 2026.",
    date: "13 October 2026",
    dateIso: "2026-10-13",
    category: "Guides",
    readTime: "9 min read",
    image: "/assets/images/hosted/berrimah-0828.webp",
    imageAlt: "Solar panels installed on a Northern Territory rooftop",
    author: "Oneroof Solar",
    seoTitle: "Solar Panel Cost in Darwin & Alice Springs | 2026 Guide",
    seoDescription:
      "Explore solar installation costs in Darwin and Alice Springs, compare system sizes, understand rebates and find the right solar solution for your home.",
    canonicalPath: "/blog/solar-panel-cost-darwin-alice-springs/",
    heroStats: [
      { value: "6.6kW", label: "Moderate-use homes", icon: "sun" },
      { value: "10kW", label: "Larger or high-demand homes", icon: "zap" },
      { value: "STCs", label: "Upfront rebate discount", icon: "shield" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `Thinking about installing solar panels at your home in the Northern Territory? With abundant sunshine throughout much of the year, solar power can help households generate their own electricity and reduce reliance on grid power. However, the cost of installation and the savings you achieve depend on your property, electricity consumption and system design.

The solar panel cost for your home depends on several factors, including system capacity, panel efficiency, inverter technology, roof conditions and installation requirements. Darwin homeowners may also need mounting systems designed for local wind conditions, while Alice Springs installations require a design suited to the property's roof, electrical setup and energy needs.

This guide explains the main factors affecting installation prices, how to compare solar systems, which incentives may be available and what to consider before requesting a quote.

## How Much Do Solar Panels Cost in Darwin, NT?

There is no single price that applies to every home in Darwin. The total cost depends on the size of the system, the equipment selected and the work required to install it safely.

For example, a household with moderate electricity consumption may consider a 6.6kW solar system, while a larger home with higher daytime energy use may need a 10kW system or another suitable configuration. These are starting points for discussion, not recommendations for every property.

Several factors can affect your quote:

- **System capacity:** Larger systems generally require more panels and may need a different inverter configuration.
- **Panel quality:** Efficiency, temperature performance, degradation rate and warranty coverage influence long-term value.
- **Roof and mounting requirements:** Roof material, pitch, access and structural considerations affect installation complexity.
- **Electrical work:** Switchboard upgrades, cable runs and three-phase connections may add to the total.
- **Available incentives:** Eligible installations may receive applicable government incentives that reduce the upfront amount payable.

Darwin's weather conditions also make appropriate mounting and compliance important. Ask your installer how the proposed system accounts for local wind-loading requirements and whether any additional work is needed. For an accurate estimate, request a property-specific quote that clearly lists the equipment, installation work, warranties and applicable discounts.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Want exact pricing for your Darwin roof?",
          body: "Avoid generic national averages. Get a site-specific, zero-obligation quote tailored to local cyclonic wind standards and your household's actual power bills.",
          buttonLabel: "Request Your Custom Darwin Solar Quote",
          buttonHref: "/contact",
        },
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "No single price fits every home. Capacity, equipment and install work all move the number.",
          "A 6.6kW system suits moderate use. A 10kW system suits larger or higher-demand homes.",
          "A bigger system is not automatically more economical. Match it to your daytime use.",
          "The '20% rule' is not one universal rule. Size the system around your real consumption.",
          "Compare like-for-like quotes with the same capacity, equipment and scope, GST and rebates included.",
        ],
      },
      {
        type: "markdown",
        markdown: `## What Is the Average Cost of Solar Panels in Australia?

The cost of solar panels across Australia varies according to system size, equipment quality, installer rates and location. National price guides can provide a useful starting point, but they should not be treated as guaranteed prices for Darwin or Alice Springs.

When researching the cost of solar panels Australia-wide, compare systems of similar capacity and specifications. A low advertised price may exclude additional electrical work, premium equipment or other installation requirements.

It is also important to distinguish between the cost of the panels themselves and the total installed price. A complete installation can include:

- Solar panels and mounting hardware
- An inverter to convert generated electricity into usable AC power
- Installation labour and electrical connections
- System configuration, testing and commissioning
- Applicable documentation and network connection arrangements

Ask whether the quoted amount includes GST and any eligible solar incentive. This helps you compare like-for-like offers rather than choosing a system based on its advertised starting price.

## How Much Does a 6.6kW or 10kW Solar System Cost?

System size is one of the most important factors when estimating a home's solar investment. The right capacity depends on how much electricity you use, when you use it and how much suitable roof space is available.

### 6.6kW Solar System

A 6.6kW system may suit a household with moderate electricity consumption. It can be worth considering for homes that use air conditioning, refrigeration, lighting and other everyday appliances.

When comparing the 6.6kW solar system cost, check the panel specifications, inverter capacity, mounting system and installation inclusions. Also ask for an estimate of annual electricity generation based on your location, roof orientation and shading.

### 10kW Solar System

A 10kW system may be suitable for a larger household or a property with higher electricity demand. Homes with several air conditioners, a swimming pool, an electric vehicle or plans to add more electrical appliances may benefit from considering a larger system.

However, a bigger system is not automatically more economical. Your installer should assess your daytime consumption, available roof space and electricity-network export limits before recommending a configuration. You can also explore [solar battery options](/products/solar-battery-brands/) to see whether storing excess electricity would suit your household.`,
      },
      {
        type: "compare",
        left: {
          title: "6.6kW system",
          subtitle: "Moderate electricity use",
          items: [
            "Suits homes running air conditioning, refrigeration, lighting and everyday appliances.",
            "Check panel specs, inverter capacity, mounting and installation inclusions.",
            "Ask for an annual generation estimate based on your roof orientation and shading.",
            "A common starting point for discussion, not a recommendation for every home.",
          ],
        },
        right: {
          title: "10kW system",
          subtitle: "Larger or high-demand homes",
          items: [
            "Suits several air conditioners, a pool, an EV or plans to add more appliances.",
            "Bigger is not automatically more economical for every household.",
            "Daytime use, roof space and network export limits should be assessed first.",
            "Pairs well with battery storage where the configuration allows it.",
          ],
        },
      },
      {
        type: "figure",
        src: "/assets/images/hosted/bayview-0820.webp",
        alt: "6.6kW residential solar system on a Darwin roof",
      },
      {
        type: "markdown",
        markdown: `## What Affects Solar Panel Installation Cost in Alice Springs?

The same basic pricing factors apply in Alice Springs, but the final design must reflect the individual property and its electricity requirements.

- **Roof space and orientation:** The available area, direction of the roof and shading from trees or nearby buildings affect how panels can be positioned.
- **Panel efficiency:** Higher-efficiency panels may generate more power from a limited roof area, although their upfront price may be higher.
- **Inverter selection:** The inverter must be compatible with the panel array and suitable for the proposed system. A hybrid inverter may support battery integration where the equipment and configuration allow it.
- **Installation complexity:** Roof access, mounting requirements, cable lengths and electrical upgrades can influence labour and material costs.
- **Battery storage:** Adding a battery increases the upfront investment. Whether it offers good value depends on your evening electricity use, tariff structure, export payments and available incentives.

To compare solar panel prices Australia-wide with a local [Alice Springs quote](/solar-alice-springs/), make sure both offers cover the same system capacity, equipment quality and installation work.

## What Is the 20% Rule for Solar?

The phrase "20% rule for solar" can refer to different concepts, so it should not be treated as one universal Australian regulation.

In some discussions, it is used as a planning guideline suggesting that a solar system's expected generation should provide a margin above estimated electricity consumption. However, there is no single 20% buffer that is appropriate for every household.

The phrase may also be confused with panel-to-inverter sizing or electrical connection limits. These are separate technical considerations, and the applicable requirements depend on the system design and relevant standards.

Rather than relying on a fixed percentage, ask your installer to assess your electricity bills, expected daytime usage, roof conditions and likely solar generation. This helps determine an appropriate system size without paying for unnecessary capacity.

## What Are the Best Solar Panels for 2026?

The best solar panels for your home are not necessarily the most expensive or the most widely advertised. A suitable choice balances performance, durability, warranty support and total installed price.

Compare the following attributes when evaluating solar panels:

- **Efficiency:** Indicates how effectively a panel converts available sunlight into electricity.
- **Temperature coefficient:** Helps explain how the panel's output changes as its operating temperature rises.
- **Degradation rate:** Shows how much performance the manufacturer expects the panel to lose over time.
- **Product warranty:** Covers specified product defects under the manufacturer's terms.
- **Performance warranty:** Sets out the manufacturer's guaranteed output level over a stated period.
- **Installer and manufacturer support:** Reliable after-sales support matters if equipment needs inspection or replacement.

Brands such as Aiko, Jinko, REC and Trina Solar are among the names buyers may encounter when comparing contemporary solar equipment. Brand reputation alone, however, is not enough to establish which product is best for a particular property. For Darwin and Alice Springs, equipment selection should also consider operating conditions, compatible inverters, mounting requirements and the support available for the complete system. You can compare the [solar panel brands](/product/solar-panels-brands) we install across the NT.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Unsure which panel brand handles NT heat best?",
          body: "Compare tier-1 panel efficiency, warranty coverage and inverter options with our local installation team.",
          buttonLabel: "Speak to an NT Solar Specialist",
          buttonHref: "/contact",
        },
      },
      {
        type: "figure",
        src: "/assets/images/hosted/products/jinko.webp",
        alt: "High-efficiency solar panel suited to NT conditions",
      },
      {
        type: "markdown",
        markdown: `## Can Solar Rebates Reduce Your Upfront Cost?

Eligible solar installations may qualify for discounts through Australia's Small-scale Renewable Energy Scheme (SRES), with STCs reducing the upfront cost. Eligible battery installations may also receive support through the Cheaper Home Batteries Program.

Incentives depend on current eligibility rules and installation details. Ask OneRoof Solar to explain which discounts may apply to your system.

## How Can You Get Better Value From Your Solar Installation?

To get the best value from your solar investment, compare complete installation quotes rather than choosing the lowest price. Before making a decision, check these key points:

- **System size:** Choose a system that matches your household's electricity use.
- **Energy generation:** Ask for an estimate of annual solar output.
- **Equipment quality:** Compare panel efficiency and inverter specifications.
- **Installation costs:** Check mounting hardware and any additional electrical work.
- **Warranties:** Review product and installation coverage.
- **Rebates:** Confirm applicable incentives and the final price after discounts.
- **Future needs:** Consider whether you may add a battery or electric vehicle.

Compare these details before choosing a solar system for your home in Darwin or Alice Springs.`,
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "How much do solar panels cost in Darwin, NT?", a: "The price depends on system capacity, panel and inverter specifications, roof conditions, installation complexity and applicable incentives. A property-specific quote is the most reliable way to determine your actual upfront cost." },
          { q: "What is the average cost of solar panels in Australia?", a: "Australian prices vary by system size, equipment quality and installation requirements. National price guides are useful for initial comparisons, but local quotes provide a more accurate estimate for your property." },
          { q: "What is the 20% rule for solar?", a: "The term has several interpretations and is not one universal Australian solar-sizing rule. Your installer should calculate the appropriate system size using your electricity consumption, expected generation and applicable technical requirements." },
          { q: "What are the best solar panels for 2026?", a: "The best choice depends on efficiency, temperature performance, degradation, warranties, price and installer support. Compare the complete system rather than choosing on brand name alone." },
          { q: "Is solar worth installing in Alice Springs?", a: "Solar may be worthwhile depending on your electricity use, system price, daytime consumption and available incentives. Ask for an estimate of generation, likely savings and payback based on your property's conditions." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Upgrade Your Darwin or Alice Springs Home Today",
          body: "Partner with trusted local experts who design high-efficiency solar systems built for extreme heat and local energy tariffs.",
          buttonLabel: "Claim Your Free Quote & Savings Breakdown",
          buttonHref: "/contact",
          phoneLine: "or speak with a local expert at 0483 986 444.",
        },
      },
    ],
  },
  {
    slug: "do-solar-panels-work-during-darwin-wet-season",
    title: "Do Solar Panels Work on Cloudy Days in Darwin's Wet Season?",
    excerpt:
      "Output drops under heavy cloud, but it never stops. Here is what really happens to your system from November to April, and how to make it work harder when the clouds roll in.",
    date: "12 October 2026",
    dateIso: "2026-10-12",
    category: "Guides",
    readTime: "8 min read",
    image: "/assets/images/hosted/aerial.webp",
    imageAlt: "Solar panels on a Darwin rooftop under wet-season cloud",
    author: "Oneroof Solar",
    seoTitle: "Solar Panels in Darwin's Wet Season: Do They Still Work?",
    seoDescription:
      "Wondering how solar panels cope with Darwin's wet season? Learn real output on cloudy and rainy days, storm tips and battery fixes. Get a free quote.",
    canonicalPath: "/blog/do-solar-panels-work-during-darwin-wet-season/",
    heroStats: [
      { value: "10 to 25%", label: "Heavy overcast output", icon: "cloud" },
      { value: "Nov to Apr", label: "Top End wet season", icon: "wind" },
      { value: "Battery", label: "Smooths out the lows", icon: "battery" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `It's 3 pm in February. The sky has turned the colour of wet slate, the air is thick enough to swim through, and your air conditioner is working overtime. Then the thought hits: "I'm paying for solar, but is it doing anything right now?"

Short answer: yes. Do solar panels work on cloudy days? They do. Output drops, but it doesn't disappear. The longer answer is where it gets useful, because the Top End's wet season behaves differently from the cloudy winters you read about in most solar guides. This guide breaks down what really happens to your system from November to April, and how to make solar power Darwin homes rely on work harder when the clouds roll in.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Is Your Roof Wasting Money Every Time It Rains?",
          body: "Stop guessing how much power you're losing under heavy cloud cover. Let our local Top End team show you how much power your roof will generate during monsoon spells before you spend a single cent.",
          buttonLabel: "Claim Your Custom Darwin Solar Assessment",
          buttonHref: "/contact",
        },
      },
      {
        type: "markdown",
        markdown: `## What Actually Happens to Solar Panels in Cloudy Weather?

Panels don't need a blazing blue sky. They convert light, not heat, and clouds only block part of it. Even under thick cover, a lot of sunlight gets scattered through (this is called diffuse light), and your panels keep turning it into electricity.

How much? It depends on the sky:

- **Thin or patchy cloud:** output is often still a healthy share of normal, sometimes surprisingly close to a clear day.
- **Heavy, grey overcast:** many installers quote roughly 10% to 25% of normal output.
- **Monsoon downpours:** expect the low end of that range while the heaviest rain lasts.

That means solar panels in cloudy weather are never "off", just dimmed. And in Darwin, dimming rarely lasts all day. The wet season here tends to follow a rhythm: bright, humid mornings, storm build-up in the afternoon, then clearing. Your panels bank the morning sun, then coast through the storm.

True multi-day monsoon lows do happen, and they're the main reason system design matters. More on that shortly.`,
      },
      {
        type: "quote",
        text: "Solar panels in cloudy weather are never \"off\", just dimmed. And in Darwin, dimming rarely lasts all day.",
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "Panels run on light, not heat, so they keep generating through cloud and rain.",
          "Heavy overcast usually means about 10 to 25% of clear-sky output, not zero.",
          "Darwin's rhythm is bright mornings, storm afternoons, then clearing. Banks the morning sun.",
          "Multi-day monsoon lows are the real test, so size for the heavy spell, not the average.",
          "A battery is the single biggest upgrade for cloudy weather and storm outages.",
        ],
      },
      {
        type: "markdown",
        markdown: `## Will a Solar Panel Still Work in the Rain?

Yes. Rain doesn't switch a system off, and it doesn't damage one that's installed properly.

Panels are sealed, toughened glass units built to sit outside for 25 years or more. They're tested for water, humidity, wind and hail. The wiring is weatherproofed, and the inverter is designed with ingress protection for tropical conditions.

There's even an upside. Dry-season dust, red dirt and salt haze build up on glass and quietly cut output. A good downpour washes much of it off, so your panels often perform better on the first sunny day after a storm.

If your system develops a fault after severe weather or produces less electricity than expected, professional [solar panel repair in Darwin](/services/solar-panel-repair-darwin) can help identify the problem.

Two practical notes for solar panels in rainy season conditions:

1. Installation quality matters more than the weather. Poor flashings and rushed mounting can cause leaks and faults. Choose an accredited installer experienced in Top End conditions and professional [solar panel installation](/solar-panels-darwin).
2. Cyclone season overlaps the wet. Mounting hardware should suit your wind region, and your insurer should know about your system.

## Which Temperature Is Best for Solar Panels?

Here's a twist most Darwin homeowners don't expect: panels like it cool.

Panel ratings are measured at a cell temperature of 25°C. As cells get hotter, efficiency slips. For typical silicon panels, that's a loss of a few tenths of a percent for every degree above 25°C. On a Darwin roof in full sun, panel surfaces can run far hotter than the air around them.

So a bright 34°C day isn't a perfect day for your system. The best conditions are clear, cool and breezy. A cloud that blocks some sun but also cools the glass trims production less than you'd think, and a passing shower can briefly lift efficiency. That's why quality panels and good airflow behind the array are worth paying for in the tropics.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/bayview-0820.webp",
        alt: "Solar panels generating through light wet-season cloud in Darwin",
      },
      {
        type: "markdown",
        markdown: `## How Much Power Can You Expect When the Sky Turns Grey?

Forget chasing one magic number. Think in three sky types, because that's how a Darwin wet season really plays out:

- **Bright, humid mornings:** output close to normal. Your panels do the heavy lifting here, so it's the best window for the pool pump and for charging a battery.
- **Storm afternoons:** a sharp dip for an hour or two, then a quick recovery as the cloud clears.
- **Multi-day monsoon spells:** the real test. Output stays low for days while the air conditioning keeps running.

The takeaway: size your system for the heavy spell, not the sunny-day average. A slightly larger array, or one paired with a battery, keeps your bills steady when the weather turns.

## Does the Wet Season Hurt Your Savings?

Yes, a little, but not as much as people fear.

Your daily generation dips during heavy monsoon spells. At the same time, your usage climbs, because humid weather means air conditioning runs longer and harder. That squeeze, lower solar plus higher demand, is the real wet season challenge.

Over the full year, though, Darwin still has serious solar potential. The dry season's long, clear days make up for the wetter months, and a well-designed system is built around the annual picture, not the worst week of February.

## 5 Smart Ways to Keep Your Power Flowing All Wet Season

1. **Get the system size right.** Ask your installer to model your wet season output specifically, not just the yearly average. Bring your summer bills along.
2. **Add a battery.** This is the single biggest upgrade for cloudy weather. A battery stores surplus energy from bright mornings and sunny days, then covers your evening air conditioning and any storm-related outages. If you're considering it, our [solar battery installation](/services/solar-battery-installation) service is built around Darwin's usage patterns.
3. **Plan the layout.** Optimisers stop one shaded panel dragging the rest down, which keeps production smoother in patchy conditions.
4. **Use the smart extras.** Schedule pool pumps, hot water and dishwashers for the brighter morning window. If you drive electric, charging in the morning sun rather than overnight can cut costs. We install [EV chargers](/services/ev-chargers/installation) for homes and businesses too.
5. **Earn from your battery.** In the NT, some batteries can join virtual power plants, which pay you for sharing stored energy with the grid during peak demand. Storm season, when the grid is under pressure, is exactly when that pays off.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Is Your Solar Ready for Darwin's Wet Season, or Will It Cut Out When You Need It Most?",
          body: "Standard solar setups built for southern states often stall during multi-day Top End monsoons. Upgrade to a system engineered specifically for Darwin's heat, humidity and storm surges.",
          buttonLabel: "Get a Free System Health Check & Battery Quote",
          buttonHref: "/contact",
        },
      },
      {
        type: "figure",
        src: "/assets/images/hosted/products/sigen-battery.webp",
        alt: "Home battery storing bright-morning solar for wet-season evenings",
      },
      {
        type: "markdown",
        markdown: `## Myths Darwin Homeowners Still Believe

- **"Solar panels on cloudy days are useless."** No. Output is reduced during storms, not stopped.
- **"Rain damages panels."** No. Certified panels are tested far harder than a monsoon shower.
- **"A battery isn't worth it in a sunny city."** Cloudy stretches and storm outages are exactly where batteries earn their place.

## So, Are Solar Panels Worth It Through the Wet Season?

Absolutely. Your panels keep working through cloud, rain and storms. They just work at a lower level while the sky is heavy, and then bounce back when it clears. The Territory's wet season is a design challenge, not a deal-breaker.

What separates a system that frustrates you from one that delights you is planning: the right size, quality components, smart placement, and a battery to smooth out the lows. Get those right and solar power Darwin households depend on keeps your bills under control all year round, wet or dry.

At Oneroof Solar, we install residential and commercial solar across Darwin, Palmerston and Alice Springs. We'll show you realistic wet season numbers, not sunny-day fantasies.`,
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "Do solar panels work on cloudy days in Darwin?", a: "Yes, solar panels generate electricity on cloudy days because they can use diffused sunlight. However, output decreases when thick cloud cover blocks more sunlight, particularly during heavy wet-season storms." },
          { q: "Do solar panels work during Darwin's wet season?", a: "Yes, solar panels continue generating electricity throughout Darwin's wet season, typically from November to April. Production can fluctuate with cloud cover, rainfall and storms, so system design should account for seasonal weather conditions." },
          { q: "How much electricity do solar panels produce on rainy days?", a: "Solar panel output depends on cloud thickness, rainfall intensity, panel orientation and system size. Light cloud may cause a modest reduction, while heavy overcast conditions can significantly reduce generation. Actual output varies throughout the day." },
          { q: "Does heavy rain damage solar panels?", a: "Properly installed, certified solar panels are designed to withstand rain and normal outdoor exposure. However, severe storms and cyclones can pose risks from strong winds, flying debris and flooding, making appropriate installation and mounting essential." },
          { q: "Can a solar battery help during Darwin's wet season?", a: "Yes. A solar battery stores excess electricity generated when sunlight is available and makes it available later, such as in the evening or during periods of low solar production. Backup power during a grid outage depends on having a suitably configured system." },
          { q: "Are solar panels worth installing in Darwin despite the wet season?", a: "Yes, solar can still be worthwhile because Darwin receives substantial sunshine throughout the year. The best results depend on your electricity usage, system size, installation costs and how much solar electricity your household can use directly." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Stop Stressing Every Time the Sky Turns Grey.",
          body: "You don't have to choose between a cool house and a manageable electricity bill this wet season. Join hundreds of Territory families powering through monsoon storms with zero bill shock.",
          buttonLabel: "Lock In Your Free Quote & $0 Deposit Plan Today",
          buttonHref: "/contact",
        },
      },
    ],
  },
  {
    slug: "how-humidity-damages-solar-systems",
    title: "How Humidity Damages Solar Systems (and How We Prevent It)",
    excerpt:
      "Rain gets the blame, but moisture in the air is the slower, sneakier threat. Here is how humidity corrodes, seeps and overheats NT solar systems, and how we stop it.",
    date: "11 October 2026",
    dateIso: "2026-10-11",
    category: "Guides",
    readTime: "8 min read",
    image: "/assets/images/hosted/products/inverter-hero.webp",
    imageAlt: "Solar inverter mounted on a wall in a humid Darwin home",
    author: "Oneroof Solar",
    seoTitle: "How Humidity Damages Solar Systems & How to Stop It",
    seoDescription:
      "Humidity quietly causes solar panel corrosion, inverter faults and water damage. Learn the warning signs and how One Roof Solar protects NT systems.",
    canonicalPath: "/blog/how-humidity-damages-solar-systems/",
    heroStats: [
      { value: "85°C / 85%", label: "Industry damp heat test", icon: "shield" },
      { value: "IP67+", label: "Sealed connectors that keep moisture out", icon: "zap" },
      { value: "Yearly", label: "Service before the wet season", icon: "sun" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `Your panels look spotless and the sky is clear, yet your bill is creeping up and your inverter app shows dips you can't explain. In Darwin and across the Northern Territory, the hidden cause is often humidity.

Rain gets the blame, but moisture in the air is the slower, sneakier threat. It works its way into components, corrodes metal and stresses electronics for years before you notice. This guide explains how humidity causes solar panel damage, which solar inverter problems it triggers, and how we stop it before it costs you money.

## Why Humidity Is Tougher on Solar Than Rain

Rain is temporary and even helps rinse dust off your panels. Humidity is constant. During the wet season, relative humidity sits high for weeks, and every night temperatures drop and moisture condenses on cooler surfaces.

That daily cycle of heating, cooling and condensing is called thermal cycling. It makes materials expand and contract again and again, opening microscopic gaps where moisture can creep in.

Solar panels are tested for this. The industry's damp heat test holds modules at around 85°C and 85% humidity for 1,000 hours. Quality panels pass, but passing a lab test isn't the same as surviving 25 years of tropical conditions with poor installation, cheap cabling or no maintenance. For more on how wet-season weather affects output, see our guide on whether [solar panels work during Darwin's wet season](/blog/do-solar-panels-work-during-darwin-wet-season/).`,
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "Humidity is constant where rain is temporary, so it stresses components every day of the wet.",
          "Daily heating, cooling and condensing opens tiny gaps for moisture to creep in.",
          "Corrosion, delamination, PID and junction box failure show up as a slow, unexplained output drop.",
          "The inverter is more vulnerable than the panels, and overheats faster in humid air.",
          "Right-rated gear, sealed connections and a yearly service before the wet prevent most of it.",
        ],
      },
      {
        type: "markdown",
        markdown: `## How Humidity Damages Solar Panels

### Solar Panel Corrosion

Aluminium frames, mounting rails, clamps, bolts and busbars all react with moisture. Add salt air near the coast and corrosion accelerates. Galvanic corrosion is a particular risk when two different metals touch, such as a steel bolt on an aluminium rail.

Corroded connections raise electrical resistance. That means heat, energy losses and, in the worst cases, a fire risk. Corroded mounts can also weaken your array's grip, which matters in cyclone country (see our [solar panel cyclone protection guide](/blog/solar-panel-cyclone-protection/)).

### Solar Panel Water Damage

A panel is a sealed sandwich of glass, encapsulant, solar cells and backsheet. Once humidity breaches the edge seals, it triggers several problems:

- **Delamination:** layers peel apart, creating bubbles or cloudy patches that block light.
- **Backsheet degradation:** cracking or yellowing exposes the cells to moisture.
- **Junction box failure:** water inside causes short circuits and hot spots.
- **Potential-induced degradation (PID):** humidity helps leakage currents drain cell performance.

This solar panel damage is rarely dramatic. Instead you see a slow, unexplained drop in generation, which is why many owners miss it for years.

### Lower Output in Humid Conditions

Humid air scatters sunlight, and water films on glass can reflect some of it away. Research on humid conditions has recorded reduced output, though the size of the loss varies with panel type, temperature and the study. The bigger long-term cost comes from the physical damage above, not the daily dip.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/bellamack-0832-2-1-.webp",
        alt: "Corrosion-resistant solar mounting on a Darwin rooftop",
      },
      {
        type: "markdown",
        markdown: `## Solar Inverter Problems Caused by Humidity

Your inverter is the brain of the system, and it's more vulnerable than your panels. It has circuit boards, capacitors and cooling vents, and none of them like moisture.

### Moisture Ingress and Electrical Faults

If water vapour gets past a poor seal or an open cable gland, condensation forms on circuit boards. Common results include:

- Random shutdowns and error codes
- Isolator and DC connector faults
- Corroded terminals and tripped safety switches
- Short circuits that can write off the unit

Insects and geckos make it worse. In the tropics they're drawn to warm, damp enclosures, and unsealed entry points let them in.

### Solar Inverter Overheating

Humid air cools less effectively than dry air, and trapped moisture can clog ventilation or insulate heat inside the casing. Add Darwin's heat, a west-facing wall in afternoon sun, and the inverter starts derating, which means deliberately cutting power to protect itself.

Solar inverter overheating shortens component life and costs you generation exactly when the sun is strongest. Our guide to [solar inverters](/services/solar-inverters) explains what to look for in a tropical-rated unit.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Is your inverter throwing errors every wet season?",
          body: "Don't wait for a total failure. Our team can diagnose faults fast and get your system back to full output.",
          buttonLabel: "Book Solar Inverter Repair",
          buttonHref: "/services/solar-inverters/repair",
        },
      },
      {
        type: "markdown",
        markdown: `## Warning Signs Humidity Is Hurting Your System

Check for these early red flags:

- Generation that drops without any shading or weather explanation
- Fogging, bubbles or discolouration under the panel glass
- White, green or rusty residue on frames, clamps or connectors
- Inverter error codes, flickering displays or repeated shutdowns
- A damp smell, water droplets or insect nests around the inverter
- Hot spots or burn marks near connectors

If you spot even one, book an inspection. Small faults are cheap to fix. Neglected ones aren't.

## How We Prevent Humidity Damage

Prevention starts on installation day, not after something fails. Here's what we focus on:

1. **Right-rated equipment.** We choose panels and inverters suited to hot, humid, coastal conditions, with proper ingress protection (IP) ratings. Browse our [solar panel brands](/product/solar-panels-brands) and [inverter brands](/products/solar-inverters).
2. **Smart inverter placement.** Shaded, ventilated spots away from direct afternoon sun reduce both overheating and condensation.
3. **Sealed connections.** Quality connectors, weatherproof glands and sealed conduit stop moisture and insects entering.
4. **Corrosion-resistant hardware.** Compatible metals and marine-grade fixings reduce galvanic corrosion.
5. **Correct cable management.** Drip loops and secure routing keep water from running into enclosures.
6. **Professional commissioning.** Insulation resistance and earth checks confirm everything is sound before handover.

Our [solar panel installation](/solar-panels-darwin) process is built around NT conditions, because a system that works in Melbourne won't necessarily last in Darwin.

## Solar Panel Maintenance: Your Humidity Checklist

Good solar panel maintenance is the cheapest insurance you can buy. Aim for:

- **Before the wet season:** a professional inspection of seals, connectors, isolators and mounts
- **During the wet season:** monitor your app weekly for unusual dips
- **After storms:** check for loose fixings, debris and water ingress
- **Every year:** clean panels, test insulation resistance and review inverter logs

Avoid pressure washers, which can force water past seals. Never open an inverter or touch DC wiring yourself, as it's dangerous. Our [solar panel maintenance service](/services/solar-panel-maintenance-darwin) in Darwin covers all of this, so you catch problems while they're still small.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/about-team.webp",
        alt: "Oneroof Solar technician inspecting an inverter in Darwin",
      },
      {
        type: "quote",
        text: "Humidity doesn't announce itself. It corrodes, seeps and overheats slowly until you're facing expensive repairs or a dead inverter.",
      },
      {
        type: "markdown",
        markdown: `## Don't Let Humidity Quietly Drain Your Solar Investment

Humidity doesn't announce itself. It corrodes, seeps and overheats slowly until you're facing expensive repairs or a dead inverter. The good news is that most of this is preventable with the right equipment, careful installation and regular checks.

Whether you're planning a new system or worried about an existing one, One Roof Solar knows what the NT climate throws at solar. Contact us today for an inspection or quote, and protect your system before the next wet season hits.`,
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "Can humidity permanently damage solar panels?", a: "Yes. Sustained moisture can cause delamination, backsheet cracking, PID and corrosion. Quality panels resist this, but poor installation and neglect speed it up." },
          { q: "Are solar panels waterproof?", a: "They're weather-resistant, not invincible. Seals, junction boxes and connectors are the weak points, and they degrade with age." },
          { q: "Why does my inverter keep overheating?", a: "Common causes include direct sun exposure, blocked ventilation, high ambient humidity and heat, or a failing fan. A technician should check it." },
          { q: "How often should I service my system?", a: "At least once a year, ideally before the wet season starts." },
          { q: "Can damaged panels be fixed?", a: "Sometimes. Connectors, junction boxes and wiring are repairable, while delaminated or badly corroded panels may need replacing. Our solar panel repair service can assess which applies." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Is hidden moisture silently killing your solar system?",
          body: "Don't wait for the first big storm to find out. Protect your investment and secure your energy savings today.",
          buttonLabel: "Book Your Pre-Wet Season Inspection",
          buttonHref: "/contact",
          phoneLine: "or call our Darwin team on 0483 986 444.",
        },
      },
    ],
  },
  {
    slug: "do-solar-panels-overheat-darwin-heat",
    title: "Do Solar Panels Overheat in Darwin's 40°C Days?",
    excerpt:
      "Heat does reduce solar efficiency, but it rarely causes the dramatic failure people fear. Here is what actually happens to your system on a scorching Darwin day, and how to protect it.",
    date: "10 October 2026",
    dateIso: "2026-10-10",
    category: "Guides",
    readTime: "8 min read",
    image: "/assets/images/hosted/alice-springs-0870-1-.webp",
    imageAlt: "Solar panels under strong sun on a Northern Territory roof",
    author: "Oneroof Solar",
    seoTitle: "Do Solar Panels Overheat in Darwin's 40°C Days?",
    seoDescription:
      "Think 40°C days wreck your solar output? Learn how much heat really costs, what overheats first, and how to protect your Darwin system.",
    canonicalPath: "/blog/do-solar-panels-overheat-darwin-heat/",
    heroStats: [
      { value: "-40 to 85°C", label: "Typical panel operating range", icon: "sun" },
      { value: "0.3 to 0.4%", label: "Loss per °C above 25°C", icon: "zap" },
      { value: "Inverter", label: "First part to overheat", icon: "shield" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `When the Top End hits 40°C, your air conditioner works overtime, and you'd expect your panels to be at their best. Yet some owners see their output fall short on the hottest afternoons and start to wonder whether the heat is hurting the system.

You're not imagining it. Heat does reduce solar efficiency, but it rarely causes the dramatic failure people fear. The real risks sit in a few specific places, and they're fixable. Here's what actually happens to your system on a scorching Darwin day.

## Do Solar Panels Stop Working If It's Too Hot?

No. Solar panels keep generating power in extreme heat. Most modules are rated to operate from roughly -40°C to +85°C, which is well beyond anything a Darwin summer produces.

What changes is efficiency. Hot panels convert a smaller share of sunlight into electricity, so you get less power from the same sunshine. The part that can shut down is usually the inverter, which trips to protect itself when it runs too hot. That's why the heat question is really two questions: how much output you lose, and what's at risk.

## Why Heat Reduces Solar Output

Solar cells are semiconductors, and semiconductors dislike heat. As silicon warms up, voltage drops faster than current rises, so net power falls. Manufacturers publish this as the temperature coefficient, usually a loss of around 0.3% to 0.4% of power for every degree above 25°C.

### Ambient Temperature vs Cell Temperature

Here's the detail most guides skip: the 25°C benchmark refers to the cell, not the air. Panels are rated at 25°C under Standard Test Conditions, but a roof panel in full sun runs far hotter than the air around it, often 20°C or more above ambient.

So on a 40°C day, your cells could be sitting at 60°C to 70°C. Using an illustrative panel with a -0.35% per °C coefficient, the loss climbs with cell temperature as shown below.`,
      },
      {
        type: "stats",
        items: [
          { value: "~7%", label: "Estimated power loss at 45°C cell temperature.", icon: "sun" },
          { value: "~14%", label: "Estimated power loss at 65°C cell temperature.", icon: "zap" },
          { value: "~17.5%", label: "Estimated power loss at 75°C cell temperature.", icon: "wind" },
        ],
      },
      {
        type: "markdown",
        markdown: `Some competitor guides suggest a 40°C day costs only 5% or so, but that figure treats air temperature as cell temperature. In practice, peak-heat losses can be noticeably higher. The good news is that the sun's intensity, longer days and clear skies often make up for it across the year.

## Which Temperature Is Best for Solar Panels?

Panels perform best when cells are cool and sunlight is strong, which in practice means a clear, mild day with a breeze. Around 25°C cell temperature is the reference point manufacturers use, and output generally improves as cells run cooler than that.

You can't control Darwin's climate, but you can influence cell temperature. Airflow behind the panels, a low temperature coefficient and smart installation all help. We'll cover those below.

## Are Hotter Days Better for Solar?

Not per panel, but sometimes overall. Heat lowers efficiency, yet hot days in the NT tend to bring strong irradiance and long daylight hours. Sunlight, not temperature, is the fuel.

Think of it this way:

- **Cool, clear days:** the most efficient output per panel
- **Hot, clear days:** high total generation, with efficiency trimmed by heat
- **Overcast days:** lower irradiance, though panels still produce (see our guide on whether [solar panels work during Darwin's wet season](/blog/do-solar-panels-work-during-darwin-wet-season/))

So a 40°C day is not a bad solar day. It's a good one with a heat penalty, and that penalty is worth minimising.`,
      },
      {
        type: "quote",
        text: "A 40°C day is not a bad solar day. It's a good one with a heat penalty, and that penalty is worth minimising.",
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "Panels keep working in extreme heat. Most are rated to around 85°C, far above a Darwin summer.",
          "The 25°C rating is cell temperature, not air. In full sun cells run 20°C or more above ambient.",
          "On a 40°C day, peak-heat losses can run well above the 5% some guides quote.",
          "The inverter is the heat-sensitive part. It derates or trips before the panels struggle.",
          "Ventilated mounting, a low temperature coefficient and smart inverter placement cut the penalty.",
        ],
      },
      {
        type: "markdown",
        markdown: `## What Actually Overheats: Inverters, Connections and Hot Spots

Panels are built for heat. The weak links are usually elsewhere.

### Solar Inverter Overheating

The inverter is the most heat-sensitive part of your system. It's packed with electronics that generate their own heat, and if it's mounted on a sun-baked wall with little ventilation, internal temperatures climb quickly. When that happens, the inverter derates, deliberately cutting output to protect itself, or shuts down altogether.

That means you lose power at exactly the moment the sun is strongest. Typical signs include:

- Output that flatlines or drops sharply in the afternoon
- Overheating or temperature fault codes
- Repeated shutdowns on the hottest days

Placement matters more than most people realise. A shaded, well-ventilated spot can make a real difference. Read more about [solar inverters](/services/solar-inverters) and how we choose tropical-suitable units.

### Loose Connections and Hot Spots

Heat exposes weak points. A poorly crimped connector or a loose terminal carries more resistance, and resistance creates local heat. Cracked cells or shading from a bird dropping can also cause hot spots, where one area of a panel runs much hotter than the rest. Left alone, hot spots can damage the cell and the layers around it.

## What Long-Term Heat Does to Solar Panels

One hot day won't harm your system. Years of repeated heating and cooling can. This thermal cycling makes materials expand and contract daily, stressing solder bonds, cell interconnections and the sealing layers.

Over time, sustained high temperatures can speed up wear such as encapsulant discolouration, backsheet ageing and delamination. Quality panels are tested for this, but installation quality and maintenance decide how well they hold up in practice.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Is your inverter shutting down every time the temperature spikes?",
          body: "You're paying for power you aren't getting. Our technicians can find the cause fast and keep your system running through the heat.",
          buttonLabel: "Book Solar Inverter Repair",
          buttonHref: "/services/solar-inverters/repair",
        },
      },
      {
        type: "figure",
        src: "/assets/images/hosted/products/inverter-hero.webp",
        alt: "Inverter mounted in a shaded, ventilated position to reduce overheating",
      },
      {
        type: "markdown",
        markdown: `## How to Protect Your Solar System From Heat

You can't change the weather, but you can build and maintain a system that handles it. Here's what makes the biggest difference:

1. **Allow airflow behind the panels.** Mounting with a proper gap lets heat escape. Flush, tightly packed installations run hotter, and elevated, ventilated mounting can lower operating temperature noticeably.
2. **Choose a low temperature coefficient.** Two panels with the same rating can behave differently in heat. Check the spec sheet when you compare [solar panel brands](/product/solar-panels-brands).
3. **Place the inverter wisely.** Choose a shaded, ventilated wall rather than an afternoon-sun face, and keep the vents clear.
4. **Use quality connectors and cabling.** Properly rated components resist heat-related failures.
5. **Keep panels clean.** Dust and grime hold heat and block light.
6. **Monitor your output.** An app that shows your daily curve helps you spot problems early.
7. **Inspect regularly.** Thermal imaging and electrical checks can reveal hot spots and loose connections before they become failures.

Our [solar panel installation](/solar-panels-darwin) team designs systems around NT conditions, because a layout that works in a cooler southern city won't necessarily last under Darwin's sun.

## Don't Let Heat Quietly Eat Your Savings

A 40°C day won't destroy your solar system, but poor design, a badly placed inverter or years without maintenance can leave you losing output and money every summer.

The fix is straightforward: ventilated mounting, the right equipment, smart inverter placement and regular checks. If your system is underperforming, tripping out in the afternoon or has never been inspected, get in touch with One Roof Solar today and let us find out why.`,
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "At what temperature do solar panels start losing efficiency?", a: "Efficiency starts dropping once the cells climb above 25°C, which is the test-condition benchmark. Because panels run well above air temperature in direct sun, you can lose some output even on a warm 30°C day. The loss grows gradually by roughly 0.3% to 0.4% for every extra degree, so there's no sudden cliff." },
          { q: "How hot is too hot for solar panels?", a: "Most panels are rated to operate up to around 85°C, far beyond what a Darwin summer produces. The panels themselves aren't the limit. The inverter, which has a lower heat tolerance, is usually the first part to struggle." },
          { q: "Do solar panels still work properly in 40°C heat?", a: "Yes. They keep generating strong power, just with a heat penalty on efficiency. Long sunny days across the NT mean annual production stays high when the system is designed well." },
          { q: "Can heat shorten the lifespan of solar panels?", a: "Repeated heating and cooling, known as thermal cycling, can wear solder bonds, seals and backsheets over the years. Quality panels, ventilated mounting and regular inspections slow this wear considerably." },
          { q: "How do I stop my solar inverter overheating?", a: "Mount it in a shaded, ventilated spot, keep the vents clear of dust, nests and debris, and avoid afternoon-sun walls. If it keeps tripping out on hot days, have it checked rather than waiting for a full failure. Our solar inverter repair service can diagnose the cause." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Stop letting extreme heat steal the power you paid for.",
          body: "Unchecked heat stress degrades your panels faster and shrinks your daily energy yield month after month. Every day your system runs hot without a check-up is money left on the roof.",
          buttonLabel: "Book a Solar Performance Check",
          buttonHref: "/contact",
          phoneLine: "or call One Roof Solar on 0483 986 444.",
        },
      },
    ],
  },
  {
    slug: "saa-accreditation-check-solar-installer",
    title: "SAA Accreditation: Why It Matters and How to Check Your Installer",
    excerpt:
      "One question decides whether you keep your rebate, your warranty and your peace of mind: who is accredited, the company or the person on your roof? Here is how to check in minutes.",
    date: "9 October 2026",
    dateIso: "2026-10-09",
    category: "Guides",
    readTime: "7 min read",
    image: "/assets/images/hosted/goodwe-saa-install.webp",
    imageAlt: "Accredited installer fitting a solar system on a Darwin roof",
    author: "Oneroof Solar",
    seoTitle: "SAA Accreditation: Why It Matters & How to Check Installers",
    seoDescription:
      "Is your solar installer really SAA accredited? Learn why it protects your rebate, what the register shows, and how to verify anyone in minutes.",
    canonicalPath: "/blog/saa-accreditation-check-solar-installer/",
    heroStats: [
      { value: "SAA", label: "Accredits people, not companies", icon: "shield" },
      { value: "Feb 2024", label: "Took over from the CEC", icon: "zap" },
      { value: "STCs", label: "Rebate tied to accreditation", icon: "sun" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `You've collected a few solar quotes, and one is thousands cheaper than the rest. The salesperson swears everything is "fully accredited." But what does that actually mean, and who is accredited: the company, or the person on your roof?

That one question decides whether you keep your rebate, your warranty and your peace of mind. Here's what Solar Accreditation Australia (SAA) does, why it matters, and how to check any installer before you sign.

## What Is SAA Accreditation?

SAA is the independent, not-for-profit body approved by the Clean Energy Regulator to accredit solar designers and installers under the Small-scale Renewable Energy Scheme. It took over from the Clean Energy Council (CEC) on 29 February 2024, and it also accredits battery installers.

It proves that a person has met national training and competency standards, and must keep meeting them to stay accredited.

## Why SAA Accreditation Matters

**It protects your rebate.** The federal discount, delivered through Small-scale Technology Certificates (STCs), is only available when accredited people design and install your system. Many state and territory incentives require it too. Without it, you may lose thousands at the exact moment you can't fix it: after the work is done.

**It protects your safety.** Solar means high-voltage DC on your roof and in your switchboard. Poor cabling or loose connections are a real fire and shock risk. Accredited installers must provide a written compliance statement confirming the work meets requirements, which is why a properly delivered [solar panel installation](/solar-panels-darwin) is about far more than bolting panels to a roof.

**It protects your warranty and performance.** Manufacturers can push back on claims for poorly installed gear, and badly designed systems simply produce less. Inverters take the most punishment, so it's worth knowing how [solar inverter installation](/services/solar-inverters/installation) should be done properly from day one.`,
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "SAA accredits individuals, not companies. Ask for the name and number of the person on your job.",
          "SAA replaced the CEC for installer accreditation on 29 February 2024.",
          "Your STC rebate is only valid when accredited people design and install the system.",
          "Panels and batteries are separate accreditation classes. Check the battery endorsement too.",
          "Verify on the register on install day, not from a screenshot, because accreditation can lapse.",
        ],
      },
      {
        type: "markdown",
        markdown: `## How to Check Your Installer's SAA Accreditation

1. **Ask for the name and accreditation number** of the person who will sign off your installation. It's public information, so a good installer shares it straight away.
2. **Search SAA's free accreditation status check** by number, or by first and last name.
3. **Confirm the status is current** and check the expiry date.
4. **Check the right type.** Look at what they're accredited for: design, install, or both.
5. **Match the name to the job.** The accredited person who completes testing and commissioning is the one listed on your STC claim. If the name changes between quote and install day, ask why.

Check on the day, not from a screenshot. Accreditation can lapse.

## Accreditation Belongs to a Person, Not a Company

The register has no company field, because a business can't be "SAA accredited." A company with fifty staff and one accredited person can still say it "uses accredited installers." So don't ask "Is your company accredited?" Ask: "Who is the accredited person on my job, and what's their number?"

It also doesn't cover everything automatically. Solar panels, grid-connected batteries and stand-alone power systems are separate classes. An installer accredited for panels isn't automatically accredited for batteries. If you're buying solar plus storage, check the battery endorsement as well, and make sure whoever handles your [solar battery installation](/services/solar-battery-installation) holds it. You can also compare [solar battery brands](/products/solar-battery-brands/) before you decide.`,
      },
      {
        type: "quote",
        text: "Don't ask \"Is your company accredited?\" Ask: \"Who is the accredited person on my job, and what's their number?\"",
      },
      {
        type: "markdown",
        markdown: `## SAA vs NETCC vs CEC: Don't Mix Them Up

These three names get confused constantly, but they cover different things. You want all three working in your favour.

- **SAA** accredits designers and installers. It is held by an individual, and it tells you that person is accredited for this type of work.
- **NETCC** covers retailers and sellers. It is held by a company, and it tells you the business follows consumer-protection standards on sales and contracts.
- **CEC Approved Products** covers hardware. It is held by a product model, and it tells you the panel, inverter or battery is approved for use in Australia.

Approved products fitted by an unaccredited person can still cost you the rebate. And note that "CEC accredited installer" is now outdated wording. The CEC no longer accredits installers, so there's nothing to check that claim against.`,
      },
      {
        type: "compare",
        left: {
          title: "Red flags to walk away from",
          subtitle: "Be cautious",
          items: [
            "They won't give an accreditation number, or point to a certificate image instead.",
            "\"All our installers are accredited\" with no name attached.",
            "Pressure to sign today before a \"rebate deadline\".",
            "A quote with no brands, model numbers or named installer.",
            "A far lower price than everyone else, with vague answers about who's doing the work.",
          ],
        },
        right: {
          title: "What the register won't tell you",
          subtitle: "Check these too",
          items: [
            "A green tick confirms accreditation, not the company's finances.",
            "It isn't a guarantee of perfect workmanship on your roof.",
            "It says nothing about whether the company will be trading at warranty time.",
            "Pair the check with reviews, a clear written quote and an electrical licence.",
            "Look for a local track record, like our work on the projects page.",
          ],
        },
      },
      {
        type: "markdown",
        markdown: `## Why It Matters Even More in Darwin and the NT

Intense heat, humidity, monsoonal rain and cyclone-season winds test every mounting, cable run and inverter location. Shortcuts that might limp along elsewhere can show up here as faults, water ingress or underperformance far sooner. That's why local knowledge matters, whether you're after [solar panels in Darwin](/solar-panels-darwin), a system in Palmerston, or [solar in Alice Springs](/solar-alice-springs/).

For the storm side of things, see our guide to [solar panel cyclone protection](/blog/solar-panel-cyclone-protection/), and for monsoon season, how [solar panels perform in Darwin's wet season](/blog/do-solar-panels-work-during-darwin-wet-season/).

## The Bottom Line

Ask for the person's name and number, verify it on the register, confirm the right accreditation type, and check the products and the seller too. It takes minutes, and it protects your rebate, safety and investment for years. Want to know who we are before you ask? Read [about One Roof Solar](/about), then get in touch.`,
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "Can I search the SAA register by company name?", a: "No. Accreditation is held by individuals, so you search by accreditation number or the installer's name. Ask who will be on your job." },
          { q: "Is there a list of SAA accredited installers in Darwin or the NT?", a: "There's no browsable directory by area. SAA offers a status check to verify someone you're already considering. Shortlist locally through reviews and quotes, then verify the named person." },
          { q: "Does SAA accreditation cover battery installation?", a: "Not automatically. Battery work is a separate accreditation, so check the battery endorsement when buying solar plus storage." },
          { q: "Is 'CEC accredited' the same as SAA accredited?", a: "Not any more. SAA replaced the CEC for installer accreditation in 2024, though the CEC still maintains approved product lists. Ask for the SAA number instead." },
          { q: "Does SAA accreditation guarantee good workmanship?", a: "No. It confirms a person meets a standard at a point in time. It doesn't certify your specific installation or the company's finances, so check reviews, warranties and the quote as well." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Ready for an installer you can verify and a system built for the Top End?",
          body: "Don't risk your solar investment on an installer you haven't verified. Talk to us about a solar and battery system for your Darwin home with greater confidence.",
          buttonLabel: "Request Your Free One Roof Solar Quote",
          buttonHref: "/contact",
          phoneLine: "or call us on 0483 986 444.",
        },
      },
    ],
  },
  {
    slug: "top-10-best-solar-panel-installers-in-darwin",
    title: "Top 10 Best Solar Panel Installers in Darwin (2026 Guide)",
    excerpt:
      "Cyclone-rated mounting, wet-season humidity and uneven installer quality make choosing who installs your system the hard part. Here are ten Darwin installers ranked on what matters.",
    date: "23 October 2026",
    dateIso: "2026-10-23",
    category: "Guides",
    readTime: "6 min read",
    image: "/assets/images/hosted/about-team.webp",
    imageAlt: "Oneroof Solar installation team in Darwin",
    author: "Oneroof Solar",
    seoTitle: "Top 10 Best Solar Panel Installers in Darwin (2026 Guide)",
    seoDescription:
      "Compare the top 10 solar panel installers in Darwin by quality, battery expertise, $0 deposit plans and local support, then choose with confidence.",
    canonicalPath: "/blog/top-10-best-solar-panel-installers-in-darwin/",
    heroStats: [
      { value: "8 to 10 hrs", label: "Darwin sunshine a day", icon: "sun" },
      { value: "$0", label: "Deposit solar plans", icon: "battery" },
      { value: "Local", label: "Darwin-based team", icon: "shield" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `Darwin gets 8 to 10 hours of sunshine a day, so going solar is a smart move. Choosing who installs your system is the harder part. Cyclone-rated mounting, wet-season humidity, shifting rebates and uneven installer quality mean the wrong choice can cost you years of savings. This guide ranks ten Darwin installers on local experience, battery know-how, finance options and after-install support, so you can decide quickly.

## What Makes a Great Solar Installer in Darwin?

Not every installer is built for the Top End. Use these five checks as your scorecard:

- **Cyclone-ready installation:** The NT sets conditions for solar because of cyclones, so mounting and wiring must suit local wind loads.
- **Quality components and warranties:** Look for proven panel, inverter and battery brands with clear warranty terms.
- **Battery expertise:** With rebates on offer, your installer should size a battery correctly and handle the paperwork.
- **Transparent pricing and finance:** You want an itemised quote, no pressure and flexible payment options.
- **Local aftercare:** A Darwin-based team should answer the phone when something needs attention.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Tired of watching your power bill climb every quarter?",
          body: "Get a free, no-obligation solar quote from Oneroof Solar and find out how much you could save.",
          buttonLabel: "Get Your Free Solar Quote",
          buttonHref: "/contact",
          phoneLine: "or call our Darwin team on 0483 986 444.",
        },
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "Darwin's cyclones and humidity mean mounting and wiring must suit local wind loads.",
          "Check the panel, inverter and battery brands and the warranty terms before you sign.",
          "A good installer sizes your battery correctly and handles the rebate paperwork.",
          "A $0 deposit plan lets you start saving now instead of waiting for a lump sum.",
          "A local Darwin team can be on your roof quickly if something goes wrong.",
        ],
      },
      {
        type: "markdown",
        markdown: `## The Top 10 Solar Panel Installers in Darwin

### 1. Oneroof Solar — Best Overall

Oneroof Solar takes the top spot by combining local roots with complete, start-to-finish service. This Darwin-based, fully Australian-owned company has served the Northern Territory since 2019. It installs residential and commercial systems across Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek.

- **End-to-end service:** Consultation, system design, installation and ongoing support all come from one team.
- **$0 deposit options:** Start saving now with no-interest solar plans instead of waiting until you've saved a lump sum.
- **Battery specialists:** [Solar battery installation](/services/solar-battery-installation) with trusted brands such as Fox ESS and Sungrow.
- **More than solar:** [EV charger installation](/services/ev-chargers/installation) for homes and businesses.
- **Local team:** Berrimah-based, so you're dealing with neighbours, not a call centre.

New to solar? Start with our complete guide to [solar panel installation in Darwin](/services/solar-panel-installation), or see whether [solar is worth it for your Darwin home](/blog/solar-worth-it-darwin-cost-savings/).

### 2. Country Solar NT

Based in Berrimah and operating since 2010, Country Solar NT serves residential and commercial customers across Darwin, Palmerston and Katherine. Its project portfolio includes car parks and council buildings, which suits larger commercial roofs.

### 3. Eco Sparks Solar & Electrical Contractors

This Territory-owned company is based in Woolner and has over 25 years of experience. It pairs solar with wider electrical work such as fans, air conditioners and smoke alarms, which suits homeowners who want one contractor for several jobs.

### 4. Rimfire Energy

Rimfire is both an energy retailer and an installer, so solar can be linked to your electricity account. Its higher feed-in tariff has at times required installing solar with Rimfire, so compare that carefully against other offers.

### 5. Northern Renewable Group

Locally owned and operated, with offices in Darwin and Katherine. It suits customers who want an installer with a presence beyond the Darwin region.

### 6. Solahart Top End

Part of a well-known national brand, Solahart Top End is often considered by households that want solar hot water alongside or instead of rooftop panels.

### 7. Sunoxi Energy

This Winnellie-based electrical contractor supplies solar and energy storage products across the Top End for a range of customer types.

### 8. Delta Electrics Power Solutions

Also based in Winnellie, Delta Electrics offers solar energy and related power products and services for Darwin homes and businesses.

### 9. Darwin Solar

Located in Winnellie, Darwin Solar promotes tailored systems that can be expanded as your energy needs grow.

### 10. NT Solar Futures

Based in East Arm, NT Solar Futures provides residential and commercial solar systems and panel installation.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/bayview-0820.webp",
        alt: "Solar system installed on a Darwin rooftop",
      },
      {
        type: "markdown",
        markdown: `## Ready to Choose the Right Darwin Solar Installer?

Every installer here serves Darwin, but Oneroof Solar leads by pairing local experience with battery expertise, $0 deposit finance and support from the first quote to long after installation.

Don't let another wet season of high power bills slip by. Your Darwin roof is ready to start working.`,
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "What should I check on a solar quote before signing in Darwin?", a: "Look beyond the headline price. The quote should list the panel, inverter and battery brands, the system size in kW, the warranty terms, and what's included for mounting and wiring. Ask how the installation will handle cyclone wind loads, since a cheap quote that skips this can cost you later." },
          { q: "What accreditations should a Darwin solar installer have?", a: "Your installer should hold current Solar Accreditation Australia (SAA) accreditation, which replaced Clean Energy Council installer accreditation in 2024, and use licensed electricians for the wiring. Accreditation is what makes your system eligible for government rebates, so ask to see the details before you commit." },
          { q: "Are $0 deposit solar plans worth it?", a: "They can be, if the terms are clear. A $0 deposit plan lets you start saving on power bills straight away instead of waiting until you've saved a lump sum. Check whether the plan is interest-free, what the repayments are, and whether your monthly saving is likely to cover them." },
          { q: "Why choose a local Darwin installer over an interstate company?", a: "Darwin's climate is unlike most of Australia, with cyclones, heavy wet seasons and high humidity. A local installer understands these conditions, builds for them, and can be on your roof quickly if something goes wrong. Interstate companies often rely on subcontractors, which can make warranty and aftercare harder to chase." },
          { q: "Will my solar system keep working through a wet season?", a: "Yes, though output dips during heavy cloud and storms. Humidity and salt air are tough on cheap fittings, so ask your installer about corrosion-resistant mounting hardware and weather-rated cabling. A well-built system should handle the wet season without ongoing problems." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Ready to Choose the Right Darwin Solar Installer?",
          body: "Oneroof Solar pairs local experience with battery expertise, $0 deposit finance and support from the first quote to long after installation.",
          buttonLabel: "Request Your Free Solar Quote",
          buttonHref: "/contact",
          phoneLine: "or call Oneroof Solar on 0483 986 444.",
        },
      },
    ],
  },
  {
    slug: "solar-installer-vs-solar-broker-darwin",
    title: "Solar Installer vs Solar Broker: Who Should You Trust in Darwin?",
    excerpt:
      "An installer designs, supplies and installs your system, then stands behind it. A broker collects your details and passes them on. In cyclone country, that difference matters.",
    date: "22 October 2026",
    dateIso: "2026-10-22",
    category: "Guides",
    readTime: "8 min read",
    image: "/assets/images/hosted/goodwe-saa-install.webp",
    imageAlt: "Accredited installer fitting a solar system on a Darwin roof",
    author: "Oneroof Solar",
    seoTitle: "Solar Installer vs Solar Broker in Darwin: Who to Trust",
    seoDescription:
      "Solar installer or solar broker? Explore the real differences, hidden risks and warranty impact before you buy solar in Darwin. Get a direct quote.",
    canonicalPath: "/blog/solar-installer-vs-solar-broker-darwin/",
    heroStats: [
      { value: "1", label: "Point of contact, direct", icon: "shield" },
      { value: "No fee", label: "No referral commission", icon: "zap" },
      { value: "SAA", label: "Accredited local installer", icon: "sun" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `Search for solar in Darwin and two types of businesses show up: installers and brokers. Both offer free quotes, great prices and "rebates sorted". They look almost identical online, but they do very different jobs.

An installer designs, supplies and installs your system, then stands behind it. A broker collects your details and passes them to someone else. In a place with cyclones, heavy humidity and 40°C days, that difference matters long after the system is on your roof.

## What Is a Solar Installer?

A solar installer is the business that does the work. They assess your roof, design the system, supply the equipment and install it with their own team. They also handle grid connection paperwork and support the system afterwards.

When something goes wrong, you call one company, and that company is responsible. A good installer also offers [solar panel installation](/solar-panels-darwin), [solar battery installation](/services/solar-battery-installation) and [solar inverter services](/services/solar-inverters) under one roof, so your system is designed to work together.

## What Is a Solar Broker?

A solar broker is a middleman. They don't usually install anything. They generate leads, compare quotes and connect you with an installer, often earning a commission or referral fee from the installer they choose.

Brokers can seem convenient, and some are honest. But the commission has to come from somewhere. It's usually built into the price, or it influences which installer you're sent to. That installer may not be the best one for your home, only the one paying the broker.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Want a straight answer from the team that installs your system?",
          body: "Get a free solar quote from Oneroof Solar and speak to a Darwin installer directly.",
          buttonLabel: "Get a Direct Quote",
          buttonHref: "/contact",
        },
      },
      {
        type: "compare",
        left: {
          title: "Solar installer",
          subtitle: "Does the work",
          items: [
            "Designs and installs your system with their own trained team.",
            "You call one company when there's a problem.",
            "One point of contact for warranty support.",
            "Direct pricing with no referral fee.",
            "Knows NT conditions first-hand.",
          ],
        },
        right: {
          title: "Solar broker",
          subtitle: "Refers you on",
          items: [
            "Refers you to a third-party installer you may not choose.",
            "Problems can bounce between the broker and the installer.",
            "Warranty support may be passed between two businesses.",
            "Pricing may include a commission.",
            "Local knowledge varies by who they refer you to.",
          ],
        },
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "An installer designs, installs and stands behind your system; a broker just refers you on.",
          "A broker's commission is usually built into your price or steers who you're sent to.",
          "Going direct means one point of contact for design, install, warranty and aftercare.",
          "In the Top End, accountability matters more than the convenience of a middleman.",
          "Ask who will be on your roof, whether they're accredited, and who handles warranty claims.",
        ],
      },
      {
        type: "markdown",
        markdown: `## Why This Choice Matters More in Darwin

Solar systems face harsher conditions in the Top End than in most of Australia. Wet-season storms, salty air near the coast and constant humidity all put stress on equipment. Some of the common problems are:

- **Cyclone and storm damage.** Poor mounting and wiring fail first. Read how proper [solar panel cyclone protection](/blog/solar-panel-cyclone-protection/) works.
- **Humidity damage.** Moisture causes corrosion and inverter faults. See how [humidity damages solar systems](/blog/how-humidity-damages-solar-systems/).
- **Extreme heat.** Heat reduces efficiency and strains components. Learn whether [solar panels overheat in Darwin](/blog/do-solar-panels-overheat-darwin-heat/).

An installer who works in these conditions every day designs around them. A broker's referral may not.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/about-team.webp",
        alt: "Local Darwin solar installation team on site",
      },
      {
        type: "markdown",
        markdown: `## The Real Risks of Using a Solar Broker

Not every broker is a problem, but these are the risks Darwin homeowners should know about.

1. **Hidden commission.** You rarely see the broker's fee. It can raise your system price or push you toward a higher-paying installer rather than the best fit.
2. **You don't choose who's on your roof.** The broker picks the installer, and you may not know who they are or what they've installed before.
3. **Accountability gaps.** If panels underperform or an inverter fails, the broker points to the installer and the installer points to the broker. You're left in the middle.
4. **Warranty confusion.** Product warranties and workmanship warranties are different things. If the installer closes down or the broker has no ongoing role, you may struggle to claim.
5. **Pressure and upselling.** Brokers paid per sale have a reason to close fast. This can mean oversized systems or packages you don't need.

## When Might a Broker Make Sense?

Fairness matters here. A broker can help if you're comparing many options and have no time to research. Some also help with finance paperwork.

But they only work well if you can see who the installer is, what the broker earns and who handles warranty claims. If any of those answers is unclear, going direct is the safer choice.

## Why Going Direct With an Installer Works Better

Dealing with the installer from the start gives you clear advantages:

- One point of contact from quote to aftercare
- A system designed for your home, your roof and your power usage
- Faster fixes because the team that installed it also handles [solar panel repair](/services/solar-panel-repair-darwin)
- Ongoing care through [solar panel maintenance in Darwin](/services/solar-panel-maintenance-darwin), which protects performance in tough conditions
- Honest pricing with no referral fee in the middle

Many homeowners also want to know if the numbers stack up. Our guides on whether [solar is worth it in Darwin](/blog/solar-worth-it-darwin-cost-savings/) and [solar panel costs in Darwin and Alice Springs](/blog/solar-panel-cost-darwin-alice-springs/) explain what to expect.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Not sure what your quote should include?",
          body: "Talk to our Darwin team for a clear, no-pressure breakdown with nothing hidden.",
          buttonLabel: "Get a Clear, Itemised Quote",
          buttonHref: "/contact",
        },
      },
      {
        type: "markdown",
        markdown: `## How to Check Who You're Really Dealing With

Before signing anything, ask these questions:

1. Do you install the system yourselves, or do you refer it to someone else?
2. Who will be on my roof, and are they accredited? Learn how to [check your installer's SAA accreditation](/blog/saa-accreditation-check-solar-installer/).
3. Do you receive a commission or referral fee for this sale?
4. Who handles warranty claims, and for how long?
5. Can I see past local projects? Ours are on the [projects page](/projects).
6. Is the quote itemised with panel, inverter and battery brands listed?

A real installer will answer all six clearly. If the answers are vague, treat that as a warning.

## So, Who Should You Trust in Darwin?

For most Darwin households, a licensed local installer is the safer choice. You get one company responsible for design, installation and aftercare, with no commission hidden in the price.

A broker can save you research time, but only if you know exactly who they're sending you to and what they earn. In the Top End, where weather is hard on solar, accountability matters more than convenience.

At Oneroof Solar, we design and install [residential solar systems](/solar-systems/residential-solar-system) across Darwin and the Northern Territory, and we stay responsible for them afterwards. Learn more [about us](/about), or contact our team to start your solar journey.`,
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "Can I buy solar directly from an installer without going through a broker?", a: "Yes. Most installers sell directly. You request a quote, they inspect your property, design the system and install it. Going direct usually means clearer pricing and one company handling everything." },
          { q: "How do I know if a solar company is a broker or an installer?", a: "Ask who will physically install the system and who employs them. A broker will refer you to another company, while an installer will name its own team. You can also check whether the business shows past local projects and accreditation details on its website." },
          { q: "Does using a solar broker affect my warranty?", a: "It can. The product warranty still comes from the manufacturer, but workmanship warranty comes from whoever installed the system. If a broker arranged the job, you need to know in writing which company covers workmanship and for how long." },
          { q: "Can a solar broker get me a better price than an installer?", a: "Not always. A broker may compare several quotes, but their commission is usually paid by the installer, which can be passed on in the price. The best way to judge value is to compare itemised quotes that list panel, inverter and battery brands." },
          { q: "What should I do if I've already signed with a solar broker?", a: "Check your contract for the installer's name, the workmanship warranty and any cooling-off rights. Ask the broker in writing who is responsible for aftercare. If the answers are unclear, contact the installer named in the contract directly before installation starts." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Ready to deal with the people who actually install your system?",
          body: "Request your free Oneroof Solar quote today and get honest advice from a local team.",
          buttonLabel: "Request Your Free Quote",
          buttonHref: "/contact",
          phoneLine: "or call our Darwin team on 0483 986 444.",
        },
      },
    ],
  },
  {
    slug: "what-happens-if-solar-installer-goes-out-of-business",
    title: "What Happens If My Solar Installer Goes Out of Business After Installation?",
    excerpt:
      "Your panels keep generating if the company that installed them folds. What you lose is the backup. Here is what a closure means for your warranties, support and paperwork, and how to protect yourself.",
    date: "26 October 2026",
    dateIso: "2026-10-26",
    category: "Guides",
    readTime: "8 min read",
    image: "/assets/images/hosted/products/inverter-hero.webp",
    imageAlt: "Solar inverter on a Darwin wall showing system status",
    author: "Oneroof Solar",
    seoTitle: "Solar Installer Shut Down? Is Your Warranty Still Valid?",
    seoDescription:
      "Installer gone bust after your solar install? See what happens to your warranty, support and paperwork, and how to protect your system in Darwin.",
    canonicalPath: "/blog/what-happens-if-solar-installer-goes-out-of-business/",
    heroStats: [
      { value: "Manufacturer", label: "Product warranty usually survives", icon: "shield" },
      { value: "Installer", label: "Workmanship cover at risk", icon: "zap" },
      { value: "SAA", label: "Use an accredited installer", icon: "sun" },
    ],
    sections: [
      {
        type: "markdown",
        markdown: `You bought solar to cut your power bills for the next 20 years. But what if the company that installed it closes its doors in year three? Who answers the phone when your inverter shows a fault? Who stands behind the wiring on your roof? Installer closures are a real risk in the solar industry, and most homeowners only think about them after it happens. Here is what a closure means for your system, your warranties and your wallet, and how to protect yourself.

## The Short Answer: Your System Keeps Working, but Your Backup Disappears

Short answer: your panels do not switch off because a company folds. They keep generating power, and your equipment keeps its manufacturer warranties.

What you lose is the installer's promise to fix their own work, answer service calls and handle warranty claims for you. That gap is where problems start, because a small fault left unchecked can quietly cut your output for months.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Worried about who you'd call if your inverter fails and your installer has vanished?",
          body: "Don't gamble with a system built to last decades. Talk to Oneroof Solar, a Darwin team that picks up the phone.",
          buttonLabel: "Get Your Free Solar Quote",
          buttonHref: "/contact",
          phoneLine: "or call our Darwin team on 0483 986 444.",
        },
      },
      {
        type: "markdown",
        markdown: `## What Happens to Your Solar Warranties When the Installer Closes?

A solar system is covered by several layers of protection, and each reacts differently to a closure. The manufacturer-backed layers usually survive. The installer-backed layers often do not.`,
      },
      {
        type: "compare",
        left: {
          title: "Usually survives a closure",
          subtitle: "Backed by the manufacturer",
          items: [
            "Product warranty on panels, inverter and battery, if the manufacturer still operates in Australia.",
            "Performance warranty covering panel output over time.",
            "Easier to claim when the brand has a local Australian support team.",
          ],
        },
        right: {
          title: "Often lost in a closure",
          subtitle: "Backed by the installer",
          items: [
            "Workmanship warranty on wiring, mounting and roof sealing, unless it is insurance-backed.",
            "Service and support, including answering faults and handling claims for you.",
            "Someone to diagnose a fault, which manufacturers often require before approving a claim.",
          ],
        },
      },
      {
        type: "markdown",
        markdown: `Two catches matter. First, manufacturers often need an accredited installer to diagnose a fault and supply evidence before they approve a claim, so you will need a replacement installer anyway. Second, if a brand has no local Australian support, even a valid warranty can be slow and costly to claim. That is why brand choice matters as much as installer choice.`,
      },
      {
        type: "takeaways",
        heading: "What to remember",
        items: [
          "Your panels keep working and your manufacturer warranties stay valid after a closure.",
          "The workmanship warranty and ongoing service are what you lose, unless insurance backs them.",
          "You will likely need an accredited installer anyway, since manufacturers want a diagnosis.",
          "Secure your inverter monitoring in your own name so silent faults don't go unseen.",
          "Act early while the system works, rather than scrambling after a fault.",
        ],
      },
      {
        type: "markdown",
        markdown: `## Warning Signs Your Installer May Be in Trouble

Closures rarely come with an announcement. Watch for:

- Calls and emails going unanswered, or a disconnected phone number
- A website that is down or has not been updated in months
- Cancelled or repeatedly rescheduled service visits
- Warranty replacements that stall with no explanation
- A silent social media page and staff who have left
- A liquidation or administration notice under the company name

## What to Do Right Away if Your Installer Has Closed

1. **Confirm it.** Look up the company's ABN on ABN Lookup and search ASIC's published notices for any insolvency appointment.
2. **Gather your paperwork.** Find your contract, invoice, warranty documents, electrical compliance certificate, grid connection approval and equipment serial numbers.
3. **Contact your manufacturers.** Check your warranty status and ask for a list of approved installers in the Northern Territory.
4. **Secure your monitoring.** Make sure your inverter app account is in your name, not the installer's. Without monitoring, you will not know a fault has cut your output.
5. **Book a system health check.** An accredited installer can inspect the system and give you a baseline.
6. **Keep paying your finance.** If you financed the system, speak to your lender before changing anything.
7. **Seek help if you lost money.** If you paid a deposit for work not completed, contact NT Consumer Affairs and the appointed liquidator.`,
      },
      {
        type: "figure",
        src: "/assets/images/hosted/goodwe-saa-install.webp",
        alt: "Accredited installer servicing a solar system in Darwin",
      },
      {
        type: "markdown",
        markdown: `## Who Will Service Your System Now?

Any suitably accredited installer can service your system, but expect a fee, since warranties rarely cover labour. Some installers also hesitate to take on another company's work because of liability, and they may inspect first and quote second. That is a good reason to act early, while the system is working, instead of waiting for a fault. Our [solar panel maintenance team](/services/solar-panel-maintenance-darwin) can give your system a baseline health check, and handle [solar panel repair](/services/solar-panel-repair-darwin) if a fault turns up.

## What About Your Finance, Rebates and Insurance?

- **Finance:** A loan or payment plan is a separate contract with your lender. It normally continues even if the installer closes, so confirm the terms.
- **Rebates:** The small-scale technology certificate (STC) discount was applied when you bought the system and is normally not affected, but keep every piece of paperwork.
- **Insurance:** Make sure your home insurer knows about the system, and check whether the workmanship warranty was insurance-backed.`,
      },
      {
        type: "cta",
        cta: {
          heading: "Sick of installers who disappear once the invoice is paid?",
          body: "Your roof deserves a team that is still here in year five. Oneroof Solar is Australian-owned and Darwin-based, with $0 deposit plans and support long after installation.",
          buttonLabel: "Talk to a Local Darwin Installer",
          buttonHref: "/contact",
          phoneLine: "or call us on 0483 986 444.",
        },
      },
      {
        type: "markdown",
        markdown: `## How to Choose an Installer Who Will Still Be Around in 10 Years

No installer can promise the future, but you can lower the risk. Before you sign:

- **Check their track record.** How long have they traded in the NT, and do they have a real local office?
- **Confirm accreditation.** Ask for their Solar Accreditation Australia details, and learn [how to check SAA accreditation](/blog/saa-accreditation-check-solar-installer/).
- **Pick brands with local support.** A battery or inverter brand with an Australian presence is easier to claim on. Compare the [solar battery brands](/products/solar-battery-brands/) we install.
- **Get the workmanship warranty in writing,** with the duration and what it covers, and ask whether insurance backs it.
- **Ask about aftercare.** Who services the system, and how do you reach them?
- **Look for transparent pricing and finance.** Avoid pressure to sign on the spot, and know the difference between [an installer and a broker](/blog/solar-installer-vs-solar-broker-darwin/).

## Why Darwin Homeowners Choose Oneroof Solar

Oneroof Solar has served the Northern Territory since 2019 and is fully Australian-owned. You get one team from consultation and design through installation and ongoing support, not a salesperson who hands you off to a subcontractor. The team installs trusted battery brands such as Fox ESS and Sungrow, offers [EV charger installation](/services/ev-chargers/installation), and serves Darwin, Palmerston, Alice Springs, Katherine and Tennant Creek. And if you ever need help, you know where to find the local Berrimah team.

## Don't Wait for a Closure to Find Out How Protected You Are

An installer closing does not switch off your solar, but it removes the people who were meant to look after it. Check your paperwork, secure your monitoring, and choose your next installer carefully, because a system this valuable needs someone behind it for the long run.`,
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          { q: "Can another company take over my installer's warranty?", a: "Sometimes. When a solar company closes, another business may buy its customer base and agree to honour existing warranties, but there is no guarantee. Don't assume it will happen. Ask in writing who is responsible for your workmanship warranty, and rely on your manufacturer warranties either way." },
          { q: "Will my warranty be void if a different installer services my system?", a: "Not if the work is done properly. Manufacturers generally expect repairs and servicing to be done by a suitably accredited installer, and many ask for a report on the fault. Always check the warranty terms with the manufacturer before work starts, and keep the new installer's invoice and report." },
          { q: "Does my battery have different risks if my installer closes?", a: "It can. Batteries are more complex than panels, and faults often need a trained technician and manufacturer support to diagnose. Keep your battery's serial number and app login, and confirm the brand has an Australian service team, as Fox ESS and Sungrow do through their local offices." },
          { q: "Should I pay a large deposit upfront to an installer?", a: "Be careful. A big upfront payment leaves you exposed if the company closes before the work is finished. A $0 deposit plan avoids that risk, so ask for a staged payment schedule or a $0 deposit option and get everything in writing." },
          { q: "Will my grid connection and feed-in arrangement stop if my installer closes?", a: "Normally not. Your connection and any feed-in arrangement sit with your electricity retailer and network provider, not your installer, so your system should keep exporting as before. Keep your connection approval paperwork handy in case you ever need to prove the system was approved." },
        ],
      },
      {
        type: "cta",
        cta: {
          heading: "Don't wait for the failure to find out nobody's there.",
          body: "Every month with an unsupported system is a month of silent faults and power you are not getting. Start with an installer who stands behind the work.",
          buttonLabel: "Request Your Free Quote",
          buttonHref: "/contact",
          phoneLine: "or call Oneroof Solar on 0483 986 444.",
        },
      },
    ],
  },
];

export function getPostBySlug(slug?: string): BlogPost | undefined {
  if (!slug) return undefined;
  const clean = slug.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean).pop() || "";
  return blogPosts.find((post) => post.slug === clean);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.dateIso < b.dateIso ? 1 : -1));
}

export function getPostPath(post: BlogPost): string {
  return post.canonicalPath.replace(/\/+$/, "") || `/${post.slug}`;
}

export function isBlogPath(pathname: string): boolean {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/blogs" || clean === "/blog") return true;
  if (clean.startsWith("/blogs/") || clean.startsWith("/blog/")) return true;
  return blogPosts.some((post) => {
    const canonical = post.canonicalPath.replace(/\/+$/, "");
    return clean === canonical || clean === `/${post.slug}`;
  });
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
