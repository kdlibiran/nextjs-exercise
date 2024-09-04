import Image from "next/image"
import { DATA, iTestimonial } from "@/app/data"

export default function Testimonials(){
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-gray-800">What&rsquo;s different about Manage?</h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6 space-y-12 md:space-y-0">
          {DATA.testimonials.map((testimonial: iTestimonial, index: number) => (
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3" key={index}>
              <Image src={testimonial.avatar} alt="Avatar Image" width={80} height={80} className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">{testimonial.name}</h5>
              <p className="text-sm text-gray-500">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        <div className="my-16">
          <button className="p-3 px-6 pt-2 text-white bg-brightRed hover:bg-brightRedLight rounded-full baseline">Get Started</button>
        </div>
      </div>


    </section>
  )
}
