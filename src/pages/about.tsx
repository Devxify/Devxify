import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About Devxify</title>

      <meta name="description" content="Know everything about Devxify, be it the vision, story, stack or something else." />
      <meta property="og:site_name" content="Devxify - Developers and Makers Den" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About Devxify" />
      <meta property="og:description" content="Know everything about Devxify, be it the vision, story, stack or something else." />
      <meta property="og:image" content="https://devstorage.b-cdn.net/devxify.png"/>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Devxify" />
      <meta name="twitter:description" content="Know everything about Devxify, be it the vision, story, stack or something else." />
      <meta name="twitter:image" content="https://devstorage.b-cdn.net/devxify.png"/>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  Hi Folks,
                  <br/>&nbsp;<br/>
                  I'm Ankit, the chief content writer (and owner) here at Devxify. Hope you are loving what I share, if not the do let me know on <a href="https://twitter.com/devxify" target="_blank">Twitter</a>. I am committed to make a better web by helping awesome people like you make their websites faster, <a href="/web-accessibility-guide/">accessible</a> and more ethical. Sometimes I also love to contribute to the community. 
                </p>
                <img src="https://devstorage.b-cdn.net/ankit-op.png" alt="Ankit Ghosh"/>
                <p>
                  Now all that's present, what about my past? So I started learning about the web in 2016, I was a noob then but fantasized to make supercool websites. I did everything to make my sites faster and look prettier (I still suck at design). This path took me to <a href="https://wordpress.org" target="_blank" rel="noreferrer">WordPress</a>, building websites with little to no knowledge about code looked great then. Soon I realized that this bulky CMS was now a modern day legacy software.
                </p>
                <p>
                  Then came the new wave of JAMstack, pushed by Netlify. I loved the idea of building static sites that could be balzing fast and also I could control each bit of it as I was now building static HTML sites. It's then when my first website got acquired. Moving on this path I learned that I need to jump to a SSG because managing content was becoming tough. Here we are at Devxify, a site built with Gatsby in its core.
                </p>
                <h2>Tech Behind Devxify</h2>
                <p>
                  <b>Netlify:</b> It's an awesome service for all web developers. At Devxify, <a href="https://www.netlify.com" target="_blank" rel="noreferrer">Netlify</a> is the main hosting platform where the site is built and deployed. 
                  <br/>&nbsp;<br/>
                  <b>BunnyCDN:</b> Though Netlify is awesome and fast but I still needed a CDN to make my sites faster. There was Cloudflare as an option for CDN but their free CDN wasn't upto the mark. <a href="https://bunnycdn.com/?ref=mptrdjmh3n" target="_blank" rel="sponsored">BunnyCDN</a> became the perferct performance partner helping static assests load quickly.
                  <br/>&nbsp;<br/>
                  <b>Cloudflare:</b> Though we don't use <a href="https://clodflare.com" target="_blank" rel="noreferrer">Cloudflare's</a> CDN but that doesn't mean that they suck. They have one of the best DNS out there and speed is surely at the core of Devxify.
                  <br/>&nbsp;<br/>
                  <b>Other Stuffs</b>
                  <br/>
                  <a href="https://www.canva.com/" target="_blank" rel="noreferrer">Canva:</a> Building awesome images for Devxify.
                  <br/>
                  <a href="https://updown.io/r/NhiUz" target="_blank" rel="sponsored">Updown:</a> Uptime monitoring for websites.
                  <br/>
                  <a href="https://www.notion.so" target="_blank" rel="noreferrer">Notion:</a> Content writing in MarkDown.
                  <br/>
                  <a href="http://fbuy.me/v/kaknutblog_3" target="_blank" rel="sponsored">Sendfox:</a> Managing and sending weekly newsletter.
                  <br/>
                  <a href="https://www.getmakerlog.com" target="_blank" rel="noreferrer">MakerLog:</a> Personal and professional log.
                  <br/>
                  <a href="https://mail.zoho.com" target="_blank" rel="noreferrer">Zoho Mail:</a> Manage @devxify.com mails.
                  <br/>
                  <a href="https://dmarc.postmarkapp.com/" target="_blank" rel="noreferrer">DMARC by PostMark:</a> DMARC monitoring.
                  <br/>&nbsp;<br/>
                  There might be few more which I don't remember as of now but yeah these are the ones used regularly.
                </p>
                <p>
                  As of now Devxify is a one man journey and I wish to add more people as I move ahead. Having all of you as awesome readers encourages me more to work on Devxify. Also if anyone of you would love to contribute to this journey then you are most welcome. Feel free to <a href="mailto:hi&amp;64;devxify.com">mail↗</a> me or just ping me on Twitter.
                  <br/>&nbsp;<br/>
                  Will see you soon in the next awesome article I write and by the way the I run a <a href="https://sendfox.com/Devxify" target="_blank" rel="noreferrer">newsletter</a> too.
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
