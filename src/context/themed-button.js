import React, { useContext } from 'react';
import {ThemeContext} from './theme-context';

function ThemedButton(props, context) {
    //   let props = this.props;
    const theme = useContext(ThemeContext);
    return (
        <button
        {...props}
        style={{backgroundColor: theme.background}}
        />
    );
}
ThemedButton.contextTypes = ThemeContext;
  
export default ThemedButton;

// class ThemedButton extends React.Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;
//     return (
//       <button
//         {...props}
//         style={{backgroundColor: theme.background}}
//       />
//     );
//   }
// }
// ThemedButton.contextType = ThemeContext;

// export default ThemedButton;