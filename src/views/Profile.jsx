import React, { Component } from 'react';
import '../assets/css/page-profile.scss';
import ProfilePicture from '../components/ProfilePicture';
import Icon from '../components/Icon';
import Statistic from '../components/Statistic';
import RadioInput from '../components/inputs/RadioInput';
import WeightInput from '../components/inputs/WeightInput';
import ButtonInput from '../components/inputs/ButtonInput';
import Loading from '../components/Loading';

class Profile extends Component {
  constructor(props) {
    super(props);
    const athlete = window.$session.get('athlete');
    this.state = {
      loading: true,
      athlete,
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
    this.state.weight = athlete.weight;
  }

  componentDidMount() {
    window.$strava.getAthlete().then((data) => {
      this.setState({ athlete: data, loading: false });
    });
  }

  render() {
    const {
      options, athlete, weight, loading,
    } = this.state;

    if (loading) {
      return (<Loading />);
    }

    let icon;
    if (athlete.sex === 'M') {
      icon = <Icon name="gender-male" size="small" color="#0090D6" />;
    } else if (athlete.sex === 'F') {
      icon = <Icon name="gender-female" size="small" color="rgb(255, 85, 159)" />;
    }
    return (
      <main>
        <section className="profile-container">
          <ProfilePicture large />
          <div>
            <h2>
              {`${athlete.firstname} ${athlete.lastname}`}
              {icon}
            </h2>
            <h4 className="m-0">{athlete.username}</h4>
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
            <WeightInput name="weight" label="weight" value={weight} />
            <ButtonInput label="Save" primary />
          </div>
        </section>

      </main>
    );
  }
}

export default Profile;
