import Head from "next/head";
import Container from "@/components/Container";
import MenuButton from "@/components/initialPage";
import LoginContent from "@/components/LoginContent";
import Footer from "@/components/Footer";
import MenuButtons from "@/components/initialPage";
import Menu from "@/components/Menu";
import {
  CardScrollPrimary,
  CardScrollSecondary,
} from "@/components/componentsCard";
import ScrollCard from "@/components/ScrollCardPropriedade";
import ScrollCardTalhao from "@/components/ScrollCardTalhao";
import Labels from "@/components/Labels";
import styles from "@/components/Buttons/Buttons.module.css";
import Button from "@/components/Buttons";
import {InputField, SelectField}  from "@/components/componentsForm";

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
        {/* Propriedade */}
        {/* <Button
          text="Propriedade"
          route="/propriedade"
          className={styles.Button}
          textClass={styles.Text}
        /> */}
        {/* Botão de Perfil */}
        {/* <Button
          text="Próximo"
          route="/proximo"
          className={styles.ButtonSecondary}
          textClass={styles.Text}
        /> */}
        {/* Botão de Finalizar */}
        {/* <Button
          text="Finalizar"
          route="/finalizar"
          className={styles.ButtonThirty}
          textClass={styles.Text}
        /> */}
        {/* Botão de Perfil */}
        {/* <Button
          text="Perfil"
          route="/perfil"
          className={styles.ButtonFourth}
          textClass={styles.Text}
        /> */}
        {/* Botão de Excluir */}
        {/* <Button
          text="Excluir"
          route="/excluir"
          className={styles.ButtonFifth}
          textClass={styles.Text}
        /> */}
        {/* Botão de Editar */}
        {/* <Button
          text="Editar"
          route="/editar"
          className={styles.ButtonSixth}
          textClass={styles.Text}
        /> */}
        {/* Escanear folha */}
        {/* <Button
          text="Escanear Folha"
          route="/escanear"
          className={styles.ButtonEsc}
          textClass={styles.Text}
          imgSrc="/images/Vector_escan.png"
          imgClass={styles.imgScan}
        /> */}
        {/* Upload */}
        {/* <Button
          text="Fazer Upload"
          route="/"
          className={styles.ButtonUpload}
          textClass={styles.Text}
        /> */}
        {/* Botão de Voltar */}
        {/* <Button
          route="/voltar"
          imgClass={styles.imgVolt}
          imgSrc="/images/Vector.png"
          className={styles.ButtonSeventh}
          textClass={styles.Text}
        /> */}
        {/* Drone */}
        {/* <Button
          text="Drone"
          route="/"
          className={styles.ButtonDrone}
          textClass={styles.Drone}
          imgSrc="/images/Vector_drone.png"
          imgClass={styles.imgDrone}
        /> */}
        {/* Escanear com animação e loader */}
        {/* <Button route="/" className={styles.ButtonEscanear} escanear={true} /> */}
        {/* Voltar com ícone e texto */}
        {/* <Button
          route="/voltar"
          className={styles.ButtonEight}
          text="Voltar"
          textClass={styles.volt}
          imgSrc="/images/Vector.png"
          imgClass={styles.imgVolt}
        /> */}
        {/* <InputField type="text" variant="Primary" />
        <InputField type="number" variant="Secondary" />
        <InputField type="email" variant="Thirdy" />
        <InputField
          type="password"
          variant="Fifth"
          placeholder="Digite sua senha"
        />
        <InputField type="number" variant="Eighth" />
        <SelectField/> */}
      </main>
    </>
  );
}
