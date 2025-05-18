import React from 'react';

const FormationsTarifsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nos Formations & Tarifs</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Nos Formules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Code à l’auto-école */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Code à l’auto-école</h3>
            <p className="text-lg font-semibold mb-4">Prix : 150 €</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside">
              <li>Gestion administrative</li>
              <li>Cours + tests + accompagnement pédagogique en ligne</li>
              <li>Séances de tests à l’auto-école</li>
            </ul>
          </div>

          {/* Formule B Conduite Accompagnée (AAC Traditionnelle) */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Formule B Conduite Accompagnée (AAC Traditionnelle)</h3>
            <p className="text-lg font-semibold mb-4">Prix : 1595 €</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside">
              <li>Gestion administrative</li>
              <li>Formation code en ligne</li>
              <li>Formation code classique</li>
              <li>Kit de formation pratique</li>
              <li>20 leçons de conduite</li>
              <li>Cours de préparation à l’interrogation orale</li>
              <li>Frais d’accompagnement à l’examen pratique</li>
              <li>Rendez-vous préalable</li>
              <li>Rendez-vous pédagogique pratique</li>
              <li>Livret numérique</li>
              <li>1 disque A ou AAC</li>
            </ul>
          </div>

          {/* Formule B Traditionnelle (Boîte Manuelle) */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Formule B Traditionnelle (Boîte Manuelle)</h3>
            <p className="text-lg font-semibold mb-4">Prix : 1300 €</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside">
              <li>Gestion administrative</li>
              <li>Formation code en ligne</li>
              <li>Formation code classique</li>
              <li>Kit de formation pratique</li>
              <li>20 leçons de conduite</li>
              <li>Cours de préparation à l’interrogation orale</li>
              <li>Frais d’accompagnement à l’examen pratique</li>
            </ul>
          </div>

          {/* Formule B Boîte Automatique (13h avec code) */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Formule B Boîte Automatique (13h avec code)</h3>
            <p className="text-lg font-semibold mb-4">Prix : 970 €</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside">
              <li>Gestion administrative</li>
              <li>Formation code en ligne</li>
              <li>Formation code classique</li>
              <li>Kit de formation pratique</li>
              <li>13 leçons de conduite</li>
              <li>Cours de préparation à l’interrogation orale</li>
              <li>Frais d’accompagnement à l’examen pratique</li>
            </ul>
          </div>

          {/* Formule B Boîte Automatique (20h avec code) */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Formule B Boîte Automatique (20h avec code)</h3>
            <p className="text-lg font-semibold mb-4">Prix : 1300 €</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside">
              <li>Gestion administrative</li>
              <li>Formation code en ligne</li>
              <li>Formation code classique</li>
              <li>Kit de formation pratique</li>
              <li>20 leçons de conduite</li>
              <li>Cours de préparation à l’interrogation orale</li>
              <li>Frais d’accompagnement à l’examen pratique</li>
            </ul>
          </div>

          {/* Formule B Conduite Accompagnée Boîte Automatique (AAC Automatique) */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Formule B Conduite Accompagnée Boîte Automatique (AAC Automatique)</h3>
            <p className="text-lg font-semibold mb-4">Prix : 1350 €</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside">
              <li>Gestion administrative</li>
              <li>Formation code en ligne</li>
              <li>Formation code classique</li>
              <li>Kit de formation pratique</li>
              <li>13 leçons de conduite</li>
              <li>Cours de préparation à l’interrogation orale</li>
              <li>Frais d’accompagnement à l’examen pratique</li>
              <li>Rendez-vous préalable</li>
              <li>Rendez-vous pédagogique pratique</li>
              <li>Livret numérique</li>
              <li>1 disque A ou AAC</li>
            </ul>
          </div>

          {/* Formule B Traditionnelle (Boîte Manuelle, sans code) */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Formule B Traditionnelle (Boîte Manuelle, sans code)</h3>
            <p className="text-lg font-semibold mb-4">Prix : 1180 €</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside">
              <li>Gestion administrative</li>
              <li>Kit de formation pratique</li>
              <li>20 leçons de conduite</li>
              <li>Cours de préparation à l’interrogation orale</li>
              <li>Frais d’accompagnement à l’examen pratique</li>
            </ul>
          </div>

          {/* Formule B Boîte Automatique (13h, sans code) */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Formule B Boîte Automatique (13h, sans code)</h3>
            <p className="text-lg font-semibold mb-4">Prix : 860 €</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside">
              <li>Gestion administrative</li>
              <li>Kit de formation pratique</li>
              <li>13 leçons de conduite</li>
              <li>Frais d’accompagnement à l’examen pratique</li>
            </ul>
          </div>

          {/* Formule B - Post Permis */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Formule B - Post Permis</h3>
            <p className="text-lg font-semibold mb-4">Prix : 350 € (payable en 1 échéance, tarif valable jusqu’au 31/12/2025)</p>
            <h4 className="font-semibold mb-2">Inclus :</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Frais administratifs (création, modification, mise à jour de dossier, gestion interne, programmation, suivi…)</li>
              <li>7 leçons en salle avec enseignant diplômé</li>
              <li>Attestation de formation</li>
              <li>Frais de gestion de dossier</li>
            </ul>
            <h4 className="font-semibold mb-2">Objectif :</h4>
            <p className="mb-4">Permet d’obtenir les 12 points du permis plus rapidement (2 ans au lieu de 3 pour la formation traditionnelle, 18 mois au lieu de 2 ans pour la conduite accompagnée)</p>
            <h4 className="font-semibold mb-2">Conditions d’éligibilité :</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Avoir entre 6 mois et 1 an de permis</li>
              <li>Aucune infraction ayant entraîné une perte de point</li>
            </ul>
            <h4 className="font-semibold mb-2">Pièces à fournir :</h4>
            <ul className="list-disc list-inside">
              <li>Pièce d'identité (recto-verso)</li>
              <li>Permis de conduire (recto-verso)</li>
              <li>Justificatif de domicile de moins de 3 mois</li>
              <li>Attestation d’hébergement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Prestations Supplémentaires</h2>
        <ul className="list-disc list-inside">
          <li>Évaluation initiale : 60 €</li>
          <li>Accompagnement à l’examen supplémentaire : 60 €</li>
          <li>Cours de conduite supplémentaire : 60 €</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Remarques importantes</h2>
        <ul className="list-disc list-inside">
          <li>L’évaluation de départ n’est pas comprise dans les forfaits.</li>
          <li>Toute leçon non annulée 48h à l’avance sera facturée (sauf justificatif médical).</li>
        </ul>
      </section>
    </div>
  );
};

export default FormationsTarifsPage;