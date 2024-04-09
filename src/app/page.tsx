import Banner from "@/components/banner";
import CardEvento from "@/components/cardEvento";
import SectionDestaque from "@/components/sectionDestaque";
import SectionEvento from "@/components/sectionEventos";
import SectionHistoria from "@/components/sectionHistoria";
import Titulo from "@/components/titulo";

export default function Home() {
  return (
    <main>
      <Banner/>
      <SectionEvento/>
      <SectionDestaque/>
      <SectionHistoria/>
    </main>
  );
}
