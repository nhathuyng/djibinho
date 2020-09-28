import React from 'react';
import { TextField, Typography, Box } from '@material-ui/core';
import useStyles from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { IFormData } from '../../../other/interfaces';
import { emailRegex } from '../../../other/constants';
import Btn from '../../atoms/Btn/Btn';

interface ContactFormProps {}

const schema = yup.object().shape({
  name: yup.string().required('Required.'),
  company: yup.string().required('Required.'),
  email: yup
    .string()
    .matches(emailRegex, 'Not a valid email adress.')
    .required('Required.'),
  message: yup
    .string()
    .trim()
    .min(10, 'Must be at least 10 characters.')
    .max(200, 'Can not exceed 200 characters.')
    .required('Required.'),
});

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormData) => {
    console.log(data);
    reset();
  };

  return (
    <React.Fragment>
      <form
        className={classes.root}
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <Typography
          align='center'
          className={classes.typo}
          variant='h2'
          color='initial'>
          {'contact'.toUpperCase()}
        </Typography>
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.inputLabel,
            },
          }}
          inputRef={register}
          variant='outlined'
          fullWidth
          name='name'
          label='Name*'
          color='primary'
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.inputLabel,
            },
          }}
          inputRef={register}
          variant='outlined'
          fullWidth
          name='company'
          label='Company*'
          color='primary'
          error={!!errors.company}
          helperText={errors.company ? errors.company.message : ''}
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.inputLabel,
            },
          }}
          inputRef={register}
          variant='outlined'
          fullWidth
          name='email'
          label='Email*'
          color='primary'
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.inputLabel,
            },
          }}
          inputRef={register}
          variant='outlined'
          fullWidth
          name='phone'
          label='Phone'
          color='primary'
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.inputLabel,
            },
          }}
          inputRef={register}
          variant='outlined'
          multiline
          rows={3}
          fullWidth
          name='message'
          label='Message*'
          color='primary'
          error={!!errors.message}
          helperText={errors.message ? errors.message.message : ''}
        />
        <Box display='flex' justifyContent='center'>
          <Btn type='submit'>Send Message</Btn>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
