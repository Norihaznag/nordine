import Link from "next/link";
import content from "@/app/content/home.json";
import { Metadata } from 'next';
import Image from "next/image";

type PageProps = {
  params: {
    lang: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang = 'en' } = params;
  const { projects } = content[lang as keyof typeof content];
  
  return {
    title: `${projects.title} | Noureddine Azinag`,
    description: projects.description,
    openGraph: {
      title: `${projects.title} |  Noureddine Azinag`,
      description: projects.description,
      images: [{ url: '/path-to-projects-image.jpg', width: 1200, height: 630, alt: 'Our Projects' }],
    },
  };
}

const ProjectsPage = ({ params }: PageProps) => {
  const { lang = 'en' } = params;
  const { projects } = content[lang as keyof typeof content];

  return (
    <main className="min-h-screen" lang={lang}>
      <h1 className="sr-only leading-xl font-display text-primary dark:text-primary-dark font-semibold text-5xl lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl">{projects.title}</h1>
      <section aria-labelledby="projects-title">
        <div className={`content p-5 flex md:px-[10%] md:py-[5%] flex-col gap-4 ${lang === "ar" ? "text-right" : ""}`}>
          <h2 id="projects-title" className="text-[1.9rem] font-semibold">{projects.title}</h2>
          <ul className="flex flex-wrap gap-2">
            {projects.projectsList.map((project, index: number) => (
              <li key={index} className="mb-8  md:grid grid-cols-2 gap-3 ">
                <div className={`thumbnail items-center w-full md:min-h-[50vh] bg-[#252525] ${lang === "ar" ? "text-right order-2 " : ""}`} role="img" aria-label={`${project.name} project thumbnail`}>
                  <Image src={`/images/project.png`} className="object-fill w-full h-full" width={300} height={200} alt=""/>
                </div>
                <div className="content p-[5%]">
                <h3>
                  <Link
                    className={`text-[1.5rem] mb-1 hover:text-blue-600 hover:underline flex font-semibold ${lang === "ar" ? "text-right justify-end" : ""}`}
                    href={project.link}
                  >
                    {project.name} 
                  </Link>
                </h3>
                <p className="">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <li key={techIndex} className="text-blue-700 hover:underline">
                      {tech}
                    </li>
                  ))}
                </ul>
                
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;