import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Clock, Target, Award, Flame, CheckCircle } from "lucide-react";

const routineBlocks = [
  {
    title: "Morning",
    items: [
      "Wake up at 4:30 AM",
      "Freshen up with a cup of coffee",
      "Gym session till 7:30 AM",
      "Prepare my meals",
      "Follow my personalized diet plan",
    ],
  },
  {
    title: "Day Time",
    items: [
      "Leave for office",
      "Focus on accounting, client work, and learning",
      "Maintain clean eating during work hours",
    ],
  },
  {
    title: "Evening",
    items: [
      "Finish office around 6:30 PM",
      "Edit gym-recorded clips or personal content",
      "Prepare dinner",
      "Review my day",
      "Sleep by 10 PM for recovery",
    ],
  },
];

const myRules = [
  "Never skip a workout, modify if needed",
  "Drink at least 3 liters of water daily",
  "Sleep minimum 7 hours every night",
  "Meal prep on Sundays",
  "No processed sugar during weekdays",
  "Train each muscle group twice a week",
  "Track all workouts and progress",
  "One rest day is mandatory",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(18,100%,55%,0.1)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="My Story"
              subtitle="From struggling with weight to helping others transform their lives"
            />

            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] items-start">
              <div className="prose prose-invert max-w-none">
                <div className="bg-card p-8 rounded-2xl border border-border mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    My name is Bhaskar, and fitness changed my life. Back in 2023,
                    I was overweight, struggling with low energy, and lacking
                    confidence. I knew something had to change.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I started with simple walks, then gradually moved to the gym.
                    The journey was not easy—I made countless mistakes, tried fad
                    diets, and injured myself multiple times. But through
                    persistence and learning, I discovered what truly works.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, I'm in the best shape of my life, and I've made it my
                    mission to share everything I've learned. TheFitBhaskar is not
                    just a brand—it's a community of people committed to becoming
                    their best selves through fitness, nutrition, and mindset.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-sm mx-auto lg:mx-0">
                <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                  <img
                    src="/image-1.jpeg"
                    alt="Bhaskar during a workout session"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More About Me */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-4 bg-background rounded-2xl border border-border p-6">
              <h3 className="font-display text-3xl">
                From <span className="text-gradient">92 kg</span> to{" "}
                <span className="text-gradient">68 kg</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From 92 kg to 68 kg—building strength, discipline, and
                self-belief one day at a time. I’m Bhaskar, an accounts manager
                by profession and a fitness enthusiast by passion, sharing my
                journey to inspire others to live stronger, healthier, and more
                disciplined lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Born in Gopalganj, Bihar and now in Kankarbagh, Patna, I turned
                my life around through fitness, one early morning and one
                workout at a time. There was a time when I struggled with my
                weight, energy, and confidence—hitting 92 kg with low energy and
                zero consistency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On 24 June 2024, I made a single decision:{" "}
                <span className="font-semibold text-foreground">
                  “No excuses. Bas start karna hai.”
                </span>{" "}
                With zero knowledge about diet or programming, I began. Today,
                at 68 kg, I’m stronger, leaner, and more confident—and I’m here
                to share what actually works.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-background rounded-2xl border border-border p-6">
                <h4 className="font-display text-xl mb-3">Quick Info</h4>
                <dl className="space-y-2 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <dt className="text-foreground w-28">Name</dt>
                    <dd>Bhaskar Kumar Gupta</dd>
                  </div>
                  <div className="flex items-start gap-2">
                    <dt className="text-foreground w-28">From</dt>
                    <dd>Gopalganj, Bihar – 841428</dd>
                  </div>
                  <div className="flex items-start gap-2">
                    <dt className="text-foreground w-28">Current</dt>
                    <dd>Kankarbagh, Patna – 800020</dd>
                  </div>
                  <div className="flex items-start gap-2">
                    <dt className="text-foreground w-28">Profession</dt>
                    <dd>Accounts Manager, Protax Protect Services Private Limited</dd>
                  </div>
                  <div className="flex items-start gap-2">
                    <dt className="text-foreground w-28">Passion</dt>
                    <dd>Fitness, self-development, and natural transformation</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-background rounded-2xl border border-border p-6">
                <h4 className="font-display text-xl mb-3">Why Fitness</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Fitness rebuilt my mindset, discipline, and lifestyle. It’s no
                  longer just about the mirror—it’s about energy, clarity, and
                  confidence that spills into every part of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, label: "Years Training", value: "1+" },
              { icon: Target, label: "Weight Lost", value: "20kg" },
              { icon: Award, label: "Workouts Done", value: "100+" },
              { icon: Flame, label: "Transformation", value: "100%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-background rounded-xl border border-border"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Daily Routine"
            subtitle="My day starts early because fitness is my priority."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto mt-8">
            {routineBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-3xl bg-card/90 p-6 lg:p-7 border border-border/70 shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur"
              >
                <h3 className="font-display text-2xl text-primary mb-4">
                  {block.title}
                </h3>
                <ul className="space-y-3 text-foreground">
                  {block.items.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Rules */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Rules"
            subtitle="Non-negotiable principles that guide my fitness journey"
          />

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {myRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              What Keeps Me <span className="text-gradient">Going</span>
            </h2>

            <blockquote className="text-2xl md:text-3xl font-display text-muted-foreground italic mb-8">
              "The body achieves what the mind believes. Every rep, every meal,
              every choice—they all compound into the person you become."
            </blockquote>

            <p className="text-muted-foreground">
              My motivation comes from seeing progress—not just in the mirror,
              but in how I feel, think, and perform. And now, seeing others
              transform through my guidance is the greatest reward of all.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
