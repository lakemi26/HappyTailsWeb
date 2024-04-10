import Banner from "@/components/banner";
import SectionDestaque from "@/components/sectionDestaque";
import SectionEvento from "@/components/sectionEventos";
import SectionHistoria from "@/components/sectionHistoria";

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
