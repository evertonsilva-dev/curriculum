import React, { useContext } from 'react';
import Sidebar from 'src/components/Sidebar';
import { ProfileContext } from 'src/contexts/profile';
import { Subtitle } from 'src/styles/components';
import { Content, CurriculoContainer, Education, Educations, Experience, Experiences, Profile } from './style';

export default function Home() {
  const { user } = useContext(ProfileContext);

  return (
    <CurriculoContainer>
      <Sidebar />
      <Content>
        <span className="circle"></span>

        <Profile>
          <Subtitle>Profile</Subtitle>
          <p>{user.Biography}</p>
        </Profile>
        <Educations>
          <Subtitle>Education</Subtitle>
          {user.educations.map((element) => (
            <Education key={element.id}>
              <h3>
                {element.educationLevel}( {element.startDate && new Date(element.startDate).getFullYear()} -{' '}
                {element.endDate ? new Date(element.endDate).getFullYear() : 'Now'} )
              </h3>
              <h4>
                {element.schoolName} - {element.location}{' '}
                {element.collegeCourse && <span> - {element.collegeCourse}</span>}
              </h4>
            </Education>
          ))}
        </Educations>
        <Experiences>
          <Subtitle>Work Experience</Subtitle>
          {user.work_histories.map((element) => (
            <Experience key={element.id}>
              <h3>
                {element.presentProfession}( {element.startDate && new Date(element.startDate).getFullYear()} -{' '}
                {element.endDate ? new Date(element.endDate).getFullYear() : 'Now'} )
              </h3>
              <h4>
                {element.enterprise} - {element.location}
              </h4>
              <p>{element.description}</p>
            </Experience>
          ))}
        </Experiences>
      </Content>
    </CurriculoContainer>
  );
}
