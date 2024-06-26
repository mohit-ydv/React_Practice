Context API<br>
The Context API provides a means to share values like state, functions, or any data across the component tree without passing props down manually at every level. This is particularly useful for global data that many components need to access.<br>

How to use React Context API?<br>
Step #1 - Create a Context<br>
Step #2 - Wrap your App with Context Provider<br>
Step #3 - Consume the Context in Components

Three Important Parts of the React Context API<br>
1. Provider<br>
    This is a component that is used to wrap components in order to access the context's value. This is where you pass the values that you want to share throughout the component tree using the value prop.

2. Context<br>
    This acts as the storage where the data is stored.

3. Consumer<br>
    The Consumer component is used to consume the shared data within a component. It allows components to subscribe to the context changes and access the shared value.

Example:<br>
Problem - Prop drilling<br>

Solution - context api