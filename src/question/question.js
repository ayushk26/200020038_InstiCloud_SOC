import React, { useState ,useEffect} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import { FormHelperText } from '@mui/material';



const Question = (props) => {
  const [questionState,setQuestionState] = useState("correct");
  const [bgColor,setbgColor] = useState("#cfe8fc");
  const [selectedOption,setSelectedOption] = useState('None');
 
  const setChosenOption = (option) => {
    setSelectedOption(option);
  }
  useEffect(()=>{
    props.question.selectedOption = selectedOption;
  })
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Select an option');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === props.question.correctOption) {
      setHelperText('You got it!');
      setError(false);
    }  else {
      setHelperText('Incorrect :(');
      setError(true);
    }
  };

  
  return (
    <>
      <Container maxWidth = "sm">
      <Box sx={{ bgcolor: {bgColor},padding:5}} >
      <div>
        Question : {props.question.questionStatement}
      </div>
      <br/>
      <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="A" control={<Radio />} label={props.question.optionA} />
          <FormControlLabel value="B" control={<Radio />} label={props.question.optionB} />
          <FormControlLabel value="C" control={<Radio />} label={props.question.optionC} />
          <FormControlLabel value="D" control={<Radio />} label={props.question.optionD} />
        </RadioGroup>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
        <h1>{helperText}</h1>
      </FormControl>
    </form>
    </Box>
      </Container>
    </>
  )
}

export default Question