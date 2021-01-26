import React from 'react';
import Head from 'next/head';

export default function Heads() {
    return (
<Head>
              {/* <!-- Primary Meta Tags --> */}
        <title>Zero 1 Quiz</title>
        <meta name="title" content="Zero 1 Quiz"/>
        <meta name="description" content="Quiz para Testar seus conhecimentos sobre Zelda!"/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="The legend of Zelda"/>
        <meta property="og:description" content="Quiz para Testar seus conhecimentos sobre Zelda!"/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

      {/*   <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="The legend of Zelda"/>
        <meta property="twitter:description" content="Quiz para Testar seus conhecimentos sobre Zelda!"/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
      </Head> 
    );
}   