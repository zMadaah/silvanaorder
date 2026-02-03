// src/app/page.tsx

import Hero from "@/section/hero/hero";

import Order from "@/section/order/order";
import Roadmap from "@/section/roadmap/roadmap";
import GoldenBox from "@/section/goldenbox/goldenbox";
import Branding from "@/section/branding/branding";
import Decoracao from "@/section/decoracao/decoracao";
import Lounge from "@/section/lounge/lounge";
import Bar from "@/section/bar/bar";
import Candy from "@/section/candy/candy";
import Presskit from "@/section/presskit/presskit";
import PistaDanca from "@/section/pistadanca/pistadanca";
import Gallery from "@/section/gallery/gallery";
import Investiment from "@/section/investiment/investiment";
import Footer from "@/section/footer/footer";


export default function Home() {
  return (
    <main className="antialiased">
      {/* Ordem lógica baseada na jornada do cliente Riquíssimos */}
      <Hero /> 
      <Order />          
      <Roadmap />        
      <Branding />       
      <Decoracao />      
      <Candy />          
      <Presskit />       
      <Lounge />         
      <PistaDanca />
      <Bar />            
      <GoldenBox />      
      <Investiment />    
      <Gallery />        
      <Footer />         
    </main>
  );
}