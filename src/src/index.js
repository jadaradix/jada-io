import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Brick from './components/Brick/Brick'
import Link from './components/Link/Link'
import Header from './components/Header/Header'

// <time datetime="2018-09-23">September 23, 2018</time>

class App extends PureComponent {
  render() {
    return (
      <main>
        <article>
          <Header>James Garner</Header>
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
              <Link href='mailto:j@jada.io'>E-mail me</Link>
              <Link href='https://cv.jada.io'>View my résumé</Link>
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
              <p>I like to be upfront about cost. The key to happiness is aligned expectations.</p>
              <ul>
                <li>My day rate is &pound;1000. There are no additional costs. I have my own equipment and I come to you, anywhere in the world.</li>
                <li>Results are typically obvious within the first week but the most impactful engagements are around one month long.</li>
                <li>I also offer a 10% discount on invoices paid early.</li>
              </ul>
              <p>If this seems expensive, remember the cost of recruitment agencies that provide little to no added value.</p>
              <p>Hiring a senior engineer can attract an agency fee north of &pound;15,000 &mdash; or 3 weeks&rsquo; of my time teaching you how to resolve this dependency on agencies.</p>
            </Brick>
          </div>
        </article>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
