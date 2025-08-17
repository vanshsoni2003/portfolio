const Skill = () => {
    return (
        <>
            <div className=" h-[100vh]  place-content-center bg-[#051423] ">
                <section className="py-12 md:py-16 lg:py-20 h-[600px]  w-[1400px]  mx-auto  bg-[#112C3F] shadow-[0_0_30px_#112C3F] rounded-[50px] text-white">
                    <div className="container mx-auto px-4 md:px-6 h-[500px] mt-[-80px] ">
                        <div className="mb-8 md:mb-12 lg:mb-16">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">My Skills</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4">
                                        {/* <CodeIcon className="w-6 h-6 text-primary-foreground" /> */}
                                    </div>
                                    <h3 className="text-lg font-semibold">HTML</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Proficient in modern JavaScript, including ES6+ features and frameworks like React and Node.js.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4">
                                        {/* <CodeIcon className="w-6 h-6 text-primary-foreground" /> */}
                                    </div>
                                    <h3 className="text-lg font-semibold">CSS</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Experienced in using TypeScript to build scalable and maintainable web applications.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4">
                                        {/* <PaletteIcon className="w-6 h-6 text-primary-foreground" /> */}
                                    </div>
                                    <h3 className="text-lg font-semibold">JAVASCRIPT</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Skilled in writing clean, modular, and responsive CSS/SCSS styles for web applications.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4">
                                        {/* <LayersIcon className="w-6 h-6 text-primary-foreground" /> */}
                                    </div>
                                    <h3 className="text-lg font-semibold">React.JS</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Experienced in building complex, interactive user interfaces using React and its ecosystem.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                       <div className="container mx-auto px-4 md:px-6 h-[200px] mt-[-180px] ">
                        <div className="mb-8 md:mb-12 lg:mb-16">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">frame-work</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4">
                                        {/* <CodeIcon className="w-6 h-6 text-primary-foreground" /> */}
                                    </div>
                                    <h3 className="text-lg font-semibold">Bootstrap</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Proficient in modern JavaScript, including ES6+ features and frameworks like React and Node.js.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary rounded-md p-2 mr-4">
                                        {/* <CodeIcon className="w-6 h-6 text-primary-foreground" /> */}
                                    </div>
                                    <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                                </div>
                                <p className="text-muted-foreground">
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