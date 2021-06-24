import React, { Component } from 'react';
import '../assets/css/page-profile.scss';
import merge from 'lodash/merge';
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
    const settings = window.$session.get('settings');
    this.state = {
      loading: true,
      weightLoading: false,
      athlete,
      stats: null,
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
      settings,
    };
    this.onWeightInput = this.onWeightInput.bind(this);
  }

  componentDidMount() {
    window.$strava.getAthlete().then((data) => {
      this.setState(merge({ loading: false }, data));
    });
  }

  onWeightInput(weight) {
    const { athlete } = this.state;
    this.setState({ athlete: merge(athlete, { weight }) });
  }

  updatePreferences(option, v) {
    const { settings } = this.state;
    const newValues = merge(settings, {
      [option]: v,
    });
    window.$session.update('settings', newValues);
    this.setState({ settings: newValues });
  }

  updateWeight() {
    const { athlete } = this.state;
    this.setState({ weightLoading: true });
    window.$strava.updateAthlete({ weight: athlete.weight }).then(() => {
      this.setState({ weightLoading: false });
    });
  }

  render() {
    const {
      options, settings, athlete, loading, stats, weightLoading,
    } = this.state;

    if (loading) {
      return (
        <main>
          <Loading />
        </main>
      );
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
          <Statistic label="Activities" value={stats.all_run_totals.count} centered />
          <Statistic label="friends" value={athlete.friend_count} centered />
          <Statistic label="Followers" value={athlete.follower_count} centered />
        </section>

        <section>
          <h3>Settings</h3>
          <RadioInput name="units" label="units" options={options.units} value={settings.units} onChange={(v) => this.updatePreferences('units', v)} />
          <RadioInput name="speed" label="speed indication" options={options.speed} value={settings.speed} onChange={(v) => this.updatePreferences('speed', v)} />

          <h4 className="m-14">Weight</h4>
          <div className="button-group">
            <WeightInput name="weight" label="weight" value={athlete.weight} onInput={this.onWeightInput} />
            <ButtonInput label="Save" primary loading={weightLoading} onClick={() => this.updateWeight()} />
          </div>
        </section>

      </main>
    );
  }
}

export default Profile;
