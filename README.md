# React useEffect Hook Missing Cleanup

This example demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function.  The `useEffect` hook, without proper cleanup, can cause memory leaks and unexpected side effects.  The provided solution showcases the correct implementation, including a cleanup function to handle unmounting.