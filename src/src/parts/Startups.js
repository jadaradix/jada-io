import React from 'react'

import icons from '../icons'

import Engagement from '../components/Engagement/Engagement'

const Startups = () => {
  return (
    <article>
      <Engagement>
        <div className='details'>
          <a href="https://anonml.co">
            <img src={icons.engagements.anonml} alt='Anonml' />
          </a>
        </div>
        <div>
          <h1>Anonml <span>Founder</span></h1>
          <p>
            <strong>We are thought leaders in principled machine learning. We help companies achieve better ML outcomes without personal data.</strong>
          </p>
          <p>
            What is it that unites all ML projects? Data. And it's inherently personal.
          </p>
          <p>
            Whilst GDPR is leading the way in how the world thinks about data rights, ML has not received the same attention.
          </p>
          <p>
            Our contrarian insight is that the most successful machine learning outcomes will be those that don't use personal data at all. In fact, ethics is only the beginning.
          </p>
          <p>
            Principled machine learning will be the competitive edge of the world's most successful companies, not only because the outcomes will be fairer, but because they will be better and make more money.
          </p>
          <p>
            This involves two key inventive steps: <strong>Intelligent Anonymization</strong> (protecting people and improving outcomes) and <strong>Transparent Learning</strong> (the technology of consent).
          </p>
        </div>
      </Engagement>

      <Engagement>
        <div className='details'>
          <a href="https://euphoricadventur.es">
            <img src={icons.engagements.euphoricAdventures} alt='Euphoric Adventures' />
          </a>
        </div>
        <div>
          <h1>Euphoric Adventures <span>Founder</span></h1>
          <p>
            <strong>We define the intersection of Smart Contracts and the world&rsquo;s most euphoric entertainment.</strong>
          </p>
          <p>
            Entertainment is experiencing a resurgence. We are on the edge of a licensing revolution.
          </p>
          <p>
          But it&rsquo;s not enough. Smart contracts rethink just one part of the value chain. They are not connected to the content they license. Alone, the blockchain will have minimal impact.
          </p>
          <p>
            So we imagined an API that combines a Smart Contract, 4K video and formats like DTS and Dolby Digital. We&rsquo;re calling it /eph. Each /eph request executes a Smart Contract, paying contributors fairly and releasing a unique key which decrypts the best format the device can play.
          </p>
          <p>
            Platforms that build with /eph give consumers the highest quality audio and video formats in the world, including 4K video and up to 128 channels of sound.
          </p>
          <p>
            We have a roadmap that takes /eph further, by becoming an API that finds its own customers and negotiates licensing by editing Smart Contracts in real time.
          </p>
        </div>
      </Engagement>

      {/* <Engagement>
        <div className='details'>
        </div>
        <div>
          <h1>Didero <span>Co-founder</span></h1>
          <p>
            <strong>We make every company a startup.</strong>
          </p>
          <p>
            The enterprise is spending millions implementing information systems so knowledge does not stay in the mind of just one person. They hope this will better connect employees, but our insight is that the opposite is true: documentation makes employees talk less, not more.
          </p>
          <p>
            If a more connected company is the goal, then writing things down is the wrong way to get there. Not only is documentation nearly always out of date, the best ideas are not found in writing; they come from conversations. 
          </p>
          <p>
            We have built a radical alternative to writing: a &ldquo;living AI&rdquo; question-answer interface in Slack and Teams that connects employees who can work together to create the next generation of the world&rsquo;s most successful companies.
          </p>
        </div>
      </Engagement> */}
    </article>
  )
}
export default Startups
