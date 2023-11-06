'use client';

import { SimplifiedAttributes } from "@/app/api/types/entities";

function CardTable({ attr }: { attr: SimplifiedAttributes }) {
  if (Object.keys(attr).length == 0) {
    return <div>Empty!</div>
  }

  return (
      <div className={"flex text-center items-center flex-row"}>
        <img className="object-cover h-[150px] w-[150px] aspect-square mr-4" src={attr.image} alt="cover image"/>
        <div className="flex flex-col justify-start text-left">
          <p className="ml-2 text-sm">{attr.type}</p>
          <h2 className="my-2 text-6xl">{attr.name}</h2>
          <p className="ml-2 text-sm">{attr.owner} • {attr.total} tracks</p>
        </div>
      </div>
  );
  

}

  export default CardTable;