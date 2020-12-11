import React, { useContext } from 'react';
import { ReactComponent as Mail } from 'src/assets/icons/mail.svg';
import { ReactComponent as Phone } from 'src/assets/icons/phone.svg';
import config from 'src/config';
import { ProfileContext } from 'src/contexts/profile';
import { Subtitle } from 'src/styles/components';
import {
  Contact,
  ContactItem,
  Language,
  Languages,
  ProfileData,
  ProfilePicture,
  SidebarWrapper,
  Skill,
  Skills,
} from './style';

export default function Sidebar() {
  const { user } = useContext(ProfileContext);
  const imageExists = (image_url:string)=>{

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status !== 404;
}
  return (
    <SidebarWrapper>
      <ProfilePicture>
        <img src={`${imageExists(config.baseUrl + user.profilePicture.url.slice(1)) ? `${config.baseUrl}${user.profilePicture.url.slice(1)}`: '/profile.jpg'}`} alt="" />
      </ProfilePicture>
      <ProfileData>
        <h1>{user.name}</h1>
        <h2>{user.role}</h2>
      </ProfileData>

      <Contact>
        <span className="circle"></span>
        <ContactItem>
          <Mail />
          <span>{user.contact.Email}</span>
        </ContactItem>
        {/* <ContactItem>
          <Address />
          <span>{user.contact.Address}</span>
        </ContactItem> */}
        <ContactItem>
          <Phone />
          <span>{user.contact.Phone}</span>
        </ContactItem>
        <ContactItem>
          <Phone />
          <span>{user.contact.Mobile}</span>
        </ContactItem>
      </Contact>
      <Languages>
        <Subtitle>Language</Subtitle>
        <div className="cont-languages">
          {user.languages.map((element) => (
            <Language title={`${element.percent * 100}%`}>
              <h3>{element.languageName}</h3>
              <span></span>
            </Language>
          ))}
        </div>
      </Languages>
      <Skills>
        <Subtitle>Skills</Subtitle>
        <div className="cont-skills">
          {user.skills.map((element) => (
            <Skill title={`${element.percent * 100}%`}>
              <h3>{element.title}</h3>
              <span></span>
            </Skill>
          ))}
        </div>
      </Skills>
    </SidebarWrapper>
  );
}
