import { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Prince Essel',
  description: 'Get in touch with me for collaborations or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to new opportunities and collaborations"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Let's Talk
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have a project in mind or just want to chat? Feel free to reach out.
              I'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="font-semibold w-20">Email:</span>
                <a href="mailto:kingsfordessel242@gmail.com" className="text-primary hover:underline">
                  kingsfordessel242@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="font-semibold w-20">Phone:</span>
                <span>0244821278</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="font-semibold w-20">Location:</span>
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}