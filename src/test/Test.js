import React from 'react';
import {ThemeContext, themes, event} from './theme-context';
import ThemedButton from './themed-button';
import DivListener from './DivListener';

// export default function Test() {


// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton>
      Change Theme
    </ThemedButton>
  );
}

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <div>
            <ThemeContext.Provider value={event}>
                <DivListener />
            </ThemeContext.Provider>
        </div>
        <div>
          <ThemedButton>Click me</ThemedButton>
        </div>
      </div>
    );
  }
}

    // return(
    //     <div>Hello world!</div>
    // )
// }