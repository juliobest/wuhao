import React from 'react';
import { HARD_SKILLS } from '../../mockData/skills';
import Progressbar from '../progressbar/progressbar';

export default function HardSkills() {
  return (
    <div className='hardSkills'>
      {HARD_SKILLS.map((item) => (
        <div key={item.id} className='hardSkill-item'>
          <div className='hardSkill-item-text'>
            <div className='hardSkill-item-text-innerWrap'>
              <img src={item.icon} alt='skill-icon' />
              <p className='hardSkill-item-text-title'>{item.skill}</p>
            </div>
            <p className='hardSkill-item-text-progress'>{item.progress}%</p>
          </div>
          <Progressbar done={item.progress} />
        </div>
      ))}
    </div>
  );
}
