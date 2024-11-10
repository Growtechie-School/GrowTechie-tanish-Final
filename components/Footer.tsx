import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Ready to take your <span className="font-normal">tech career</span>{" "}
            to the next level?
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-sm">
            Reach out to us today and let's discuss how we can help you achieve
            your goals.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 text-sm px-8 py-3" asChild>
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="text-white text-2xl font-bold mb-4 md:mb-0 hover:text-gray-300 transition-colors">
              Growtechie
            </Link>
            <div className="flex space-x-6">
              <a href="https://github.com/Growtechie-School" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/growtechie" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/growtechie" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/growtechie" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.29 3.608 1.264.975.976 1.203 2.242 1.265 3.608.058 1.267.069 1.647.069 4.851s-.012 3.584-.07 4.85c-.062 1.366-.29 2.633-1.264 3.608-.976.975-2.242 1.203-3.608 1.265-1.267.058-1.647.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.29-3.608-1.264-.975-.976-1.203-2.242-1.265-3.608-.058-1.267-.069-1.647-.069-4.85s.012-3.584.07-4.85c.062-1.366.29-2.633 1.264-3.608C4.679 2.453 5.945 2.225 7.311 2.163c1.267-.058 1.647-.07 4.85-.07zM12 0C8.735 0 8.333.012 7.053.07 5.766.128 4.377.403 3.243 1.538 2.109 2.672 1.834 4.061 1.775 5.349c-.058 1.28-.07 1.682-.07 4.951 0 3.269.012 3.671.07 4.951.059 1.288.334 2.677 1.468 3.811 1.134 1.134 2.523 1.409 3.811 1.468 1.28.058 1.682.07 4.951.07 3.269 0 3.671-.012 4.951-.07 1.288-.059 2.677-.334 3.811-1.468 1.134-1.134 1.409-2.523 1.468-3.811.058-1.28.07-1.682.07-4.951 0-3.269-.012-3.671-.07-4.951-.059-1.288-.334-2.677-1.468-3.811C19.9.403 18.511.128 17.223.07 15.944.012 15.542 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.445a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/testimonial" className="text-gray-400 hover:text-white transition-colors">Testimonial</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
                <li><a href="/term" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>

              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Checkout</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Articles</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cheatsheets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Code challenges</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/teachers" className="text-gray-400 hover:text-white transition-colors">Become a mentor</a></li>
                <li><a href="/e-building" className="text-gray-400 hover:text-white transition-colors">Build a product</a></li>
                <li><a href="/courses" className="text-gray-400 hover:text-white transition-colors">Learn a tech</a></li>
                <li><a href="https://calendly.com/growtechie-ind" className="text-gray-400 hover:text-white transition-colors">Book a demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Subjects</h3>
              <ul className="space-y-2">
                <li><a href="/courses/data_science" className="text-gray-400 hover:text-white transition-colors">Data Science</a></li>
                <li><a href="/courses/data_analytics" className="text-gray-400 hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="/courses/ai_engineer" className="text-gray-400 hover:text-white transition-colors">AI Engineering</a></li>
                <li><a href="/courses/fullstack" className="text-gray-400 hover:text-white transition-colors">Full Stack Development</a></li>
                <li><a href="/courses/ui_ux" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="/courses/cyber_security" className="text-gray-400 hover:text-white transition-colors">Cyber Security Expert</a></li>
                <li><a href="/courses/docker" className="text-gray-400 hover:text-white transition-colors">Docker Masterclass</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li><a href="/courses/python_fundamentals" className="text-gray-400 hover:text-white transition-colors">Python Programming</a></li>
                <li><a href="/courses/react_fundamentals" className="text-gray-400 hover:text-white transition-colors">React Core</a></li>
                <li><a href="/courses/html_css" className="text-gray-400 hover:text-white transition-colors">HTML & CSS</a></li>
                <li><a href="/courses/sql" className="text-gray-400 hover:text-white transition-colors">SQL Masterclass</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
                <li><a href="https://jobfound.org/" className="text-gray-400 hover:text-white transition-colors">Hire From Jobfound</a></li>
              </ul>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 Growtechie
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer