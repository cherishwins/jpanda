import { Nav } from "@/components/brand/nav";
import { Kit } from "@/components/brand/kit";
import { Cover } from "./cover";
import { Plates } from "./plates";
import { Lattice, MaisonFooter } from "./lattice";
import { ValoremChapter } from "@/components/valorem/chapter";

export function Portfolio() {
  return (
    <main>
      <Nav />
      <Cover />
      <Plates />
      <Kit />
      <ValoremChapter />
      <Lattice />
      <MaisonFooter />
    </main>
  );
}
