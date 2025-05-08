import Head from "next/head";
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
        {/* Inputs text */}
        {/* <InputField type="text" variant="Primary" />
        <InputField type="text" variant="Twelfth" /> */}
        {/* Inputs Name/Propriedade */}
        {/* <InputField type="name" variant="inputSecondary" />
        <InputField type="name" variant="Secondary" /> */}
        {/* Inputs CNPJ */}
        <InputField type="text" variant="inputSecondary" />
        <InputField type="text" variant="inputSecondary" />
        <InputField type="text" variant="inputThirdy" />


        {/* <InputField type="endereço" variant="Fourth" />
        <InputField type="senha" variant="Fifth" />
        <InputField type="numero" variant="Sixth" />
        <InputField type="cidade" variant="Seventh" />
        <InputField type="sobrenome" variant="Eighth" />
        <InputField type="email" variant="Ninth" />
        <InputField type="number" variant="Tenth" />
        <InputField type="number" variant="Eleventh" /> */}
        

        {/* <SelectField/> */}
      </main>
    </>
  );
}
