function rand(min, max) {
	return min + ~~(Math.random() * (max - min));
}

function fill(len, fn) {
	return Array(len).fill().map((_, i) => fn(i));
}

const avatars = [
	// images from https://www.pexels.com/search/dog/
	"https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=75",
	"https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=75",
	"https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&h=75",
	"https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&h=75",
	"https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&h=75",
	"https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&h=75",
	"https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&h=75",
	"https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&h=75",
	"https://images.pexels.com/photos/532310/pexels-photo-532310.jpeg?auto=compress&cs=tinysrgb&h=75"
];

const questions = [
    "What skils are required in your position on a day-to-day basis?",
    "What parts of your job do you find most challenging?",
    "What do you find most enjoyable?",
    "Are there any negatives to your job?",
    "How many hours do you work in a typical week?",
    "Is this field growing enough so that there's room for someone like me?",
    "Are too many or too few people entering this profession?",
    "What would be a reasonable salary range to expect if I entered this field?",
    "What is the long-term potential?",
    "What is the advancement potential in the field?",
    "Is your job what you thought it would be when you started?",
    "How much job security do you have in this position?",
    "How does the company evaluate your job performance?",
    "What are the major qualifications for success in this occupation?",
    "What do you find unique about your career field?",
    "From everything you've observed, what problems can you cite regarding working in this career?",
    "What entry-level jobs offer the best opportunities for learning?",
    "What is the most important thing someone entering this career field should know?",
    "Do you ever take work home with you?",
    "Is there flexibility in work hours, vacation schedule, place of residence, etc?",
];

