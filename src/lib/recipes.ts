export type Recipe = {
  slug: string;
  title: string;
  /** Slug of the Chefni product the recipe is built around. */
  product: string;
  time: string;
  serves: string;
  intro: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "veg-stir-fry-noodles",
    title: "Weeknight veg stir-fry noodles",
    product: "plain-egg-noodles",
    time: "15 min",
    serves: "2–3",
    intro: "The noodles are already cooked, so this is mostly about getting the vegetables crisp and glossy.",
    ingredients: [
      "1 pack Chefni Plain Egg Noodles",
      "1 carrot, cut into thin strips",
      "1 capsicum, sliced",
      "Half a cabbage, shredded",
      "2 cloves garlic, chopped",
      "2 tbsp soy sauce",
      "1 tbsp chilli sauce",
      "1 tbsp oil",
    ],
    steps: [
      "Heat the oil in a wok or large pan over high heat and fry the garlic for a few seconds.",
      "Add the vegetables and stir-fry for 2 to 3 minutes, until just tender.",
      "Add the noodles straight from frozen with a splash of water and toss until heated through.",
      "Stir in the soy and chilli sauces, toss well and serve hot.",
    ],
  },
  {
    slug: "chilli-garlic-noodles",
    title: "Chilli garlic noodles",
    product: "plain-egg-noodles",
    time: "10 min",
    serves: "2",
    intro: "A five-ingredient bowl for when you want something warm and punchy, fast.",
    ingredients: [
      "Half a pack Chefni Plain Egg Noodles",
      "4 cloves garlic, finely chopped",
      "1 tsp red chilli flakes",
      "1 tbsp soy sauce",
      "2 tbsp oil",
      "Spring onion, to finish",
    ],
    steps: [
      "Warm the oil gently and cook the garlic until pale gold, then take it off the heat and add the chilli flakes.",
      "Heat the noodles in a pan with a splash of water until hot.",
      "Toss the noodles with the chilli garlic oil and the soy sauce.",
      "Finish with sliced spring onion.",
    ],
  },
  {
    slug: "classic-beef-burger",
    title: "Classic beef burger",
    product: "beef-burger-patty",
    time: "15 min",
    serves: "2",
    intro: "A proper burger night without the mixing and shaping: the patty is ready to go on the pan.",
    ingredients: [
      "2 Chefni Beef Burger Patties",
      "2 burger buns",
      "2 cheese slices",
      "Lettuce, tomato and onion",
      "Mayonnaise and ketchup",
    ],
    steps: [
      "Cook the patties from frozen in a lightly oiled pan or on the grill, turning once, until cooked through.",
      "Lay a cheese slice on each patty for the last minute so it melts.",
      "Toast the buns cut side down in the same pan.",
      "Build the burgers with sauces, lettuce, tomato and onion, and serve.",
    ],
  },
];
