import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// export default function Test() {


// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

export default class ContextExample extends React.Component {
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
      <>
        <p>Button using context</p>        
        <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <p>Button don't use context</p>        
        <ThemedButton onClick={()=>{alert('Hi thre!')}}>Hi there</ThemedButton>
      </>
    );
  }
}