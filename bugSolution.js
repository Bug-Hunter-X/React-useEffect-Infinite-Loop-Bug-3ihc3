```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    if (count < 10) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array fixes the issue

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```