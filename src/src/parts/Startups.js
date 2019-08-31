import React from 'react'

import icons from '../icons'

import Engagement from '../components/Engagement/Engagement'

const Startups = () => {
  return (
    <article>
      <Engagement backgroundColor='rgb(248, 248, 248)'>
        <div>
          <img src={icons.generic.me} alt='James Garner' style={{ borderRadius: '4px' }} />
          <p>
            <time dateTime='2018-01-01'>2018</time>&ndash;
          </p>
        </div>
        <div>
          <p>
            Startups.
          </p>
        </div>
      </Engagement>
    </article>
  )
}
export default Startups
