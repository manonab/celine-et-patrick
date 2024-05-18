import React from 'react';
import { useParams } from 'react-router-dom';

export const Result: React.FC = () => {
  const { percentage } = useParams<{ percentage: string }>();
  const percentageNum = parseFloat(percentage ?? '0');

  return (
    <div className="mx-2 mb-5 mt-10 text-center font-npmedium">
      {percentageNum > 10 && percentageNum < 30 && (
        <div className="text-lg">
          <p className='text-2xl font-aauxblack text-red-300'>Bon, pas ouf tes réponses, t'as le droit qu'au début du menu. !</p>
        </div>
      )}
      {percentageNum > 30 && percentageNum < 50 && (
        <div className="text-lg">
          <p className='text-2xl font-aauxblack text-red-300'>Bon, c'est un début mais c'est pas trop ça, t'as le droit qu'à la première partie du menu. !</p>
        </div>
      )}
      {percentageNum > 50 && percentageNum < 70 && (
        <div className="text-lg">
          <p className='text-2xl font-aauxblack text-red-300'>Bon, tu commences à cerner Céline et Patrick il te reste un bout de chemin. !</p>
        </div>
      )}
      {percentageNum > 70 && percentageNum < 90 && (
        <div className="text-lg">
          <p className='text-2xl font-aauxblack text-red-300'>Presque incollable sur Céline et Patrick, Féliciation ! T'as quasiment tout le menu!</p>
        </div>
      )}
      {percentageNum === 100 && (
        <div className="text-lg">
          <p className='text-2xl font-aauxblack text-red-300'>On peut dire que tu es incollable au sujet de Céline et Patrick ! Tu as accès à tout le menu!</p>
        </div>
      )}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">***</h1>
      </div>
      <div className="space-y-6">
        {percentageNum > 0 && (
          <div className="text-lg">
            <p>Quasi de veau braisé au romarin</p>
          </div>
        )}
        {percentageNum > 20 && (
          <div className="text-lg">
            <p>Purée de patate douce et légumes de saison</p>
          </div>
        )}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">***</h1>
        </div>
        {percentageNum > 35 && (
          <div className="text-lg">
            <p>Assiette de trois fromages affinés, tombée de noix et noisettes ou fromage blanc</p>
          </div>
        )}
        {percentageNum > 50 && (
          <div className="text-lg">
            <p>Pièce montée deux macarons</p>
          </div>
        )}
        {percentageNum > 70 && (
          <div className="text-lg">
            <p>Buffet de desserts</p>
            <ul className="list-none">
              <li>Crème brûlée</li>
              <li>Salade de fruits frais</li>
              <li>Îles flottantes</li>
              <li>Panna cotta vanille et coulis de fruits rouges</li>
              <li>Mousse au chocolat et orange confite</li>
              <li>Soupe de fraises au basilic</li>
            </ul>
          </div>
        )}
        {percentageNum == 100 && (
          <div>
            <div className="text-lg">
              <p>Pain (miche)</p>
            </div>
            <div className="text-lg">
              <p>Café, thé, infusion</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
