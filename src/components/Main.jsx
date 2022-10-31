import React from 'react'
import "../styles/Main.css";
import profileImg from "../assets/images/profile__img.png";
import slackImg from "../assets/images/slack.png"
import githubImg from "../assets/images/github.png"


const Button = ({name, link, id, subtext}) => {
    return (
        <div className="btn">
            <a href={link} id={id}> {name} <p className='bg-red-600 '>{subtext}</p></a>
            
        </div>
        
    )
}


const Main = () => {
  return (
    <div className='main__section'>
        <div className="main__section_content">

            <div className="profile_container">
                <div className="profile_image">
                    <img src={profileImg} alt='profileImg' />
                </div>
                <div className="profile_name">
                    <p>jerry mcfred</p>
                </div>
            </div>

            <div className="link_container">
                <Button name="Twitter Link" link = "https://twitter.com/jerrymcfred" id="btn__zuri"  />
                <Button name="Zuri Team" link= "https://training.zuri.team/" id="books" subtext= "Join the zuri team" />
                <Button name="Zuri Books" link= "http://books.zuri.team" id="books" subtext= "Zuri has Handpicked books to help advance your tech career"/>
                <Button name="Python Books" link= "https://books.zuri.team/python-for-beginners?ref_id=<jeremiahchigozie>" id="book__python" subtext= "Eager to master Python, I have the perfect book for you" />
                <Button name="Background Check for Coders" link= "https://background.zuri.team" id="pitch" subtext= "Review your candidates before interview on our website"/>
                <Button name="Design Books" link= "https://books.zuri.team/design-rules" id="book__design" subtext= "Passionate about design, i have a free copy to get your journey started." />
            </div>
        </div>

        <div className="socials">
            <div className="socials_img slack">
                <img src={slackImg} alt="" />
            </div>
            <div className="socials_img github">
                <img src={githubImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main