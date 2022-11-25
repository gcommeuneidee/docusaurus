import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import colibri from'@site/static/img/colibri.png'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="accueil__entete">
      <div className="contenu">
        <h1>La bible du Studio</h1>
        <p className='chapeau'>Toutes les documentations, guides et autres ressources à disposition des collaborateurs du Studio.</p>
      </div>
      <img src={colibri} className="illustration" />
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Accueil"
      description="Wiki Gcom, la Bible du Studio">
      <HomepageHeader />
      <main>
        <div className='container'>

          <div className='accueil__listeBlocs'>
            <article>
              <h2>Le Starter</h2>
              <p>Thème customisé initial pour WordPress.</p>
              <p><a href={useBaseUrl('docs/intro')}>Voir la documentation</a></p>
            </article>

            <article>
              <h2>Les Blocs</h2>
              <p>Liste des blocs gutenberg développés sur-mesure.</p>
              <p><a href={useBaseUrl('blocks/blocks')}>Voir la liste</a></p>
            </article>

            <article>
              <h2>La méthode CSS</h2>
              <p>Organisation spécifique des propriétés CSS pour une meilleure lisibilité.</p>
              <p><a href={useBaseUrl('blocks/blocks')}>Voir la liste</a></p>
            </article>

            <article>
              <h2>Le RGAA</h2>
              <p>Modèles de composants validés pour l'accessibilité.</p>
              <p><a href={useBaseUrl('rgaa/intro')}>Voir les modèles</a></p>
            </article>
          </div>

          <div class="theme-admonition theme-admonition-info alert alert--info admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
            <div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
              <span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><svg viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg></span>info
            </div>
            <div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
              <p>Nous rappelons que les ressources présentées ici, sont la <strong>propriété du Studio G comme une idée</strong> et ne doivent pas faire l'objet d'une diffusion publique.</p>
            </div>
          </div>

        </div>

        
      </main>
    </Layout>
  );
}
