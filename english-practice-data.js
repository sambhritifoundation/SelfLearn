/* SelfLearn original practice tracks. Levels describe practice, not certification. */
window.SL_ENGLISH_PRACTICE = [
  {
    title: 'Hello, I am Meena', level: 'First steps', hi: 'नमस्ते, मैं मीना हूँ',
    focus: 'Hear names and places; use I am / you are and a simple question.',
    audio: 'Hello. I am Meena. I am from Ranchi. You are Ravi, right? Nice to meet you.',
    checks: [
      ['What is the speaker doing?', ['Introducing herself', 'Buying a ticket', 'Asking for food'], 0, '“Hello” and “I am Meena” introduce the speaker.'],
      ['Where is Meena from?', ['Delhi', 'Ranchi', 'Patna'], 1, 'Listen for “I am from Ranchi”. The word from introduces a place.'],
      ['Which question asks a name?', ['Where are you from?', 'How much is it?', 'What is your name?'], 2, 'What asks for information; your name tells us which information.']
    ],
    notice: '“I am Meena” gives a name. “I am from Ranchi” gives a place. Listen for the words after am, not just am itself.',
    prompt: 'Meet a new classmate. Say hello, give your name and town, then ask their name. Use a made-up name if you prefer.',
    frame: 'Hello. I am ____. I am from ____. What is your name?',
    model: 'Hello. I am Asha. I am from Patna. What is your name?',
    follow: 'Your classmate says, “I am Ravi. I am from Ranchi.” Respond warmly and ask one place question.',
    reply: 'Nice to meet you, Ravi. Are you from Ranchi?',
    rubric: ['I greeted my partner.', 'I said a name and a place clearly.', 'I asked a question and left space for a reply.'],
    transfer: 'Greet a family member twice, changing the name and town. Aim for three clear sentences, without reading the second time.'
  },
  {
    title: 'Tea for two', level: 'First steps', hi: 'दो लोगों की चाय',
    focus: 'Catch numbers, articles and polite requests with can.',
    audio: 'Can I have two cups of tea, please? One with sugar and one without sugar. The tea is twenty rupees a cup. That is forty rupees altogether.',
    checks: [
      ['What is being ordered?', ['Two cups of tea', 'Two plates of rice', 'One glass of water'], 0, 'The first request names two cups of tea.'],
      ['How many cups have sugar?', ['Two', 'None', 'One'], 2, '“One with sugar and one without” divides the order into two different cups.'],
      ['How much is the whole order?', ['Twenty rupees', 'Forty rupees', 'Sixty rupees'], 1, 'Twenty is the price of a cup; forty is the total. Listen for altogether.']
    ],
    notice: '“A cup” means one cup. “Two cups” needs the plural -s. Can I have…? makes a useful polite request.',
    prompt: 'Order two snacks at a stall. Explain one preference and ask the total price.',
    frame: 'Can I have two ____, please? One with ____ and one without ____. How much is that?',
    model: 'Can I have two sandwiches, please? One with onion and one without onion. How much is that?',
    follow: 'The seller asks, “Would you like tea too?” Decline politely and confirm your order.',
    reply: 'No, thank you. Just two sandwiches, please.',
    rubric: ['I used a clear number and plural noun.', 'I explained a preference.', 'I asked the price politely.'],
    transfer: 'Change the order to one item, then three items. Notice a sandwich becomes three sandwiches.'
  },
  {
    title: 'Usually, but today…', level: 'Everyday confidence', hi: 'रोज़ और आज',
    focus: 'Separate routines from actions happening now: present simple + continuous.',
    audio: 'I usually take the bus to college. My sister walks to school. Today it is raining, so we are sharing an auto. We are waiting outside the shop now. The bus comes at eight, but we are not taking it today.',
    checks: [
      ['What changed today?', ['The college closed', 'The usual journey', 'The school address'], 1, 'Usually they take the bus or walk; today they are sharing an auto.'],
      ['Why are they sharing an auto?', ['It is raining', 'They missed a train', 'The shop is closed'], 0, 'The reason follows “Today it is raining, so…”.'],
      ['Which action is happening now?', ['My sister walks to school', 'The bus comes at eight', 'We are waiting outside'], 2, 'Are waiting describes an action in progress. Walks and comes describe routines.']
    ],
    notice: 'Usually + take describes a habit; today + are sharing describes a temporary change. She walks has -s; she is walking has is + -ing.',
    prompt: 'Describe your usual morning, then explain two things that are different today.',
    frame: 'I usually ____. My friend usually ____. Today I am ____ because ____.',
    model: 'I usually walk to class. My friend takes the bus. Today I am studying at home because it is raining. We are discussing our homework on the phone.',
    follow: 'A friend asks, “Do you study at home every day?” Explain the difference between today and your usual routine.',
    reply: 'No, I usually study at college. I am studying at home today because of the rain.',
    rubric: ['I used present simple for a routine.', 'I used am/is/are + -ing for today.', 'I connected a change to a reason.'],
    transfer: 'Describe what two people usually do and what they are doing now. Speak for 30 seconds.'
  },
  {
    title: 'Find the library', level: 'Everyday confidence', hi: 'पुस्तकालय का रास्ता',
    focus: 'Follow ordered instructions; combine imperatives, prepositions and clarification.',
    audio: 'Walk straight past the tea stall. Turn left at the pharmacy, not at the bank. The library is between the school and the post office. It opens at ten. If you arrive early, you can wait under the tree outside.',
    checks: [
      ['What is the message for?', ['Giving directions', 'Cancelling a meeting', 'Describing a meal'], 0, 'Walk and turn are instruction verbs.'],
      ['Where should you turn left?', ['At the bank', 'At the pharmacy', 'At the school'], 1, 'The speaker corrects a possible mistake: “not at the bank”.'],
      ['You arrive at nine fifty. What can you do?', ['Go inside immediately', 'Wait under the tree', 'Wait at the bank'], 1, 'The library opens at ten; the final conditional offers a place to wait.']
    ],
    notice: 'First follow the verbs walk and turn, then use at, between and outside to locate places. If introduces a situation; can gives an option.',
    prompt: 'Guide a visitor from your door to a nearby shop. Use three instructions and two location words.',
    frame: 'First, ____. Then ____. It is next to / opposite / between ____. If ____, you can ____.',
    model: 'First, walk to the main road. Then turn right at the school. The shop is opposite the bus stop. If it is closed, you can try the stall next door.',
    follow: 'The visitor asks, “Left at the school?” Correct the direction gently.',
    reply: 'Almost! Turn right at the school, not left. The shop is opposite the bus stop.',
    rubric: ['My instructions followed a usable order.', 'I used location words accurately.', 'I corrected a misunderstanding politely.'],
    transfer: 'Give the same directions without pointing. Ask a partner to repeat them, or repeat them as the visitor yourself.'
  },
  {
    title: 'The missing notebook', level: 'Connected stories', hi: 'खोई हुई कॉपी',
    focus: 'Follow a story using past simple, past continuous and sequence markers.',
    audio: 'Yesterday I was waiting for the bus when I noticed my notebook was missing. I checked my bag, but it was not there. While I was looking under the bench, a shopkeeper called me. I had left it on his counter. He gave it back, and I caught the next bus.',
    checks: [
      ['How did the story end?', ['The notebook stayed lost', 'The speaker found it and travelled', 'The shopkeeper took the bus'], 1, '“He gave it back” and “I caught the next bus” tell us the outcome.'],
      ['What was happening when the speaker noticed the loss?', ['Waiting for the bus', 'Buying a new notebook', 'Sitting in class'], 0, 'Was waiting is the background action; noticed is the event that interrupts it.'],
      ['Which happened first?', ['The shopkeeper called', 'The speaker checked the bag', 'The notebook was left on the counter'], 2, 'Had left looks back to an event before the main past story.']
    ],
    notice: 'Was waiting sets the scene; noticed moves the story forward; had left explains an earlier event. You can understand the timeline without translating every word.',
    prompt: 'Tell a real or imagined story about losing something and finding it. Set the scene, describe the problem, then the ending.',
    frame: 'I was ____ when ____. First ____. While I was ____, ____. In the end ____.',
    model: 'I was packing my bag when I noticed my keys were missing. First I checked the table. While I was looking behind the sofa, my brother found them. I had left them in my jacket. In the end, we left on time.',
    follow: 'Your listener asks, “Had you lost them before leaving home?” Clarify the order of events.',
    reply: 'Yes. I noticed they were missing before we left. My brother found them while we were still at home.',
    rubric: ['I set the scene with was/were + -ing.', 'My main events used past forms.', 'The order and ending were clear.'],
    transfer: 'Retell the story in 45 seconds, then in 20 seconds. Keep the essential events in both versions.'
  },
  {
    title: 'Plans that change', level: 'Connected stories', hi: 'बदलती योजनाएँ',
    focus: 'Track arrangements, intentions and offers: present continuous + going to + will.',
    audio: 'We are meeting outside the station at nine on Saturday. We are going to visit the science fair. I have already booked the tickets. If it rains, we will take a taxi from the station. You do not need to book one now. I will call you on Friday to confirm the plan.',
    checks: [
      ['What is the main purpose?', ['Planning a visit', 'Reporting an accident', 'Reviewing a film'], 0, 'The message gives a meeting point, a plan and a backup.'],
      ['What is already done?', ['The taxi booking', 'The ticket booking', 'The Friday call'], 1, 'Have already booked means the tickets are ready now.'],
      ['When will they take a taxi?', ['In every case', 'Only on Friday', 'If it rains'], 2, 'If it rains makes the taxi a conditional backup, not a confirmed booking.']
    ],
    notice: 'Are meeting is an arrangement. Going to visit is an intention. Will call offers a future action. Have already booked connects a completed action to the plan now.',
    prompt: 'Arrange a study session. Include a time, an intention, something already prepared and a backup plan.',
    frame: 'We are meeting ____. We are going to ____. I have already ____. If ____, we will ____.',
    model: 'We are meeting at the library at four. We are going to revise science. I have already printed the questions. If the library is full, we will study at my house. I will message you before leaving.',
    follow: 'Your partner says, “I cannot arrive until five.” Negotiate a new time and confirm it.',
    reply: 'That is fine. Shall we meet at five instead? I will let the others know. So, five at the library?',
    rubric: ['I gave a definite time and place.', 'I distinguished preparation from future plans.', 'I negotiated and confirmed a change.'],
    transfer: 'Make a new plan with a different place and problem. Speak for one minute without reading the frame.'
  },
  {
    title: 'A repair that still matters', level: 'Independent communication', hi: 'मरम्मत की बात',
    focus: 'Distinguish finished past events from current results: past simple + present perfect + modals.',
    audio: 'I bought this fan last Monday. It worked for two days, but it has stopped working twice since then. I have checked the plug and tried another socket. The electrician came yesterday, but the problem has not gone away. Could you arrange a replacement? I can bring the receipt, although I cannot visit before six.',
    checks: [
      ['What does the customer want?', ['A receipt for a new purchase', 'A replacement fan', 'A different socket'], 1, 'The request is “Could you arrange a replacement?”'],
      ['What happened yesterday?', ['The electrician came', 'The fan was bought', 'The receipt was lost'], 0, 'Came yesterday is a finished past event with a named time.'],
      ['What is still true now?', ['The repair solved everything', 'The customer can visit at noon', 'The fault remains'], 2, 'Has not gone away describes an unresolved current problem.']
    ],
    notice: 'Bought last Monday names a finished time. Has stopped twice since then counts experiences up to now. Could you…? asks for help without sounding abrupt.',
    prompt: 'Explain a faulty purchase to a shop assistant. Say when you bought it, what has happened, what you have tried and what you would like.',
    frame: 'I bought ____ on ____. It has ____. I have already ____. Could you ____?',
    model: 'I bought these headphones on Tuesday. The left side has stopped working three times. I have already tested them with another phone. Could you replace them? I can bring the receipt tomorrow.',
    follow: 'The assistant says, “Try another phone first.” Explain what you have already done without becoming rude.',
    reply: 'I have already tried that, but the problem is still there. Could you check them here or explain the replacement process?',
    rubric: ['I used past simple with a finished date.', 'I used present perfect for results up to now.', 'I made a specific, polite request.'],
    transfer: 'Repeat the complaint in 30 seconds. Keep the purchase date, evidence and requested solution.'
  },
  {
    title: 'A message passed along', level: 'Independent communication', hi: 'किसी का संदेश पहुँचाना',
    focus: 'Extract actions from a longer message; use reported speech, passive voice and deadlines.',
    audio: 'The coordinator said that the workshop had been moved to Room Four because the hall was being repaired. She asked us to arrive by ten fifteen, although the session would not begin until ten thirty. The forms have already been emailed, so nobody needs to print extra copies. However, anyone who has not received a form should tell her by this evening. She will bring a few spare copies, but places must be confirmed today.',
    checks: [
      ['What is the important change?', ['The workshop room', 'The workshop topic', 'The coordinator'], 0, 'Had been moved signals a change of room.'],
      ['When should participants arrive?', ['Ten thirty', 'Ten fifteen', 'This evening'], 1, 'Arrive by ten fifteen differs from the ten-thirty start.'],
      ['What must happen today?', ['The hall must be repaired', 'Everyone must print copies', 'Places must be confirmed'], 2, 'The final must marks a requirement. Printing is explicitly unnecessary.']
    ],
    notice: 'Said and asked introduce reported information. Had been moved and must be confirmed focus on the event or requirement, not who performs it.',
    prompt: 'Pass the workshop message to a friend in your own words. Include the changed room, arrival time and action needed today.',
    frame: 'The coordinator said ____. We need to ____. The forms have ____. If ____, ____.',
    model: 'The coordinator said the workshop had moved to Room Four. We need to arrive by ten fifteen. The forms have already been emailed. Please confirm your place today, and tell her this evening if your form has not arrived.',
    follow: 'Your friend says, “So I need to print a form and arrive at ten thirty?” Correct both points.',
    reply: 'You do not need to print a form. Also, ten thirty is the start time; we were asked to arrive by ten fifteen.',
    rubric: ['I preserved the important times and actions.', 'I reported the message rather than inventing details.', 'I corrected both misunderstandings clearly.'],
    transfer: 'Ask someone to give you a three-part message. Repeat it back, then pass it on in under 45 seconds.'
  },
  {
    title: 'Read between the lines', level: 'Flexible communication', hi: 'बात का आशय समझना',
    focus: 'Infer a polite concern from evidence; combine hedging, modals and conditionals.',
    audio: 'The new timetable is certainly ambitious. In theory, finishing all the sessions before lunch would give everyone a free afternoon. I am just wondering whether five sessions without a break might be a little tiring, especially for people travelling from outside town. If we shortened each session slightly, we could fit in a proper break. I would support the plan if that change were possible. Otherwise, I suspect people might leave before the final discussion, which would be a shame.',
    checks: [
      ['What is the speaker really doing?', ['Agreeing without conditions', 'Politely raising a concern', 'Cancelling the event'], 1, 'The praise is followed by a concern about tiredness and a suggested change.'],
      ['What change is proposed?', ['Shorter sessions and a break', 'A longer lunch', 'Removing all discussions'], 0, 'If we shortened… we could fit in a proper break is the proposal.'],
      ['Which conclusion is justified?', ['Everyone will definitely leave', 'The timetable is already changed', 'Support depends on adding a break'], 2, '“I would support… if…” makes support conditional. Might is not certainty.']
    ],
    notice: 'Might and I am wondering soften a concern. If + past form / would or could imagines a change. Use the whole message as evidence; a positive opening is not always full agreement.',
    prompt: 'A group plans a long study session with no breaks. Acknowledge a benefit, raise a concern and propose a realistic alternative.',
    frame: 'I can see why ____. I am wondering whether ____. If we ____, we could ____.',
    model: 'I can see why we want to finish quickly. I am wondering whether three hours without a break might reduce our concentration. If we took ten minutes halfway through, we could return with more energy and still finish by six.',
    follow: 'A teammate replies, “Breaks waste time.” Respond to their concern while defending your suggestion.',
    reply: 'I understand the time pressure. A short break may help us work more carefully afterwards. Could we try one ten-minute break and see whether it helps?',
    rubric: ['I acknowledged the other view.', 'I explained a concern without presenting a guess as fact.', 'I proposed a workable conditional alternative.'],
    transfer: 'Argue the other side for 45 seconds, then find a compromise. Clear reasoning matters more than speaking quickly.'
  },
  {
    title: 'Two views, one decision', level: 'Flexible communication', hi: 'दो विचार, एक निर्णय',
    focus: 'Compare evidence and preferences using concession, relative clauses and future consequences.',
    audio: 'Asha prefers an online course because she has been working evenings and needs flexible hours. Ravi points out that the classroom course, which includes weekly group discussions, would give them more speaking practice. Both courses cost the same, although the classroom option requires a bus journey. Asha says she would choose the classroom course if recorded lessons were available when she missed a session. Ravi has not checked that yet. They agree to ask the tutor before paying, rather than assume that either course will meet every need.',
    checks: [
      ['What has the pair decided?', ['To pay for the online course', 'To ask for more information', 'To stop studying'], 1, 'They agree to ask the tutor before paying; the course choice remains open.'],
      ['Why does Asha prefer online study?', ['Flexible hours fit her work', 'It is cheaper', 'It has more discussions'], 0, 'Her work schedule creates the need for flexibility. Both courses cost the same.'],
      ['What information is still missing?', ['Whether Ravi likes speaking', 'Whether buses exist', 'Whether recorded lessons are available'], 2, 'Ravi has not checked recordings yet. Do not turn a possibility into a fact.']
    ],
    notice: 'Has been working links an ongoing situation to today. Although introduces a trade-off. Which adds useful detail. A conditional preference is not a final decision.',
    prompt: 'Compare online and classroom learning for someone who works. Give both sides fairly, identify missing information and recommend a next step.',
    frame: 'Although ____, ____. The option which ____ may ____. Before deciding, I would ____.',
    model: 'Online learning offers flexibility, although it may give us fewer live conversations. The classroom course, which includes discussions, could help our speaking, but travelling takes time. Before deciding, I would ask whether recordings and flexible attendance are available.',
    follow: 'A friend asks, “Which is definitely better?” Give a qualified answer tied to their needs.',
    reply: 'It depends on your schedule and how much live practice you need. If recordings are available, the classroom course might meet both needs. We should check before choosing.',
    rubric: ['I represented both options fairly.', 'I separated known facts from missing information.', 'My recommendation followed from the learner’s needs.'],
    transfer: 'Compare two transport or study options for 90 seconds. Include one concession and one follow-up question.'
  },
  {
    title: 'What the numbers do not say', level: 'Fluent practice', hi: 'आँकड़ों से आगे',
    focus: 'Evaluate claims, uncertainty and counterfactuals across a sustained explanation.',
    audio: 'Our library visits rose by thirty percent after the evening opening hours were introduced. That sounds like clear evidence of success, but the school examinations began in the same month, so we cannot attribute the whole increase to the new hours. Had we compared the figures with the same period last year, we might have had a stronger basis for judging the change. Several students said they had been waiting for later opening, while two staff members reported difficulty getting home. I would keep the trial running for another month, collect feedback from both groups and compare similar weeks before making the hours permanent. The increase is encouraging; it is not yet the full story.',
    checks: [
      ['What is the central message?', ['The trial certainly failed', 'The increase proves the policy worked', 'The results are promising but incomplete'], 2, 'The speaker welcomes the increase while explaining competing causes and missing evidence.'],
      ['What else might explain increased visits?', ['School examinations', 'Lower membership fees', 'A new bus service'], 0, 'Examinations began in the same month. The other causes are not mentioned.'],
      ['What does “Had we compared…” imply?', ['The comparison was completed', 'A useful comparison was not made', 'Last year had no visitors'], 1, 'Had we compared… might have had describes an unreal past possibility.']
    ],
    notice: 'A sequence of events does not prove a cause. Had we compared = if we had compared. Might have had expresses a possible past result, not a guaranteed one.',
    prompt: 'Give a 90-second report on the library trial. Separate the finding, a possible alternative cause, different people’s needs and your recommendation.',
    frame: 'The figures suggest ____, but ____. If we had ____, we might have ____. I recommend ____ because ____.',
    model: 'Visits increased after later opening, which is encouraging. However, exams may also have brought more students in. If we had compared similar exam weeks, we might have understood the effect more clearly. Students value access, while staff need a safe journey home. I recommend another month of testing, with feedback and a fair comparison before a permanent decision.',
    follow: 'Someone says, “Thirty percent proves it. Why wait?” Explain your caution without dismissing the result.',
    reply: 'The increase matters, but two things changed at once: opening hours and exam demand. A comparison would help us estimate how much each contributed. We can continue the trial while collecting that evidence.',
    rubric: ['I distinguished evidence from a causal claim.', 'I used uncertainty and past conditionals appropriately.', 'I gave a balanced, actionable recommendation.'],
    transfer: 'Explain a change in your own community. Offer two possible causes and one way to check them. Avoid inventing statistics.'
  },
  {
    title: 'A meeting with no easy answer', level: 'Fluent practice', hi: 'मिलकर समाधान निकालना',
    focus: 'Synthesize positions, implied reservations and mixed time frames; negotiate spontaneously.',
    audio: 'The community centre can afford either new computers or a longer weekend programme this year, but not both. Neha argues that the computers, some of which have been failing for months, are essential for job applications. Imran agrees that equipment matters, yet says the weekend sessions have helped people who cannot attend on weekdays. He would have supported replacing every machine if funding had increased; as things stand, he favours repairing half of them. Neha is willing to consider that, provided the repairs come with a warranty. Neither has obtained a repair quote. The chair proposes getting two quotes by Friday and asking weekend learners which sessions they use most. A decision will be made next week. For now, repair is an option under investigation, not an agreed solution.',
    checks: [
      ['What is the current outcome?', ['All computers will be replaced', 'More evidence will be gathered', 'Weekend sessions have ended'], 1, 'Quotes and learner feedback are the agreed next actions; the decision is next week.'],
      ['What condition does Neha attach to repairs?', ['A warranty', 'Free transport', 'New opening hours'], 0, 'Provided introduces her condition: the repairs must have a warranty.'],
      ['Which summary keeps the uncertainty?', ['Repairs are approved and funded', 'Imran opposes all equipment spending', 'Repairs may work, but cost and warranty need checking'], 2, 'No quote exists yet, and Neha’s support is conditional.']
    ],
    notice: 'Have been failing describes an ongoing problem. Would have supported + if… had increased looks at an unreal past. Provided introduces a condition that still matters now. Track what is agreed separately from what is suggested.',
    prompt: 'Chair the meeting in a two-minute spoken response. Summarize each concern fairly, propose a compromise, assign next steps and state what remains undecided.',
    frame: 'What I hear is ____. We agree on ____, but have not yet ____. Provided ____, we could ____. By Friday, ____.',
    model: 'Neha is concerned about reliable access for job applications, while Imran wants to protect weekend learning. We agree both needs matter, but we do not yet know repair costs. Provided repairs are reliable and covered by a warranty, repairing some machines could preserve funds for sessions. Let us get two quotes by Friday and ask learners which sessions they use. Next week we can compare the options. We have agreed to investigate, not to buy or cancel anything yet.',
    follow: 'A participant interrupts: “So you have decided our weekend classes do not matter?” Repair the misunderstanding, then invite a practical contribution.',
    reply: 'No decision to cancel classes has been made. Your access is one of the needs we are trying to protect. Could you help us identify the sessions learners use most, so that next week’s decision includes that evidence?',
    rubric: ['I synthesized both positions without distortion.', 'I distinguished conditions, proposals and decisions.', 'I handled the interruption and confirmed a concrete next step.'],
    transfer: 'Repeat with a partner who challenges your proposal twice, or invent two objections yourself. Aim for clear, flexible responses rather than a memorized script. Continue with varied real conversations; completing this track is practice, not proof of fluency.'
  }
];
