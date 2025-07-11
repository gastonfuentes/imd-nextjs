import { Banner } from "@/components/Banner";
import {
  BlogGrid,
  CallToAction,
  PorQueElegirnos,
  TestimoniosGrid,
} from "@/components/Home";

/* import { fetchProperties } from '../lib/fetch-properties'; */
/* import { InmueblesGrid } from "../inmuebles"; */

export default async function Home() {
  /*   const inmuebles = await fetchProperties(); */

  return (
    <div className="">
      <main className="">
        <Banner />
        {/* <InmueblesGrid inmuebles={inmuebles} /> */}

        <PorQueElegirnos />

        {/* Blog Section */}
        <BlogGrid />

        {/* Testimonials Section */}
        <TestimoniosGrid />

        {/* CTA Section */}
        <CallToAction />
      </main>
    </div>
  );
}
