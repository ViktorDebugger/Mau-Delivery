import CardTeamPerson from "@/components/Home/CardTeamPerson";

export interface TeamPerson {
  id: number;
  image: string;
  fullname: string;
  role: string;
}

const Team = () => {
  const team: TeamPerson[] = [
    {
      id: 1,
      image: "/images/team/viktor.jpg",
      fullname: "Viktor Luka",
      role: "Full-stack Developer",
    },
    {
      id: 2,
      image: "/images/team/roman.jpg",
      fullname: "Roman Yushchyk",
      role: "Quality Assurance",
    },
    {
      id: 3,
      image: "/images/team/oleg.jpg",
      fullname: "Oleg Odynets",
      role: "Tester",
    },
    {
      id: 4,
      image: "/images/team/alice.jpg",
      fullname: "Alice Laura Rojtburd",
      role: "Data Analytytic",
    },
    {
      id: 5,
      image: "/images/team/zhenyok.png",
      fullname: "Yevheniya Marynchak",
      role: "UI/UX",
    },
  ];

  return (
    <section className="relative mt-24" data-aos="fade-up">
      <div>
        <h1 className="font-karantina relative z-1 text-center text-8xl">
          Our Team
        </h1>
        <div className="relative mt-6 flex overflow-hidden">
          <ul className="animate-infinite-scroll-horizontal-team flex shrink-0 gap-12">
            {team.map((person) => (
              <CardTeamPerson key={person.id} person={person} />
            ))}
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