const answers = [
    "Troubleshooting, quickly analyzing and understanding a system, communication, utilizing past experiences.",
    "Communicating and coordinating plans with other teams or individuals.",
    "Solving technical problems, being able to help solve somebody's problem.",
    "I honestly can't think of any unique downsides to the career field.",
    "I typically work 40-45 hours per week. There are some people that put in 35, some put in 60. We don't have strict hours, it's an honor system that trusts we're getting our job done and doesn't take advantage of our teammates.",
    "The field is so wide and rapidly growing that it's hard to define all of the possible opportunities available. One of the awesomely unique things about programming as a career is that it incentivizes having experience in a previous field. Programming requires that you really understand your problem and how to solve it in the physical domain and then translating it to the logical domain. People that have experience in a field of work for 10 years can easily transition into programming in that industry because of the lower overhead cost of learning for those individuals.",
    "There is still so much available space, even with the push towards STEM fields for kids, I believe that there will be many open jobs even in the next generation. If you are a 'Senior' programmer, there is an insane market need for people with that experience.",
    "New developers could probably expect $45-50k per year to start in most industries. Some industries, such as those around oil, may start with a higher base pay closer to $60k. Adversely, really attractive technical work like the tech sector can often have lower pay with heavy incentive programs like stock shares as bonuses.",
    "Long term potential is extremely positive and very diverse in its options. People can opt to continue working within the confines of their technical groups and continue development while others can transition into management or supervisory roles. People's level of extraversion seems to heavily factor in which route they gravitate towards.",
    "Common arcs of a developer's career lands them as either a senior developer, taking on the more difficult technical implementations of the team or a software architect. Software architects typically bridge the gap between the tehnical side of software teams and the managerial side of the business. Because of how close architects work with management, it is not uncommon for them to transition into upper management positions such as Software Directors or Chief Technical Officers (CTO).",
    "My job is intentionally loosely defined. A lot of trust is put into members of our team of approximately 15 software engineers to do what is best for the company with their unqiue skillset. That being said, this is how the job was described to me, and it has proven true.",
    "I have no fears of job security with my current position. During talks of hiring strategy, my co-workers and I agree that a 'great hire' is anybody who: A.) Is pleasant to converse with and doesn't socially ruffle feathers B.) consistently shows up, physically and mentally C.) does the work that is needed, not just the work they want to do D.) can find the right balance of when to ask for help vs. when to research. Doing these common sense things will make you indispensable.",
    "Our Software Director has monthly meetings with the Software Engineering team to track progress through each of our Key Performance Indicators (KPI). These metrics are agreed upon targets between the engineer and the director, which are updated anually. When reviews come each year, we first score ourself with a self-review system and then our director will score us. We then have a meeting to critically discuss any notable differences in scores. These critique points are often the basis of the next year's KPI's.",
    "As mentioned earlier: During talks of hiring strategy, my co-workers and I agree that a 'great hire' is anybody who: A.) Is pleasant to converse with and doesn't socially ruffle feathers B.) consistently shows up, physically and mentally C.) does the work that is needed, not just the work they want to do D.) can find the right balance of when to ask for help vs. when to research. Doing these common sense things will make you indispensable.",
    "I find my career to be unique in how flexible it is. In addition to the day-to-day flexibility, there is a a lot of long-term flexibility too. There are great benefits to starting the career later in life, there are so many opportunities to transition out of software engineer and into a niche field and you have an option to continue building out your technical portfolio either deeper or more widespread in addition to your managerial portfolio.",
    "The most common issues for the field, I consider to be a tragedy, because it's the some people just won't be successful in it due to their personality. Based on my experience, the least successful people in this field either don't follow the 'boy scout' mantra - leave things better than when you found them - or they don't are missing the drive to do things the 'correct' way. Some personalities just accept the status quo, but this isn't a trait that a successful developer can have. I consider this a tragedy because it's often too late before people learn this and they've already oriented their life towards development.",
    "Software Testing / Quality Assurance(QA)",
    "Find one thing you like and get to know it - Tinker with existing things, follow examples on how to use it. Then get comfortable with it - put those examples into action and build something really basic. Then get good at it. Then get really good at it. Then start doing lots of other things. Then, in the background, become the best at your original thing. It took me nearly 3 years before I was comfortable writing software because I kept jumping around in it, I had no fluency in any language. Then, I really focused for about a year on C#. Then I started to learn new things and it was amazing how much easier it was to learn new languages, because I had a point of reference. Most things in life have overlap with others, but it's very difficult to identify something you've never encoutered. By going narrow and deep on a topic periodically, it allows you to have so much more acceleration when you broaden out to other topics again, allowing you to make a jump from knowing nothing to as deep as your specialty topic very quickly.",
    "One of the quirks of being salaried is that you're never clocked out. I'm very grateful that the culture at our work respects our personal time and doesn't expect that we will endlessly sacrifice personal time, but they do expect the favor to be returned and that if something important comes up, I am responsive and flexible to follow up until the task is done. I hardly ever take work home unless I'm sick and working at home, but I may answer an after-hours email if I skim the topic and it seems important. With that said, sometimes I may inadvertently be on call if I have impeded other people's progress on an important task.",
    "All of those are very flexible. Depending on the day of the week, I may come in at 5 A.M. or 10 A.M. because of my personal life, take a lunch at noon and typically just work until 5 P.M. in either case. It will usually average around 40-45 hours, but I'm the only one that keeps track. Most people will opt to take vacation around the mid-year holidays in July and December, but a healthy number of parent also take off for spring or summer break for a family vacation. A week-long vacation outside of those typical timeframes is easy to get, you just ask for it, it's just not as common. Working from home is pretty common in web development of SaaS shops, but our company is a bit unique because we manufacture and design the hardware that we program also, so there is a lot of benefit in coordination to being on site. I'll typically on work from home if I'm sick and on those days, there's a noticable difference in prodcutivity.",
]

export default fill(20, (i) => {
	return {
		key: `_${i}`,
		question: `${i + 1}.) ${questions[i]}`,
		answer: answers[i],
		avatar: avatars[rand(0, avatars.length)]
	};
});

// var responses = [
//     {
//         key: "_0",
//         question: "What skils are required in your position on a day-to-day basis?",
//         answer: "Troubleshooting, quickly analyzing and understanding a system, communication, utilizing past experiences.",
//         avatar: avatars[rand(0, avatars.length)]
//     },
//     {
//         key: "_1",
//         question: "What skils are required in your position on a day-to-day basis?",
//         answer: "Troubleshooting, quickly analyzing and understanding a system, communication, utilizing past experiences.",
//         avatar: avatars[rand(0, avatars.length)]
//     },


// ];