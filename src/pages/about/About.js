import React from 'react';
import './about.css';
import ProfileImg from '../../assets/profile.png';

const skills = [
  { skill: 'JavaScript', value: 90 },
  { skill: 'TypeScript', value: 85 },
  { skill: 'Node.js', value: 85 },
  { skill: 'C#', value: 85 },
  { skill: 'React', value: 90 },
  { skill: 'Angular', value: 70 },
  { skill: 'Redux', value: 90 },
  { skill: 'MobX', value: 90 },
  { skill: 'HTML & CSS', value: 90 },
  { skill: 'PostgreSQL', value: 80 },
  { skill: 'Oracle PL/SQL', value: 80 },
  { skill: 'MS SQL', value: 80 },
  { skill: 'AWS', value: 60 },
  { skill: 'Vue', value: 60 },
];

export default () => {

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '200px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', marginTop: '100px' }}>
        <img src={ProfileImg} alt="My Profile" style={{ width: '150px' }} />
        <h1>Shenyu Li</h1>
        <h3>Full Stack Web Developer</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', width: '800px', maxWidth: '80%', columnGap: '30px', rowGap: '20px', justifyContent: 'center'}}>
          <a className='link_item' href="mailto: lishenyu16@gmail.com"><i class="fa fa-envelope" style={{marginRight: '10px'}}></i>lishenyu16@gmail.com</a>
          <a className='link_item' href="/" target='_blank'><i class="fa fa-link" style={{marginRight: '10px'}}></i>shenyu16.com</a>
          <a className='link_item' href="https://linkedin.com/in/shenyu16" target='_blank'><i class="fa fa-linkedin-square" style={{marginRight: '10px'}}></i>linkedin.com/in/shenyu16</a>
          <a className='link_item' href="https://github.com/lishenyu16" target='_blank'><i class="fa fa-github" style={{marginRight: '10px'}}></i>github.com/lishenyu16</a>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
        <section style={{ width: '650px', maxWidth: '90%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2>Skills &amp; Proficiency</h2>
          <div style={{ width: '100%' }}>
            {skills.map(item => {
              return (
                <div className='skill_item' key={item.skill}>
                  <h3 className="level_title">{item.skill}</h3>
                  <div className="level_bar">
                    <div className="progress_bar" style={{ width: `${item.value}%` }}>{item.value}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
