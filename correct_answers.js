const correct_answers = [
  {
    "question": "You have just been hired by a company new to Scrum. Your management has assigned you to be the Scrum Master of six new Scrum Teams. These teams will build one product. Select two conditions you should strive for in this scenario. (choose two)",
    "answers": [
      "The product has one Product Backlog.",
      "There should be only one Product Owner."
    ]
  },
  {
    "question": "A Scrum Team has been working on a product for nine Sprints. A new Product Owner comes in, understanding he is accountable for the Product Backlog. However, he is unsure about his responsibilities. Which two activities are part of the Product Owner role according to Scrum? (choose two)",
    "answers": [
      "Ensuring that the most valuable functionality is produced first, at all times.",
      "Interacting with stakeholders."
    ]
  },
  {
    "question": "User documentation is part of your Definition of Done. However, there aren't enough technical writers for all teams. Your Developers don't have a technical writer. What should you do?",
    "answers": [
      "Your Scrum Team is still responsible for creating user documentation. In this case, the Scrum Team members will write it."
    ]
  },
  {
    "question": "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the Developers come to you complaining that work identified for the upcoming two Sprints will require full-time commitment from a technical specialist who is external to the teams. What are two key concerns for the Scrum Master to take into account in this situation? (choose two)",
    "answers": [
      "The benefit of Developers figuring out a solution for themselves.",
      "The ability of the Developers to produce integrated Increments."
    ]
  },
  {
    "question": "The Product Backlog is ordered by:",
    "answers": [
      "The Product Owner with the most valuable items placed at the top."
    ]
  },
  {
    "question": "What happens if the Scrum Team cannot complete its work by the end of the Sprint?",
    "answers": [
      "The Sprint length holds and the Scrum Team continuously learns what is actually possible to do within a Sprint of this length."
    ]
  },
  {
    "question": "Which topics should be discussed in the Sprint Review?",
    "answers": [
      "Sprint results."
    ]
  },
  {
    "question": "A member of the Scrum Team takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do?",
    "answers": [
      "Ask the person to share the issue with the team as soon as possible."
    ]
  },
  {
    "question": "What does it mean for a Scrum Team to be cross-functional?",
    "answers": [
      "The Scrum Team includes cross-skilled individuals who are able to contribute to do what is necessary to deliver an Increment of software."
    ]
  },
  {
    "question": "Sprint burndown charts are an efficient tracking tool, because they show:",
    "answers": [
      "An estimate of the total work remaining for the Sprint."
    ]
  },
  {
    "question": "How much work must a Scrum Team do to a Product Backlog item it selects for a Sprint?",
    "answers": [
      "As much as it has told the Product Owner will be done for every Product Backlog item it selects in conformance with the Definition of Done."
    ]
  },
  {
    "question": "Which statement best describes the Sprint Backlog as outcome of the Sprint Planning?",
    "answers": [
      "It is the Scrum Team's plan for the Sprint."
    ]
  },
  {
    "question": "If burndown charts are used to visualize progress, what does a trend line through a release burndown chart indicate? (choose the best answer)",
    "answers": [
      "When the work remaining will likely be completed if nothing changes on the Product Backlog or the Developers."
    ]
  },
  {
    "question": "Who is responsible for engaging the stakeholders? (choose the best answer)",
    "answers": [
      "The Product Owner."
    ]
  },
  {
    "question": "At the end of a Sprint, a Product Backlog item worked on during the Sprint does not meet the Definition of Done. What two things should happen with the undone Product Backlog item? (choose the best two answers)",
    "answers": [
      "Put it on the Product Backlog for the Product Owner to decide what to do with it.",
      "Do not include the item in the Increment this Sprint."
    ]
  },
  {
    "question": "Which two of the following are true about the Scrum Master role? (choose the best two answers)",
    "answers": [
      "The Scrum Master teaches the Developers to keep the Scrum meetings to their time-box.",
      "The Scrum Master helps those outside the team interact with the Scrum Team."
    ]
  },
  {
    "question": "What are three benefits of self-management? (choose the best three answers)",
    "answers": [
      "Increased creativity.",
      "Increased self-accountability",
      "Increased commitment."
    ]
  },
  {
    "question": "Which three of the following are time-boxed events in Scrum? (choose the best three answers)",
    "answers": [
      "Sprint Retrospective.",
      "Sprint Planning.",
      "Daily Scrum."
    ]
  },
  {
    "question": "Who is responsible for clearly expressing Product Backlog items? (choose the best answer)",
    "answers": [
      "The Product Owner."
    ]
  },
  {
    "question": "What is the best suited structure for Scrum Teams in order to produce integrated Increments? (choose the best answer)",
    "answers": [
      "Each Scrum Team develops functionality from beginning to end throughout all technical layers."
    ]
  },
  {
    "question": "Why should the Product Owner be present at the Daily Scrum? (choose the best answer)",
    "answers": [
      "He/She doesn't need to be there."
    ]
  },
  {
    "question": "What two techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which development techniques to apply? (choose the best two answers)",
    "answers": [
      "Involve the complete Scrum Team.",
      "Use coaching techniques; such as open questions and active listening."
    ]
  },
  {
    "question": "What enhances the transparency of an Increment? (choose the best answer)",
    "answers": [
      "Doing all work needed to meet the Definition of Done"
    ]
  },
  {
    "question": "Who determines how work is performed during the Sprint? (choose the best answer)",
    "answers": [
      "The Scrum Team."
    ]
  },
  {
    "question": "When does the second Sprint start? (choose the best answer)",
    "answers": [
      "Immediately after the first Sprint."
    ]
  },
  {
    "question": "What is included in the Sprint Backlog? (choose the best answer)",
    "answers": [
      "Any of the above (or others) which are a decomposition of the selected Product Backlog items."
    ]
  },
  {
    "question": "Which of the following are true about the Product Owner role? (choose the best two answers)",
    "answers": [
      "The Product Owner is one person.",
      "The Product Owner is accountable for ordering the Product Backlog."
    ]
  },
  {
    "question": "True or False: When multiple teams work together on the same product, each team should maintain a separate Product Backlog.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "If two Scrum Teams are added to the development of a product that previously had only one Scrum Team, what will be the immediate impact on the productivity of the original Scrum Team? (choose the best answer)",
    "answers": [
      "Its productivity is likely to decrease."
    ]
  },
  {
    "question": "A Scrum Master is introducing Scrum to a new Scrum Team. The Scrum Team has decided that a Sprint Retrospective is unnecessary. What action should the Scrum Master take? (choose the best answer)",
    "answers": [
      "Begin facilitating productive and useful Sprint Retrospectives."
    ]
  },
  {
    "question": "Which two things are appropriate for a Scrum Master to do if the Developers don't have the engineering tools and infrastructure to completely finish each selected Product Backlog item? (choose the best two answers)",
    "answers": [
      "Coach the Scrum Team to improve its skills, tools, and infrastructure over time and adjust the Definition of Done accordingly.",
      "Have the Scrum Team establish a Definition of Done that is actually possible to achieve given current circumstances."
    ]
  },
  {
    "question": "When is implementation of a Product Backlog item considered complete? (choose the best answer)",
    "answers": [
      "When the item has no work remaining in order to be potentially released."
    ]
  },
  {
    "question": "Choose two responsibilities of a self-managing Scrum Team. (choose the best two answers)",
    "answers": [
      "Pull Product Backlog items for the Sprint.",
      "Do the work planned in the Sprint Backlog."
    ]
  },
  {
    "question": "Every Scrum Team should have: (choose the best answer)",
    "answers": [
      "The competencies and skills needed to deliver a Done Increment in a Sprint."
    ]
  },
  {
    "question": "Why does the Product Owner want the Scrum Team to adhere to its Definition of Done? (choose the best answer)",
    "answers": [
      "To have complete transparency into what has been done at the end of each Sprint."
    ]
  },
  {
    "question": "During a Sprint Retrospective, for what is the Scrum Master responsible? (choose the best answer)",
    "answers": [
      "Participating as a Scrum team member and facilitating as requested or needed."
    ]
  },
  {
    "question": "The Scrum Team should have all the skills needed to: (choose the best answer)",
    "answers": [
      "Turn Product Backlog items into an Increment of potentially releasable product functionality."
    ]
  },
  {
    "question": "During the Sprint, the Scrum Master's role is to do which two of the following: (choose the best two answers)",
    "answers": [
      "Facilitate inspection and adaptation opportunities as requested or needed.",
      "Coaching the team members in the self-management."
    ]
  },
  {
    "question": "The Scrum Master observes the Product Owner struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master to take? (choose the best answer)",
    "answers": [
      "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value."
    ]
  },
  {
    "question": "True or False: The Product Owner makes sure the team selects enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Which statement best describes the Sprint Review? (choose the best answer)",
    "answers": [
      "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next."
    ]
  },
  {
    "question": "Who owns the Sprint Backlog? (choose the best answer)",
    "answers": [
      "The Scrum Team."
    ]
  },
  {
    "question": "When might a Sprint be abnormally cancelled? (choose the best answer)",
    "answers": [
      "When the Sprint Goal becomes obsolete."
    ]
  },
  {
    "question": "A Sprint Retrospective should be held: (choose the best answer)",
    "answers": [
      "At the end of each Sprint."
    ]
  },
  {
    "question": "A new Developer is having continuing conflicts with existing Developers and creating the hostile environment. If necessary, who is responsible for removing the team member? (choose the best answer)",
    "answers": [
      "The Developers are responsible, and may need help from the Scrum Master."
    ]
  },
  {
    "question": "Which three purposes does the Definition of Done serve? (choose the best three answers)",
    "answers": [
      "Guide the Developers on how many Product Backlog items to select for the Sprint.",
      "Create a shared understanding of when work is complete.",
      "Increase transparency."
    ]
  },
  {
    "question": "During a Sprint Retrospective, the Developers proposes moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master? (choose the best two answers)",
    "answers": [
      "Coach the team on why the Daily Scrum is important as an opportunity to update the plan.",
      "Learn why the Developers wants this and work with them to improve the outcome of the Daily Scrum."
    ]
  },
  {
    "question": "When should a Sprint Goal be created? (choose the best answer)",
    "answers": [
      "During Sprint Planning."
    ]
  },
  {
    "question": "True or False: Every Scrum team must have a Product Owner and Scrum Master.",
    "answers": [
      "True. Outcomes affected by their participation and availability."
    ]
  },
  {
    "question": "Who can abnormally terminate a Sprint? (choose the best answer)",
    "answers": [
      "The Product Owner."
    ]
  },
  {
    "question": "True or False: The Sprint Goal is a result of Sprint Planning, as is the Sprint Backlog.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "Which two of the following are appropriate topics for discussion during a Sprint Retrospective? (choose the best two answers)",
    "answers": [
      "Identifying high priority process improvements for the next Sprint.",
      "How the team collaborates."
    ]
  },
  {
    "question": "A Scrum Master is working with a Scrum Team that has members in different physical locations. The Scrum Team meets in a variety of meeting rooms and has much to do logistically (for example, set up conference calls) before the Daily Scrum. What action should the Scrum Master take? (choose the best answer)",
    "answers": [
      "Allow the Scrum Team to self-manage and determine for itself what to do."
    ]
  },
  {
    "question": "True or False: Cross-functional teams are optimized to work on one technical layer of a system only (e.g. GUI, database, middle tier, interfaces).",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Which of the following might the Scrum Team discuss during a Sprint Retrospective? (choose the best answer)",
    "answers": [
      "All of the above."
    ]
  },
  {
    "question": "What are the two primary ways a Scrum Master keeps a Developers working at its highest level of productivity? (choose the best two answers)",
    "answers": [
      "By removing impediments that hinder the Developers.",
      "By facilitating Developers decisions."
    ]
  },
  {
    "question": "What is the recommended size for the Developers? (choose the best answer)",
    "answers": [
      "3 to 9."
    ]
  },
  {
    "question": "You are the Scrum Master of a new, to be developed product. Development is going to require 45 people. What is a good first question-for you to suggest the group thinks about when forming into teams? (choose the best answer)",
    "answers": [
      "How will we make sure all teams have the right amount or expertise?"
    ]
  },
  {
    "question": "Which three of the following are feedback loops in Scrum? (choose the best three answers)",
    "answers": [
      "Sprint Review.",
      "Sprint Retrospective.",
      "Daily Scrum."
    ]
  },
  {
    "question": "When the Developers are having trouble delivering a working Increment because they don't understand a functional requirement, what should they do? (choose the best answer)",
    "answers": [
      "Collaborate with the Product Owner to determine what is possible and acceptable."
    ]
  },
  {
    "question": "When is the Sprint Backlog created? (choose the best answer)",
    "answers": [
      "During the Sprint Planning meeting."
    ]
  },
  {
    "question": "Which of the following services are appropriate for a Scrum Master in regard to the Daily Scrum? (choose the best answer)",
    "answers": [
      "Teach the Developers to keep the Daily Scrum within the 15 minute time-box."
    ]
  },
  {
    "question": "Which of the following best describes an Increment of working software? (choose the best answer)",
    "answers": [
      "Additional features in a usable state that complement those delivered in previous iterations."
    ]
  },
  {
    "question": "In order to achieve the benefits of Scrum, it is important to enact the value of commitment. What two actions demonstrate the commitment of Scrum Team members? (choose the best two answers)",
    "answers": [
      "Help the other Scrum Team members.",
      "Do your best"
    ]
  },
  {
    "question": "True or False: The Product Owner determines how many Product Backlog items the Developers selects for a Sprint. (choose the best answer)",
    "answers": [
      "False."
    ]
  },
  {
    "question": "What are two ways that regulatory compliance requirements are dealt with in Scrum? (choose the best two answers)",
    "answers": [
      "They are added to the Product Backlog and addressed during each Sprint, alongside the creation of new Product capabilities.",
      "They are addressed as part of meeting the Definition of Done during each Sprint."
    ]
  },
  {
    "question": "The Sprint Review is mainly an inspect and adapt opportunity for which group?",
    "answers": [
      "The Scrum Team and stakeholders."
    ]
  },
  {
    "question": "True or False: To get started in terms of what to build, Scrum requires no more than a Product Owner with enough ideas for a first Sprint, Developers to implement those ideas and a Scrum Master to help guide the process.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "What is the time-box for the Sprint Review?",
    "answers": [
      "4 hours for a monthly Sprint."
    ]
  },
  {
    "question": "Who is responsible for tracking the remaining work of the Sprint?",
    "answers": [
      "The Developers."
    ]
  },
  {
    "question": "What is the tactic a Scrum Master should use to divide a group of 100 people into multiple Scrum Teams?",
    "answers": [
      "Ask the Developers to divide themselves into teams."
    ]
  },
  {
    "question": "True or False: A product Increment must be released to production at the end of each Sprint.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "If burndown charts are used to visualize progress, what do they track?",
    "answers": [
      "Work remaining across time."
    ]
  },
  {
    "question": "How is management external to the Scrum Team involved in the Daily Scrum?",
    "answers": [
      "The Scrum Team self-manages and is the only management required at the Daily Scrum."
    ]
  },
  {
    "question": "A Scrum Master is keeping a list of open impediments, but it is growing and he/she has been able to resolve only a small portion of the impediments. Which three techniques would be most helpful in this situation? (choose three)",
    "answers": [
      "Consulting with the Scrum Team.",
      "Prioritizing the list and working on them in order.",
      "Alerting management to the impediments and their impact."
    ]
  },
  {
    "question": "Which Scrum Value is affected by a lack of trust in the Scrum Team?",
    "answers": [
      "All of the above."
    ]
  },
  {
    "question": "What is the time-box for the Sprint Planning meeting?",
    "answers": [
      "8 Hours for a monthly Sprint."
    ]
  },
  {
    "question": "A Product Owner wants advice from the Scrum Master about estimating work in Scrum. Which of these is the guideline that a Scrum Master should give?",
    "answers": [
      "Estimates are made by the Scrum Team."
    ]
  },
  {
    "question": "What is a Scrum Team responsible for? (choose two)",
    "answers": [
      "Resolving internal team conflicts.",
      "Organizing the work required to meet the Sprint Goal."
    ]
  },
  {
    "question": "Which two ways of creating Scrum Teams are consistent with Scrum's values? (choose two)",
    "answers": [
      "Existing teams propose how they would like to go about organizing into the new structure.",
      "Bring all the Developers together and let them self-manage into Scrum Teams."
    ]
  },
  {
    "question": "True or False: A Scrum Master is essentially the same thing as a traditional PM (Project Manager).",
    "answers": [
      "False."
    ]
  },
  {
    "question": "The Product Owner is not collaborating with the Developers during the Sprint. What are two valuable actions for a Scrum Master to take? (choose two)",
    "answers": [
      "Bring up the problem in the Sprint Retrospective.",
      "Coach the Product Owner in the values of Scrum and incremental delivery."
    ]
  },
  {
    "question": "True or False: Multiple Scrum Teams working on the same product or system all select work from the same Product Backlog.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "For the purpose of transparency, when does Scrum say a new Increment of working software must be available?",
    "answers": [
      "At the end of every Sprint."
    ]
  },
  {
    "question": "True or False: Multiple Scrum Teams working on the same project must have the same Sprint start date.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "During a Sprint Retrospective, for what is the Product Owner responsible?",
    "answers": [
      "Participating as a Scrum Team member."
    ]
  },
  {
    "question": "Marian is the Product Owner envisioning a project for a new release of her product. She made a projection of a release date based upon a sustained velocity of 17 completed units of work per Sprint. Over the first 3 Sprints, the average velocity was 13 for work that the Developers estimated as 90% done. The Developers, feeling the need to meet the plan, figured that a velocity of 17 was within their reach. A good way to continue is:",
    "answers": [
      "The Developers makes sure that all of the selected scope per Sprint is as \"Done\" as possible. The undone work is estimated and added to the Sprint Backlog of the next Sprint, so it doesn't mess up the Product Backlog."
    ]
  },
  {
    "question": "The time-box for a Daily Scrum?",
    "answers": [
      "15 minutes."
    ]
  },
  {
    "question": "Which phrase best describes a Product Owner?",
    "answers": [
      "Value optimizer."
    ]
  },
  {
    "question": "The length of a Sprint should be:",
    "answers": [
      "All of these answers are correct."
    ]
  },
  {
    "question": "What are two responsibilities of testers in a Scrum Team? (choose two)",
    "answers": [
      "Everyone in the Developers is responsible for quality.",
      "Scrum has no \"tester\" role."
    ]
  },
  {
    "question": "The CEO asks the Developers to add a \"very important\" item to a Sprint that is in progress. What should the Developers do?",
    "answers": [
      "Inform the Product Owner so he/she can work with the CEO."
    ]
  },
  {
    "question": "What is the role of management in Scrum?",
    "answers": [
      "To facilitate the Scrum Teams with insights and resources that help them improve."
    ]
  },
  {
    "question": "Which technique is the best way the Scrum Master can ensure that the Developers communicates effectively with the Product Owner?",
    "answers": [
      "Monitor communications between them and facilitate direct collaboration."
    ]
  },
  {
    "question": "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
    "answers": [
      "Enough so the Developers can create its best forecast of what is can do, and to start the first several days of the Sprint."
    ]
  },
  {
    "question": "Who is responsible for managing the progress of work during a Sprint?",
    "answers": [
      "The Developers."
    ]
  },
  {
    "question": "Who is responsible for collaborating with stakeholders?",
    "answers": [
      "The Scrum Team."
    ]
  },
  {
    "question": "What two factors are best considered when establishing the Sprint length? (choose two)",
    "answers": [
      "The level of uncertainty over the technology to be used.",
      "The risk of being disconnected from the stakeholders."
    ]
  },
  {
    "question": "Which of these may a Developers deliver at the end of a Sprint?",
    "answers": [
      "An Increment of working software that is \"done\"."
    ]
  },
  {
    "question": "Who creates a Product Backlog item's estimate?",
    "answers": [
      "The Developers after clarifying requirements with the Product Owner."
    ]
  },
  {
    "question": "Who starts the Daily Scrum?",
    "answers": [
      "Whoever the Developers decides should start."
    ]
  },
  {
    "question": "You are the Scrum Master on a newly formed Scrum Team. Which three of the following activities would probably help the team in starting up? (choose three)",
    "answers": [
      "Have the Scrum Team members introduce themselves to each other and give a brief background of their skills and work history.",
      "Ensure the team understands they need a Definition of Done.",
      "Ask the Product Owner to discuss the product or project, its history, goals, and context, as well as answer questions."
    ]
  },
  {
    "question": "The Developers selects a set of Product Backlog items for a Sprint Backlog with the intent to get the selected items \"Done\" by the end of the Sprint. Which three phrases best describe the purpose of a Definition of Done? (choose three)",
    "answers": [
      "It creates transparency over the work inspected at the Sprint Review.",
      "It guides the Developers is creating a forecast at the Sprint Planning.",
      "It defines what it takes for an Increment to be ready for release."
    ]
  },
  {
    "question": "The Daily Scrum is an event that happens every day. What would be three key concerns if the frequency were to be lowered to every two or three days? (choose three)",
    "answers": [
      "Opportunities to inspect and adapt the Sprint Backlog are lost.",
      "Impediments are raised and resolved more slowly.",
      "The Sprint Backlog may become inaccurate."
    ]
  },
  {
    "question": "Which statement best describes Scrum?",
    "answers": [
      "A framework within which complex products in complex environments are developed."
    ]
  },
  {
    "question": "Which Scrum Values are exhibited by not building Product Backlog items that have low business value? (choose three)",
    "answers": [
      "Respect.",
      "Focus.",
      "Courage."
    ]
  },
  {
    "question": "How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?",
    "answers": [
      "The Developers pull in work in agreement with the Product Owner."
    ]
  },
  {
    "question": "How often should Developers change?",
    "answers": [
      "As needed, while taking into account a short term reduction in productivity."
    ]
  },
  {
    "question": "Who should make sure everyone on the Developers does his or her tasks for the Sprint?",
    "answers": [
      "The Developers."
    ]
  },
  {
    "question": "When is it most appropriate for a Developers to change the Definition of Done?",
    "answers": [
      "During the Sprint Retrospective."
    ]
  },
  {
    "question": "As the Sprint Planning meeting progresses, the Developers sees that the workload is greater than they can handle. Which two are valid actions? (choose two)",
    "answers": [
      "The Developers ensures that the Product Owner is aware, starts the Sprint, and monitors progress.",
      "Remove or change selected Product Backlog items."
    ]
  },
  {
    "question": "Currently, your Developers are organized to address a single layer only (for example, front end, middle tier, back end, and interfaces). What are three things to consider when deciding to move away from such component teams toward feature teams? (choose three)",
    "answers": [
      "Productivity may suffer when making this kind of move.",
      "Getting support from the business side first helps.",
      "Feature teams have less communication overhead."
    ]
  },
  {
    "question": "During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog?",
    "answers": [
      "As soon as possible after they are identified."
    ]
  },
  {
    "question": "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    "answers": [
      "He or she does not have to be there; he or she only has to ensure the Developers have a Daily Scrum."
    ]
  },
  {
    "question": "You have six teams using a traditional method to deliver a product. Your management has asked you to start using Scrum. In the initial project there were separate plans and teams for the layers of a software system, i.e. one for the frontend, one for the middle tier, one for the back-end, and one for the interfaces and services. This resembles what is known as component teams. But you have read that it's a good idea to have teams organized by feature. What are the advantages of keeping component teams while starting Scrum?",
    "answers": [
      "There's less initial disruption than organizing into new teams. As they start, they will discover what works best, and how to potentially re-organize towards this."
    ]
  },
  {
    "question": "True or False: A properly functioning Scrum Team will have at least one Release Sprint and may well have several.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "True or False: Scrum is a methodology that tells in detail how to build software incrementally.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "For which is the Scrum Master responsible?",
    "answers": [
      "The Scrum framework being adopted and used properly."
    ]
  },
  {
    "question": "The Developers asks their Product Owner to re-order the Product Backlog. The team is waiting for an external supplier to deliver a specific software component. Without that component there won't be enough work in the next Sprint to occupy the full team. The Product Owner asks the Scrum Master for help. What would be good advice to give the Product Owner?",
    "answers": [
      "Remind the Product Owner that his primary concern is the flow of value reflected in the ordering of the Product Backlog."
    ]
  },
  {
    "question": "What are three ways Scrum promotes self-management? (choose three)",
    "answers": [
      "By the Developers deciding what work to do in a Sprint.",
      "By removing titles for Developers.",
      "By being a lightweight framework."
    ]
  },
  {
    "question": "What is the key concern when multiple Scrum Teams are working from the same Product Backlog?",
    "answers": [
      "Minimizing dependencies between teams."
    ]
  },
  {
    "question": "What does it mean to say that an event has a time-box?",
    "answers": [
      "The event can take no more than a maximum amount of time."
    ]
  },
  {
    "question": "Which outcome is expected as Scrum Teams mature?",
    "answers": [
      "They will improve their Definition of Done to include more stringent criteria."
    ]
  },
  {
    "question": "The Product Owner must release each Increment to production.",
    "answers": [
      "When it makes sense."
    ]
  },
  {
    "question": "Who creates the Definition of Done?",
    "answers": [
      "The development organization (or Developers if none is available from the development organization)."
    ]
  },
  {
    "question": "Five new Scrum Teams have been created to build one product. A few of the Developers on one of the Scrum Teams ask the Scrum Master how to coordinate their work with the order teams. What should the Scrum Master do?",
    "answers": [
      "Teach them that it is their responsibility to work with the other teams to create an integrated Increment."
    ]
  },
  {
    "question": "Which two things should the Developers do during the first Sprint? (choose two)",
    "answers": [
      "Develop at least one piece of functionality.",
      "Create an Increment of potentially releasable software."
    ]
  },
  {
    "question": "Who determines when it is appropriate to update the Sprint Backlog during a Sprint?",
    "answers": [
      "The Developers."
    ]
  },
  {
    "question": "Who must attend the Daily Scrum?",
    "answers": [
      "The Developers."
    ]
  },
  {
    "question": "When do Developers take ownership of a Sprint Backlog item?",
    "answers": [
      "Never. All Sprint Backlog Items are \"owned\" by the entire Scrum Team, even though each one may be done by an individual Developers."
    ]
  },
  {
    "question": "True or False: The purpose of a Sprint is to produce a done Increment of product.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "In the Sprint Planning meeting, the Product Owner and the Developers were unable to reach a clear understanding about the highest order Product Backlog items. Because of this, the Developers couldn't figure out how many Product Backlog items it could forecast for the upcoming Sprint. They were able to agree on a Sprint Goal, however. Which of the following two actions should the Scrum Master support? (choose two)",
    "answers": [
      "Forecast the most likely Product Backlog items to meet the goal and create a Sprint Backlog based on a likely initial design and plan. Once the time-box for the Sprint Planning meeting is over, start the Sprint and continue to analyze, decompose, and create additional functionality during the Sprint.",
      "Discuss in the upcoming Sprint Retrospective why this happened and what changes will make it less likely to recur."
    ]
  },
  {
    "question": "Which answer best describes the topics covered in Sprint Planning?",
    "answers": [
      "What can be done and how to do it."
    ]
  },
  {
    "question": "Which of the following is required by Scrum? (choose all that apply)",
    "answers": [
      "Sprint Retrospective."
    ]
  },
  {
    "question": "What is the purpose of a Sprint Review?",
    "answers": [
      "To inspect the product Increment with the stakeholders and collect feedback on next steps."
    ]
  },
  {
    "question": "How should the Developers deal with non-functional requirements?",
    "answers": [
      "Ensure every Increment meets them."
    ]
  },
  {
    "question": "When is a Sprint over?",
    "answers": [
      "When the time-box expires."
    ]
  },
  {
    "question": "True or False: Scrum has a role called \"Project Manager\".",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Which Scrum Values are violated by building Product Backlog items that have low business value?",
    "answers": [
      "Courage.",
      "Focus.",
      "Respect."
    ]
  },
  {
    "question": "How much time is required after a Sprint to prepare for the next Sprint?",
    "answers": [
      "None. A new Sprint starts immediately following the end of the previous Sprint."
    ]
  },
  {
    "question": "When many Scrum Teams are working on the same product, should all of their Increments be integrated every Sprint?",
    "answers": [
      "Yes, otherwise the Product Owners (and stakeholders) may not be able to accurately inspect what is done."
    ]
  },
  {
    "question": "When can the Developers cancel a Sprint?",
    "answers": [
      "It can't. Only Product Owners can cancel Sprints."
    ]
  },
  {
    "question": "Which output from Sprint Planning provides the Developers with a target and overarching direction for the Sprint?",
    "answers": [
      "The Sprint Goal"
    ]
  },
  {
    "question": "During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. Which of the following statements is most accurate? (choose the best answer)",
    "answers": [
      "The Scrum Team may add items to the Sprint Backlog for the next Sprint."
    ]
  },
  {
    "question": "What techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which agile practices to apply? (choose the best two answers)",
    "answers": [
      "Involve the complete Scrum Team in making a decision.",
      "Use coaching techniques; such as open questions and active listening."
    ]
  },
  {
    "question": "Who is accountable for clearly expressing Product Backlog items? (choose the best answer)",
    "answers": [
      "The Product Owner."
    ]
  },
  {
    "question": "When many Scrum Teams are working on a single product, what best describes the Definition of Done? (choose the best answer)",
    "answers": [
      "All Scrum Teams must have a Definition of Done that makes their combined work potentially releasable."
    ]
  },
  {
    "question": "When many Developers are working on a single product, what best describes the Definition of Done? (choose the best answer)",
    "answers": [
      "All Developers must have a Definition of Done that makes their combined work potentially releasable."
    ]
  },
  {
    "question": "At the seventh Sprint Review, the stakeholders are disappointed and angry. They have determined that the product or system being built will not meet their needs and will cost more than they are willing to spend. What factors likely led to this? (choose two)",
    "answers": [
      "The Product Owner has not been keeping the stakeholders aware of the progress of the project.",
      "The stakeholders haven't been using the Sprint Reviews to inspect and evaluate progress."
    ]
  },
  {
    "question": "When a Scrum Team determines that it will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected? (choose the best answer)",
    "answers": [
      "The Product Owner and the Developers."
    ]
  },
  {
    "question": "As the Scrum Team starts work during the Sprint, it realizes it has selected too much work to finish in the Sprint. What should it do?",
    "answers": [
      "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items."
    ]
  },
  {
    "question": "Which of the following are roles on a Scrum Team? (choose all that apply)",
    "answers": [
      "Scrum Master.",
      "Product Owner.",
      "The Developers."
    ]
  },
  {
    "question": "Which two activities will a Product Owner engage in during a Sprint? (choose two)",
    "answers": [
      "Answer questions from the Developers about items in the current Sprint.",
      "Work with the stakeholders."
    ]
  },
  {
    "question": "What are two good ways for the Developers to make non-functional requirements visible? (choose two)",
    "answers": [
      "Add them to the Product Backlog and keep the Product Owner posted on the expected effort.",
      "Add them to the Definition of Done so the work is taken care of every Sprint."
    ]
  },
  {
    "question": "Which three questions might be answered by Developers at the Daily Scrum? (choose three)",
    "answers": [
      "What did I do yesterday that helped the Developers meet the Sprint Goal?",
      "What will I do today to help the Developers meet the Sprint Goal?",
      "Do I see any impediment that prevents me or the Developers from meeting the Sprint Goal?"
    ]
  },
  {
    "question": "What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint?",
    "answers": [
      "There are no such activities. The next Sprint starts immediately after the current Sprint."
    ]
  },
  {
    "question": "When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?",
    "answers": [
      "Never. The entire Scrum Team is accountable for creating value every Sprint."
    ]
  },
  {
    "question": "Every Developer should have:",
    "answers": [
      "The competencies and skills needed to deliver a Done Increment in a Sprint."
    ]
  },
  {
    "question": "Which best describes the Product Backlog?",
    "answers": [
      "It is allowed to grow and change as more is learned about the product and its customers."
    ]
  },
  {
    "question": "Who has the final decision about the order of items in the Product Backlog? (choose the best answer)",
    "answers": [
      "The Product Owner."
    ]
  },
  {
    "question": "Which are properties of the Daily Scrum? (choose two)",
    "answers": [
      "It is fifteen minutes or less in duration.",
      "Its location and time remain constant."
    ]
  },
  {
    "question": "What is the accountability of the Product Owner during Sprint 0? (choose the best answer)",
    "answers": [
      "There is no such thing as Sprint 0."
    ]
  },
  {
    "question": "In accordance with Scrum theory, how should a group of 100 people be divided into multiple Scrum Teams?",
    "answers": [
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams."
    ]
  },
  {
    "question": "Who is accountable for tracking the remaining work toward the Sprint Goal? (choose the best answer)",
    "answers": [
      "The Developers."
    ]
  },
  {
    "question": "When must a Product Owner release each Increment? (choose the best answer)",
    "answers": [
      "When it makes sense."
    ]
  },
  {
    "question": "What are two good ways for a Scrum Team to ensure security concerns are satisfied? (choose two)",
    "answers": [
      "Add security concerns to the Definition of Done.",
      "Have the Scrum Team create Product Backlog items for each concern."
    ]
  },
  {
    "question": "What is the recommended size for a Scrum Team? (choose the best answer)",
    "answers": [
      "10 or fewer."
    ]
  },
  {
    "question": "How do you know that a Scrum Team is cross-functional?",
    "answers": [
      "Scrum Team has all the skills to create a potentially releasable Increment by the end of every Sprint."
    ]
  },
  {
    "question": "Select two ways in which technical debt impacts transparency. (choose two)",
    "answers": [
      "It leads to false assumptions about the current state of the system, specifically of an Increment being releasable at the end of a Sprint.",
      "As development progresses and code is added, the system becomes more difficult to stabilize, which results in future work being slowed down in unpredictable ways."
    ]
  },
  {
    "question": "The Developers are required to deliver a done Increment by the end of a Sprint. Select two statements that explain what \"Done\" means. (choose two)",
    "answers": [
      "No work left from the Definition of Done.",
      "All work to create software that is ready to be released to end users."
    ]
  },
  {
    "question": "Which of the following are true about the length of the Sprint? (choose two)",
    "answers": [
      "It is best to have Sprints of consistent length throughout a development effort.",
      "All Sprints must be 1 month or less."
    ]
  },
  {
    "question": "What may be included in the Sprint Backlog? (choose the best answer)",
    "answers": [
      "Any of the above (or others) which are a decomposition of the selected Product Backlog items."
    ]
  },
  {
    "question": "Developers include which role(s)?",
    "answers": [
      "No other roles. Developers is one of the 3 accountabilities in Scrum."
    ]
  },
  {
    "question": "The Sprint Backlog must be detailed enough that...",
    "answers": [
      "changes in progress can be understood in the Daily Scrum."
    ]
  },
  {
    "question": "True or False: The Scrum Master is accountable for the Product Backlog.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "True or False: A Scrum Team uses 2 weeks Sprints and time box their Sprint Planning to 6 hours. Does this break the rules of Scrum?",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Who is accountable for ensuring that the burn-down chart and gantt chart exist?",
    "answers": [
      "No one."
    ]
  },
  {
    "question": "True or False: By the end of the Sprint Retrospective, the Scrum Team should have identified and planned improvements to increase its effectiveness.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "The Scrum Master is a leader and servant in service to which of the following?",
    "answers": [
      "The organisation and Scrum Team."
    ]
  },
  {
    "question": "The Product Owner manages...",
    "answers": [
      "the Product Backlog."
    ]
  },
  {
    "question": "Management need to monitor progress on a daily basis and decide to do so by attending the Daily Scrum. What are the likely results? (choose three)",
    "answers": [
      "Additional facilitation may be required to keep to the time-box.",
      "Developers may end up with less time in the Daily Scrum to re-plan their work.",
      "Developers may be less open and transparent during the Daily Scrum."
    ]
  },
  {
    "question": "True or False: The Product Owner must attend the Sprint Retrospective.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "True or False: A Scrum Team must only work on a single Product Goal at any time.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "True or False: The Definition of Done is a mandatory part of Scrum.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "True or False: The Scrum Master must facilitate the Daily Scrum.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Among the Developers, there is nobody with significant testing expertise. They should...",
    "answers": [
      "raise this as an impediment which may require the assistance of the Scrum Master to resolve.",
      "quality is the responsibility of the Developers and they should undertake testing themselves to the best of their abilities."
    ]
  },
  {
    "question": "True or False: The Sprint Planning event is comprised of 2 parts and the Product Owner is not needed at the 2nd part.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Product Backlog refinement is...",
    "answers": [
      "an ongoing process in which the Product Owner and the Developers collaborate."
    ]
  },
  {
    "question": "An Increment is...",
    "answers": [
      "the sum of the Done work during a Sprint, plus the work Done in earlier Sprints."
    ]
  },
  {
    "question": "Which statement best describes a cross-functional team?",
    "answers": [
      "The team has all competencies needed to accomplish the work."
    ]
  },
  {
    "question": "The result of the Sprint Review is...",
    "answers": [
      "a revised Product Backlog that defines the probable Product Backlog items for the next Sprint."
    ]
  },
  {
    "question": "The Product Owner is using burn-up charts instead of burn-down charts. What would your response be as Scrum Master?",
    "answers": [
      "There's nothing wrong with it."
    ]
  },
  {
    "question": "True or False: The Scrum Master manages the Scrum Team.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "The Scrum Master is responsible for?",
    "answers": [
      "Ensuring Scrum is understood."
    ]
  },
  {
    "question": "A Scrum Team has how many specific accountabilities?",
    "answers": [
      "3."
    ]
  },
  {
    "question": "Who is responsible for monitoring the progress of work during a Sprint?",
    "answers": [
      "Developers."
    ]
  },
  {
    "question": "True or False: During Sprint Planning, every task must be estimated so the Developers can be sure they have the capacity to complete them in the Sprint.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Who may be best positioned to decide who will be the Scrum Master for a new Scrum Team?",
    "answers": [
      "The Developers and the Product Owner."
    ]
  },
  {
    "question": "The Daily Scrum is consistently taking longer than 15 minutes. Which statement best describes what should be done?",
    "answers": [
      "The Scrum Master should help the Developers understand why the 15 minute time-box should be respected and help them find ways to do it as required."
    ]
  },
  {
    "question": "True or False: A Scrum Team must be 10 or fewer people.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "True or False: A Scrum Team must never have any technical debt.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "True or False: During Sprint Planning, all Product Backlog Items must be decomposed to a definitive set of tasks for the Developers to complete.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "True or False: The Increment must be released at the end of every Sprint.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "True or False: Developers should be set stretch goals by the Product Owner as part of Sprint Planning.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "True or False: During the Daily Scrum, the Developers must answer the \"3 questions\".",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Select the correct timebox for each Scrum event.",
    "answers": [
      "Sprint Planning - 8 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours."
    ]
  },
  {
    "question": "True or False: The Scrum Master can be removed once Scrum is adopted.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "Who can do the work to ensure the Product Backlog is refined to a state that it is useful?",
    "answers": [
      "The Developers, with support from the Product Owner who is still accountable for it.",
      "The Product Owner."
    ]
  },
  {
    "question": "The purpose of the Sprint Review is...",
    "answers": [
      "to inspect the outcome of the Sprint and determine future adaptations."
    ]
  },
  {
    "question": "Who can change the Sprint Backlog during a Sprint?",
    "answers": [
      "The Developers."
    ]
  },
  {
    "question": "True or False: Before the first Sprint, the Product Backlog must contain everything we will develop for the product.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "A Product Backlog is never complete.",
    "answers": [
      "True - As long as a product exists, its Product Backlog also exists."
    ]
  },
  {
    "question": "What does the Sprint burn-down chart show?",
    "answers": [
      "How much work remains until the end of the Sprint."
    ]
  },
  {
    "question": "A new Developer joins the Scrum Team taking the total number to 11 people. As a Scrum Master, What should you do?",
    "answers": [
      "Raise the increased team size as a potential issue and help the Developers decide what to do about it."
    ]
  },
  {
    "question": "Which technique is the best way the Scrum Master can ensure that the Developers communicate effectively with the Product Owner?",
    "answers": [
      "Observe communications between them and facilitate direct collaboration."
    ]
  },
  {
    "question": "Which two things should the Scrum Team do during the first Sprint? (choose the best two answers)",
    "answers": [
      "Develop and deliver at least one piece of functionality.",
      "Deliver an Increment of useful and valuable product"
    ]
  },
  {
    "question": "Who is on the Scrum Team?(choose the best three answers)",
    "answers": [
      "The Scrum Master.",
      "The Product Owner.",
      "Developers."
    ]
  },
  {
    "question": "The timebox for a Daily Scrum is?",
    "answers": [
      "15 minutes."
    ]
  },
  {
    "question": "The three pillars of empiricism are:",
    "answers": [
      "Inspection, Transparency, Adaptation"
    ]
  },
  {
    "question": "What does it mean to say that an event has a timebox?",
    "answers": [
      "The event can take no more than a maximum amount of time."
    ]
  },
  {
    "question": "Upon what type of process control is Scrum based?",
    "answers": [
      "Empirical."
    ]
  },
  {
    "question": "True or False: It is mandatory that the product Increment be released to production at the end of each Sprint.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "The timebox for the Sprint Review is:",
    "answers": [
      "4 hours for a monthly Sprint. For shorter Sprints it is usually shorter."
    ]
  },
  {
    "question": "Which statement best describes a Product Owner's responsibility?",
    "answers": [
      "Optimizing the value of the work the Scrum Team does."
    ]
  },
  {
    "question": "Why is the Daily Scrum held at the same time and same place?",
    "answers": [
      "The consistency reduces complexity."
    ]
  },
  {
    "question": "A Scrum Team consists of the following:(choose the best three answers)",
    "answers": [
      "Product Owner.",
      "Developers.",
      "Scrum Master."
    ]
  },
  {
    "question": "True or False: The purpose of a Sprint is to produce a valuable and useful Increment of working product.",
    "answers": [
      "True."
    ]
  },
  {
    "question": "The timebox for the Sprint Planning event is?",
    "answers": [
      "8 hours for a monthly Sprint. For shorter Sprints it is usually shorter."
    ]
  },
  {
    "question": "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    "answers": [
      "They do not have to be there; they only need to ensure the Developers have a Daily Scrum"
    ]
  },
  {
    "question": "What is the function or purpose of Management in Scrum?",
    "answers": [
      "Support the Product Owner with insights and information into high value product and system capabilities. Support the Scrum Master to encourage organizational change that fosters empiricism, self-management, bottom-up intelligence, and intelligent product delivery."
    ]
  },
  {
    "question": "When does a Developer become the sole owner of an item on the Sprint Backlog?",
    "answers": [
      "Never. All Sprint Backlog items are \"owned\" by the Developers on the Scrum Team."
    ]
  },
  {
    "question": "What is the typical size for a Scrum Team?",
    "answers": [
      "10 or fewer."
    ]
  },
  {
    "question": "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?",
    "answers": [
      "Al of the above"
    ]
  },
  {
    "question": "Which of the following are examples of a Scrum Team practicing Scrum poorly or not exhibiting traits of a self-managing Scrum Team?",
    "answers": [
      "StakeNolders attend the Daily Scrum to check on the Scrum Team's progress.",
      "The Developers invite external stakeholders to the Sprint Planning tosk them how to turn a Product Backlog item into an Increment via a complete and detailed Sprint Backlog",
      "The Developers are working within the boundaries of their organizations functional description and nicely handing off work from analyst to Developer to tester to integration"
    ]
  },
  {
    "question": "Who is required to attend the Daily Scrum?",
    "answers": [
      "The Developers."
    ]
  },
  {
    "question": "How much work must the Developers complete for each Product Backlog item they select for a Sprint?",
    "answers": [
      "Enough so that each Product Backlog item they select meets the Definition of Done."
    ]
  },
  {
    "question": "During a Sprint, a Developer determines that the Scrum Team will not be able to complete the items in their forecast. Who should be present to review and adjust the Product Backlog items selected?",
    "answers": [
      "The Product Owner and the Developers."
    ]
  },
  {
    "question": "Who has the final say on the order of the Product Backlog?",
    "answers": [
      "The Product Owner."
    ]
  },
  {
    "question": "Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly?",
    "answers": [
      "The Product Owner"
    ]
  },
  {
    "question": "Which of the following services is appropriate for a Scrum Master in regard to the Daily Scrum?",
    "answers": [
      "Teach the Developers to keep the Daily Scrum within the 15 minute timebox."
    ]
  },
  {
    "question": "The Developers should not be interrupted during the Sprint and the Sprint Goal should remain intact. These are conditions that foster creativity, quality and productivity. Which one of the following answers is FALSE?",
    "answers": [
      "The Sprint Backlog is fully formulated in the Sprint Planning event and does not change during the Sprint."
    ]
  },
  {
    "question": "When does the next Sprint begin?",
    "answers": [
      "Immediately after the conclusion of the previous Sprint."
    ]
  },
  {
    "question": "What are two ways a Scrum Master serves to enable effective Scrum Teams?",
    "answers": [
      "By facilitating Developer decision-making.",
      "By removing impediments that hinder the Scrum Team."
    ]
  },
  {
    "question": "True or False: When multiple Scrum Teams work together on the same product, each team should maintain a separate Product Backlog.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "When should a Developer on a Scrum Team be replaced?",
    "answers": [
      "As needed, while taking into account a short-term reduction in productivity."
    ]
  },
  {
    "question": "Which are characteristics of the Daily Scrum? (choose the best two answers)",
    "answers": [
      "Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog.",
      "Its location and time remain constant."
    ]
  },
  {
    "question": "True or False: The Scrum Team must choose at least one high priority process improvement item, identified during the Sprint Retrospective, and place it in the Sprint Backlog.",
    "answers": [
      "False."
    ]
  },
  {
    "question": "When does a Sprint conclude?",
    "answers": [
      "When the Sprint Retrospective is complete."
    ]
  },
  {
    "question": "When must a Scrum Team release each Increment?",
    "answers": [
      "When it makes sense to release it."
    ]
  },
  {
    "question": "Which of the following is an example of an Increment?",
    "answers": [
      "A valuable, useful set of product features."
    ]
  }
];
export default expected_answers;