"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Direct email sending from client-side is not possible without a backend.
    // For a full Next.js application, you would typically use a Server Action
    // or an API route to send emails using a service like Nodemailer, SendGrid, or Resend.
    // For static sites or client-side only environments, consider third-party form services
    // like Formspree, Netlify Forms, or Getform.
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/contactus-hero.jpg" alt="Contact SISM Cycling" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white-primary max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider mb-4 opacity-90">{t("contact.hero.subtitle")}</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">{t("contact.hero.title")}</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{t("contact.hero.description")}</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form - Commented out as direct email sending requires a backend */}
            {/*
            <div>
              <h2 className="text-3xl font-light mb-8 heading-primary">{t("contact.form.title")}</h2>

              <Card className="card-bg card-border overflow-hidden duration-300 relative">
                <CardContent className="p-8 bg-white">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                          {t("contact.form.name")} {t("common.required")}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-muted rounded-lg bg-white dark:bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                          {t("contact.form.email")} {t("common.required")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-muted rounded-lg bg-white dark:bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-muted rounded-lg bg-white dark:bg-white focus:ring-2 text-black focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary-dark mb-2">
                        {t("contact.form.subject")} {t("common.required")}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-muted rounded-lg bg-white dark:bg-white focus:ring-2 text-black focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">{t("contact.form.select")}</option>
                        <option value="tour-booking">{t("contact.form.tour_booking")}</option>
                        <option value="custom-tour">{t("contact.form.custom_tour")}</option>
                        <option value="bike-rental">{t("contact.form.bike_rental")}</option>
                        <option value="general">{t("contact.form.general")}</option>
                        <option value="other">{t("contact.form.other")}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">
                        {t("contact.form.message")} {t("common.required")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-muted rounded-lg bg-white dark:bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder={t("contact.form.placeholder")}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-primary rounded-full text-white">
                      <Send className="mr-2 h-5 w-5" />
                      {t("contact.form.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            */}

            {/* Contact Information */}
            {/* This section is now full-width since the form is commented out */}
            <div className="lg:col-span-2">
              {" "}
              {/* Adjusted to span 2 columns */}
              <h2 className="text-3xl font-light mb-8 heading-primary">{t("contact.info.title")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {" "}
                {/* Added grid for better layout */}
                <Card className="card-bg card-border overflow-hidden duration-300 relative">
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 contact-icon-circle rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="card-title mb-2">{t("contact.info.address")}</h3>
                        <p className="text-secondary">
                          〒880-0000
                          <br />
                          宮崎県宮崎市
                          <br />
                          日本
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-bg card-border overflow-hidden duration-300 relative">
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 contact-icon-circle rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="card-title mb-2">{t("contact.info.phone")}</h3>
                        <p className="text-secondary">
                          <a href="tel:+81-90-7292-4723" className="hover-brand">
                            (000)1234-4723
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-bg card-border overflow-hidden duration-300 relative">
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 contact-icon-circle rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="card-title mb-2">{t("contact.info.email")}</h3>
                        <p className="text-secondary">
                          <a href="mailto:s.ism20231001@gmail.com" className="hover-brand">
                            s.ism20231001@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-bg card-border overflow-hidden duration-300 relative">
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 contact-icon-circle rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="card-title mb-2">{t("contact.info.hours")}</h3>
                        <div className="text-secondary space-y-1">
                          <p>{t("contact.hours.weekday")}</p>
                          <p>{t("contact.hours.weekend")}</p>
                          <p className="text-sm text-muted">{t("contact.hours.holiday")}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
