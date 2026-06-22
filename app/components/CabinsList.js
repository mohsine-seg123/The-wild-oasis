import React from 'react'
import CabinCard from "../components/CabinCard";
import { getCabins } from "../lib/data-service";



export default async function CabinsList() {

     const cabins =await getCabins();
     console.log(cabins);

     if (!cabins || cabins.length === 0) {
        return <p className="text-center text-2xl text-primary-200">No cabins available at the moment. Please check back later.</p>;
      }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins?.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
