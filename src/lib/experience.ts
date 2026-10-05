export type Role = {
  period: string;
  title: string;
  place: string;
  location: string;
  detail?: string;
};

export const experience: Role[] = [
  {
    period: "2005 – Present",
    title: "Pastry Chef",
    place: "Chefni – Gourmet Desserts",
    location: "Karachi, Pakistan",
  },
  {
    period: "2017",
    title: "Kitchen Manager, Research & Development",
    place: "P.F. Chang's Pakistan",
    location: "Pakistan",
  },
  {
    period: "2015",
    title: "Chef & Pastry Chef",
    place: "Fika",
    location: "Karachi, Pakistan",
  },
  {
    period: "2013 – 2014",
    title: "Chef",
    place: "Masala TV",
    location: "Karachi, Pakistan",
    detail:
      "Live and pre-recorded culinary shows: Live@Nine, Lively Weekend, Date with a Cake and Food Fantasy.",
  },
  {
    period: "2012 – 2014",
    title: "Advanced Culinary Program Trainer & Curriculum Developer",
    place: "COTHM",
    location: "Karachi, Pakistan",
  },
  {
    period: "2011 – 2012",
    title: "Pastry Chef, Restaurant Manager & Operations Manager",
    place: "Upper Crust, Zamzama",
    location: "Karachi, Pakistan",
  },
  {
    period: "2010 – 2011",
    title: "Innovation Artist, Baking Arts",
    place: "The CupCake Ladi",
    location: "Reston, Virginia",
  },
];

export const tvShows = ["Live@Nine", "Lively Weekend", "Date with a Cake", "Food Fantasy"] as const;

export const aryaVideos = [
  { id: "zompPffZLks", title: "Vanilla chocolate chip cupcakes with fluffy vanilla frosting" },
  { id: "QDNU6Z6Ci_E", title: "Chocolate Chip Cookies by Arya" },
  { id: "IqkJeFUODFs", title: "Brownies" },
  { id: "0YbaPzPzoOg", title: "Pancakes by Arya" },
  { id: "T-gHJF2kvwQ", title: "Scrambled Eggs" },
] as const;
