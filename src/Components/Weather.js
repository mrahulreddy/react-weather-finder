
import React, { Component } from 'react'

class Weather extends Component {
  render (props) {
    return (
      <div className="weather__info">
          {
              this.props.city && this.props.country && <p className="weather__key"> Location :
                  <span className="weather__value"> { this.props.city }, { this.props.country }</span>
              </p>
          }
          {
              this.props.temp && <p className="weather__key"> Temperature :
                  <span className="weather__value"> { this.props.temp }	</span>
              </p>
          }
          {
              this.props.humid && <p className="weather__key"> Humidity :
                  <span className="weather__value"> { this.props.humid } </span>
              </p>
          }
          {
              this.props.description && <p className="weather__key"> Conditions:
                  <span className="weather__value"> { this.props.description } </span>
              </p>
          }
          {
              this.props.error && <p className="weather__error">
                  { this.props.error }
              </p>
          }
      </div>
    );
  };
}
export default Weather;
