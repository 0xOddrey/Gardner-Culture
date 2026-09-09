const orientationModules = [
  {
    id: 'mission-vision',
    page: 'mission-vision',
    kicker: 'Our shared direction',
    title: 'Mission and vision',
    intro: 'Our mission describes the learning experience we build every day. Our vision describes the young adults Gardner hopes to graduate.',
    points: [
      ['Mission', 'Build incredibly confident and capable lifelong learners who are hilariously excited to learn every day.'],
      ['Vision', 'Graduate young adults who are capable of success not only academically, but holistically.'],
      ['Every role contributes', 'Teaching, operations, administration, care, preparation, communication, and maintenance all shape this promise.']
    ],
    scenarioTitle: 'A learner is struggling with a new task.',
    scenarioCopy: 'Support should protect confidence while helping the learner take the next achievable step. Doing the work for the child removes the opportunity to become capable.',
    question: 'Which outcome best reflects Gardner’s vision?',
    answers: ['High marks are the only measure of success.', 'Academic, social, emotional, creative, physical, and ethical growth all matter.', 'Children should avoid difficult tasks until they are certain to succeed.'],
    correct: 1,
    feedback: 'Gardner defines success holistically. Academic learning matters alongside confidence, relationships, communication, resilience, creativity, wellbeing, and responsibility.'
  },
  {
    id: 'child-centred',
    page: 'believe',
    kicker: 'Principle 01',
    title: 'The child as protagonist',
    intro: 'Children are at the centre of the Gardner story. The school day, its spaces, services, routines, and decisions exist to create safe and meaningful learning experiences for them.',
    points: [
      ['Children come first', 'Adult convenience, personal preferences, and staff socialising do not take priority over children’s learning, dignity, or safety.'],
      ['Every employee works for children', 'A tidy school, prepared resources, dependable services, and respectful communication all support learning.'],
      ['Children are capable', 'We provide appropriate access, responsibility, choice, and support rather than unnecessary dependence.']
    ],
    scenarioTitle: 'A child asks for help while two staff members are talking.',
    scenarioCopy: 'Pause the adult conversation, look at the child, listen, and respond. If you are already helping another child, acknowledge the waiting learner and explain that you will be with them shortly.',
    question: 'What does “child as protagonist” mean for non-teaching staff?',
    answers: ['It applies only during classroom lessons.', 'Their work also helps create safe, prepared, child-centred experiences.', 'It means children decide every school rule.'],
    correct: 1,
    feedback: 'Every role affects the learner experience. The principle guides how all staff prepare, maintain, communicate, supervise, and respond.'
  },
  {
    id: 'collaborator-communicator',
    page: 'believe',
    kicker: 'Principles 02 and 03',
    title: 'The child as collaborator and communicator',
    intro: 'Children build understanding with others and communicate through many languages: words, movement, drawing, construction, music, dramatic play, questions, and relationships.',
    points: [
      ['Learning is social', 'Children explain, listen, negotiate, test ideas, solve problems, and create together.'],
      ['Voice needs safety', 'Children strengthen their voice when they feel seen, respected, and safe to express an idea or feeling.'],
      ['Never diminish a child', 'We do not attack, mock, silence, label, shame, or degrade a child’s effort, feelings, identity, or voice.']
    ],
    scenarioTitle: 'A child explains an idea more clearly through a model than through speech.',
    scenarioCopy: 'Treat the model as meaningful communication. Ask open questions, document the thinking, and help the learner build additional ways to express the idea.',
    question: 'What is the best response when children disagree during a shared investigation?',
    answers: ['Give the correct answer immediately to end the disagreement.', 'Invite them to explain, listen, test their ideas, and revise together.', 'Allow only the most confident child to continue.'],
    correct: 1,
    feedback: 'Collaboration turns differences into learning. Staff guide respectful dialogue and investigation rather than removing every productive disagreement.'
  },
  {
    id: 'research-documentation',
    page: 'believe',
    kicker: 'Learning made visible',
    title: 'Teacher as researcher',
    intro: 'Gardner educators learn about students in order to support learning more effectively. Observation, listening, documentation, reflection, and responsive planning replace quick labels and assumptions.',
    points: [
      ['Observe before judging', 'Notice patterns, context, strategies, interests, relationships, language, and barriers.'],
      ['Document the journey', 'Record questions, work, words, images, theories, revisions, and progress so learning can be revisited.'],
      ['Make room for different strengths', 'Multiple intelligences provide different pathways to understand, practise, express, and demonstrate learning without fixing children into labels.']
    ],
    scenarioTitle: 'A learner repeatedly avoids writing.',
    scenarioCopy: 'Observe when and how it happens, listen to the learner, examine the task and environment, try appropriate supports, document the response, and use that evidence in future planning.',
    question: 'What makes documentation more than classroom decoration?',
    answers: ['It shows only the neatest final products.', 'It makes thinking visible and informs reflection, planning, and family partnership.', 'It fills every available wall with permanent displays.'],
    correct: 1,
    feedback: 'Strong documentation reveals the process of learning and helps students, teachers, and families revisit how ideas and capabilities developed.'
  },
  {
    id: 'engaged-teaching',
    page: 'teach',
    kicker: 'How we teach',
    title: 'Engagement, differentiation, and dignity',
    intro: 'Gardner teaching should invite meaningful participation, curiosity, creativity, collaboration, and cognitive challenge. Engagement is purposeful learning, not constant entertainment.',
    points: [
      ['Differentiate from evidence', 'Adjust content, process, support, challenge, pacing, environment, or expression in response to learners.'],
      ['Move beyond recall', 'Use Bloom’s Taxonomy across learning to remember, understand, apply, analyse, evaluate, and create.'],
      ['Protect confidence', 'A capable child is formed through confidence, guidance, practice, and appropriate challenge, never force or degradation.']
    ],
    scenarioTitle: 'Several learners disengage and checks show that they do not understand.',
    scenarioCopy: 'Adjust the explanation, materials, grouping, support, or challenge. Completing the unchanged plan is not more important than responding to evidence of learning.',
    question: 'Which task best reflects engaged teaching?',
    answers: ['Copy definitions for the entire lesson.', 'Use relevant materials to investigate a problem, discuss ideas, and create a response.', 'Give every learner unrelated work so all tasks are different.'],
    correct: 1,
    feedback: 'Engaged teaching gives learners an active and meaningful role. Differentiation creates appropriate pathways towards worthwhile shared learning goals.'
  },
  {
    id: 'prepared-environment',
    page: 'prepare-learning',
    kicker: 'How we prepare for learning',
    title: 'The environment teaches',
    intro: 'Learning begins before a lesson starts. Shared school spaces belong to students unless clearly designated staff-only, and staff are stewards who prepare, maintain, and guide those spaces.',
    points: [
      ['Intentional and inviting', 'Spaces, routines, and materials should have a clear learning purpose and welcome participation.'],
      ['Organised and accessible', 'Safe, appropriate resources should be visible, reachable, usable, and returnable by learners.'],
      ['Walls show active learning', 'Displays should relate to what is currently being learned, with more than half of wall space devoted to children’s work and documentation.']
    ],
    scenarioTitle: 'Students need an adult every time they want paper or pencils.',
    scenarioCopy: 'Reorganise safe everyday materials so learners can find, use, and return them independently. Accessibility communicates trust and capability.',
    question: 'Which classroom display best reflects Gardner practice?',
    answers: ['Permanent generic decor covering most walls.', 'Current learning resources alongside children’s work, questions, and documented thinking.', 'No student work because it may look inconsistent.'],
    correct: 1,
    feedback: 'The environment should reveal current inquiry and value children’s thinking. Decoration should never crowd out active learning and documentation.'
  },
  {
    id: 'relationships',
    page: 'relationships',
    kicker: 'Community and communication',
    title: 'We speak as one school',
    intro: 'School, family, and child are on the same team. Staff communicate with parents as representatives of Gardner, never in a personal capacity.',
    points: [
      ['Begin with partnership', 'Greet personally and professionally, connect with positive context, inform clearly, return to the student, and close sincerely.'],
      ['Be accurate', 'When you do not know, say, “I’m not sure. I’ll check and get back to you,” then follow up.'],
      ['Raise concerns internally', 'Frustration and discontent must be shared through appropriate school channels, not discussed with parents.']
    ],
    scenarioTitle: 'A parent asks about a school decision that frustrates you.',
    scenarioCopy: 'Remain constructive and student-focused as a representative of the school. Do not recruit the parent into an internal disagreement; raise your concern through the proper internal process.',
    question: 'What should staff do when unsure about routine information requested by a parent?',
    answers: ['Give the most likely answer.', 'Say you will check, use the correct internal channel, and follow up.', 'Share another employee’s opinion.'],
    correct: 1,
    feedback: 'Professional honesty builds trust. Staff should not guess or speak personally on behalf of the school.'
  },
  {
    id: 'care-safety',
    page: 'care',
    kicker: 'How we care',
    title: 'Duty of care and active supervision',
    intro: 'Every staff member has a duty of care. When children are in our care, they have our attention, and concerns about safety must be acted on and reported.',
    points: [
      ['Use rotation and with-it-ness', 'Spread out, scan, anticipate, communicate coverage, and know what is happening across the environment.'],
      ['Act, protect, report', 'Reduce immediate danger, listen without leading or promising secrecy, record facts, and report promptly.'],
      ['Be fit for duty', 'Gardner is drug-free, alcohol-free, smoke-free, and vape-free. Responsibility for children requires sound judgement.']
    ],
    scenarioTitle: 'A child shares information that may mean they are unsafe.',
    scenarioCopy: 'Listen calmly, protect the child’s voice, do not investigate alone or contact the family yourself, record factual information, and report through the safeguarding channel promptly.',
    question: 'What should supervising staff do during outdoor play?',
    answers: ['Stand together so adult conversation is easier.', 'Use planned positions and rotation, scan continuously, and maintain with-it-ness.', 'Watch only the children who usually take risks.'],
    correct: 1,
    feedback: 'Active supervision is purposeful. Staff position and move so the whole area is covered and emerging risks are noticed early.'
  }
];

