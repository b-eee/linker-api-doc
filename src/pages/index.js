/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'APIリファレンス',
        imageUrl: 'img/icon_reference.png',
        description: (
          <>
            HexabaseのすべてのAPIについて説明しています。
          </>
        ),
        pageLink: '/linker-api-doc/docs'
    },
    {
        title: 'リリースノート',
        imageUrl: 'img/icon_release.png',
        description: (
          <>
            Hexabase APIの更新情報を掲載しています。
          </>
        ),
        pageLink: '/linker-api-doc/blog'
    },
    {
        title: '開発ガイド',
        imageUrl: 'img/icon_concept.png',
        description: (
          <>
            アプリケーションを構築するための機能について解説しています。
          </>
        ),
        pageLink: 'https://b-eee.github.io/development_guide/'  // to Ex-Site
    },

];

function Feature({imageUrl, title, description, pageLink}) {
  const imgUrl = useBaseUrl(imageUrl);
  const pagePath = pageLink;
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={pagePath}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3><a href={pagePath}>{title}</a></h3>
      <p>{description} &gt;&gt; <a href={pagePath}>もっと見る</a></p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              目次を見る
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
