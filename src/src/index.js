import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import icons from './icons'

import Brick from './components/Brick/Brick'
import Engagement from './components/Engagement/Engagement'
import Link from './components/Link/Link'
import Header from './components/Header/Header'

class App extends PureComponent {
  render () {
    return (
      <main>

        <article>
          <Header>James Garner</Header>
          <div>
            <Engagement backgroundColor='rgb(248, 248, 248)'>
              <div>
                <img src={icons.generic.me} alt='James Garner' style={{ borderRadius: '4px' }} />
                <p>
                  <time dateTime='2018-01-01'>2018</time>&ndash;
                </p>
              </div>
              <div>
                <p>
                  Hi. I&rsquo;m a founder with deep skills in transforming engineering and talent. My academic speciality is image and text search.
                </p>
                <p>
                  From 2007&ndash;2011 thousands of teenagers learnt to code with my software DS Game Maker. As a CompSci grad I helped reverse engineer the PS4 before working for PlayStation R&amp;D at 22.
                </p>
                <Link href='mailto:j@jada.io'>E-mail me</Link>
              </div>
            </Engagement>
            <Engagement>
              <div class='details'>
                <img src={icons.engagements.euphoricAdventures} alt='Euphoric Adventures' />
                <p>
                  <time dateTime='2018-03-01'>Jan 18</time>&ndash;
                </p>
              </div>
              <div>
                <h1>Founder <span>Euphoric Adventures</span></h1>
                <p>
                  Blah blah blah.
                </p>
              </div>
            </Engagement>
            <Engagement>
              <div class='details'>
                <img src={icons.engagements.superawesome} alt='SuperAwesome' />
                <p>
                  <time dateTime='2018-07-01'>Nov 18</time>&ndash;
                </p>
              </div>
              <div>
                <h1>Engineer <span>SuperAwesome</span></h1>
                <p>
                  Working on the next generation of kid-safe advertising.
                </p>
              </div>
            </Engagement>
            <Engagement>
              <div class='details'>
                <img src={icons.engagements.arcadiaGroup} alt='Arcadia Group' />
                <p>
                  <time dateTime='2018-07-01'>Jul 18</time>&ndash;<time dateTime='2018-10-01'>Oct 18</time>
                </p>
              </div>
              <div>
                <h1>Senior Consultant <span>Arcadia Group</span></h1>
                <p>
                  On-site via 101 Ways helping transform engineering and replatform to React+Node.js.
                </p>
                <p>
                  Pair-owning greenfield component library used accross 7 brands whilst conducting dozens of technical interviews for 101 Ways.
                </p>
              </div>
            </Engagement>
            <Engagement>
              <div class='details'>
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
                  Enterprise grade stack deployed to GCP including RabbitMQ, Redis, Node.js microservices and React 16 SPA.
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
                  Mentored Founders &amp; Coders interns through a full agile project. Worked one-to-one with Facebook (US), Balfour Beatty, Grab (Singapore) and Greenhouse. Pair-lead development of candidate-facing Beamery Pages product.
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
                <h1>Engineer <span>PlayStation</span></h1>
                <p>
                  Engineering for PlayStation’s best-in-class developer platform.
                </p>
                <p>
                  Individual responsibility and leadership on application&rsquo;s frontend strategy (build, dependencies, migration to AngularJS). Regular work in San Mateo delivering Angular training to London and Bay Area senior engineers.
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
                  Implemented lead generation by finding Twitter conversations and replying intelligently. Failsafe integrations with Twitter, Google Images, Mapbox, GeoNames and Genderize.io.
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
          </div>
        </article>

        <article>
          <Header>Talent transformation</Header>
          <div>
            <Brick backgroundColor='rgb(248, 248, 248)'>
              <h1>Who I am</h1>
              <p>
                I&rsquo;m James and I help companies transform their talent function.
              </p>
              <p>
                I&rsquo;m here to reduce your time to hire and improve your recruitment ROI.
              </p>
              <p>
                 I do this by implementing a world class hiring work flow that treats candidates like customers and reduces dependency on agencies.
              </p>
              <p>
                I have a &ldquo;deep tech&rdquo; background as an Entrepreneur First alum and Computer Science graduate. I've worked on both sides of the Atlantic for PlayStation, Topshop and startups from seed stage to Series B and beyond.
              </p>
            </Brick>
            <Brick>
              <h1>What I do</h1>
              <p>
                Do you struggle to attract the best talent in a candidates&rsquo; market? If these things sound familiar, you&rsquo;re not alone:
              </p>
              <ul>
                <li>Poor recruitment ROI due to dependency on agencies charging up to 20% of each successful hire</li>
                <li>Painfully long time to hire, especially for hard to fill roles in management and engineering</li>
                <li>Low application rate (too few inbound candidates)</li>
                <li>Low conversion rate (too few candidates engaged by the final stage)</li>
              </ul>
              <p>
                Don&rsquo;t worry. I&rsquo;ve helped Facebook, Grab and Balfour Beatty transform their talent functions&mdash; and I can help you too. I even built <a href='https://beamery.com/software/pages'>Beamery Pages</a>. This makes me uniquely qualified to transform talent at the world&rsquo;s biggest companies, including yours.
              </p>
            </Brick>
            <Brick>
              <h1>What you get</h1>
              <p>
                I implement a world class talent work flow which treats candidates like customers.
              </p>
              <ul>
                <li>I teach you the fundamentals of Recruitment Marketing. I teach HR to think like salespeople.</li>
                <li>I build you an engaging careers brand that is easy to develop further without my help.</li>
                <li>I reduce your time to hire by teaching you how to build relationships with candidates before they apply. You will have a continuously growing pipeline of candidates who are a good fit, even before a vacancy comes up.</li>
                <li>I show you how to re-engage candidates that &ldquo;fell through the net&rdquo;.</li>
                <li>I demonstrate best practices on interviewing and testing engineering candidates.</li>
              </ul>
            </Brick>
            <Brick>
              <h1>What I cost</h1>
              <p>The key to happiness is aligned expectations, so I like to be upfront about cost.</p>
              <ul>
                <li>My day rate is &pound;500. I don&rsquo;t raise additional expenses. I have my own equipment and I come to you, anywhere in the world.</li>
                <li>Results are typically obvious within the first week but the most impactful engagements are at least one month long.</li>
                <li>I offer a 10% discount on invoices paid early.</li>
              </ul>
              <p>If this seems expensive, remember the cost of recruitment agencies that provide little added value.</p>
              <p>Hiring a senior engineer can attract an agency fee north of &pound;15,000 &mdash; or 6 weeks&rsquo; of my time teaching you how to resolve this dependency on agencies.</p>
            </Brick>
          </div>
        </article>

      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
