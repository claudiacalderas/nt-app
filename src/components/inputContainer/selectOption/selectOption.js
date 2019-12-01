import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 360,
    maxWidth: 360
  }
}));

const SelectOption = props => {
  const classes = useStyles();
  const [selection, setSelection] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    event.preventDefault();
    setSelection(event.target.value);
    props.onChange(event.target.value);
  };

  const displayData = props.data ? props.data : [];

  return (
    <div>
      <p>{props.valueProperty}</p>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id={props.labelId}>
          {props.label}
        </InputLabel>
        <Select
          id={props.selectId}
          value={selection}
          onChange={handleChange}
          labelWidth={labelWidth}
          disabled={!displayData.length} 
        >
        
        {displayData.map((element, index) => {
          return <MenuItem value={element.Value} key={index}>{element.Text}</MenuItem>
        })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectOption;