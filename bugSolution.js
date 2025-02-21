```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    // Cleanup function to prevent memory leaks
    const intervalId = setInterval(() => {
      console.log('Interval running');
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log('Unmounted!');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```