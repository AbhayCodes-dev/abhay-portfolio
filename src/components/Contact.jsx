import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Section from './Section'
import Reveal from './Reveal'
import site from '../assets/data/site'

// EmailJS credentials: set VITE_EMAILJS_* in a .env file to override these defaults.
// (EmailJS service/template/public keys are designed to be public in browser apps.)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1sgm8gq'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_svhuqoc'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'typqSafJ6uHjvlkiJ'

const inputClass =
  'w-full rounded-md border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

const Field = ({ id, label, error, children }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700 dark:text-red-400">
        {error.message}
      </p>
    )}
  </div>
)

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus('')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: data.name, from_email: data.email, subject: data.subject, message: data.message },
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      console.error('Email send failed', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const aria = (name) => ({
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <Section
      id="contact"
      number="05"
      title="Contact"
      intro="Have a project in mind or just want to say hi? I'm open to new opportunities and collaborations."
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <Reveal>
          <dl className="border-t border-line">
            <div className="border-b border-line py-5">
              <dt className="mb-1 text-sm text-muted">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="break-all text-lg font-medium hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="border-b border-line py-5">
              <dt className="mb-1 text-sm text-muted">Phone</dt>
              <dd>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="text-lg font-medium hover:text-accent">
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <Field id="name" label="Name" error={errors.name}>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className={inputClass}
                {...aria('name')}
                {...register('name', { required: 'Name is required' })}
              />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
                {...aria('email')}
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                })}
              />
            </Field>

            <Field id="subject" label="Subject" error={errors.subject}>
              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
                className={inputClass}
                {...aria('subject')}
                {...register('subject', { required: 'Subject is required' })}
              />
            </Field>

            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message"
                className={inputClass}
                {...aria('message')}
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' },
                })}
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-accent px-6 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>

            <div role="status" aria-live="polite">
              {submitStatus === 'success' && (
                <p className="text-green-700 dark:text-green-400">Message sent. Thanks, I&rsquo;ll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-700 dark:text-red-400">
                  Couldn&rsquo;t send the message. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

export default Contact
