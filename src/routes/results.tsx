import React from 'react';
import { useParams } from 'react-router-dom';

export const Result: React.FC = () => {
  const { percentage, correctCount, totalCount } = useParams<{ percentage: string, correctCount: string, totalCount: string }>();
  const percentageNum = parseFloat(percentage ?? '0');
  const correctCountNum = parseInt(correctCount ?? '0');
  const totalCountNum = parseInt(totalCount ?? '0');

  return (
    <div className="first-letter  text-center font-npmedium bg-[#FFF8E7] px-4 py-5 h-screen w-screen">
      <p className='text-sm mb-4 italic'>Tu as répondu correctement à {correctCountNum} question(s) sur {totalCountNum}</p>
      {percentageNum === 0 && percentageNum < 10 && (
        <div>
          <p className='text-xl font-aauxblack text-greenWedding mx-2'>Ce n'est pas tout à fait parfait, alors tu as le droit de connaître seulement le début du menu !</p>
        </div>
      )}
      {percentageNum > 10 && percentageNum < 30 && (
        <div>
          <p className='text-xl font-aauxblack text-greenWedding mx-2'>Ce n'est pas tout à fait parfait, alors tu as le droit de connaître seulement le début du menu !</p>
        </div>
      )}
      {percentageNum > 30 && percentageNum < 50 && (
        <div>
          <p className='text-xl font-aauxblack text-greenWedding mx-2'>C'est un bon début, mais ce n'est pas encore tout à fait ça. Tu as le droit de connaître une partie du menu  !</p>
        </div>
      )}
      {percentageNum > 50 && percentageNum < 70 && (
        <div>
          <p className='text-xl font-aauxblack text-greenWedding'>Bien, tu commences à connaître Céline et Patrick, mais il te reste encore un peu de chemin à parcourir, tu as le droit de connaître une partie du menu  !</p>
        </div>
      )}
      {percentageNum > 70 && percentageNum < 90 && (
        <div>
          <p className='text-xl font-aauxblack text-greenWedding mx-2'>Félicitations, tu es presque incollable sur Céline et Patrick ! Tu as le droit de connaître presque tout le menu !</p>
        </div>
      )}
      {percentageNum === 100 && (
        <div>
          <p className='text-xl font-aauxblack text-greenWedding mx-2'>On peut dire que tu es imbattable sur Céline et Patrick ! Tu as le droit de connaître tout le menu !</p>
        </div>
      )}
      <div className="my-2">
        <h1 className="text-xl font-bold text-greenWedding">***</h1>
      </div>
      <div className="space-y-6">
        {percentageNum === 0 && (
          <div className="text-base">
            <p>Quasi de veau braisé au romarin</p>
          </div>
        )}
        {percentageNum > 0 && (
          <div className="text-base">
            <p>Quasi de veau braisé au romarin</p>
          </div>
        )}
        {percentageNum > 20 && (
          <div className="text-base text-black">
            <p>Purée de patate douce et légumes de saison</p>
          </div>
        )}
        <div className="my-2">
          <h1 className="text-xl font-bold text-greenWedding">***</h1>
        </div>
        {percentageNum > 35 && (
          <>
            <div className="text-base">
            <p>Assiette de trois fromages affinés, tombée de noix et noisettes ou fromage blanc</p>
          </div>
            <div className="my-2">
              <h1 className="text-2xl font-bold text-greenWedding">***</h1>
            </div>
          </>
        )}
        {percentageNum > 50 && (
          <div className="text-base">
            <p>Pièce montée deux macarons</p>
          </div>
        )}

        {percentageNum > 70 && (
          <div className="text-base">
            <p>Buffet de desserts</p>
            <ul className="list-none italic text-base">
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
            <div className="my-2">
              <h1 className="text-xl font-bold text-greenWedding">***</h1>
            </div>
            <div className="text-base">
              <p>Pain (miche)</p>
            </div>
            <div className="text-base">
              <p>Café, thé, infusion</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
