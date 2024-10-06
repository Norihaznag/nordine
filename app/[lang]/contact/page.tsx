import Contact from "@/app/components/contact/Contact";
import content from "@/app/content/home.json";
import { Metadata } from "next";

type PageProps = {
  params: {
    lang: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang = "en" } = params;
  const home = content[lang as keyof typeof content];

  return {
    title: `${home.contact.title} | Your Name`,
    description: home.contact.description,
    openGraph: {
      title: `${home.contact.title} | Your Name`,
      description: home.contact.description,
      images: [
        {
          url: "/path-to-contact-image.jpg",
          width: 1200,
          height: 630,
          alt: "Contact Us",
        },
      ],
    },
  };
}

const ContactPage = ({ params }: PageProps) => {
  const { lang = "en" } = params;
  const home = content[lang as keyof typeof content];

  return (
    <main className={`min-h-screen ${lang === "ar" ? "text-right" : ""}`}>
      {/* <h1 className="sr-only">{home.contact.title}</h1> */}
      <section
        aria-labelledby="contact-title "
        className=" md:grid grid-cols-2 gap-10 items-center p-[5%] md:p-[10%] md:px-[15%]"
      >
        <div className="top order-2">
          <div
            className="thumbnail w-full md:min-h-[80vh] bg-[url('../public/images/third.png')] bg-cover bg-no-repeat"
            role="img"
            aria-label="Contact page header image"
          ></div>
        </div>

        <div className="bottom">
          <h2
            id="contact-title"
            className="text-[1.9rem] font-semibold  mt-4"
          >
            {home.contact.title}
          </h2>

          <Contact />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