const orientationAssessmentPolicies = [
  'positive-discipline',
  'working-hours',
  'late-pickup',
  'fit-for-duty',
  'family-communication',
  'gifts',
  'staff-gap-coverage',
  'safeguarding',
  'confidentiality',
  'hr-investigations',
  'resources-equipment',
  'workplace-conflict'
];

const orientationAssessmentQuestions = orientationAssessmentPolicies.map((policyId) =>
  policyQuizQuestions.find((question) => question.policy === policyId)
).filter(Boolean);

const orientationRoot = document.querySelector('.orientation-page');
const orientationStorageKey = 'gardner-employee-orientation-v1';

function orientationNewState(profile) {
  return {
    version: 1,
    profile,
    startedAt: new Date().toISOString(),
    completedAt: null,
    stage: 'culture',
    cultureIndex: 0,
    cultureAnswers: {},
    policyIndex: 0,
    policyReviews: {},
    assessmentIndex: 0,
    assessmentAnswers: {}
  };
}

function orientationLoadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(orientationStorageKey));
    return saved?.version === 1 && saved.profile ? saved : null;
  } catch {
    return null;
  }
}

function orientationSaveState(state) {
  try {
    localStorage.setItem(orientationStorageKey, JSON.stringify(state));
  } catch {
    // The orientation still works when browser storage is unavailable.
  }
}

