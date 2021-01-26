import React from 'react';
import Head from 'next/head';

export default function Heads() {
    return (
<Head>
              {/* <!-- Primary Meta Tags --> */}
        <title>Zero 1 Quiz</title>
        <meta name="Zero 1 Quiz" content="Zero 1 Quiz"/>
        <meta name="Zero 1 Quiz" content="Quiz para Testar seus conhecimentos sobre Zelda!"/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="The legend of Zelda"/>
        <meta property="og:description" content="Quiz para Testar seus conhecimentos sobre Zelda!"/>
        <meta property="../imagens/link.png" content="../imagens/link.png"/>

      {/*   <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="The legend of Zelda"/>
        <meta property="twitter:description" content="Quiz para Testar seus conhecimentos sobre Zelda!"/>
        <meta property="../imagens/link.png" content="../imagens/link.png"/>
      </Head> 
    );
}   