/**
 * NextJS Material-UI boilerplate
 * @flow
 */

import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import {
  compose,
  setStatic,
  setDisplayName,
  wrapDisplayName,
  lifecycle,
  pure,
  type HOC,
} from 'recompose';

import getContext from './getContext';

type PageContextType = {
  theme: {},
  sheetsManager: {},
};
type PropsType = {
  pageContext: PageContextType,
  req: { headers: { 'user-agent': string } },
};

const withRoot = (
  BaseComponent: React.ComponentType<any>,
): React.ComponentType<any> => {
  const enhance: HOC<Object, Object> = compose(
    setDisplayName('withRoot'),
    // set the static method getInitialProps
    setStatic('getInitialProps', ({ req }: PropsType): {} => {
      // Ensures material-ui renders the correct css prefixes server-side
      let userAgent;
      if (process.browser) {
        userAgent = navigator.userAgent;
      } else {
        userAgent = req.headers['user-agent'];
      }

      return { userAgent };
    }),

    lifecycle({
      componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      },
    }),
    pure,
  );

  const WithRoot = enhance((props: PropsType): React.Node => {
    const styleContext = props.pageContext || getContext();
    return (
      <MuiThemeProvider
        theme={styleContext.theme}
        sheetsManager={styleContext.sheetsManager}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BaseComponent {...props} />
      </MuiThemeProvider>
    );
  });

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'WithRoot');
  }

  return WithRoot;
};

export default withRoot;
