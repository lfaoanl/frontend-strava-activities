import React, { Component } from 'react';
import '../assets/css/page-profile.scss';
import ProfilePicture from '../components/ProfilePicture';
import Icon from '../components/Icon';
import Statistic from '../components/Statistic';
import RadioInput from '../components/inputs/RadioInput';
import WeightInput from '../components/inputs/WeightInput';
import ButtonInput from '../components/inputs/ButtonInput';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        units: {
          imperial: 'Imperial',
          metric: 'Metric',
        },
        speed: {
          speed: 'km/h',
          pace: 'min/km',
        },
      },
    };
  }

  render() {
    const { options } = this.state;
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
          <RadioInput name="units" label="units" options={options.units} />
          <RadioInput name="speed" label="speed indication" options={options.speed} />

          <h4 className="m-14">Weight</h4>
          <div className="button-group">
            <WeightInput name="weight" label="weight" value="72" />
            <ButtonInput primary />
          </div>
        </section>

      </main>
    );
  }
}

export default Profile;
