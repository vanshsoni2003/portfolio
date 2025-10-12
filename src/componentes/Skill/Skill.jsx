const Skill = () => {
    return (
        <>
            <div className="min-h-[100vh] place-content-center bg-[#051423] px-4">
                <section className="py-12 md:py-16 lg:py-20 w-full  max-w-[1400px] mx-auto bg-[#112C3F] shadow-[0_0_30px_#112C3F] rounded-[30px] md:rounded-[50px] text-white">
                    
                    {/* Skills Section */}
                    <div className="container mx-auto px-4 md:px-6 mt-[-40px] sm:mt-[-60px] md:mt-[-80px]">
                        <div className="mb-6 md:mb-12 lg:mb-16 text-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">My Skills</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4"></div>
                                    <h3 className="text-base sm:text-lg font-semibold">HTML</h3>
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Proficient in modern JavaScript, including ES6+ features and frameworks like React and Node.js.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4"></div>
                                    <h3 className="text-base sm:text-lg font-semibold">CSS</h3>
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Experienced in using TypeScript to build scalable and maintainable web applications.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4"></div>
                                    <h3 className="text-base sm:text-lg font-semibold">JAVASCRIPT</h3>
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Skilled in writing clean, modular, and responsive CSS/SCSS styles for web applications.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4"></div>
                                    <h3 className="text-base sm:text-lg font-semibold">React.JS</h3>
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Experienced in building complex, interactive user interfaces using React and its ecosystem.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
  <div className="flex items-center mb-4">
    <div className="bg-primary rounded-md p-2 mr-4"></div>
    <h3 className="text-base sm:text-lg font-semibold">React Native</h3>
  </div>
  <p className="text-sm sm:text-base text-muted-foreground">
    Skilled in developing cross-platform mobile applications using React Native, 
    ensuring smooth performance and native-like user experiences for both Android and iOS.
  </p>
</div>

<div className="bg-background rounded-lg shadow-lg p-6">
  <div className="flex items-center mb-4">
    <div className="bg-primary rounded-md p-2 mr-4"></div>
    <h3 className="text-base sm:text-lg font-semibold">Next.js</h3>
  </div>
  <p className="text-sm sm:text-base text-muted-foreground">
    Proficient in building fast, SEO-optimized, and scalable web applications using Next.js 
    with features like server-side rendering (SSR) and static site generation (SSG).
  </p>
</div>

                        </div>
                    </div>

                    {/* Framework Section */}
                    <div className="container mx-auto px-4 md:px-6 mt-12 md:mt-16">
                        <div className="mb-6 md:mb-12 lg:mb-16 text-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Frameworks</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4"></div>
                                    <h3 className="text-base sm:text-lg font-semibold">Bootstrap</h3>
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Proficient in modern JavaScript, including ES6+ features and frameworks like React and Node.js.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4"></div>
                                    <h3 className="text-base sm:text-lg font-semibold">Tailwind CSS</h3>
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Experienced in using TypeScript to build scalable and maintainable web applications.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Skill
