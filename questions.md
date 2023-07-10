# 1 What is the difference between Component and PureComponent? Give an example where it might break my app.

- Simply put, the difference between Component and PureComponent is that, in the case of PureComponent it compares the current state with new state in order to make a decision whether to re-render or do otherwise. While in the case of Component, re-renders occur every time a prop passed to it is changed. I can draw up an analogy using two boxes that contains pencils where each pencil you pick to use must be a new one. For one to pick up a pencil in Box A (Component), one has to first take out all the pencils in the box but in the case of Box B (PureComponent) the box already kept the record of pencils you have used the previous time, so you can just take out the one you need.

- PureComponent can break my app if/when state and props are not immutable. For example let’s say one is building a car with pieces of Lego, when you take the pieces apart, you can change the colour of the car by putting on different coloured pieces. But if you put the same-coloured pieces back on, the car looks the same as before. Now Imagine a special Lego set used to build a car that has a memory of what it looked like previously, so if you ever take it apart and later put it back together with same Lego pieces, it won't change. But if by any chance you try to change the colour of the Lego pieces without first removing them from the car, the car might definitely break down.

# 2 Context + ShouldComponentUpdate might be dangerous. Why is that?

- To the best of my knowledge, this might be dangerous because when Context is updated it can lead to re-rendering of components that are connected to it even ShouldComponentUpdate returns false. This needless re-rendering will obviously affect the performance of the app.

# 3 Describe 3 ways to pass information from a component to its PARENT.

- Props: For this to happen, there is a sort of communication that happens between Parent and child where the parent passes a function to the child, and this allows the child to update the state that has been shared. Now, when the child wants to send back that information, it will achieve this by calling the earlier passed function and pass the data as an argument. This new information will then be accessed by the parent through its state variable. Here is a rough code to explain it

``` function Parent() {
  const [data, setData] = useState('');

  

  return (
    <>
    <Child data={data} setData={setData} />
    <p>Info from Child: {data}</p>
    </>
  );
}

function Child({ data, setData }) {
  const handleClick = () => {
    setData('New Info from Child');
  }

  return (
    <button onClick={handleClick}>Send Info to Parent</button>
  );
} 
```
 - Callback Function: This is similar to the explanation above because they both can access information from the parent through props but this method is different because the child can use a callback function passed from the parent to send new information back to the parent which can be used to update its state. Below is a simple code explanation.

 ``` 
 // Parent Component
function Parent() {
  const [data, setData] = useState('');

  const handleData = (newData) => {
    setData(newData);
  }

  return (
    <div>
      <Child sendData={handleData} />
      <p>Info from Child: {data}</p>
    </div>
  );
}

// Child Component
function Child({ sendData }) {
  const handleClick = () => {
    sendData('New Info from Child');
  }

  return (
    <button onClick={handleClick}>Send Info to Parent</button>
  );
}
 
 ```
 - using the useRef hook: Here the parent component creates a ref using the useRef hook and passed information to the child through a prop. For the child to pass back information to the parent, it can change the value of this ref by changing its current property. This action allows the child to now send back data to the parent.

# 4  Give 2 ways to prevent components from re-rendering.

- React.memo: Using this can help to prevent components from re-rendering if their props have not changed. Wrapping up a functional component inside React.memo creates a new component that can only re-render when its props have changed.

- useMemo and useCallback: these hooks can be used to prevent rerenders by memoizing values and functions respectively.  To put it in simpler words, useMemo allows one to remember the result of a computation so that it does not have to be recomputed on every render, while useCallback allows one to memoize a function so that it does not have to be recreated on every render.

# 5 What is a fragment and why do we need it? Give an example where it might break my app.

- A fragment allows one to group multiple elements together in JSX without the need for additional HTML elements. We will need it in a situation where we want to return multiple elements from a component but do not want to wrap them in divs.

- I do not think the usage of react fragments can necessarily break an app (I'm open to learn more about this) but I know there are some scenarios where using it can cause issues. For example, if one uses it with a library that has a specific DOM structure like Bootstrap, it might cause problems.

# 6 Give 3 examples of the HOC pattern

- Unfourtunately, I can only remember one from the top of my head now and that is Redux's connect. I know it’s a Higher Order Component that connects a React component to a Redux store.

# 7 What's the difference in handling exceptions in promises, callbacks and async…await?

- In promises, a catch method is used exceptions. For example, if an error occurs, the promise is rejected and the catch method will be called with the error object.

- In callbacks, for example if an error occurs, that error object is passed to the callback function, which then handles the error.

- In async...await, it is handled though a try/catch block. For example, if an error occurs, it is thrown as an exception and can be caught in the catch block.

# 8 How many arguments does setState take and why is it async.

- It can take up to two arguements, an object that represents a components new state and an optional callback function that deals with updated state.

- setState is async because when it is called in a react component, it does not update the component's state immediately. It instead creates a pending state where update is scheduled to happen at some point.

# 9 List the steps needed to migrate a Class to Function Component

- Remove the extends Component and change Class to function.

- Move the data in the render method to the body of the function.

- Convert methods to stand alone arrow functions.

- If there is a constructor function that uses setState change it to use useState hook.

- Change lifecycycle methods and replace with hooks. For example, replace componentDidMount with useEffect.

# 10 List a few ways styles can be used with components

- Inline Styles

- CSS, SASS

- CSS Modules

- Styles components

- Tailwind CSS

# 11 How to render an HTML string coming from the server

I do not totally understand this question. Is this HTML string rendered in React? if yes, then one can use dangerouslySetInnerHTML prop to achieve this. 






