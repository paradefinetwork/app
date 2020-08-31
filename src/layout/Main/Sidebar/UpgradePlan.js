import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import SocialButtons from "../../../component/SocialButtons";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#e4e4e480',
    borderRadius: '10px'
  },
  content: {
    padding: theme.spacing(1, 2),
    textAlign: 'center',
  }
}));

const UpgradePlan = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
        <a className='sidebar-footer-link' href="/privacy">Privacy Policy</a>
        <a className='sidebar-footer-link' href="/terms-of-service">Terms Of Service</a>
      </div>
      <div className={classes.content}>
        <SocialButtons/>
      </div>
    </div>
  );
};

UpgradePlan.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default UpgradePlan;
