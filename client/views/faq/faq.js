
var faqs = [
	{
		question: "What is Los Altos Hacks?",
		answer: "Los Altos Hacks is the first ever <a href=\"https://medium.com/essays-by-kern/what-is-a-hackathon-c2162b893b0a\">hackathon</a> to be in Los Altos. A hackathon is an event where people can code a project together. At Los Altos Hacks, you will have 24 hours to make your idea a reality."
	},
	{
		question: "Who can participate?",
		answer: "Any high school student can participate. If you’ve already graduated from high school, you can’t participate, but you can come help mentor others."
	},
	{
		question: "Does this cost money?",
		answer: "No! Los Altos Hacks is free for all participants — all food, swag, and other costs are covered."
	},
	{
		question: "What if I can't stay for the full 24 hours?",
		answer: "That's fine! Just specify that on your application."
	},
	{
		question: "What if I can't code?",
		answer: "No problem! We are accepting people regardless of experience. Plus, we'll have workshops where you can learn."
	},
	{
		question: "When can I apply and how will I know I’ve been accepted?",
		answer: "Applications will begin early October, and decisions will be sent out by late October. "
	},
	{
		question: "What should I bring? Will I need my own laptop?",
		answer: "Bring a valid student ID for admission and your laptop, phone, chargers, etc. We will <em>not</em> provide laptops or chargers for you. Power strips, ethernet cables, sleeping bags, and toiletries are highly recommended."
	},
	{
		question: "How do I form or join a team?",
		answer: "You can either specify your team on the application or form teams at the hackathon, where we’ll have a session for you to meet others. Each team can have a maximum of 4 people."
	},
	{
		question: "Can I get travel reimbursements?",
		answer: "Travel reimbursements will be provided on a case-by-case basis. Contact us at <a href=\"mailto:info@losaltoshacks.com\" class=\"\" id=\"info-email-anchor\">info@losaltoshacks.com</a>."

	},
	{
		question: "What if I still have a question?",
		answer: "Contact us at <a href=\"mailto:info@losaltoshacks.com\" class=\"\" id=\"info-email-anchor\">info@losaltoshacks.com</a>."

	}
];

Controller('faq', {
		helpers: {

			faqs: faqs

		},

		rendered: function() {

		}
});
