import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
 title: `A propos de ${config.appName}`,
 canonicalUrlRelative: "/a-propos",
});

const About = () => {

 return (
  <main className="max-w-xl mx-auto">
   <div className="p-5">
    <Link href="/form/residenceprincipale" className="btn btn-ghost">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
     >
      <path
       fillRule="evenodd"
       d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
       clipRule="evenodd"
      />
     </svg>{" "}
     Retour
    </Link>
    <h1 className="text-3xl font-extrabold pb-6">
     A propos de {config.appName}
    </h1>

    <pre
     className="leading-relaxed whitespace-pre-wrap"
     style={{ fontFamily: "sans-serif" }}
    >
     {`Trouver le bien de ses rêves, ça prend toujours beaucoup de temps. La phase de recherche est clairement la plus longue en matière d’acquisition immobilière.

On surfe sur les sites d’annonces immobilières, avec l’espoir de trouver le bien qui nous correspond. Aujourd’hui, 95 % des acquéreurs consultent les annonces immobilières sur internet. 41 % des acheteurs potentiels consacrent plusieurs heures par jour à leur recherche. Il convient ensuite de contacter une ou deux agences et de faire des visites. Selon une étude récente, les acquéreurs visitent en moyenne environ 6 biens avant de trouver un bien à leur goût. Cela représente beaucoup de temps. DU TEMPS PERDU.

Notre objectif est de vous faire gagner du temps sur la recherche et de vous éviter d’en perdre avec des visites de biens qui ne vous conviennent pas, et ce, sans vous limiter au catalogue de bien d’une agence.

Mettre en phase vos envies et l’offre de biens disponible ne se fait pas en un claquement de doigts. Avec notre formulaire, on vous propose de mettre toutes les chances de votre côté.

Le principe est simple. Grâce au formulaire, on définit ensemble votre bien immobilier idéal. De là, on communique à notre réseau votre demande. Si, et seulement si, un agent a le bien de vos rêves entre les mains, il vous contacte par courriel. Et après, c’est à vous de jouer ! Vous choisissez si vous donnez suite ou pas. Vous avez les clés en main.

Adhérer à BienAdapté, c’est inverser la tendance, c’est faire de votre recherche un plaisir et non une corvée. C’est gagner du temps. On vous laisse donc remplir le petit formulaire en cliquant`} <Link href="/form" className="font-bold">
      ici.
     </Link> {`
À bientôt 😎

L’équipe BienAdapté.

PS: si vous avez une question/réclamation, vous pouvez nous écrire à l’adresse suivante:`}  <a href="mailto:bien.adapte@outlook.fr" className="font-bold">bien.adapte@outlook.fr</a>

    </pre>
   </div>
  </main>
 );
};

export default About;
