"use client";

import CardTeamPerson from "@/components/Home/CardTeamPerson";
import { StaticImageData } from "next/image";
import viktor from "./../../assets/images/team/viktor.jpg";

export interface TeamPerson {
  id: number;
  image: StaticImageData;
  fullname: string;
  role: string;
}

const Team = () => {
  const team: TeamPerson[] = [
    {
      id: 1,
      image: viktor,
      fullname: "Viktor Luka",
      role: "Full-stack Developer",
    },
  ];

  return (
    <section
      className="relative mt-24"
      data-aos="fade-up"
      data-aos-offset="400"
    >
      <div>
        <h1 className="font-karantina relative z-1 text-center text-8xl">
          Our Team
        </h1>
        <div className="relative mt-6 flex justify-center overflow-hidden">
          <ul className="flex shrink-0 gap-12">
            {team.map((person) => (
              <CardTeamPerson key={person.id} person={person} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
