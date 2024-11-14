import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Phone, Instagram } from "lucide-react";

export default function Contact() {


  return (
    <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <Card className="p-8 mb-12 bg shadow-lg">
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-semibold mb-4">Email Us</h2>
              <p className="mb-4">
                For inquiries and collaborations, feel free to reach out to us at:
              </p>
              <a
                href="mailto:admn.adeptus@gmail.com"
                className="text-blue-600 text-xl font-medium hover:text-blue-700"
              >
                admn.adeptus@gmail.com
              </a>
            </div>
          </Card>

          {/* LinkedIn Card */}
          <Card className="p-8 mb-12 bg shadow-lg">
            <div className="text-center">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-semibold mb-4">Connect on LinkedIn</h2>
              <p className="mb-4">
                Follow us on LinkedIn for Networking and Informative feeds
              </p>
              <a
                href="https://linkedin.com/company/your-company"
                className="text-blue-600 text-xl font-medium hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </Card>

          {/* Instagram Card */}
          <Card className="p-8 mb-12 bg shadow-lg">
            <div className="text-center">
              <Instagram className="w-12 h-12 mx-auto mb-4 text-pink-600" />
              <h2 className="text-2xl font-semibold mb-4">Follow on Instagram</h2>
              <p className="mb-4">
                Stay updated with our latest posts and stories
              </p>
              <a
                href="https://instagram.com/your-handle"
                className="text-pink-600 text-xl font-medium hover:text-pink-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                @our-handle
              </a>
            </div>
          </Card>

          {/* WhatsApp Card */}
          <Card className="p-8 mb-12 bg shadow-lg">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h2 className="text-2xl font-semibold mb-4">Message on WhatsApp</h2>
              <p className="mb-4">
                Receive regular updates through our communities
              </p>
              <a
                href="https://wa.me/your-number"
                className="text-green-600 text-xl font-medium hover:text-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our group
              </a>
            </div>
          </Card>
        </div>




        {/* Additional Contact Information */}
        <Card className="mt-12 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <p>
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