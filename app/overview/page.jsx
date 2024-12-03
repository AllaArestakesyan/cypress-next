import ItemsAccordion from '../components/Accordion'
import styles from './overview.module.css'

export default function Overview() {
  const items = [
    { id: 1, summary: "Overview of the Application Architecture.", details: "Provides a high-level understanding of the application's structure, including frontend, backend, and database components." },
    { id: 2, summary: "Overview of Key Features and Functionality.", details: "Summarizes the primary features of the application, highlighting what users can accomplish and how each feature benefits them." },
    { id: 3, summary: "Overview of the Development Process.", details: "Outlines the stages of development, from initial planning and design to implementation, testing, and deployment." },
    { id: 4, summary: "Overview of the Technology Stack.", details: "Describes the technologies and tools used in the project, including programming languages, frameworks, and third-party libraries." },
    { id: 5, summary: "Overview of User Roles and Permissions.", details: "Explains the different user roles within the application and the specific permissions assigned to each role." },
    { id: 6, summary: "Overview of the Data Flow in the System.", details: "Illustrates how data moves through the application, from user input to database storage and retrieval for display." },
    { id: 7, summary: "Overview of Security Measures Implemented.", details: "Highlights key security features such as authentication, data encryption, and protection against common vulnerabilities." },
    { id: 8, summary: "Overview of the UI/UX Design Principles.", details: "Summarizes the design approach, focusing on usability, accessibility, and consistency across the application." },
    { id: 9, summary: "Overview of the Performance Optimization Strategies.", details: "Discusses techniques used to improve application performance, such as caching, lazy loading, and code splitting." },
    { id: 10, summary: "Overview of the Testing and Quality Assurance Process.", details: "Describes the testing methodologies used to ensure application reliability, including unit, integration, and end-to-end testing." },
  ]

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>
        Overview & Install
      </h1>
      <ItemsAccordion items={items} />
    </main>
  )
}