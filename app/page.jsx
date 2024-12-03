import Accordion from './components/Accordion'
import styles from './page.module.css'

export default function Home() {
  const reasonsCypressIsGreat = [
    { id: 1, summary: "Welcome Banner with a Brief Introduction.", details: "A hero section that greets users, provides a quick overview of the platform, and includes a call-to-action button for getting started." },
    { id: 2, summary: "Highlights of Key Features and Benefits.", details: "Showcases the most important features of the application, explaining how they can solve user problems or improve their experience." },
    { id: 3, summary: "Quick Links to Popular Sections.", details: "Provides easy navigation to frequently visited pages such as the Dashboard, Profile, or Help Center for user convenience." },
    { id: 4, summary: "Testimonials or User Success Stories.", details: "Displays feedback from satisfied users to build trust and demonstrate the value of the platform through real-world success stories." },
    { id: 5, summary: "Latest News or Updates from the Team.", details: "Keeps users informed about new features, upcoming events, or important announcements related to the application." },
    { id: 6, summary: "Overview of Recent Activities or Progress.", details: "Highlights recent user activity or system changes, such as newly uploaded content, recent transactions, or completed tasks." },
    { id: 7, summary: "Call-to-Action for New Users.", details: "Encourages visitors to sign up, explore a demo, or learn more about the platform with strategically placed buttons or links." },
    { id: 8, summary: "Introduction to the Team or Company.", details: "Provides a brief background on the team or organization behind the platform, fostering a personal connection with users." },
    { id: 9, summary: "Featured Content or Resources.", details: "Highlights popular blog posts, tutorials, or guides to help users get the most out of the platform." },
    { id: 10, summary: "Footer with Essential Links and Information.", details: "Includes links to privacy policy, terms of service, social media pages, and contact details for easy access." },
  ]

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Why Cypress?</h1>
      <ul>
        <Accordion items={reasonsCypressIsGreat} />
      </ul>
    </main>
  )
}
