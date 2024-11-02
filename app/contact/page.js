import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      linkedin: "https://linkedin.com/in/",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>

        {/* Main Contact Card */}
        <Card className="p-8 mb-12 bg shadow-lg">
          <div className="text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-semibold mb-4">Email Us</h2>
            <p className=" mb-4">
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

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Connect with Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="mb-4">{member.role}</p>
                  <Button
                    asChild
                    className="w-full bg-[#0077b5] hover:bg-[#006699]"
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
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