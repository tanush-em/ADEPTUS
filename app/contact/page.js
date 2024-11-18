import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Phone, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-6 sm:p-8 bg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <Mail className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Email Us</h2>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                For inquiries and collaborations, feel free to reach out to us at:
              </p>
              <a
                href="mailto:admn.adeptus@gmail.com"
                className="text-blue-600 text-lg sm:text-xl font-medium hover:text-blue-700 transition-colors"
              >
                admn.adeptus@gmail.com
              </a>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <Linkedin className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Connect on LinkedIn</h2>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Follow us on LinkedIn for Networking and Informative feeds
              </p>
              <a
                href="https://linkedin.com/company/your-company"
                className="text-blue-600 text-lg sm:text-xl font-medium hover:text-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <Instagram className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-pink-600" />
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Follow on Instagram</h2>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Stay updated with our latest posts and stories
              </p>
              <a
                href="https://instagram.com/your-handle"
                className="text-pink-600 text-lg sm:text-xl font-medium hover:text-pink-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @our-handle
              </a>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <Phone className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-green-600" />
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Message on WhatsApp</h2>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Receive regular updates through our communities
              </p>
              <a
                href="https://wa.me/your-number"
                className="text-green-600 text-lg sm:text-xl font-medium hover:text-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our group
              </a>
            </div>
          </Card>
        </div>

        <Card className="mt-8 sm:mt-12 p-6 sm:p-8 hover:shadow-xl transition-shadow">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Visit Us</h2>
            <p className="text-sm sm:text-base">
              Department of Artificial Intelligence and Machine Learning
              <br />
              SRM Easwari Engineering College
              <br />
              Ramapuram, Chennai, Tamil Nadu, IN.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
