export const DEFAULT_SERVICES = [
  {
    title: "Residential Solar",
    slug: "residential-solar-system",
    description: "Harness the power of the sun for your home. We install premium 6.6kW to 13.2kW systems that drastically cut or eliminate your power bills. Ideal for Darwin's sunny climate.",
    features: [
      "High-performance Jinko or AIKO panels",
      "Sungrow or FoxESS inverters",
      "Full installation & grid connection",
      "25-year performance warranty"
    ],
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=60&w=1000&auto=format&fit=crop"
  },
  {
    title: "Commercial Solar",
    slug: "commercial-solar-system",
    description: "Protect your business's bottom line from rising energy costs. We design high-yield commercial PV systems tailored to your energy consumption profile.",
    features: [
      "Massive ROI & fast payback periods",
      "Tax benefits & government incentives",
      "Custom engineered for your roof space",
      "Ongoing maintenance & support"
    ],
    image: "https://a-us.storyblok.com/f/1006159/810x471/62865d0b80/des-1116-csm.jpg/m/1000x0/filters:quality(60):format(webp)"
  },
  {
    title: "Solar Batteries & Storage",
    slug: "battery-storage",
    description: "Store your excess solar energy for nighttime use. Add a battery to a new or existing system and take advantage of the 30% federal rebate.",
    features: [
      "Blackout protection",
      "Maximize self-consumption",
      "Reduce peak demand charges",
      "Seamless hybrid inverter integration"
    ],
    image: "https://i.postimg.cc/VN7B2NkJ/DSC00505-Enhanced-NR-(1)-jpg-(2)-(1).webp"
  },
  {
    title: "EV Chargers",
    slug: "ev-chargers",
    description: "Get ready for the future with smart EV chargers. We provide installation and integration with your existing solar system.",
    features: [
      "Smart EV charger installation",
      "Integration with solar systems",
      "Fast charging capabilities",
      "Residential & commercial options"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYjFUKNKyOMySm6lkKfTkODY4oKkYzGvdgw&s"
  },
  {
    title: "Repairs & Maintenance",
    slug: "repairs-and-maintenance",
    description: "Keep your system running at peak performance with professional panel cleaning, system health checks, and repairs.",
    features: [
      "Professional panel cleaning",
      "System health checks",
      "Performance optimization",
      "Fault diagnosis & repairs"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExfMGgoZJ0SC5uObr6P1AIzCA5Qme1j8pLA&s"
  },
  {
    title: "Solar Inverters",
    slug: "solar-inverters",
    description: "Upgrade or replace your solar inverter for maximum efficiency. We offer top-tier brands like Sungrow, Fronius, and FoxESS.",
    features: [
      "Premium inverter brands",
      "High efficiency conversion",
      "Smart monitoring capabilities",
      "Extended warranties"
    ],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=60&w=1000&auto=format&fit=crop"
  }
];

export const DEFAULT_PAGES = [
  {
    id: 'home',
    data: {
      title: "Home",
      heroTitle: "Solar Systems Built for \n<span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-green-500 pb-2 inline-block\">Northern Territory Conditions</span>",
      heroSubtitle: "Complete Solar Systems for Darwin & the NT. Get premium 6.6 kW Solar Systems from just <strong class=\"text-white font-medium bg-white/10 px-2 py-0.5 rounded-md\">$28 per week</strong> with $0 Deposit.",
      content: "",
      sections: {
        hero: {
          badge: "Federal Rebate: Save 30% on Solar Batteries",
          title: "Solar Systems Built for <br />\n<span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-green-500 pb-2 inline-block\">Northern Territory Conditions</span>",
          subtitle: "Complete Solar Systems for Darwin & the NT. \nGet premium 6.6 kW Solar Systems from just <strong class=\"text-white font-medium bg-white/10 px-2 py-0.5 rounded-md\">$28 per week</strong> with $0 Deposit.",
          ctaText: "Get Free Quote",
          features: ["$0 Deposit Options", "25 Years Performance"]
        },
        expertise: {
          badge: "Our Expertise",
          title: "Complete Energy <br class=\"hidden sm:block\" /><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500\">Solutions</span>",
          items: [
            {
              title: "Residential & Commercial Solar",
              description: "Expert installation of premium Tier 1 solar panels tailored to maximize your energy production. We analyze your roof's orientation, local weather patterns, and your specific energy consumption profile."
            },
            {
              title: "Battery Storage Systems",
              description: "Store your excess solar energy for nighttime use and protect against grid blackouts with advanced lithium technology."
            },
            {
              title: "Smart Inverters",
              description: "High-efficiency inverters to reliably convert energy."
            },
            {
              title: "Repairs & Maintenance",
              description: "Keep your system running at peak performance."
            }
          ]
        },
        whyChooseUs: {
          badge: "Why Choose Us",
          title: "Premium Solar Systems For The Northern Territory",
          image: "https://i.postimg.cc/fWGBJR1G/dji-fly-20240620-115258-79-1718868305112-photo.webp",
          ctaText: "Get Your Free Quote",
          items: [
            {
              title: "Huge Savings & Government Grants",
              description: "Maximize your energy savings. Customized solar systems. Trust us to slash your bills. Top-tier solar panels & batteries with government grants."
            },
            {
              title: "Easy Processing Fully Taken Care By Our Experts",
              description: "Your stress-free solar journey. We handle everything, from rebates to custom solutions."
            },
            {
              title: "Power Your Life, Naturally",
              description: "Enjoy the benefits of your fully functional solar energy system. Get started today with our hassle-free solar panel installation process."
            }
          ]
        },
        process: {
          badge: "How It Works",
          title: "Your Seamless Journey to <br class=\"hidden sm:block\" />\n<span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400\">Solar Energy</span>",
          subtitle: "We've completely streamlined our process to make switching to solar as easy, fast, and stress-free as possible.",
          steps: [
            {
              title: "Free Consultation",
              description: "We assess your energy needs and evaluate your roof space remotely.",
              step: "01"
            },
            {
              title: "Custom Design",
              description: "Our engineers design a tailored solar system to maximize your ROI.",
              step: "02"
            },
            {
              title: "Installation",
              description: "Certified professionals install your system quickly and safely.",
              step: "03"
            },
            {
              title: "Power On",
              description: "Start saving immediately while reducing your carbon footprint.",
              step: "04"
            }
          ]
        },
        installer: {
          badge: "Top Quality Installers",
          title: "Your Expert <br/> \n<span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500\">Darwin Solar Installer</span>",
          image: "https://i.postimg.cc/05nhGvxW/Stuart-Park-0820.webp",
          paragraphs: [
            "As Darwin's premier solar panel installers, we are dedicated to providing the highest quality renewable energy solutions tailored specifically for the harsh Northern Territory climate.",
            "From the initial consultation to final commissioning, our expert installers handle every aspect of your solar journey, guaranteeing a seamless transition to clean, affordable, and sustainable power."
          ],
          features: [
            {
              title: "CEC Accredited",
              description: "Certified professionals ensuring the strictest safety standards."
            },
            {
              title: "Climate Ready",
              description: "Systems designed to withstand Darwin's extreme weather."
            }
          ],
          ctaText: "Get Your Free Quote",
          ctaLink: "/contact"
        },
        ecosystem: {
          badge: "Complete Integration",
          title: "The Smart Energy <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-500\">Ecosystem</span>",
          subtitle: "All your energy needs seamlessly connected and controlled from the palm of your hand.",
          items: [
            {
              title: "Intelligent App Monitoring",
              description: "Track your generation, monitor usage, and control your home's energy flow in real-time from anywhere in the world."
            },
            {
              title: "Premium Panels",
              description: "Max efficiency Tier-1 panels designed to handle the intense NT sun while maintaining maximum output."
            },
            {
              title: "EV Ready Systems",
              description: "Future-proof your home with EV charger integration. Drive completely free powered by the sun."
            },
            {
              title: "Hybrid Inverter Hub",
              description: "The brain of your energy system. Intelligently routes solar power to your home, battery, or the grid for maximum financial return."
            }
          ]
        },
        battery: {
          badge: "Energy Independence",
          title: "Uninterrupted Power for <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500\">Your Home</span>",
          image: "https://i.postimg.cc/pLr9VPVS/Nightcliff-0810-(1)-(1).webp",
          items: [
            {
              title: "Blackout Protection",
              description: "Keep your essential appliances running seamlessly during grid outages."
            },
            {
              title: "Peak Shifting",
              description: "Store cheap solar energy during the day to use during expensive evening peak times. Save up to $1,500 extra per year."
            },
            {
              title: "Maximum ROI",
              description: "Combine with the 30% Federal Battery Rebate for unprecedented return on investment."
            }
          ],
          ctaText: "Get Your Free Quote",
          ctaLink: "/contact"
        },
        guarantee: {
          title: "The Oneroof Guarantee",
          description: "Peace of mind comes standard. We stand behind our work with industry-leading warranties and local support you can count on.",
          items: [
            {
              title: "25-Year Performance Warranty",
              description: "Your solar panels are guaranteed to produce high yields for a quarter of a century."
            },
            {
              title: "CEC Accredited Experts",
              description: "Every installation is carried out by Clean Energy Council approved electricians."
            },
            {
              title: "10-Year Workmanship Warranty",
              description: "Flawless execution backed by our rigorous quality control and extended guarantee."
            },
            {
              title: "Local NT Support",
              description: "We're right here in the Territory. Fast response times and dedicated local service."
            }
          ]
        }
      }
    }
  },
  {
    id: 'about',
    data: {
      title: "About Us",
      heroTitle: "Your Trusted Solar Partner in the <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400\">Northern Territory</span>",
      content: "At Oneroof Solar, we are dedicated to helping homes and businesses across Darwin, Alice Springs, and Palmerston transition to clean, renewable energy. We believe in providing top-tier equipment, flawless installation, and exceptional customer service.",
      heroSubtitle: ""
    }
  },
  {
    id: 'contact',
    data: {
      title: "Support Online",
      heroTitle: "Let's Get In <span class=\"text-brand-500\">Touch.</span>",
      content: "Ready to start saving on your energy bills? Our Darwin-based solar experts are here to answer your questions and provide a free, no-obligation quote.\n\nReady to harness the power of the sun? Our team of experts is here to help you design the perfect solar ecosystem for your home.",
      heroSubtitle: ""
    }
  }
];
