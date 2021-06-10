import React, { Component } from 'react';
import '../assets/css/page-profile.scss';
import ProfilePicture from '../components/ProfilePicture';
import Icon from '../components/Icon';
import Statistic from '../components/Statistic';
import RadioInput from '../components/inputs/RadioInput';

class Profile extends Component {
  render() {
    return (
      <main>
        <section className="profile-container">
          <ProfilePicture large />
          <div>
            <h2>
              John Doe
              <Icon name="gender-male" size="small" color="#0090D6" />
            </h2>
            <h4 className="m-0">JOHN_doe_971</h4>
          </div>
        </section>

        <section className="profile-stats">
          <Statistic label="friends" value="21" centered />
          <Statistic label="friends" value="21" centered />
          <Statistic label="friends" value="21" centered />
        </section>

        <section>
          <h3>settings</h3>
          <RadioInput />
        </section>
      </main>
    );
  }
}

export default Profile;
