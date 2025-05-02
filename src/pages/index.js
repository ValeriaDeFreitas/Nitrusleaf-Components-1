import Head from "next/head";
import Container from "@/components/Container";
import MenuButton from "@/components/initialPage";
import LoginContent from "@/components/LoginContent";
import Footer from "@/components/Footer";
import MenuButtons from "@/components/initialPage";
import Menu from "@/components/Menu";
import CreateContent from "@/components/CreateContent";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonThirty,
  ButtonFourth,
  ButtonFifth,
  ButtonSixth,
  ButtonSeventh,
  ButtonEsc,
  ButtonUpload,
  ButtonDrone,
  ButtonEscanear,
  ButtonEight,
} from "@/components/Buttons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nitrusleaf &copy; 2025</title>
        <meta
          name="description"
          content="Consumo em React de uma API de Games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <main>
      {/* <ButtonPrimary/>
      <ButtonSecondary/>
      <ButtonThirty/>
      <ButtonFifth/>
      <ButtonFourth/>
      <ButtonSixth/>
      <ButtonSeventh/> 
      <br></br>
      <ButtonEsc/>
      <br></br>
      <ButtonUpload/>
      <br></br>
      <ButtonDrone/>
      <br></br> 
      <ButtonEscanear/>
      <br></br>
      <ButtonEight />*/} 
      <Footer/> 
      </main>
    </>
  );
}
