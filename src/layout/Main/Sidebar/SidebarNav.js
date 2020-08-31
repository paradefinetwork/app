import React, { forwardRef } from 'react';
import { Link as RouterLink } from '@reach/router';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: '#fa5858',
    fontWeight: 600,
    '& $icon': {
      color: '#fa5858'
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{ flexGrow: 1 }}
    >
      <RouterLink
        {...props}
        getProps={({ isCurrent }) => {
          return {
            className: isCurrent ? clsx(props.className, props.activeclass) : props.className
          };
        }} />
    </div>
  )
});

const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
            activeclass={classes.active}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
