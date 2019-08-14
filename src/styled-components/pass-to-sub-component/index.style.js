import { css } from 'styled-components';

// style MyComponent with css and css class
// all these style will be passed in MyComponent through a prop name: prop.className
// MyComponent have to use this prop to apply the styles
// Styled-component will put all styles inside className prop and pass through all other props as is
// other props include: 
// - normal html prop -> pass to dom
// - react prop -> pass to react
const MyComponentStyles = css`
    
    color: ${props => props.name && props.name === "Tom" ? "blue" : "red"};
    .blueclass {
        color: blue;
    }
`;

export default MyComponentStyles;