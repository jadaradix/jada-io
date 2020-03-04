import React from 'react'
import Brick from '../components/Brick/Brick'
import Header from '../components/Header/Header'

const Talent = () => {
  return (
    <article>
      <Header />
      <div>
        <Brick backgroundColor='rgb(248, 248, 248)'>
          <h1><strong>Who I am</strong></h1>
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
          <h1><strong>What I do</strong></h1>
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
          <h1><strong>What you get</strong></h1>
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
          <h1><strong>What I cost</strong></h1>
          <p>The key to happiness is aligned expectations, so I like to be upfront about cost.</p>
          <ul>
            <li>My day rate is &pound;600. There are no additional costs. I have my own equipment and I come to you, anywhere in the world.</li>
            <li>Results are typically obvious within the first week but the most impactful engagements are around one month long.</li>
            <li>I also offer a 10% discount on invoices paid early.</li>
          </ul>
          <p>If this seems expensive, remember the cost of recruitment agencies that provide little added value.</p>
          <p>Hiring a senior engineer can attract an agency fee north of &pound;15,000 &mdash; or 6 weeks&rsquo; of my time teaching you how to resolve this dependency on agencies.</p>
        </Brick>
      </div>
    </article>
  )
}

export default Talent
