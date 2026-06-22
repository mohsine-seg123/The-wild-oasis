import Spinner from "../components/Spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center ">
      <Spinner />
      <p className="text-2xl">cabins doanload...</p>
    </div>
  );
  
}
