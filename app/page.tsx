import { Banner } from "@/components/Banner";
/* import { fetchProperties } from '../lib/fetch-properties'; */
/* import { InmueblesGrid } from "../inmuebles"; */


export default async function Home() {

  /*   const inmuebles = await fetchProperties(); */

  return (
    <div className="">
      <main className="">
        <Banner />
        {/* <InmueblesGrid inmuebles={inmuebles} /> */}
      </main>
    </div>
  );
}
