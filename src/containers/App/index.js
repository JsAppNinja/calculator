import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import routes from './routes';

import 'styles/containers/app.css';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Box mt={4}>
      <Helmet>
        <meta name="description" content="Calculator" />
        <title>Calculator</title>
      </Helmet>
      {routes()}
    </Box>
  </MuiThemeProvider>
);

const withSaga = injectSaga({ key: 'app', saga });
export default compose(withRouter, withSaga)(App);
