import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { withModules } from '~/modules/core/utils/modulesLoader';

function PageContent({ modules }) {
  return (
    <Switch>
      { modules.map(module => (
        <Route
          // Only home page should be exact
          exact={module.homePath === '/'}
          key={module.name}
          path={module.homePath}
          component={module.HomePage}
        />
      )) }
    </Switch>
  );
}

PageContent.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withModules(PageContent);

