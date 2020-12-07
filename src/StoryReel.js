import React from 'react'
import "./StoryReel.css"
import Story from './Story'
import viraj from "./viraj.jpg";
import sagar from "./sagar.jpg";
import viral from "./viral.jpg";
import tanmay from "./tanmay.jpg";
import vikas from "./vikas.jpg";

function StoryReel() {
  return (
    <div className="storyReel">

      <Story image="https://reactjs.org/logo-og.png" profileSrc={viraj} title="Viraj Nimbalkar" />

      <Story
       image="https://cdn-images-1.medium.com/max/2050/1*BKssrX-qEmyN6YaRNTvNlw.png" profileSrc={sagar} title="Swapnil Sagar" />

      <Story image="https://pbs.twimg.com/profile_images/1012243829477392387/m3cEA33V_400x400.jpg" profileSrc={viral} title="..Viral Sangani" />

      <Story image="https://disenowebakus.net/en/images/articles/html5-new-tags-effects-behaviors.jpg" profileSrc={tanmay} title="Tanmay Somkuwar" />

      <Story image="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg" profileSrc={vikas} title="Vikas Chaudhary" />

      {/* https://cdn-images-1.medium.com/max/2050/1*BKssrX-qEmyN6YaRNTvNlw.png */}

    </div>
  )
}

export default StoryReel
