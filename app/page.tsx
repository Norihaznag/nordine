import content from "@/app/content/home.json";
import Link from "next/link";
import Card from "./components/content/Card";

// Define types for the content structure
type Content = {
  [key: string]: {
    home: HomeContent;
    skills: SkillsContent;
    projects: ProjectsContent;
    contact: ContactContent;
  };
};

type HomeContent = {
  title: string;
  description: string;
  cta: string;
};

type SkillsContent = {
  title: string;
  description: Array<{
    name: string;
    definition: string;
  }>;
};

type ProjectsContent = {
  title: string;
  description: string;
  projectsList: Array<{
    name: string;
    link: string;
    description: string;
    technologies: string[];
  }>;
};

type ContactContent = {
  title: string;
  description: string;
  cta: string;
};

type PageProps = {
  params: {
    lang: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { lang = "en" } = params;
  const { home, skills, projects, contact } = content[lang as keyof typeof content] as Content[keyof Content];

  return (
    <div className={`min-h-screen ${lang === "ar" ? "text-right" : ""} `}>
      <section className="md:bg-[url('../public/backgrounds/main.svg')] bg-cover bg-no-repeat flex md:grid grid-cols-2 flex-col gap-4  min-h-[40vh]   justify-center md:p-[15%]">
        <div className="thumbnail w-full min-h-[40vh] bg-[url('../public/backgrounds/main.svg')] bg-cover bg-no-repeat md:hidden"></div>

        <Card className="order-2">
          <h1 className="text-[1.5rem] font-semibold ">{home.title}</h1>
          <p>{home.description}</p>
          <Link href={`${lang}/projects`} className=" p-2 border hover:shadow-inner  ">
            {home.cta}
          </Link>
        </Card>
      </section>

      <section className="flex border-b-2 flex-wrap justify-center md:p-[15%] md:bg-[url('../public/backgrounds/skills.svg')] bg-cover bg-no-repeat">
        <div className="thumbnail w-full min-h-[40vh]  md:hidden  bg-[url('../public/backgrounds/skills.svg')] bg-cover bg-no-repeat  "></div>
        <div className="bootom">
        
          <Card className="">
          <h1 className="text-[1.9rem]  font-semibold text-nowrap">
            {skills.title}
          </h1>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {skills.description.map((i, index) => (
                <li key={index} className=" p-4 ">
                  <div className="content">
                  <h1 className="text-[1.5rem] font-semibold">{i.name}</h1>
                  <p>{i.definition}</p>
                  </div>
                 
                </li>
              ))}
            </ul>
          </Card>
        </div>


      </section>

      <section className="flex border-b-2  flex-col gap-4  min-h-[40vh]  md:p-[10%] md:flex-row  ">
        <div className="thumbnail w-full min-h-[40vh] bg-[url('../public/backgrounds/projects.svg')] bg-cover bg-no-repeat"></div>
        <div className="content p-5 flex flex-col gap-6">
          <h1 className="text-[1.9rem] font-semibold">{projects.title}</h1>
          <p>{projects.description}</p>
          <ul className="flex flex-wrap gap-2 md:grid grid-cols-3">
            {projects.projectsList.map((i, index) => (
              <li key={index} className=" ">
                <Link
                  className="text-[1.5rem] mb-1 font-semibold"
                  href={i.link}
                >
                  {i.name}
                </Link>
                <h4 className="text-[#393939]">{i.description}</h4>
                <ul className="flex flex-wrap gap-2 ">
                  {i.technologies.map((t, index) => (
                    <li key={index} className="text-blue-700 hover:underline">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex flex-col md:flex-row  min-h-[40vh]  justify-center md:p-[15%] md:grid grid-cols-2 bg-[url('../public/backgrounds/third.png')] bg-cover bg-no-repeat ">
        <div className="thumbnail  min-h-[50vh]  bg-cover bg-no-repeat md:hidden  "></div>
        <Card>

          <h1 className="text-[1.9rem] font-semibold">{contact.title}</h1>
          <p>{contact.description}</p>
          <Link href={`${lang}/contact`} className=" p-2 border hover:shadow-inner  ">
            {contact.cta}
          </Link>
        </Card>
      </section>
    </div>
  );
};

export default Page;