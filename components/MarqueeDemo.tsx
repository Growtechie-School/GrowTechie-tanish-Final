import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Vheakys",
    username: "@Vheakys",
    body: "Webdev mentors are so amazing. I have leant and build projects with 2 mentors Ram & Manjeet. Such cool guys. I am from Nairobi beleiving in online stuff is hard but I'm satisfied now.",
    img: "/Vihkey.jpg",
  },
  {
    name: "Rohit Kulkarni",
    username: "@Rohit",
    body: "Highly recommend GrowTechie's Data Analyst course! Live classes with knowledgeable instructors created an interactive environment. Emphasis on projects for practical application, personalized attention, and support made the learning journey enjoyable and productive",
    img: "/Rohit.png",
  },
  {
    name: "Amit Yadav",
    username: "@Amit",
    body: "GrowTechie's Python training exceeded expectations with a practical, project-oriented approach. Expert instructors made complex concepts engaging. Hands-on learning through real-world projects boosted confidence.Highly recommend!.",
    img: "Amit.jpg",
  },
  {
    name: "Madhura Bijawe",
    username: "@Madhura",
    body: "I took a PowerBI course and then expanded my learning to SQL and Python with Growtechie. I appreciated that Growtechie didnt ask for money, allowed negotiation, and didnt make false promises about job placement. Thanks for the learning experience..",
    img: "Madhura.jpg",
  },
  {
    name: "Nikita Bhole",
    username: "@Nikita",
    body: "Initially hesitant due to the absence of a website, I found Growtechie on LinkedIn. Impressed by a demo class with Ramakrushna, despite occasional scolding. Growtechie's commitment to affordable courses without false promises made it my ideal learning space..",
    img: "Nikita.jpg",
  },
  {
    name: "Puja Samal",
    username: "@Puja",
    body: "Highly recommend GrowTechie's SQL and Power BI training! Exceeded expectations with a focus on real-world applications and project-based learning. Solid foundation in SQL for data manipulation, and standout Power BI section for expert guidance in creating actionable dashboards. Well-crafted for today's data-centric environment.",
    img: "Puja.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love their Data Science training. I build a AI product with these guys as well. Probably of the honest guy when it comes to learning platform..",
    img: "James.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1c1c1c] dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1c1c1c] dark:from-background"></div>
    </div>
  );
}
