// a higher-order component (HOC) is a function
// that takes a component and returns a new component

const applyStyles = (OriginalComponent) => {
  // creating a new comp
  const NewComponent = (props) => {
    console.log(props);
    return (
      <div className="hoc-demo-box">
        <OriginalComponent {...props}/>
      </div>
    );
  };
  // returning a new component
  return NewComponent;
};

export default applyStyles;
