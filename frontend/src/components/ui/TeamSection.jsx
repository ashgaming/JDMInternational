import React from 'react'

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24">



        <section className="relative min-h-screen text-black overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mt-10 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl ">Our Leadership</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Meet the experienced professionals guiding our global operations.
              </p>
            </div>
            {/* Background gradient circles */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>

            {/* Content wrapper */}
            <div className="relative min-h-screen flex items-center">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Image content - spans 5 columns on large screens */}
                  <div className="lg:col-span-5 order-1 lg:order-none">
                    <div className="relative max-w-md mx-auto lg:max-w-none">
                      {/* Decorative elements */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full opacity-10 blur-3xl"></div>
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full opacity-75 blur-lg"></div>

                      {/* Main image */}
                      <div className="relative rounded-full overflow-hidden border border-white/10 aspect-square mt-20 lg:mt-0">
                        <img
                          src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                          alt="Profile Picture"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Experience badge */}
                      <div className="scale-50 sm:scale-100 absolute -right-14 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-500 p-1 rounded-2xl">
                        <div className="px-6 py-4 bg-[#0A101D] rounded-xl text-white">
                          <p className="text-sm font-medium">Experience</p>
                          <p className="text-2xl font-bold">5+ Years</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-8 order-2 lg:order-none text-center lg:text-left">
                    <div className="space-y-4">
                      <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                        <span className="relative">
                          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">
                            Abhishek Kamble
                          </span>
                        </span>
                      </h1>
                      <h2 className="text-2xl lg:text-4xl text-black font-light">Founder And CEO</h2>
                    </div>

                    <p className="text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed pb-5 md:pb-0">
                      Crafting digital experiences that blend innovative design with cutting-edge technology.
                      As the CEO and Founder of our export agency, let's transform your vision into reality.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
  )
}

export default TeamSection
