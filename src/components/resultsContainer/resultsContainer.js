import React from 'react';
import './resultsContainer.css'
import TripDisplay from './tripDisplay/tripDisplay';
import NexTripBanner from './nexTripBanner/nexTripBanner';
import Schedule from './schedule/schedule';
import BackButton from './backButton/backButton';
import { connect } from 'react-redux';
import { loadTrips } from '../../redux/actions/nextripActions';


class ResultsContainer extends React.Component {
  state = {
    bannerData: ''
  }
  intervalID = 0;

  setBannerData() {
    (this.props.trips && this.props.trips[0] && this.props.trips[0].DepartureText)
    ? this.setState({bannerData: this.props.trips[0].DepartureText})
    : this.setState({bannerData: undefined})
  }

  componentDidMount() {
    this.setBannerData();
    this.intervalID = setInterval( () => {
      if(this.props.stopNumber) {
        this.props.loadTrips({stopNumber: this.props.stopNumber})
        .then(() => {
          this.setBannerData();
        })
        .catch(error => {
          alert('Loading trips failed: ' + error);
        });
      } else {
        if (this.props.route.Route && this.props.direction.Value && this.props.stop.Value) {
          this.props.loadTrips({route: this.props.route.Route, direction: this.props.direction.Value, stop: this.props.stop.Value})
          .then(() => {
            this.setBannerData();
          })
          .catch(error => {
            alert('Loading trips failed: ' + error);
          });
        } else {
          this.setState({bannerData: undefined})
        }
      }
    },60000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return(
      <>
        <main>
          <TripDisplay 
            route={this.props.route.Description}
            direction={this.props.direction.Text}
            stopText={this.props.stop.Text}
            stopValue={this.props.stop.Value} 
            stopNumber={this.props.stopNumber} />
          <NexTripBanner 
            data={this.state.bannerData} />
          <div className="scheduleContainer">
              <Schedule data={this.props.trips}/>
              <BackButton />
          </div>
        </main>
      </>
    )
  }
}

function mapStateToProps(state) {
	return {
    trips: state.trips,
    route: state.route,
    direction: state.direction,
    stop: state.stop,
    stopNumber: state.stopNumber
	}
}

const mapDispatchToProps = {
  loadTrips
}

export default connect(mapStateToProps, mapDispatchToProps) (ResultsContainer);