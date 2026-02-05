import { motion } from "framer-motion";
import { History, Target, Users, Landmark, GraduationCap } from "lucide-react";
import { Header } from "../components/sections/header";
import { Footer } from "../components/sections/footer";

export default function HistoryPage() {
    const milestones = [
        {
            year: "1967",
            title: "The Foundation",
            description: "Established with a vision to provide quality education to visually impaired students in a supportive environment.",
            icon: Landmark
        },
        {
            year: "1998",
            title: "Technological Expansion",
            description: "Integration of advanced Braille technologies and specialized computer labs to enhance learning capabilities.",
            icon: GraduationCap
        },
        {
            year: "2010",
            title: "Campus Modernization",
            description: "A major renovation project to create a more accessible and inclusive campus for our growing student body.",
            icon: Users
        },
        {
            year: "2026",
            title: "C1 Senior School Status",
            description: "Under the CBC Kenyan Curriculum, the school attained C1 status meaning it could offer all the three pathways.",
            icon: Target
        }
    ];

    return (

        <div className="min-h-screen bg-background font-body">
            <Header />

            <main id="main" role="main" tabIndex={-1}>
                {/* Hero Section */}
                <section className="bg-primary py-20 text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="mb-6 font-display text-4xl font-bold md:text-6xl">
                                Our Journey of Resilience
                            </h1>
                            <p className="text-xl opacity-90">
                                For five decades, we've been transforming lives and breaking barriers through inclusive education and unwavering support.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-12 lg:grid-cols-2">
                            <div>
                                <h2 className="mb-6 font-display text-3xl font-bold text-primary">A Legacy of Empowerment</h2>
                                <div className="space-y-6 text-lg text-muted-foreground">
                                    <p>
                                        Founded on the motto "Faith and Courage Yields Excellence," Thika High School for the Blind started with an initial enrollment of fifteeen(15) students in 1967 and a profound dream.
                                    </p>
                                    <p>
                                        What began as a small dream has evolved into a premier educational center, pioneering new methods of high school and now senior school training for visually challenged learners.
                                    </p>
                                    <p>
                                        Our history is not just about buildings and dates; it's about the thousands of graduates who have gone on to lead independent, successful lives, proving that with the right tools and support, there are no limits.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4 rounded-lg bg-card p-6 shadow-sm"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <milestone.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-primary">{milestone.year}</span>
                                            <h3 className="text-xl font-semibold">{milestone.title}</h3>
                                            <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </div>
    );
}
