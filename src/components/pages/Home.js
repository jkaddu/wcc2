import React from 'react';
import Header from '../../images/WCC_HEADER.png';
import Jackson from '../../images/ajackson_book.jpeg'
import Toys from '../../images/wcc_toys4tots_2017.png'
import GetInvolved from '../../images/Get_involved1.jpeg';
import { YoutubePlayer } from 'reactjs-media'
import './Home.css';

function Home() {
    return(
        <div className="home">
            <header>
                <div className='header' >
                      <img src={Header} alt='wcc banner' />
                </div>
            </header>
            <section className='top'>
                <div className='toptop'>
                    <YoutubePlayer
                        src='https://www.youtube.com/watch?v=7Oz6CbtXuUU'
                        height={400}
                        width={600}
                    />
                </div>
                <div className='topbottom'>
                    <p>
                        The West Coast Center for Victorious Youth is a Bay Area non-profit 501(c)3 community services organization committed to providing alternative education in the areas of life skills, progressive training events, college preparation, career development, financial literacy, entrepreneurship and technology to low-income and under-served youth. 
​
                        We accomplish this through mentors, partnerships, workshops, community events, educational travel experiences and our Annual Youth Conference. 
                        ​
                        Most of our youth reside throughout the Bay Area counties of Contra Costa, San Francisco, Alameda, Napa and Solano. 

                        These communities have been targeted for service because they have a high number of low-income families, and  are plagued by a greater percentage of poverty. In addition, the college completion rates in these communities are diminishing and today nearly 90 percent of high school student’s graduate without knowledge of basic financial literacy.
​
                        In 2015, youth who participated in our program survey found:
                    </p>
                        <ul>
                        <li>95% reported that West Coast Center provided them guidance and emotional support</li>
                        <li>77% developed long-terms plans related to high school completion and career development</li>
                        <li>89% started using non-violent methods to resolve conflicts and disagreements</li>
                        <li>85% of youth who were awarded savings accounts maintained a positive balance to date.</li>
                        </ul>
                </div>

            </section>
            <section className='middle'>
                <div className='midleft'>
                    <img src={Jackson} alt='book cover' />
                </div>
                <div className='midright'>
                    <h3>Overview</h3>
                    <p>​
                        Most of us have experienced some sort of setback one time or another in life. Many people desire more out of life but for some it just seems impossible to get past their hang ups, recover from their hurts and change their belief system to allow them to progress into their future. If achieving goals were easy, everyone would do it quickly and without difficulty. Even if your vision is clear and you can articulate a detailed plan, there are always obstacles in the path. What makes one person reach their pinnacle of success while another stays stuck in the trenches as time keeps moving and nothing seems to change? Perhaps it's two major decisions - a decision to change their mind and a decision to take action!
                    </p>
                </div>
            </section>
            <div>
                <img className='toys' src={Toys} alt='toys for tots' />
            </div>
            <section className='bottom'>
                <div className='botleft'>
                    <h3>We Believe</h3><br/>
                    <p>"People who grew up in difficult circumstances and yet are successful have one thing in common...at a critical junction in their early adolescence they had a positive relationship with a caring adult." <br /><br />- Bill Clinton
                    </p>
                </div>
                <div className='botright' >
                    <p>"Remember, the key is to believe in yourself, never give up, and move forward for what you want in life to be successful"<br/><br/> -Sarout Long 1999
                    </p>
                    <img className='circle' src={GetInvolved} alt='circle of people'/>
                </div>
            </section>
        </div>
    )
}

export default Home;