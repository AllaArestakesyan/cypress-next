import ItemsAccordion from '../components/Accordion'
import styles from './fundamentals.module.css'

export default function FundamentalsPage() {
  const items = [
    { id: 1, summary: "Introduction to Variables and Data Types.", details: "This section explains how to declare variables and introduces common data types such as strings, numbers, and booleans." },
    { id: 2, summary: "Control Structures: Conditionals and Loops.", details: "Learn the basics of control flow, including `if` statements, `for` loops, and `while` loops, to manage program logic." },
    { id: 3, summary: "Functions and Their Importance in Code Reusability.", details: "Understand how to define and call functions, pass parameters, and return values to make your code more modular and reusable." },
    { id: 4, summary: "Understanding Objects and Arrays.", details: "Dive into creating and manipulating objects and arrays, which are essential for managing collections of data." },
    { id: 5, summary: "Introduction to Asynchronous Programming.", details: "Learn about callbacks, promises, and async/await to handle operations that take time, such as fetching data from an API." },
    { id: 6, summary: "Error Handling and Debugging Techniques.", details: "This section covers how to handle runtime errors using try-catch blocks and introduces basic debugging tools and techniques." },
    { id: 7, summary: "Working with the DOM: Basics of Web Interaction.", details: "Learn how to select and manipulate DOM elements, handle events, and update the user interface dynamically." },
    { id: 8, summary: "Understanding CSS Basics for Styling.", details: "Covers fundamental CSS concepts such as selectors, properties, and the box model to style web pages effectively." },
    { id: 9, summary: "Introduction to Version Control with Git.", details: "An overview of version control systems, focusing on Git commands to track changes, collaborate, and manage code repositories." },
    { id: 10, summary: "The Basics of Responsive Design.", details: "Learn the principles of responsive design using media queries to ensure your web pages look great on all devices." }
  ]

  return (
    <main className={styles.main}>
      <h1 data-test="fundamentals-header" className={styles.header}>
        Testing Fundamentals
      </h1>
      <ItemsAccordion items={items} />
    </main>
  )
}