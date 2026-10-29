import { Hero } from "@/components/home/hero";
import { ChefniAi, FeaturedAndDifference, OrderAndFind, OurStory, Testimonials } from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedAndDifference />
      <OrderAndFind />
      <ChefniAi />
      <OurStory />
      <Testimonials />
    </>
  );
}
