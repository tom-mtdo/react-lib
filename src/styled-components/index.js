import React from 'react';
import styled from 'styled-components';

const MyComponent = (props) => {
    return (
        <>
            <div className={props.className}>
                Hello {props.name}
            </div>
            <MyComponent2 {...props}/>
        </>
    );
};

const MyComponent2 = (props) => {
    return (
        <div className={props.className}>
            Hello from MyComponent2 {props.name}
            <div className="blueclass">
                Hi from blue
            </div>
        </div>
    );
};

const MyStyledComponent = styled(MyComponent)`
    color: red;

    .blueclass {
        color: blue;
    }
`;

export default MyStyledComponent;