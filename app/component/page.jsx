import ItemsAccordion from '../components/Accordion'
import styles from './component.module.css'

export default function ComponentPage() {
  const items = [
    { id: 1, summary: "Header Component for displaying navigation and branding.", details: "The header component includes the site logo, navigation menu, and optional search bar for user convenience." },
    { id: 2, summary: "Footer Component for contact information and quick links.", details: "The footer provides essential links, social media icons, and copyright information in a clear and organized manner." },
    { id: 3, summary: "Sidebar Component for displaying additional navigation options.", details: "The sidebar contains collapsible sections and quick access links to various parts of the application for easy navigation." },
    { id: 4, summary: "Card Component for displaying content in an organized layout.", details: "This component is used to showcase individual items such as product information, user profiles, or blog posts in a compact format." },
    { id: 5, summary: "Modal Component for displaying overlay dialogs or alerts.", details: "The modal is designed to grab user attention, providing options or displaying important messages without navigating away." },
    { id: 6, summary: "Button Component for user interactions and form submissions.", details: "Buttons support multiple states, styles, and actions, serving as key triggers for user interactions throughout the app." },
    { id: 7, summary: "Form Component for capturing user input in various formats.", details: "This component handles user input fields such as text, dropdowns, checkboxes, and validation feedback." },
    { id: 8, summary: "Table Component for displaying structured data efficiently.", details: "The table supports sorting, filtering, and pagination for managing large datasets within the user interface." },
    { id: 9, summary: "Tabs Component for organizing content into multiple sections.", details: "The tabs provide a clear and interactive way to switch between different content areas without reloading the page." },
    { id: 10, summary: "Carousel Component for showcasing multiple images or items.", details: "The carousel allows users to navigate through a set of images or other elements using arrows or dots, enhancing visual engagement." },

  ]

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Component Testing</h1>
      <ItemsAccordion items={items} />
    </main>
  )
}