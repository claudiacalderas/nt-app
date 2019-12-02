import React from 'react';
import './ResultsContainer.css'
import TripDisplay from './tripDisplay/TripDisplay';
import NexTripBanner from './nexTripBanner/NexTripBanner';
import Schedule from './schedule/Schedule';
import BackButton from './backButton/BackButton';
import { connect } from 'react-redux';

class ResultsContainer extends React.Component {
  state = {
    curTime: new Date().toTimeString()
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toTimeString()
      })
    },1000)
  }

  render() {
    return(
      <>
        <TripDisplay 
          route={this.props.route.Description}
          direction={this.props.direction.Text}
          stopText={this.props.stop.Text}
          stopNumber={this.props.stop.Value} />
        <NexTripBanner 
          data={this.props.trips ? this.props.trips[0].DepartureText : undefined} />
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
    stop: state.stop
	}
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps) (ResultsContainer);