function orientationFormatDate(value, includeTime = true) {
  if (!value) return 'Not completed';
  const options = includeTime
    ? { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Africa/Windhoek' }
    : { dateStyle: 'medium', timeZone: 'Africa/Windhoek' };
  return new Intl.DateTimeFormat('en-NA', options).format(new Date(value));
}

function orientationDuration(state) {
  const end = state.completedAt ? new Date(state.completedAt) : new Date();
  return Math.max(1, Math.round((end - new Date(state.startedAt)) / 60000));
}

if (orientationRoot) {
  const registration = orientationRoot.querySelector('.orientation-registration');
  const form = orientationRoot.querySelector('.orientation-profile-form');
  const resumeButton = orientationRoot.querySelector('.orientation-resume');
  const workspace = orientationRoot.querySelector('.orientation-workspace');
  const culturePane = orientationRoot.querySelector('.orientation-culture-pane');
  const policyPane = orientationRoot.querySelector('.orientation-policy-pane');
  const assessmentPane = orientationRoot.querySelector('.orientation-assessment-pane');
  const summaryPane = orientationRoot.querySelector('.orientation-summary');
  let orientationState = orientationLoadState();

  function orientationSetVisiblePane(pane) {
    [culturePane, policyPane, assessmentPane, summaryPane].forEach((item) => {
      item.hidden = item !== pane;
    });
  }

  function orientationUpdateProgress() {
    const cultureCount = Object.keys(orientationState.cultureAnswers).length;
    const policyCount = Object.keys(orientationState.policyReviews).length;
    const assessmentCount = Object.keys(orientationState.assessmentAnswers).length;
    const total = cultureCount + policyCount + assessmentCount;
    const labels = { culture: 'Culture modules', policies: 'Policy review', assessment: 'Scenario assessment', summary: 'Completed' };

    orientationRoot.querySelector('.orientation-employee-name').textContent = orientationState.profile.fullName;
    orientationRoot.querySelector('.orientation-stage-label').textContent = labels[orientationState.stage];
    orientationRoot.querySelector('.orientation-elapsed span').textContent = `${orientationDuration(orientationState)} min`;
    orientationRoot.querySelector('[data-orientation-step="culture"] small').textContent = `${cultureCount}/${orientationModules.length}`;
    orientationRoot.querySelector('[data-orientation-step="policies"] small').textContent = `${policyCount}/${policies.length}`;
    orientationRoot.querySelector('[data-orientation-step="assessment"] small').textContent = `${assessmentCount}/${orientationAssessmentQuestions.length}`;
    orientationRoot.querySelector('[data-orientation-step="summary"] small').textContent = orientationState.completedAt ? 'Complete' : 'Pending';
    orientationRoot.querySelectorAll('[data-orientation-step]').forEach((step) => {
      const order = ['culture', 'policies', 'assessment', 'summary'];
      const stepStage = step.dataset.orientationStep;
      step.classList.toggle('active', stepStage === orientationState.stage);
      step.classList.toggle('complete', order.indexOf(stepStage) < order.indexOf(orientationState.stage));
    });
    const progress = orientationRoot.querySelector('.orientation-overall-progress');
    progress.setAttribute('aria-valuemax', String(orientationModules.length + policies.length + orientationAssessmentQuestions.length));
    progress.setAttribute('aria-valuenow', String(total));
    progress.querySelector('span').style.width = `${total / (orientationModules.length + policies.length + orientationAssessmentQuestions.length) * 100}%`;
  }

  function orientationAnswerButtons(container, item, savedAnswer, handler) {
    container.replaceChildren();
    item.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'orientation-answer';
      button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong></strong>`;
      button.querySelector('strong').textContent = answer;
      if (savedAnswer) {
        button.disabled = true;
        if (index === item.correct) button.classList.add('is-correct');
        if (index === savedAnswer.selected && !savedAnswer.correct) button.classList.add('is-incorrect');
      } else {
        button.addEventListener('click', () => handler(index));
      }
      container.append(button);
    });
  }

  function orientationRenderCulture() {
    orientationState.stage = 'culture';
    const module = orientationModules[orientationState.cultureIndex];
    const saved = orientationState.cultureAnswers[module.id];
    const points = orientationRoot.querySelector('.orientation-module-points');
    orientationRoot.querySelector('.orientation-module-number').textContent = `${String(orientationState.cultureIndex + 1).padStart(2, '0')} / ${String(orientationModules.length).padStart(2, '0')}`;
    orientationRoot.querySelector('.orientation-source-link').href = `?page=${module.page}`;
    orientationRoot.querySelector('.orientation-module-kicker').textContent = module.kicker;
    orientationRoot.querySelector('.orientation-module-title').textContent = module.title;
    orientationRoot.querySelector('.orientation-module-intro').textContent = module.intro;
    points.replaceChildren();
    module.points.forEach(([title, copy], index) => {
      const article = document.createElement('article');
      const number = document.createElement('span');
      const heading = document.createElement('h3');
      const paragraph = document.createElement('p');
      number.textContent = String(index + 1).padStart(2, '0');
      heading.textContent = title;
      paragraph.textContent = copy;
      article.append(number, heading, paragraph);
      points.append(article);
    });
    orientationRoot.querySelector('.orientation-module-scenario h3').textContent = module.scenarioTitle;
    orientationRoot.querySelector('.orientation-module-scenario p').textContent = module.scenarioCopy;
    orientationRoot.querySelector('.orientation-module-question').textContent = module.question;

    const answers = orientationRoot.querySelector('.orientation-module-answers');
    const feedback = orientationRoot.querySelector('.orientation-module-feedback');
    orientationAnswerButtons(answers, module, saved, (selected) => {
      const correct = selected === module.correct;
      orientationState.cultureAnswers[module.id] = { selected, correct, reviewedAt: new Date().toISOString() };
      orientationSaveState(orientationState);
      orientationRenderCulture();
      feedback.focus();
    });
    feedback.hidden = !saved;
    feedback.classList.toggle('is-incorrect', saved && !saved.correct);
    feedback.querySelector('strong').textContent = saved ? (saved.correct ? 'Best response' : 'Review this point') : '';
    feedback.querySelector('p').textContent = saved ? module.feedback : '';
    const previous = orientationRoot.querySelector('.orientation-culture-previous');
    previous.disabled = orientationState.cultureIndex === 0;
    const next = orientationRoot.querySelector('.orientation-culture-next');
    next.disabled = !saved;
    next.innerHTML = orientationState.cultureIndex === orientationModules.length - 1
      ? 'Begin policy review <i data-lucide="arrow-right" aria-hidden="true"></i>'
      : 'Continue <i data-lucide="arrow-right" aria-hidden="true"></i>';
    orientationSetVisiblePane(culturePane);
    orientationUpdateProgress();
    lucide.createIcons();
    orientationRoot.querySelector('.orientation-module-title').focus();
  }

  function orientationAppendPolicyBlock(container, block) {
    if (Array.isArray(block)) {
      const list = document.createElement('ul');
      block.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);
      });
      container.append(list);
    } else {
      const paragraph = document.createElement('p');
      paragraph.textContent = block;
      container.append(paragraph);
    }
  }

  function orientationRenderPolicy() {
    orientationState.stage = 'policies';
    const policy = policies[orientationState.policyIndex];
    const reviewedAt = orientationState.policyReviews[policy.id];
    orientationRoot.querySelector('.orientation-policy-position').textContent = `${String(orientationState.policyIndex + 1).padStart(2, '0')} / ${policies.length}`;
    orientationRoot.querySelector('.orientation-policy-source').href = `?policy=${policy.id}`;
    orientationRoot.querySelector('.orientation-policy-code').textContent = policy.code;
    orientationRoot.querySelector('.orientation-policy-title').textContent = policy.title;
    orientationRoot.querySelector('.orientation-policy-summary').textContent = policy.summary;
    const body = orientationRoot.querySelector('.orientation-policy-body');
    body.replaceChildren();
    policy.sections.forEach(([title, blocks], index) => {
      const section = document.createElement('section');
      const heading = document.createElement('h3');
      heading.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>`;
      heading.append(document.createTextNode(title));
      section.append(heading);
      blocks.forEach((block) => orientationAppendPolicyBlock(section, block));
      body.append(section);
    });

    const checkbox = orientationRoot.querySelector('.orientation-policy-checkbox');
    checkbox.checked = Boolean(reviewedAt);
    checkbox.disabled = Boolean(reviewedAt);
    const reviewed = orientationRoot.querySelector('.orientation-policy-reviewed');
    reviewed.hidden = !reviewedAt;
    reviewed.textContent = reviewedAt ? `Reviewed ${orientationFormatDate(reviewedAt)}` : '';
    const previous = orientationRoot.querySelector('.orientation-policy-previous');
    previous.disabled = false;
    const next = orientationRoot.querySelector('.orientation-policy-next');
    next.disabled = !reviewedAt && !checkbox.checked;
    next.innerHTML = reviewedAt
      ? `${orientationState.policyIndex === policies.length - 1 ? 'Begin scenarios' : 'Continue'} <i data-lucide="arrow-right" aria-hidden="true"></i>`
      : `Record review & continue <i data-lucide="arrow-right" aria-hidden="true"></i>`;
    orientationSetVisiblePane(policyPane);
    orientationUpdateProgress();
    lucide.createIcons();
    orientationRoot.querySelector('.orientation-policy-title').focus();
  }

  function orientationAssessmentScore() {
    return Object.values(orientationState.assessmentAnswers).filter((answer) => answer.correct).length;
  }

  function orientationRenderAssessment() {
    orientationState.stage = 'assessment';
    const index = orientationState.assessmentIndex;
    const item = orientationAssessmentQuestions[index];
    const saved = orientationState.assessmentAnswers[index];
    const source = getQuizSource(item);
    orientationRoot.querySelector('.orientation-assessment-position').textContent = `${String(index + 1).padStart(2, '0')} / ${orientationAssessmentQuestions.length}`;
    orientationRoot.querySelector('.orientation-assessment-score').textContent = `${orientationAssessmentScore()} correct`;
    orientationRoot.querySelector('.orientation-assessment-source').textContent = source.eyebrow;
    orientationRoot.querySelector('.orientation-assessment-scenario').textContent = item.scenario;
    orientationRoot.querySelector('.orientation-assessment-question').textContent = item.question;
    const answers = orientationRoot.querySelector('.orientation-assessment-answers');
    const feedback = orientationRoot.querySelector('.orientation-assessment-feedback');
    orientationAnswerButtons(answers, item, saved, (selected) => {
      orientationState.assessmentAnswers[index] = {
        selected,
        correct: selected === item.correct,
        answeredAt: new Date().toISOString()
      };
      orientationSaveState(orientationState);
      orientationRenderAssessment();
      feedback.focus();
    });
    feedback.hidden = !saved;
    feedback.classList.toggle('is-incorrect', saved && !saved.correct);
    feedback.querySelector('strong').textContent = saved ? (saved.correct ? 'Best response' : 'Review this one') : '';
    feedback.querySelector('h3').textContent = saved ? item.title : '';
    feedback.querySelector('p').textContent = saved ? item.explanation : '';
    const next = orientationRoot.querySelector('.orientation-assessment-next');
    next.disabled = !saved;
    next.innerHTML = index === orientationAssessmentQuestions.length - 1
      ? 'Complete orientation <i data-lucide="arrow-right" aria-hidden="true"></i>'
      : 'Next scenario <i data-lucide="arrow-right" aria-hidden="true"></i>';
    orientationSetVisiblePane(assessmentPane);
    orientationUpdateProgress();
    lucide.createIcons();
    orientationRoot.querySelector('.orientation-assessment-scenario').focus();
  }

  function orientationDetailItem(label, value) {
    const div = document.createElement('div');
    const term = document.createElement('span');
    const description = document.createElement('strong');
    term.textContent = label;
    description.textContent = value;
    div.append(term, description);
    return div;
  }

  function orientationRenderSummary() {
    orientationState.stage = 'summary';
    if (!orientationState.completedAt) orientationState.completedAt = new Date().toISOString();
    orientationSaveState(orientationState);
    const details = orientationRoot.querySelector('.orientation-record-details');
    details.replaceChildren(
      orientationDetailItem('Employee', orientationState.profile.fullName),
      orientationDetailItem('Staff number', orientationState.profile.staffNumber),
      orientationDetailItem('Role', orientationState.profile.role),
      orientationDetailItem('Department', orientationState.profile.department),
      orientationDetailItem('Started', orientationFormatDate(orientationState.startedAt)),
      orientationDetailItem('Completed', orientationFormatDate(orientationState.completedAt)),
      orientationDetailItem('Facilitator', orientationState.profile.facilitator || 'Not recorded'),
      orientationDetailItem('Duration', `${orientationDuration(orientationState)} minutes`)
    );

    const cultureScore = Object.values(orientationState.cultureAnswers).filter((answer) => answer.correct).length;
    const assessmentScore = orientationAssessmentScore();
    const results = orientationRoot.querySelector('.orientation-record-results');
    results.replaceChildren(
      orientationDetailItem('Culture checks', `${cultureScore} / ${orientationModules.length}`),
      orientationDetailItem('Policies reviewed', `${Object.keys(orientationState.policyReviews).length} / ${policies.length}`),
      orientationDetailItem('Scenario score', `${assessmentScore} / ${orientationAssessmentQuestions.length}`),
      orientationDetailItem('Overall knowledge score', `${cultureScore + assessmentScore} / ${orientationModules.length + orientationAssessmentQuestions.length}`)
    );

    const cultureList = orientationRoot.querySelector('.orientation-record-culture > div');
    cultureList.replaceChildren();
    orientationModules.forEach((module) => {
      const answer = orientationState.cultureAnswers[module.id];
      const row = document.createElement('div');
      const title = document.createElement('strong');
      const status = document.createElement('span');
      title.textContent = module.title;
      status.textContent = answer ? `${answer.correct ? 'Correct' : 'Reviewed'} · ${orientationFormatDate(answer.reviewedAt)}` : 'Not completed';
      row.append(title, status);
      cultureList.append(row);
    });

    const policyRows = orientationRoot.querySelector('.orientation-record-policies tbody');
    policyRows.replaceChildren();
    policies.forEach((policy) => {
      const row = document.createElement('tr');
      const title = document.createElement('td');
      const date = document.createElement('td');
      title.innerHTML = `<strong>${policy.code}</strong><span></span>`;
      title.querySelector('span').textContent = policy.title;
      date.textContent = orientationFormatDate(orientationState.policyReviews[policy.id]);
      row.append(title, date);
      policyRows.append(row);
    });

    const missed = orientationAssessmentQuestions.filter((item, index) => !orientationState.assessmentAnswers[index]?.correct);
    const review = orientationRoot.querySelector('.orientation-record-review');
    const reviewList = review.querySelector('ul');
    review.hidden = missed.length === 0;
    reviewList.replaceChildren();
    missed.forEach((item) => {
      const source = getQuizSource(item);
      const listItem = document.createElement('li');
      listItem.textContent = `${source.eyebrow}: ${item.title}`;
      reviewList.append(listItem);
    });
    orientationRoot.querySelector('.orientation-record-generated').textContent = orientationFormatDate(new Date().toISOString());
    orientationSetVisiblePane(summaryPane);
    orientationUpdateProgress();
    orientationRoot.querySelector('#orientation-summary-title').focus();
  }

  function orientationShowStage() {
    registration.hidden = true;
    workspace.hidden = false;
    if (orientationState.stage === 'policies') orientationRenderPolicy();
    else if (orientationState.stage === 'assessment') orientationRenderAssessment();
    else if (orientationState.stage === 'summary') orientationRenderSummary();
    else orientationRenderCulture();
  }

  function orientationFillSavedProfile() {
    if (!orientationState) return;
    Object.entries(orientationState.profile).forEach(([name, value]) => {
      if (form.elements[name]) form.elements[name].value = value;
    });
    resumeButton.hidden = false;
    resumeButton.textContent = orientationState.completedAt ? 'Open completed orientation record' : 'Resume saved orientation';
  }

  orientationFillSavedProfile();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    orientationState = orientationNewState({
      fullName: data.get('fullName').trim(),
      staffNumber: data.get('staffNumber').trim(),
      role: data.get('role').trim(),
      department: data.get('department').trim(),
      facilitator: data.get('facilitator').trim()
    });
    orientationSaveState(orientationState);
    orientationShowStage();
  });

  resumeButton.addEventListener('click', orientationShowStage);
  orientationRoot.querySelector('.orientation-reset').addEventListener('click', () => {
    if (!window.confirm('Start a new orientation? The saved employee record on this browser will be cleared.')) return;
    localStorage.removeItem(orientationStorageKey);
    orientationState = null;
    form.reset();
    resumeButton.hidden = true;
    workspace.hidden = true;
    registration.hidden = false;
    registration.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  orientationRoot.querySelector('.orientation-culture-previous').addEventListener('click', () => {
    if (orientationState.cultureIndex > 0) {
      orientationState.cultureIndex -= 1;
      orientationSaveState(orientationState);
      orientationRenderCulture();
    }
  });
  orientationRoot.querySelector('.orientation-culture-next').addEventListener('click', () => {
    if (!orientationState.cultureAnswers[orientationModules[orientationState.cultureIndex].id]) return;
    if (orientationState.cultureIndex === orientationModules.length - 1) {
      orientationState.stage = 'policies';
      orientationState.policyIndex = 0;
      orientationSaveState(orientationState);
      orientationRenderPolicy();
    } else {
      orientationState.cultureIndex += 1;
      orientationSaveState(orientationState);
      orientationRenderCulture();
    }
  });

  orientationRoot.querySelector('.orientation-policy-checkbox').addEventListener('change', (event) => {
    orientationRoot.querySelector('.orientation-policy-next').disabled = !event.target.checked;
  });
  orientationRoot.querySelector('.orientation-policy-previous').addEventListener('click', () => {
    if (orientationState.policyIndex === 0) {
      orientationState.stage = 'culture';
      orientationState.cultureIndex = orientationModules.length - 1;
      orientationSaveState(orientationState);
      orientationRenderCulture();
    } else {
      orientationState.policyIndex -= 1;
      orientationSaveState(orientationState);
      orientationRenderPolicy();
    }
  });
  orientationRoot.querySelector('.orientation-policy-next').addEventListener('click', () => {
    const policy = policies[orientationState.policyIndex];
    const checkbox = orientationRoot.querySelector('.orientation-policy-checkbox');
    if (!orientationState.policyReviews[policy.id]) {
      if (!checkbox.checked) return;
      orientationState.policyReviews[policy.id] = new Date().toISOString();
    }
    if (orientationState.policyIndex === policies.length - 1) {
      orientationState.stage = 'assessment';
      orientationState.assessmentIndex = 0;
      orientationSaveState(orientationState);
      orientationRenderAssessment();
    } else {
      orientationState.policyIndex += 1;
      orientationSaveState(orientationState);
      orientationRenderPolicy();
    }
  });

  orientationRoot.querySelector('.orientation-assessment-next').addEventListener('click', () => {
    if (!orientationState.assessmentAnswers[orientationState.assessmentIndex]) return;
    if (orientationState.assessmentIndex === orientationAssessmentQuestions.length - 1) {
      orientationRenderSummary();
    } else {
      orientationState.assessmentIndex += 1;
      orientationSaveState(orientationState);
      orientationRenderAssessment();
    }
  });

  orientationRoot.querySelector('.orientation-summary-back').addEventListener('click', () => {
    orientationState.stage = 'assessment';
    orientationState.assessmentIndex = orientationAssessmentQuestions.length - 1;
    orientationSaveState(orientationState);
    orientationRenderAssessment();
  });
  orientationRoot.querySelector('.orientation-print-summary').addEventListener('click', () => {
    document.body.classList.add('printing-orientation-record');
    window.print();
  });
  window.addEventListener('afterprint', () => document.body.classList.remove('printing-orientation-record'));
}
