# Advance-concepts:

My coding practices and learning advance concepts.

# Parcel:

    1) Dev build
    2) Local server
    3) Hot module replacement
    4) Tree shaking
    5) Good dev experience -  Error handling
    6) Image optimisation
    7) Caching previous builds for faster performance

    ^ - caret - updates the packages to minor versions
    ~ - tilde - updates the packages to major versions

# JSX:

    1) Markup + Logic
    2) Xml or html like syntax which also holds JS functionality
    3) attribute name should be in camelCase
    4) JSX -> ReactElement -> Object -> HTML elements (while render)
    5) JS operations are performed inside the curly braces

# Parcel + Babel (transpiler):

    - Parcel bundler have babel which is a transpiler which converts JSX to JS which browser can understand.

# Components:

    1) Class based components
    2) Functional Components - js function which return some peice of jsx from it.

    RULES: Should start with Capital letter.
           root.render(<Component />)

# Component Composition:

    Rendering one component inside the other component.

# React Router DOM:

    npm i "react-router-dom";
    import {createRouter, RouterProvider, Outlet} from "react-router-dom";
    import {Link} from "react-router-dom";
    import {useRouteError} from "react-router-dom";
    import {useParams} from "react-router-dom";

    React everything is a component, so when using the <Link to="/">Home<Link> , in this case we can changing the component, the page will not reload fully like using <a href="/">Home</a>
    1) Never use <a> tag in React.

# Class based Components

    1) Extends React.Component
    2) Have render(){} which returns some piece oj jsx
    3) Have constructor(props) which have super(props) gives us to access props in render method
    4) Inside constructor we can use super variables, this.state and update using this.setState({})
    5) state can be updated using this.setState() *only* so it can trigger the re-render progress
    6) lifecycle methods
        - constructor()
        - render()
        - async componentDidMount()
        - componentDidUpdate(prevProps, prevState)
        - componentWillUnmount
