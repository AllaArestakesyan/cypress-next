import ItemsAccordion from '../components/Accordion'
import PostButton from '../components/PostButton'
import styles from './examples.module.css'
import GrudgeList from '../components/GrudgeList'

export default function ExamplesPage() {
  const items = [
    { id: 1, summary: "Example of a responsive navigation bar with dropdowns.", details: "This example demonstrates how to build a mobile-friendly navigation bar with dropdown menus that adapt to various screen sizes." },
    { id: 2, summary: "Example of a dynamic form with real-time validation.", details: "This example shows a form with multiple input fields, including text, email, and password, with real-time validation feedback." },
    { id: 3, summary: "Example of a dark mode toggle implementation.", details: "This example illustrates how to create a theme switcher that toggles between light and dark modes with smooth transitions." },
    { id: 4, summary: "Example of a user authentication flow with JWT.", details: "This example covers user login and registration, secure token storage, and role-based authentication using JSON Web Tokens." },
    { id: 5, summary: "Example of an interactive data table with sorting and filtering.", details: "This example demonstrates a data table component that supports sorting by columns, filtering results, and paginating large datasets." },
    { id: 6, summary: "Example of an image gallery with lazy loading and modals.", details: "This example presents an image gallery where images load as you scroll and can be viewed in a full-screen modal when clicked." },
    { id: 7, summary: "Example of a REST API integration with Axios.", details: "This example shows how to fetch, post, and update data from a REST API using Axios, including error handling and loading states." },
  ]

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>
        Examples
      </h1>
      <ItemsAccordion items={items} />
      <div className={styles.postButton}>
        <PostButton className={styles.postButton} />
      </div>
      <GrudgeList />
    </main>
  )
}