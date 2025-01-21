```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: If the condition is true, it will run infinitely
    if (count < 10) {
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [count]); // count is in dependency array, creating an infinite loop

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```