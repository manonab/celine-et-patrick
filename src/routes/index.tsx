import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const MyApp = () => {
  return (
    <div className="h-screen w-screen">
      <h1 className="text-2xl text-center pt-16 mb-10 px-4 text-greenWedding">
        Bienvenue à la grande aventure des “Quiz-z’amoureux” !
      </h1>
      <p className="text-justify px-4 font-aauxmedium">
        Chers invités, préparez-vous à plonger dans les coulisses de notre
        histoire d’amour où vos connaissances sur notre couple vont être mises
        à l’épreuve. Mais ne vous inquiétez pas, c’est moins compliqué que de
        monter un meuble Ikea en duo !
        <br></br>
        <br></br>
        Nous vous avons concocté un petit jeu de questions pour tester qui de
        vous mériterait le titre de "meilleur connaisseur du couple"
      </p>
      <p className="text-justify px-4  font-aauxmedium">
        Voici comment ça va se passer :
        Répondez correctement et le menu vous sera plus ou moins révélé.
      </p>
      <br></br>
      <p className="text-justify px-4  font-aauxmedium">
        Alors, prêts à jouer ? Gardez vos smartphones à portée de main, et que
        le meilleur gagne ! N’oubliez pas, tricher est interdit, sauf si vous
        êtes vraiment très discrets.
      </p>
      <Link
        to="/questionnaire"
        className="bg-greenWedding text-white font-bold py-2 px-4 rounded m-auto block mt-16 text-center w-1/2"
      >
        Accéder au questionnaire
      </Link>
    </div>
  );
};
