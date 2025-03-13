import Hero from "@/components/Hero/Hero"

// This is a Server Component, so you can fetch data directly here
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section>
        <h1 className="hiking-font text-2xl md:text-[10rem]">Our Picks</h1>
      </section>
    </div>
  )  

}
