"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const testimonials = [
  // {
  //   name: "Karthikeya Boorla",
  //   role: "AMTS, Salesforce",
  //   image: "/testimonials/karthikeya.png",
  //   linkedin: "https://www.linkedin.com/in/boorla-karthikeya/",
  //   feedback: "I’ve had the pleasure of working closely with Devashish over the last four years of our B.Tech journey, collaborating on numerous projects and assignments. His technical skills never cease to amaze me—he consistently brings a fresh perspective and innovative solutions to every problem we tackle. What truly sets him apart is his critical thinking and analytical mindset, which have often helped our team overcome complex challenges efficiently. Devashish is not only a quick learner but also someone who goes the extra mile to ensure the success of any task at hand. His dedication, work ethic, and attention to detail make him an invaluable team member. He has a natural ability to lead, support, and inspire those around him. Watching him grow and push boundaries has been inspiring, and I have no doubt that he will excel in any endeavor he chooses to pursue."
  // },
  // {
  //   name: "Uday Kiran Reddy",
  //   role: "Software Development Engineer, PayPal",
  //   image: "/testimonials/uday.png",
  //   linkedin: "https://www.linkedin.com/in/ukr26/",
  //   feedback: "Devashish is an incredibly talented and dedicated individual. His strong grasp of core computer science concepts and problem-solving mindset make him stand out in any team. We had the opportunity to work together on a Smart India Hackathon project and his collaborative nature and calm presence made the experience smooth and enjoyable. A true team player and a dependable contributor, Devashish is someone you’d always want on your side."
  // },
  // {
  //   name: "Bonagiri Sai Santosh",
  //   role: "Software Engineer, Oracle",
  //   image: "/testimonials/santosh.png",
  //   linkedin: "https://www.linkedin.com/in/sai-santosh-bonagiri-335168225/?originalSubdomain=in",
  //   feedback: "I had the pleasure of working closely with Devashish during our B.Tech years, collaborating on several projects and hackathons. His immense talent, dedication, and problem-solving abilities consistently stood out. Whether it was late-night brainstorming or tight deadlines, Devashish always brought innovative ideas and delivered high-quality work. His strong work ethic and technical acumen have rightly earned him opportunities at top tech giants like Providence and HSBC. It was truly a rewarding experience to work alongside someone as driven and skilled as Devashish."
  // },
  // {
  //   name: "Praneeth Katta",
  //   role: "Software Development Engineer, Zeta",
  //   image: "/testimonials/praneeth.png",
  //   linkedin: "https://www.linkedin.com/in/praneeth-katta-964646233/",
  //   feedback: "I’ve had the pleasure of knowing Devashish Mudigonda, and I can confidently say that he is one of the most hardworking and passionate developers I’ve met. His dedication to learning and building impactful solutions—whether it’s through his work with web development, automation tools, or real-time image processing—truly sets him apart. His internships at HSBC and Providence India, combined with his active participation in hackathons and extracurriculars, reflect his drive and commitment to excellence. Devashish brings energy, curiosity, and technical depth to every project he takes on."
  // },
  // {
  //   name: "Shreyas G Pujar",
  //   role: "Software Development Engineer, Bank of America",
  //   image: "/testimonials/shreyas.png",
  //   linkedin: "https://www.linkedin.com/in/sgp04/",
  //   feedback: "I had the pleasure of working with Devashish during our engineering studies, and he consistently distinguished himself through his dedication, intellect, and professionalism. He has an exceptional ability to quickly comprehend complex concepts and apply them effectively, often producing high-quality outcomes with minimal supervision. In many of our collaborations, Devashish demonstrated sharp problem-solving skills, a proactive attitude, and a strong sense of teamwork. His exemplary work ethic has rightfully earned him opportunities with respected organizations such as Providence and HSBC. In addition to his technical strengths, Devashish contributes a positive mindset and strong interpersonal skills, making him a standout collaborator in any professional setting and a fun person to work with."
  // },
  {
    name: "Kalla Jayesh",
    role: "CSE UnderGrad",
    image: "/testimonials/kalla_jayesh.jpg",
    linkedin: "https://www.linkedin.com/in/jayesh-rao-kalla-b3a75929a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    feedback: "From the first time I met Himanshu Mudigonda, I knew he wasn’t just another tech enthusiast—he was someone who saw problems as puzzles waiting to be solved. I’ve seen him dive headfirst into projects, whether it’s creating sleek web applications, building automation tools, or experimenting with real-time image processing. His journey through internships at HSBC and Providence India, along with countless hackathons, has only sharpened his skills and curiosity. Devashish isn’t just a developer; he’s a builder, a thinker, and someone who brings passion and innovation to everything he touches."
  },
  {
    name: "Lakkineni Jathin",
    role: "CSE UnderGrad",
    image: "/testimonials/jathin.jpg",
    linkedin: "https://www.linkedin.com/in/jathin-lakkineni-a61ba935a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    feedback: "My first judgement of himanshu was that he was very dedicated and he didn't prove me wrong. Later I had the previlege of sharing room with Himanshu, who amazed me from the very first day with his spectacular coding skills ,logical thinking and unpartalleled dedication. He is the embodiment of punctyuality when it comed to pursuing two of his hobbies: coding and gym. My best memories of us would be the days before exams discussing topics and working on the Hackatoh together. "
  }
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const intervalSeconds = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % testimonials.length);
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonials = testimonials.slice(startIndex, startIndex + 3).concat(
    testimonials.slice(0, Math.max(0, startIndex + 3 - testimonials.length))
  );

  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="page-title text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
                {testimonial.linkedin && (
                  <a 
                    href={testimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    aria-label={`LinkedIn of ${testimonial.name}`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
