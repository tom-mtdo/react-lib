import React from 'react';
import styled from 'styled-components';
import MyComponentStyles from './index.style';

/**
 * 
 * @param {*} props 
 * props.name: a normal props pass
 * props.className: a prop injected by styled-components
 */

const MyComponent = (props) => {
    return (
        <>
            {/* className={props.className}: to appy styles, made by styled-component, 
            to following div. These styles also avaiable to sub components of the div */}
            <div className={props.className}>
                Hello {props.name}
            </div>

            {/* pass all props, including styles in className={props.className} and props.name to sub component*/}
            <MyComponent2 {...props}/>
        </>
    );
};

const MyComponent2 = (props) => {
    return (
        <>
            {/* this sub component use styles inject by styled-component, className={props.className}. 
            These styles are passed down from parent. These styles will be available to all nested components */}
            <div className={props.className}>
                {/* props.name is a normal prop pass down by parent */}
                Hello from MyComponent2 {props.name}
                {/* The following div can use css class "blueclass" injected by styled-component. 
                Because this div is nested inside the div with className={props.className}*/}
                <div className="blueclass">
                    Hi from blue
                </div>
            </div>

            {/* The following div can't use blueclass because it is outside the div with className={props.className}
            so css class "blueclass" doesn't exist to it.*/}
            <div className="blueclass">
                Hi from outside scope
            </div>        
        </>
    );
};

// style MyComponent with css and css class
// all these style will be passed in MyComponent through a prop name: prop.className
// MyComponent have to use this prop to apply the styles
// Styled-component will put all styles inside className prop and pass through all other props as is
// other props include: 
// - normal html prop -> pass to dom
// - react prop -> pass to react

// Styles can be in the same file
// const MyStyledComponent = styled(MyComponent)`    
//     color: ${props => props.name && props.name === "Tom" ? "blue" : "red"};
//     .blueclass {
//         color: blue;
//     }
// `;

// Styles can be a separate file
// and can add some more in here
const MyStyledComponent = styled(MyComponent)`
    ${MyComponentStyles};
    background: ${props => props.name && props.name === "Hailey" ? "yellow" : ""};
`;

export default MyStyledComponent;