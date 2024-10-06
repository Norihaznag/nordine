import content from "@/app/content/home.json";
type PageProps = {
  params: {
    lang: string;
  };
};
const About = ({params}:PageProps) => {
  const {lang = 'en'} = params
  const { about } =
    content[lang as keyof typeof content] ;
    const {title , introduction , details } = about


  return (
    <div className={`min-h-screen ${lang === "ar" ? "text-right" : ""}`}>
      <section className="flex flex-col gap-4 min-h-[40vh] md:min-h-[70vh] items-center  md:grid grid-cols-2 ">
        <div className="thumbnail w-full min-h-[60vh]  bg-[url('../public/images/contact1.jpg')] bg-cover bg-no-repeat  md:order-2"></div>
        <div className="content p-5 flex flex-col gap-4 md:p-[10%]">
          <h1 className="text-[1.9rem] font-semibold">{title}</h1>
          <h2>{introduction}</h2>
         
          
        </div>

        
      </section>

      <section className="flex flex-col gap-4 min-h-[40vh]  md:grid grid-cols-2 ">
        <div className="thumbnail w-full min-h-[40vh]  bg-[url('../public/images/contact2.jpg')] bg-cover bg-no-repeat "></div>
        <div className="content p-5 flex flex-col gap-4 md:p-[10%]">
          
          <h2>{details}</h2>         
          
        </div>

        
      </section>


    
    </div>
  );
};

export default About;
