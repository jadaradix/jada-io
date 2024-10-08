import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import icons from '../icons'
import Engagement from '../components/Engagement/Engagement'
import Link from '../components/Link/Link'

const StyledPage = styled.article`
  .e-mail-me-link {
    margin-top: 1rem !important;
    line-height: 1.5rem !important;
    a {
      font-size: 1.2rem;
    }
  }
  @media print {
    .e-mail-me-link {
      display: none;
    }
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 2rem;
    > * + * {
      margin-top: 0;
    }
  }
`

const Me = () => {
  return (
    <StyledPage>
      <Helmet>
        <title>James Garner (jadaradix)</title>
      </Helmet>
      <Engagement backgroundColor='rgb(248, 248, 248)'>
        <div>
          <img src={icons.generic.me} alt='James Garner' />
          <p>
            <time dateTime='1993-01-01'>1993</time>&ndash;
          </p>
        </div>
        <div>
          <p>
            I'm a deep tech founder with a focus on ubiquitous computing and digital ethics.
          </p>
          <p>
            I'm here to build the future, using technology to empower people to break free, do more and grow local economies.
          </p>
          <p className='e-mail-me-link'>
            <Link href='https://linkedin.com/in/jadaradix'><strong>LinkedIn</strong></Link> &nbsp; <Link href='https://twitter.com/jadaradix'><strong>@jadaradix</strong></Link>
          </p>
          <p className='e-mail-me-link'>
            <Link href='/James Garner.pdf'><strong>CV</strong></Link> &nbsp; <Link href='mailto:j@jada.io'><strong>j@jada.io</strong></Link> &nbsp; <Link href='tel:+447903576776'><strong>+44 79035 76776</strong></Link>
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div className='details'>
          <a href='https://sticky.to'>
            <img src={icons.engagements.sticky} alt='Sticky' />
          </a>
          <p>
            <time dateTime='2020-01-31'>Jan 20</time>&ndash;
          </p>
        </div>
        <div>
          <h1><strong>CEO<span>Sticky™</span></strong></h1>
          <p>
            Make every customer interaction 10s or less.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div className='details'>
          <a href='https://www.superawesome.com/'>
            <img src={icons.engagements.superawesome} alt='SuperAwesome' />
          </a>
          <p>
            <time dateTime='2018-11-01'>Nov 18</time>&ndash;<time dateTime='2020-01-01'>Jan 20</time>
          </p>
        </div>
        <div>
          <h1><strong>Engineering Lead<span>SuperAwesome</span></strong></h1>
          <p><strong>Engineering Lead (<time dateTime='2019-04-01'>Apr 19</time>&ndash;<time dateTime='2020-01-01'>Jan 20</time>)</strong></p>
          <p>
            Created a culture of entrepreneurship.
          </p>
          <p>
            Worked on teams&rsquo; operational strategy (process, knowledge sharing, cross-team collaboration).
          </p>
          <p>
            Line management (aligning on company initiatives and career mentorship through personal development).
          </p>
          <p><strong>Senior Engineer (<time dateTime='2018-11-01'>Nov 18</time>&ndash;<time dateTime='2019-04-01'>Apr 19</time>)</strong></p>
          <p>
            Delivered the next generation of PII-free advertising, taking the project from a proof-of-concept to a market-ready product with an enterprise customer. Achievements include introducing React and Jest, 100% test coverage and distributed architecture reaching Kubernetes scaling limits.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div className='details'>
          <img src={icons.engagements.arcadiaGroup} alt='Arcadia Group' />
          <p>
            <time dateTime='2018-07-01'>Jul 18</time>&ndash;<time dateTime='2018-10-01'>Oct 18</time>
          </p>
        </div>
        <div>
          <h1><strong>Developer (contract)<span>Arcadia Group</span></strong></h1>
          <p>
            Replatforming to React and Node.js.
          </p>
          <p>
            Pair-owning greenfield component library used accross 7 brands whilst conducting dozens of technical interviews.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div className='details'>
          <img src={icons.engagements.storydust} alt='Storydust' />
          <p>
            <time dateTime='2018-03-01'>Mar 18</time>&ndash;<time dateTime='2018-07-01'>Jul 18</time>
          </p>
        </div>
        <div>
          <h1><strong>Co-founder<span>Storydust</span></strong></h1>
          <p>
            Co-founded Storydust, helping brands create &ldquo;authenticity at scale&rdquo; by letting them curate, license and use their customers&rsquo; social media content.
          </p>
          <p>
            Enterprise grade stack deployed to GCP, including Node.js/Docker microservices, RabbitMQ, Redis and React.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <a href='https://joinef.com'>
            <img src={icons.engagements.entrepreneurFirst} alt='Entrepreneur First' />
          </a>
          <p>
            <time dateTime='2018-03-01'>Mar 18</time>&ndash;<time dateTime='2018-07-01'>Jul 18</time>
          </p>
        </div>
        <div>
          <h1><strong>Alumnus<span>Entrepreneur First</span></strong></h1>
          <p>
            Member of EF&rsquo;s 10<sup>th</sup> cohort in London (EF10).
          </p>
          <p>
            &ldquo;EF is the best place to find a co-founder, build a company and access the world&rsquo;s best investors. We&rsquo;ve helped build over 140 technology companies collectively worth over $1bn.&rdquo;
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <a href='https://beamery.com'>
            <img src={icons.engagements.beamery} alt='Beamery' />
          </a>
          <p>
            <time dateTime='2017-02-01'>Feb 17</time>&ndash;<time dateTime='2018-03-01'>Mar 18</time>
          </p>
        </div>
        <div>
          <h1><strong>Developer<span>Beamery</span></strong></h1>
          <p>
            Early engineering hire pre-Series A to Series B.
          </p>
          <p>
            Mentored Founders &amp; Coders interns through a full agile project. Worked one-to-one with Facebook (US), Balfour Beatty, Grab (Singapore) and Greenhouse. Pair-lead development of candidate-facing Beamery Pages product (Node.js, AngularJS).
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <img src={icons.engagements.playstation} alt='PlayStation' />
          <p>
            <time dateTime='2016-03-01'>Mar 16</time>&ndash;<time dateTime='2017-02-01'>Feb 17</time>
          </p>
        </div>
        <div>
          <h1><strong>Developer<span>PlayStation</span></strong></h1>
          <p>
            R&amp;D. Engineering on PlayStation’s best-in-class developer platform between London and San Mateo, CA.
          </p>
          <p>
            Leadership on application&rsquo;s frontend strategy (build, dependencies, migration to AngularJS). Delivered AngularJS training to London and Bay Area senior engineers.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <img src={icons.engagements.epsilonData} alt='Epsilon Data' />
          <p>
            <time dateTime='2015-01-01'>2015</time>&ndash;<time dateTime='2017-01-01'>2017</time>
          </p>
        </div>
        <div>
          <h1><strong>Co-founder<span>Epsilon Data</span></strong></h1>
          <p>
            Epsilon Data was a profitable automated marketing startup.
          </p>
          <p>
            One-to-one mentoring with the UK&rsquo;s leading ethical tourism charity.
          </p>
          <p>
            Implemented lead generation by finding Twitter conversations and replying intelligently. Failsafe integrations with Twitter, Google Images, Mapbox and GeoNames.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <a href='https://relativeinsight.com/'>
            <img src={icons.engagements.relativeInsight} alt='Relative Insight' />
          </a>
          <p>
            <time dateTime='2014-11-01'>Nov 14</time>&ndash;<time dateTime='2015-09-01'>Oct 15</time>
          </p>
        </div>
        <div>
          <h1><strong>Developer<span>Relative Insight</span></strong></h1>
          <p>
            Built Python web scrapers and language normalisation algorithms for Oxford University, Smirnoff, Mumsnet and Twitter.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <img src={icons.engagements.datacentred} alt='DataCentred' />
          <p>
            <time dateTime='2014-06-01'>Jun 14</time>&ndash;<time dateTime='2014-09-01'>Sep 14</time>
          </p>
        </div>
        <div>
          <h1><strong>Developer<span>DataCentred</span></strong></h1>
          <p>
            Co-developed customer facing support app in Ruby on Rails and AngularJS within 3 months, reflecting JIRA activity in real-time.
          </p>
          <p>
            Implemented LDAP support in open source project phpipam.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <img src={icons.engagements.nextWorldWeb} alt='Next World Web' />
          <p>
            <time dateTime='2013-06-01'>Jun 13</time>&ndash;<time dateTime='2014-09-01'>Sep 14</time>
          </p>
        </div>
        <div>
          <h1><strong>Developer<span>Next World Web</span></strong></h1>
          <p>
            Moved large legacy ecommerce systems to CakePHP, CS-Cart and WordPress.
          </p>
          <p>
            Automated WordPress theme creation from any site.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <img src={icons.engagements.darkFlow} alt='Dark Flow' />
          <p>
            <time dateTime='2011-01-01'>2011</time>&ndash;<time dateTime='2012-01-01'>2012</time>
          </p>
        </div>
        <div>
          <h1><strong>Developer<span>Dark Flow</span></strong></h1>
          <p>
            Lead a team of 5 developing a &ldquo;true cross platform game maker&rdquo;.
          </p>
          <p>
            Implemented Mac/Windows/Linux game support through .NET bytecode runner; browser and mobile support through JavaScript generation.
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div>
          <img src={icons.engagements.dsGameMaker} alt='DS Game Maker' />
          <p>
            <time dateTime='2007-01-01'>2007</time>&ndash;<time dateTime='2011-01-01'>2011</time>
          </p>
        </div>
        <div>
          <h1><strong>Founder<span>DS Game Maker</span></strong></h1>
          <p>
            Created famous Nintendo DS homebrew game making software. Sold over 1,500 serial codes and 350 physical &lsquo;Homebrew Kits&rsquo; by age 17.
          </p>
          <p>
            Software and hardware was adopted at American summer camps and site licenses sold worldwide. International logistics work with Hong Kong and support in German and Dutch.
          </p>
        </div>
      </Engagement>
    </StyledPage>
  )
}
export default Me
