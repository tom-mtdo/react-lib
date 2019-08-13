import React, { useContext } from 'react';
import {ThemeContext} from './theme-context';

function ThemedButton(props, context) {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.emit('myclick', {});
    };

    return (
        <button
        {...props}
        onClick={handleClick}
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