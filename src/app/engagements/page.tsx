import React from 'react';

const NosEngagementsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Nos Engagements</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Qualité et Transparence</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Qualité de la formation : transparence et confiance.</li>
          <li>Documentation détaillée fournie à chaque élève.</li>
          <li>Évaluation de départ systématique pour adapter la formation à vos besoins.</li>
          <li>Contrat de formation en double exemplaire pour une clarté totale.</li>
          <li>Remise systématique du règlement intérieur.</li>
          <li>Kit pédagogique complet (livre de code, pack web, livret d’apprentissage).</li>
          <li>Suivi rigoureux de votre assiduité et de vos résultats.</li>
          <li>Fiche de suivi pratique consultable à tout moment.</li>
          <li>Véhicules conformes et entretenus pour votre sécurité et confort.</li>
          <li>Cours assurés par des enseignants diplômés et passionnés.</li>
          <li>Prise en charge de toutes les démarches administratives.</li>
          <li>Bilans de compétences remis régulièrement pour évaluer votre progression.</li>
          <li>Présentation à l’examen dès que le niveau requis est atteint, sans attente inutile.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Votre Satisfaction et Sécurité</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Accompagnement en cas de litige grâce à un processus de médiation.</li>
          <li>Garantie financière pour sécuriser votre investissement.</li>
          <li>Rendez-vous post-permis proposé pour consolider vos acquis.</li>
          <li>Documentation sur les enjeux de la formation, liste des enseignants, règlement intérieur, taux de réussite, questionnaires de satisfaction, coordonnées médiateur disponibles sur demande.</li>
          <li>Un questionnaire de satisfaction vous est remis après avoir réussi l’examen pour recueillir vos retours.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nos Partenaires Pédagogiques</h2>
        <p>Nous travaillons en étroite collaboration avec des fournisseurs pédagogiques reconnus pour la qualité de leurs outils, notamment :</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Codes Rousseau</li>
        </ul>
      </section>
    </div>
  );
};

export default NosEngagementsPage;