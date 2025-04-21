import Image from "next/image";

import type { TeamPerson } from "@/components/Home/Team";

interface Props {
  person: TeamPerson;
}

const CardTeamPerson = ({ person }: Props) => {
  return (
    <li className="rounded-4xl bg-[#FAB735] p-4">
      <figure className="relative h-72 w-72">
        <Image
          className="h-full w-full rounded-4xl object-cover"
          src={person.image}
          alt={person.fullname}
          width={280}
          height={280}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </figure>
      <div className="mt-5 rounded-4xl bg-[#F2680F] px-4 py-2">
        <h1 className="text-4xl font-bold">{person.fullname}</h1>
        <h3 className="mt-5 text-right text-3xl">{person.role}</h3>
      </div>
    </li>
  );
};

export default CardTeamPerson;
