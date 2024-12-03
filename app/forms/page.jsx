'use client'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import ItemsAccordion from '../components/Accordion'
import styles from './forms.module.css'

export default function FormsPage() {
    const items = [
        { id: 1, summary: "Contact Form for collecting user inquiries.", details: "This form includes fields for name, email, subject, and message, allowing users to submit questions or feedback." },
        { id: 2, summary: "Registration Form for new user sign-ups.", details: "This form collects user details such as username, email, password, and confirms password with real-time validation." },
        { id: 3, summary: "Login Form for existing user authentication.", details: "A simple form with fields for email and password, supporting features like 'Remember Me' and 'Forgot Password' links." },
        { id: 4, summary: "Survey Form for collecting user opinions.", details: "This form features multiple question types such as radio buttons, checkboxes, and text areas to gather feedback." },
        { id: 5, summary: "Payment Form for processing transactions securely.", details: "Includes fields for credit card details, billing address, and optional promo code, with integrated validation and security." },
        { id: 6, summary: "Profile Update Form for modifying user information.", details: "Allows users to update their profile details like name, email, password, and profile picture." },
        { id: 7, summary: "Feedback Form for gathering user suggestions.", details: "This form lets users rate their experience and provide comments or suggestions to improve services." },
        { id: 8, summary: "Job Application Form for submitting applications.", details: "Includes fields for personal details, resume upload, and cover letter to apply for job openings." },
        { id: 9, summary: "Booking Form for scheduling appointments or reservations.", details: "This form enables users to select dates, times, and services for booking, along with optional special requests." },
        { id: 10, summary: "Subscription Form for newsletter or updates.", details: "A straightforward form with fields for name and email, allowing users to subscribe to newsletters or updates." },
    ]
    const [inputValue, setInputValue] = useState('')
    const [subMessage, setSubMessage] = useState('')
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Testing Forms</h1>
            <ItemsAccordion items={items} />
            <TextField
                data-test="subscribe-form"
                className={styles.input}
                label="Email"
                variant="filled"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <Button data-test="subscribe-button" onClick={() => {
                if (inputValue && !inputValue.includes('.com')) {
                    setSubMessage(`Invalid email: ${inputValue}!`)
                } else if (inputValue.length) {
                    setSubMessage(`Successfully subbed: ${inputValue}!`)
                } else {
                    setSubMessage('fail!')
                }
                setTimeout(() => {
                    setSubMessage('')
                    setInputValue('');
                }, 3000)
            }}>
                Subscribe
            </Button>
            {
                subMessage && <p>{subMessage}</p>
            }
        </main>
    )
}