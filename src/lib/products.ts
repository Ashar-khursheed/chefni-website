import type { StaticImageData } from "next/image";

import noodleBowl from "@/assets/food/noodle-bowl.webp";
import pattyStack from "@/assets/food/patty-stack.webp";
import type { FoodItem } from "@/components/food/floating-food";

/** A shop that stocks the product, or a number to call when no shop is listed yet. */
export type Availability =
  | { kind: "store"; name: string; city: string; note?: string }
  | { kind: "phone"; note: string };

export type Product = {
  slug: string;
  name: string;
  /** Short line from the packaging or the launch artwork. */
  strapline: string;
  summary: string;
  description: string;
  facts: Array<{ label: string; value: string }>;
  /** Shown as written on the artwork; omitted when no price has been published. */
  price?: { display: string; amount: number; currency: string };
  availability: Availability[];
  /** Serving-suggestion photo, cut out on a transparent background. */
  image: StaticImageData;
  imageAlt: string;
  tone: "blush" | "petal";
  /** Loose ingredients that fall past the product as its section scrolls by. */
  garnish: FoodItem[];
};

export const products: Product[] = [
  {
    slug: "plain-egg-noodles",
    name: "Plain Egg Noodles",
    strapline: "Slurp-worthy news",
    summary: "Fully cooked egg noodles, frozen for convenience, in a 450 g pack.",
    description:
      "Egg noodles that are already cooked and then frozen, so the slow part is done before the pack reaches your kitchen. They are plain on purpose: toss them with vegetables and soy for a stir-fry, or use them wherever a recipe calls for noodles.",
    facts: [
      { label: "Ready", value: "Fully cooked" },
      { label: "Storage", value: "Frozen for convenience" },
      { label: "Pack size", value: "450 g" },
      { label: "Grade", value: "Premium quality" },
    ],
    price: { display: "Rs. 450", amount: 450, currency: "PKR" },
    availability: [{ kind: "store", name: "Fresh Basket", city: "Karachi", note: "Now in the freezer aisle" }],
    image: noodleBowl,
    imageAlt: "Serving suggestion: a bowl of stir-fried egg noodles with vegetables, lifted with chopsticks",
    tone: "blush",
    garnish: [
      { kind: "nest", left: "1%", top: "4%", size: "clamp(54px, 7vw, 110px)", fall: [-160, 300], rotate: [-30, 140], depth: 30 },
      { kind: "nest", left: "92%", top: "46%", size: "clamp(44px, 5vw, 84px)", fall: [-240, 380], rotate: [20, -160], depth: 22, className: "max-md:hidden" },
      { kind: "onion", left: "47%", top: "2%", size: "clamp(20px, 2.4vw, 36px)", fall: [-120, 460], rotate: [0, 240], depth: 16 },
      { kind: "carrot", left: "44%", top: "80%", size: "clamp(40px, 5vw, 76px)", fall: [-200, 180], rotate: [-20, 170], depth: 14, className: "max-md:hidden" },
      { kind: "sesame", left: "96%", top: "12%", size: "13px", fall: [-100, 520], rotate: [0, 340], depth: 10 },
      { kind: "chilli", left: "3%", top: "72%", size: "clamp(20px, 2.2vw, 32px)", fall: [-260, 240], rotate: [0, -220], depth: 18 },
    ],
  },
  {
    slug: "beef-burger-patty",
    name: "Beef Burger Patty",
    strapline: "For your anytime & everyday",
    summary: "Juicy, flavorful beef burger patties, kept frozen until you are ready to cook.",
    description:
      "Beef patties made for the grill, the pan and the weeknight in between. Juicy, flavorful and always delicious, they stay in the freezer until the buns are ready.",
    facts: [
      { label: "Made with", value: "Beef" },
      { label: "Storage", value: "Keep frozen" },
      { label: "Taste", value: "Juicy and flavorful" },
      { label: "Good for", value: "Grill or pan" },
    ],
    availability: [{ kind: "phone", note: "Call to find out where to get it" }],
    image: pattyStack,
    imageAlt: "Serving suggestion: a stack of three grilled beef burger patties on lettuce",
    tone: "petal",
    garnish: [
      { kind: "patty", left: "90%", top: "2%", size: "clamp(58px, 7.5vw, 120px)", fall: [-160, 320], rotate: [20, -150], depth: 32 },
      { kind: "patty", left: "0%", top: "58%", size: "clamp(46px, 5.5vw, 92px)", fall: [-260, 360], rotate: [-25, 130], depth: 22, className: "max-md:hidden" },
      { kind: "onion", left: "50%", top: "4%", size: "clamp(20px, 2.4vw, 36px)", fall: [-120, 440], rotate: [0, -230], depth: 16 },
      { kind: "sesame", left: "4%", top: "10%", size: "13px", fall: [-100, 540], rotate: [10, 320], depth: 10 },
      { kind: "sesame", left: "55%", top: "88%", size: "12px", fall: [-300, 160], rotate: [-40, 280], depth: 10 },
      { kind: "chilli", left: "95%", top: "70%", size: "clamp(20px, 2.2vw, 32px)", fall: [-240, 260], rotate: [0, 210], depth: 18 },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
