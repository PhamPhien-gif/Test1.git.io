import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-4">Project Team</h3>
            <p className="text-muted-foreground mb-6">
              A team of experts dedicated to developing and executing creative projects that provide practical
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#introduction" className="text-muted-foreground hover:text-primary transition-colors">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="#contract" className="text-muted-foreground hover:text-primary transition-colors">
                  Contract
                </Link>
              </li>
              <li>
                <Link href="#project" className="text-muted-foreground hover:text-primary transition-colors">
                  Project
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@projectteam.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Project Street, Suite 100
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Project Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

