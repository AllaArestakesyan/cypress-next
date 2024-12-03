import ItemsAccordion from '../components/Accordion'
import styles from './bestPractices.module.css'

export default function BestPracticesPage() {
    const items = [
        { id: 1, summary: "Summary for the first object is detailed.", details: "Details of the first object are quite comprehensive and lengthy." },
        { id: 2, summary: "Summary for the second object is elaborate.", details: "Details of the second object contain extensive information." },
        { id: 3, summary: "Summary for the third object is descriptive.", details: "Details of the third object are provided in great depth here." },
        { id: 4, summary: "Summary for the fourth object is clear and concise.", details: "Details of the fourth object are thorough and descriptive." },
        { id: 5, summary: "Summary for the fifth object explains more.", details: "Details of the fifth object include significant explanations." },
        { id: 6, summary: "Summary for the sixth object provides clarity.", details: "Details of the sixth object are elaborated with precision." },
        { id: 7, summary: "Summary for the seventh object has additional info.", details: "Details of the seventh object are presented comprehensively." },
        { id: 8, summary: "Summary for the eighth object offers insights.", details: "Details of the eighth object are remarkably detailed and clear." },
        { id: 9, summary: "Summary for the ninth object includes all aspects.", details: "Details of the ninth object cover all relevant information fully." },
        { id: 10, summary: "Summary for the tenth object is lengthy and informative.", details: "Details of the tenth object are extensive and well-documented." },
    ]
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>
                Best Practices
            </h1>
            <ItemsAccordion items={items} />
        </main>
    )
}