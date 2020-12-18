import React from 'react'

import { withStyles} from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider'

type Props = {
  updateRecipe: any;
  updateQuery: any;
}

const BoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const CookSlider = withStyles({
    root: {
      color: '#5abe22',
      height: 2,
      padding: '15px 0',
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      boxShadow: BoxShadow,
      marginTop: -10,
      marginLeft: -10,
      '&:focus, &:hover, &$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: BoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 12px)',
      top: -22,
      width: 40,
      '& *': {
        background: 'transparent',
        color: '#fff',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);

class RangeSlider extends React.Component<Props>{

  constructor(props: Props){
    super(props);
    this.onChangeCommitted = this.onChangeCommitted.bind(this);
  }

  //updates the text displayed above the slider
  valueLabelFormat(value: Number){
    if(value === 120){
      return `120+ mins`
    }
      return `${value} mins`
  }

  //updates the data store query
  onChangeCommitted(event: React.ChangeEvent<{}>, value: number | number[]){
    this.props.updateQuery(value);
    this.props.updateRecipe();
  }

  render(){
      return (
          <CookSlider
              defaultValue={30}
              getAriaValueText={this.valueLabelFormat}
              valueLabelFormat={this.valueLabelFormat}
              aria-labelledby="discrete-slider-always"
              valueLabelDisplay="on"
              step={5}
              marks
              min={10}
              max={120}
              onChangeCommitted={this.onChangeCommitted}
          />
      )
  }
}

export default RangeSlider;