import React from 'react';
import { SKILLS_SECTION } from '../../mockData/sectionHeadings';
import { SKILLS } from '../../mockData/skills';
import SkillItem from './skillItem';

export default function MySkills() {
  return (
    <section className='section my-work'>
      <div className='container'>
        <div className='section-heading'>
          <h2>{SKILLS_SECTION.title}</h2>
          <div className='line-dec'></div>
          <span>{SKILLS_SECTION.description}</span>
        </div>
        <div className='row'>
          <div className='isotope-wrapper'>
            <div className='isotope-box'>
              {SKILLS.map((item) => (
                <SkillItem
                  key={item.id}
                  section={item.section}
                  skillsList={item.skillsList}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
