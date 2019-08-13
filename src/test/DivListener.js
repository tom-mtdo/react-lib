import React, {useContext} from 'react';
import {ThemeContext} from './theme-context';

function DivListener() {
    const theme = useContext(ThemeContext);

    theme.on('myclick', () => {alert('Hello')});

    return (
        <div>
            waiting
        </div>
    );
}
DivListener.contextTypes = ThemeContext;
  
export default DivListener;