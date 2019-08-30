import React from 'react'
import styled from 'styled-components'

import icons from '../icons'
import Engagement from '../components/Engagement/Engagement'
import Link from '../components/Link/Link'

const StyledPage = styled.article`
  @media print {
    .e-mail-me-link {
      display: none;
    }
  }
`

const Me = () => {
  return (
    <StyledPage>
      <Engagement backgroundColor='rgb(248, 248, 248)'>
        <div>
          <img src={icons.generic.me} alt='James Garner' style={{ borderRadius: '4px' }} />
          <p>
            <time dateTime='2018-01-01'>2018</time>&ndash;
          </p>
        </div>
        <div>
          <p>
            From 2007&ndash;2011 thousands of teenagers learnt to code with my software DS Game Maker. As a CompSci grad I then helped reverse engineer the PS4 before working for PlayStation R&amp;D at 22.
          </p>
          <p>
            In 2018, I joined Entrepreneur First, kicking off my career in entrepreneurship and transforming engineering and talent. My strong engineering and management background gives me the privilege of helping deliver projects that change what the world looks like.
          </p>
          <p>
            My academic speciality is semantics, particularly text/image search and hyper-personalisation.
          </p>
          <p className='e-mail-me-link'>
            <Link href='mailto:j@jada.io'>E-mail me</Link>
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div className='details'>
          <img src={icons.engagements.superawesome} alt='SuperAwesome' />
          <p>
            <time dateTime='2019-04-01'>Apr 19</time>&ndash;
          </p>
        </div>
        <div>
          <h1>Engineering Lead <span style={{fontSize: '90%'}}>SuperAwesome</span></h1>
          <p>
            Creating a culture of entrepreneurship and measurement.
          </p>
          <p>
            Working on teams&rsquo; operational strategy (process, knowledge sharing, cross-team collaboration).
          </p>
          <p>
            Line management (aligning on company initiatives and career mentorship through personal development plans).
          </p>
        </div>
      </Engagement>
      <Engagement>
        <div className='details'>
          <img src={icons.engagements.superawesome} alt='SuperAwesome' />
          <p>
          <time dateTime='2018-11-01'>Nov 18</time>&ndash;<time dateTime='2019-04-01'>Apr 19</time>
          </p>
        </div>
        <div>
          <h1>Senior Engineer <span>SuperAwesome</span></h1>
          <p>
            Delivering the next generation of PII-free advertising, taking the project from a proof-of-concept to a market-ready product with Enterprise customers. Significant engineering achievements including introducing React and Jest, 100% test coverage and distributed architecture reaching Kubernetes scaling limits.
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
          <h1>Senior Consultant <span>Arcadia Group</span></h1>
          <p>
            Contract. On-site via 101 Ways helping transform engineering and replatform to React+Node.js.
          </p>
          <p>
            Pair-owning greenfield component library used accross 7 brands whilst conducting dozens of technical interviews for 101 Ways.
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
          <h1>Co-founder <span>Storydust</span></h1>
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
          <img src={icons.engagements.entrepreneurFirst} alt='Entrepreneur First' />
          <p>
            <time dateTime='2018-03-01'>Mar 18</time>&ndash;<time dateTime='2018-07-01'>Jul 18</time>
          </p>
        </div>
        <div>
          <h1>Alumnus <span>Entrepreneur First</span></h1>
          <p>
            Member of EF&rsquo;s 10<sup>th</sup> cohort in London (EF10).
          </p>
          <p>
            &ldquo;EF is the best place to find a co-founder, build a company and access the world&rsquo;s best investors. We&rsquo;ve helped build over 140 technology companies collectively worth over $1bn.&rdquo;
          </p>
        </div>
      </Engagement>
      {/* <Engagement>
        <div className='details'>
          <img src={icons.engagements.euphoricAdventures} alt='Euphoric Adventures' />
          <p>
            <time dateTime='2018-03-01'>Jan 18</time>&ndash;
          </p>
        </div>
        <div>
          <h1>Founder <span>Euphoric Adventures</span></h1>
          <p>
            Founded Euphoric Adventures, providing Smart Contract streaming technology for patent-free surround sound music.
          </p>
        </div>
      </Engagement> */}
      <Engagement>
        <div>
          <img src={icons.engagements.beamery} alt='Beamery' />
          <p>
            <time dateTime='2017-02-01'>Feb 17</time>&ndash;<time dateTime='2018-03-01'>Mar 18</time>
          </p>
        </div>
        <div>
          <h1>Engineer <span>Beamery</span></h1>
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
          <h1>R&amp;D Engineer <span>PlayStation</span></h1>
          <p>
            Engineering on PlayStation’s best-in-class developer platform between London and San Mateo, CA.
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
          <h1>Co-founder <span>Epsilon Data</span></h1>
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
          <img src={icons.engagements.relativeInsight} alt='Relative Insight' />
          <p>
            <time dateTime='2014-11-01'>Nov 14</time>&ndash;<time dateTime='2015-09-01'>Oct 15</time>
          </p>
        </div>
        <div>
          <h1>Data Scientist <span>Relative Insight</span></h1>
          <p>
            Developed Python web scrapers for high profile brands including Oxford University and Smirnoff.
          </p>
          <p>
            Published language normalisation algorithms for Mumsnet and Twitter.
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
          <h1>Developer<span>DataCentred</span></h1>
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
          <h1>Developer<span>Next World Web</span></h1>
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
          <h1>Developer<span>Dark Flow</span></h1>
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
          <h1>Founder<span>DS Game Maker</span></h1>
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
