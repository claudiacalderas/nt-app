import React from 'react';
import './ResultsContainer.css'
import TripDisplay from './tripDisplay/TripDisplay';
import NexTripBanner from './nexTripBanner/NexTripBanner';
import Schedule from './schedule/Schedule';
import BackButton from './backButton/BackButton';
import { connect } from 'react-redux';
import { loadTrips } from '../../redux/actions/nextripActions';


class ResultsContainer extends React.Component {
  state = {
    bannerData: ''
  }
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval( () => {
      if(this.props.stopNumber) {
        this.props.loadTrips({stopNumber: this.props.stopNumber})
        .then(() => {
          (this.props.trips[0] && this.props.trips[0].DepartureText)
            ? this.setState({bannerData: this.props.trips[0].DepartureText})
            : this.setState({bannerData: undefined})
        })
        .catch(error => {
          alert('Loading trips failed: ' + error);
        });
      } else {
        if (this.props.route.Route && this.props.direction.Value && this.props.stop.Value) {
          this.props.loadTrips({route: this.props.route.Route, direction: this.props.direction.Value, stop: this.props.stop.Value})
          .then(() => {
            (this.props.trips[0] && this.props.trips[0].DepartureText)
            ? this.setState({bannerData: this.props.trips[0].DepartureText})
            : this.setState({bannerData: undefined})      
          })
          .catch(error => {
            alert('Loading trips failed: ' + error);
          });
        } else {
          this.setState({bannerData: undefined})
        }
      }
    },5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return(
      <>
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