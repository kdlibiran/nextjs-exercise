import { DATA, iFeature } from "@/app/data"

export default function Features(){
  return(
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">What&rsquo;s different about Manage?</h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {DATA.features.map((feature: iFeature, index:number)=> (
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row" key={index}>
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    {feature.number}
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {feature.title}
                </h3>
                <p className="text-darkGrayishBlue">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
