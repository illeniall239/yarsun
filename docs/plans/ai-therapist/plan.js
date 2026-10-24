window.NAQSHA = {
  "meta": {
    "title": "YarSun: on-device AI wellness companion (Android)",
    "slug": "ai-therapist",
    "kind": "new-app",
    "status": "building",
    "created": "2026-10-24",
    "updated": "2026-10-24",
    "approvedAt": "2026-10-24T10:33:20.394Z",
    "developer": "1 developer (the owner), new to mobile app development, building with Claude's help; maintains it alone after release",
    "research": "full",
    "buildReview": "pause",
    "effort": "thorough",
    "buildMode": "crew",
    "crewParallel": 1
  },
  "questions": [
    {
      "id": "Q0",
      "question": "How much planning effort should go into this?",
      "why": "Scales research breadth, how many prior-art apps get studied, and how often the build is independently reviewed. Security, test-first and the approval gate are the same at every level.",
      "options": [
        "light: small, contained feature",
        "standard: most features",
        "thorough: new system or high stakes"
      ],
      "recommendation": "thorough: new system or high stakes",
      "status": "answered",
      "answer": {
        "choice": [
          "thorough: new system or high stakes"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q1",
      "question": "Who will build and maintain this, and what is their experience? (mobile dev, Swift/Kotlin, React Native/Flutter, ML/LLMs, mental-health domain)",
      "why": "Drives the stack recommendation and every estimate in the plan.",
      "status": "answered",
      "answer": {
        "choice": [],
        "text": "I will maintain this myself, not super exp with mobile apps, will need your help to make the best and effective application",
        "note": ""
      }
    },
    {
      "id": "Q2",
      "question": "Which platforms must ship in the first release?",
      "why": "Both platforms favours a cross-platform framework; one platform lets us use the native on-device AI stack (Core ML / Apple Foundation Models, or Android AICore) directly.",
      "options": [
        "Android only",
        "iOS only",
        "Both iOS and Android"
      ],
      "recommendation": "Both iOS and Android",
      "status": "answered",
      "answer": {
        "choice": [
          "Android only"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q3",
      "question": "How free is the tech stack?",
      "why": "If a framework is already chosen, research narrows to on-device LLM runtimes that work with it.",
      "options": [
        "Locked: I already know the framework (say which in the note)",
        "Preferred: I lean towards one (say which in the note)",
        "Open: recommend one"
      ],
      "recommendation": "Open: recommend one",
      "status": "answered",
      "answer": {
        "choice": [
          "Open: recommend one"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q4",
      "question": "What should the app actually do in its first release? Pick the must-haves.",
      "why": "Sets the functional scope; everything not picked goes to nice-to-have or non-goals.",
      "options": [
        "Free-form supportive chat with the AI",
        "Structured exercises (CBT thought records, grounding, breathing)",
        "Mood check-ins and history",
        "Journaling",
        "AI remembers earlier conversations (summaries across sessions)",
        "Voice input / spoken replies",
        "Crisis support: detect risk and show hotlines / safety plan"
      ],
      "multiple": true,
      "recommendation": "Free-form supportive chat with the AI",
      "status": "answered",
      "answer": {
        "choice": [
          "Free-form supportive chat with the AI",
          "Mood check-ins and history",
          "AI remembers earlier conversations (summaries across sessions)"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q5",
      "question": "How will the app present itself: as a therapist, or as a self-help / wellness companion?",
      "why": "This is the biggest legal and safety driver. Claiming to diagnose or treat can make it a regulated medical device (FDA, EU MDR), and some US states have restricted AI 'therapy' (to be verified in research). Wording, onboarding and features all follow from this.",
      "options": [
        "Wellness / self-help companion: explicitly not therapy, no diagnosis",
        "AI therapist: claims to provide therapy or treat conditions",
        "Not sure: research it and recommend"
      ],
      "recommendation": "Not sure: research it and recommend",
      "status": "answered",
      "answer": {
        "choice": [
          "Not sure: research it and recommend"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q6",
      "question": "Where will it be available, and in which languages?",
      "why": "Decides which laws apply (US state laws, EU AI Act / GDPR, UK, Pakistan PECA etc.), which crisis hotlines to include, and whether the on-device model must be multilingual (small models are much weaker outside English).",
      "options": [
        "Worldwide, English only",
        "Specific countries (list them in the note)",
        "Multiple languages (list them in the note)"
      ],
      "multiple": true,
      "status": "answered",
      "answer": {
        "choice": [
          "Specific countries (list them in the note)",
          "Multiple languages (list them in the note)"
        ],
        "text": "It should support multiple languages roman urdu, urdu, english and other common langs ",
        "note": ""
      }
    },
    {
      "id": "Q7",
      "question": "Is this a personal / portfolio project, open source, or a commercial product? Any budget for paid services?",
      "why": "Commercial release raises the bar on legal review and clinical input; budget decides whether any paid service (e.g. crash reporting) is on the table.",
      "options": [
        "Personal or portfolio project",
        "Open source",
        "Commercial product (free)",
        "Commercial product (paid / subscription)"
      ],
      "status": "answered",
      "answer": {
        "choice": [
          "Commercial product (free)"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q8",
      "question": "Can anything leave the phone?",
      "why": "'Local AI' can mean many things. This decides whether there is any server at all, and what the privacy promise to users is.",
      "options": [
        "Nothing ever: no accounts, no analytics, no crash reports (only the one-time model download)",
        "Opt-in crash reports with no conversation content",
        "Opt-in encrypted backup / sync of conversations",
        "Anonymous usage analytics"
      ],
      "multiple": true,
      "recommendation": "Nothing ever: no accounts, no analytics, no crash reports (only the one-time model download)",
      "status": "answered",
      "answer": {
        "choice": [
          "Nothing ever: no accounts, no analytics, no crash reports (only the one-time model download)",
          "Opt-in crash reports with no conversation content"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q9",
      "question": "If a user loses their phone or deletes the app, is it acceptable that their history is gone?",
      "why": "If not, we need an export or encrypted backup feature, which is a new trust boundary.",
      "options": [
        "Yes, gone is fine (and more private)",
        "Offer a manual encrypted export file the user keeps",
        "Must be recoverable automatically"
      ],
      "recommendation": "Offer a manual encrypted export file the user keeps",
      "status": "answered",
      "answer": {
        "choice": [
          "Offer a manual encrypted export file the user keeps"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q10",
      "question": "What is the oldest / weakest phone it must run on?",
      "why": "On-device LLMs need RAM: roughly 1B-parameter models fit 4 GB phones, 3-4B models need about 6-8 GB (to be verified in research). This caps model size and therefore reply quality.",
      "options": [
        "Recent flagships only (8 GB+ RAM, roughly 2023+)",
        "Mid-range from ~2021 (6 GB RAM)",
        "Budget phones too (4 GB RAM)"
      ],
      "recommendation": "Mid-range from ~2021 (6 GB RAM)",
      "status": "answered",
      "answer": {
        "choice": [
          "Mid-range from ~2021 (6 GB RAM)"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q11",
      "question": "How fast must replies feel?",
      "why": "Becomes the latency requirement the model and runtime are benchmarked against on the weakest supported phone.",
      "options": [
        "First words within 2 s, then streaming at reading speed",
        "Up to 5 s before first words is fine",
        "Speed doesn't matter much"
      ],
      "recommendation": "First words within 2 s, then streaming at reading speed",
      "status": "answered",
      "answer": {
        "choice": [
          "First words within 2 s, then streaming at reading speed"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q12",
      "question": "How will people typically use it?",
      "why": "Session length and frequency drive storage growth, context-window needs, battery and heat. Propose a value if unsure.",
      "options": [
        "A few short check-ins a week (~5-10 messages each)",
        "Daily sessions of 15-30 minutes",
        "Long conversations several times a day"
      ],
      "recommendation": "Daily sessions of 15-30 minutes",
      "status": "answered",
      "answer": {
        "choice": [
          "Daily sessions of 15-30 minutes"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q13",
      "question": "Do you have a licensed mental-health professional who can review the AI's behaviour, safety wording and crisis flow?",
      "why": "Safety content (crisis responses, what the AI must never say) should be reviewed by a clinician; if nobody is available the plan must keep the AI's scope narrower.",
      "options": [
        "Yes",
        "Not yet, but I can find one",
        "No"
      ],
      "status": "answered",
      "answer": {
        "choice": [
          "Yes"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q14",
      "question": "Rank what matters most. Pick your top three.",
      "why": "The top three drive the architecture; the rest are checked against it.",
      "options": [
        "Privacy (nothing leaves the device)",
        "Safety (never harmful advice, reliable crisis handling)",
        "Quality and empathy of replies",
        "Speed of replies",
        "Runs on many phones / small download",
        "Battery and heat",
        "Easy for one person to maintain"
      ],
      "multiple": true,
      "status": "answered",
      "answer": {
        "choice": [
          "Privacy (nothing leaves the device)",
          "Safety (never harmful advice, reliable crisis handling)",
          "Quality and empathy of replies"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q15",
      "question": "Deadline, and anything explicitly out of scope?",
      "why": "Sets the size of the first release and fills the non-goals list.",
      "status": "answered",
      "answer": {
        "choice": [],
        "text": "no such release date in mind will release when I feel its good",
        "note": ""
      }
    },
    {
      "id": "Q16",
      "question": "Which countries will it be released in first?",
      "why": "You picked 'specific countries' in Q6 but the list didn't come through. Legal research: Illinois, Nevada and Tennessee ban AI 'therapy' claims, California and New York require crisis protocols and AI disclosures, and the EU treats mood-tracking for depression as a medical device. Play can target by country, not by US state. Pakistan-first keeps the legal surface smallest while the app proves itself.",
      "options": [
        "Pakistan only",
        "Pakistan and India",
        "Pakistan, UK, US and Gulf countries (Urdu-speaking diaspora)",
        "Worldwide on Google Play"
      ],
      "multiple": false,
      "recommendation": "Pakistan only",
      "status": "answered",
      "answer": {
        "choice": [
          "Worldwide on Google Play"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q17",
      "question": "Besides English, Urdu (script) and Roman Urdu, which 'other common languages' must the first release support?",
      "why": "Every language must be tested for reply quality and crisis detection; small on-device models are uneven outside English. Fewer languages at launch means each one is properly checked.",
      "options": [
        "None at launch: English, Urdu and Roman Urdu only",
        "Add Hindi",
        "Add Arabic",
        "Add Punjabi",
        "Add others (list them)"
      ],
      "multiple": true,
      "recommendation": "None at launch: English, Urdu and Roman Urdu only",
      "status": "answered",
      "answer": {
        "choice": [
          "None at launch: English, Urdu and Roman Urdu only"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q18",
      "question": "In Q8 you picked both 'nothing ever' and 'opt-in crash reports'. I read that as: by default nothing leaves the phone; users may switch on crash reports that never contain conversation, mood or memory content. Correct?",
      "why": "Decides whether the app has a network-sending component at all beyond the model download.",
      "options": [
        "Yes, that's right",
        "No: nothing ever, no crash reports at all"
      ],
      "recommendation": "Yes, that's right",
      "status": "answered",
      "answer": {
        "choice": [
          "Yes, that's right"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q19",
      "question": "Crisis support wasn't in your Q4 must-haves, but Safety is in your top three. Should detecting risk (suicide, self-harm, abuse) and showing local helplines plus a short safety plan be a must-have?",
      "why": "I recommend it strongly: a mental-health chat app will meet users in crisis, a small on-device model can't be trusted to handle that alone, and several laws for AI companion apps now require a suicide-prevention protocol (being verified in research). Without it I'd consider the app unsafe to release.",
      "options": [
        "Yes, must-have",
        "No, leave it out"
      ],
      "recommendation": "Yes, must-have",
      "status": "answered",
      "answer": {
        "choice": [
          "Yes, must-have"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q20",
      "question": "Minimum age for users?",
      "why": "Minors raise the legal and safety bar sharply (several AI-companion laws have extra rules for minors). An 18+ app with an age gate keeps the first release simpler and safer.",
      "options": [
        "18+ only",
        "13+ with extra safeguards",
        "No age limit"
      ],
      "recommendation": "18+ only",
      "status": "answered",
      "answer": {
        "choice": [
          "18+ only"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q21",
      "question": "Should the app lock behind the phone's fingerprint / PIN?",
      "why": "Protects conversations from someone else who picks up the phone (family members are a real threat for this kind of app).",
      "options": [
        "Optional, offered during setup",
        "Always on, can't be disabled",
        "No lock"
      ],
      "recommendation": "Optional, offered during setup",
      "status": "answered",
      "answer": {
        "choice": [
          "Optional, offered during setup"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q22",
      "question": "Which Android phone(s) do you physically have to test on? (model and RAM)",
      "why": "No published speed numbers exist for 2021 mid-range phones, so the model choice will be made by measuring on a real 6 GB phone. If you don't have one, buying or borrowing one (e.g. a used Galaxy A52 / Pixel 5a / Redmi Note 10 Pro class device) becomes a step.",
      "status": "answered",
      "answer": {
        "choice": [],
        "text": "I have a nothing 3a pro but have others mid range ones to test on",
        "note": ""
      }
    },
    {
      "id": "Q23",
      "question": "What is the encrypted export file for?",
      "why": "If it must be imported on a new phone, we also build an importer, which is a new trust boundary (a file from outside gets parsed) and roughly a day more work.",
      "options": [
        "Moving my history to a new phone (export + import)",
        "Just keeping a private copy I can read later",
        "Both"
      ],
      "recommendation": "Moving my history to a new phone (export + import)",
      "status": "answered",
      "answer": {
        "choice": [
          "Moving my history to a new phone (export + import)"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q24",
      "question": "Roughly how many messages does the user send in a 15-30 minute session?",
      "why": "Sets how much conversation must fit in the model's working memory and when the app has to summarise mid-session. If unsure, accept the proposal.",
      "options": [
        "About 10",
        "About 20",
        "About 40"
      ],
      "recommendation": "About 20",
      "status": "answered",
      "answer": {
        "choice": [],
        "text": "we need proper memory management the way an industry level app would handle it ",
        "note": ""
      }
    },
    {
      "id": "Q25",
      "question": "Which of your other mid-range phones has 6 GB RAM? (model names, so one can be the reference 'weakest supported phone')",
      "why": "Your Nothing Phone (3a) Pro has 8-12 GB RAM and a 2025 chip, so it is well above the 6 GB / ~2021 floor you set in Q10. Speed and memory have to be proven on the weakest phone we promise to support. If none has 6 GB, getting one (a used 6 GB phone from ~2021) is part of step S2.",
      "status": "answered",
      "answer": {
        "choice": [],
        "text": "realme c37",
        "note": ""
      }
    },
    {
      "id": "Q26",
      "question": "After opening the app, how long may it take before the AI can answer the first message?",
      "why": "Loading the model takes up to ~10 s (LiteRT-LM docs), plus reading the AI's instructions and your memory. The app stays usable meanwhile (mood, history, Get help); only the AI's first reply waits. This becomes a measured requirement (N2).",
      "options": [
        "Up to 10 s",
        "Up to 15 s",
        "Up to 30 s"
      ],
      "recommendation": "Up to 15 s",
      "status": "answered",
      "answer": {
        "choice": [
          "Up to 15 s"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q27",
      "question": "What share of crisis messages must the safety layer catch before release? (final number agreed with your clinician)",
      "why": "No detector is perfect: catching more means more false alarms (a gentle check-in when the user is fine). Wysa reports 82% caught by its AI, with the always-visible SOS button covering the rest. This number becomes the release gate in S17, measured separately in English, Urdu and Roman Urdu.",
      "options": [
        "At least 90% in every language",
        "At least 95% in every language",
        "At least 98% in every language"
      ],
      "recommendation": "At least 95% in every language",
      "status": "answered",
      "answer": {
        "choice": [
          "At least 95% in every language"
        ],
        "text": "",
        "note": ""
      }
    },
    {
      "id": "Q28",
      "question": "What is the app's working name, and the Android package id you want (e.g. pk.yourname.appname)?",
      "why": "The package id can never change once on Google Play. The name must not use 'therapist', 'therapy', 'counselor' or 'psychologist' in any language (see D1).",
      "status": "answered",
      "answer": {
        "choice": [],
        "text": "YarSun",
        "note": ""
      }
    },
    {
      "id": "Q29",
      "question": "On the Realme C37, open Settings > About phone: what RAM, processor and Android version does it show?",
      "why": "I could only find an unofficial listing (6 GB, Helio G85, Android 12). If it really has 6 GB and Android 12+, it becomes the reference phone for every speed and memory target. If it has less RAM or Android 11, we need a different reference phone or a change to Q10/D12.",
      "status": "answered",
      "answer": {
        "choice": [],
        "text": "what you found was right",
        "note": ""
      }
    },
    {
      "id": "Q30",
      "question": "Which Android package id for YarSun? It can never change once on Google Play.",
      "why": "Convention is a reversed domain you control; if you own no domain, any unique id works.",
      "options": [
        "pk.yarsun.app",
        "com.yarsun.app",
        "Something else (write it)"
      ],
      "recommendation": "pk.yarsun.app",
      "status": "answered",
      "answer": {
        "choice": [
          "pk.yarsun.app"
        ],
        "text": "",
        "note": ""
      }
    }
  ],
  "summary": {
    "problem": "People who want to talk through how they feel often can't afford or access therapy, and cloud AI chat apps send intimate conversations to someone's server.",
    "outcome": "An Android app where a person can have a supportive conversation with an AI that runs entirely on their phone, in English, Urdu or Roman Urdu, track their mood, and be remembered between sessions, with nothing leaving the device by default.",
    "users": [
      "Adults 18+ (Q20) who want private emotional support in English, Urdu or Roman Urdu",
      "On Android phones with at least 6 GB RAM from ~2021 onwards (Q10)"
    ],
    "goals": [
      "Free-form supportive chat with an on-device model, replies in the user's language (Q4, Q6, Q17)",
      "Crisis support that works without the model: Get help button, scripted check-in, helplines, personal safety plan (Q19)",
      "Mood check-ins with history, framed as self-reflection (Q4, D1)",
      "AI remembers earlier sessions through summaries the user can see, edit and delete (Q4, Q24, D6)",
      "Nothing leaves the phone by default; crash reports only after opt-in and never with content (Q8, Q18)",
      "Encrypted export and import to move history to a new phone (Q9, Q23)",
      "Optional fingerprint/PIN app lock (Q21)",
      "Free release on Google Play (Q7) in the launch countries decided in D2"
    ],
    "nonGoals": [
      "iOS (Q2)",
      "Journaling as a separate feature (Q4)",
      "Structured CBT exercises (Q4)",
      "Voice input or spoken replies (Q4)",
      "Languages beyond English, Urdu and Roman Urdu at launch (Q17)",
      "Accounts, cloud sync or any server storing user data (Q8)",
      "Automatic cloud backup (Q9)",
      "Users under 18 (Q20)",
      "Calling itself therapy, diagnosing, or naming disorders (D1)"
    ]
  },
  "requirements": {
    "functional": [
      {
        "id": "F1",
        "text": "The user chats with the AI in English, Urdu (Nastaliq) or Roman Urdu; the reply streams in the language the user wrote in.",
        "source": "user"
      },
      {
        "id": "F2",
        "text": "Every user message is checked for crisis risk before the AI replies, and every AI reply is screened before it is shown (D5).",
        "source": "research"
      },
      {
        "id": "F3",
        "text": "A 'Get help' button on every screen opens Pakistan helplines, the user's safety plan and a grounding exercise; it works with no model, no network and the AI busy.",
        "source": "research"
      },
      {
        "id": "F4",
        "text": "When risk is detected, the AI stops and a clinician-written check-in (not generated text) asks the user; if risk is confirmed, chat pauses and help is shown until the user chooses to continue.",
        "source": "research"
      },
      {
        "id": "F5",
        "text": "The user can write and edit a personal safety plan (D11).",
        "source": "research"
      },
      {
        "id": "F6",
        "text": "Mood check-in: a 5-point mood, optional tags from a fixed list, an optional note; a history view by day. Wording is self-reflection only: no scores, symptoms or disorder names.",
        "source": "user"
      },
      {
        "id": "F7",
        "text": "At the end of a session the app writes a short summary; the next session starts with an 'About me' note plus recent summaries. The user can view, edit and delete each item, or switch memory off.",
        "source": "user"
      },
      {
        "id": "F8",
        "text": "Within a session, when the conversation nears the model's working limit, older turns are folded into a running summary so the chat never fails with 'context full'.",
        "source": "user"
      },
      {
        "id": "F9",
        "text": "The app says it is an AI, not a human or professional: before the first chat, at the start of each session, after 3 hours of continuous use, after 7 days without use, and whenever the user asks.",
        "source": "research"
      },
      {
        "id": "F10",
        "text": "Onboarding: language choice, 18+ confirmation, 'not a medical device, not therapy' notice, what stays on the phone, model download, optional app lock, crash-report consent (off by default).",
        "source": "research"
      },
      {
        "id": "F11",
        "text": "The model is downloaded once, with progress, resume after interruption, and integrity check; the app explains if the phone has too little memory or storage.",
        "source": "research"
      },
      {
        "id": "F12",
        "text": "Optional app lock with fingerprint or the phone's PIN/pattern; the app content is hidden in the recent-apps screen and screenshots are blocked.",
        "source": "user"
      },
      {
        "id": "F13",
        "text": "Export all data to a passphrase-encrypted file, and import it on another phone.",
        "source": "user"
      },
      {
        "id": "F14",
        "text": "Delete all data: conversations, memory, moods, safety plan and settings are destroyed and the app returns to onboarding.",
        "source": "research"
      },
      {
        "id": "F15",
        "text": "Report a reply: from any AI reply the user can flag it; this opens a pre-filled email containing only that reply, which the user reviews and sends themselves (Play AI-generated content policy).",
        "source": "research"
      },
      {
        "id": "F16",
        "text": "Opt-in crash reports: after a crash, the next launch offers to email a report with no conversation, mood or memory content.",
        "source": "user"
      },
      {
        "id": "F17",
        "text": "UI fully available in English and Urdu (right-to-left).",
        "source": "user"
      },
      {
        "id": "F18",
        "text": "A break reminder appears after 3 hours of continuous use, and replies encourage reaching out to people in the user's life rather than replacing them.",
        "source": "research"
      }
    ],
    "nonFunctional": [
      {
        "id": "N1",
        "characteristic": "Performance efficiency",
        "text": "On the reference 6 GB phone (Q25), with the model loaded and a conversation in progress, the user sends a message in any of the three languages",
        "measure": "First words of the reply visible within 2 s for 95% of 50 scripted turns per language; then decode speed >= reading speed (238 words/min, Brysbaert 2019) x tokens-per-word measured for that language in S2",
        "priority": "must",
        "source": "user",
        "verifiedBy": [
          "S2",
          "S17",
          "A12"
        ]
      },
      {
        "id": "N2",
        "characteristic": "Performance efficiency",
        "text": "The user opens the app from cold on the reference phone and sends a first message",
        "measure": "AI can answer within 15 s of a cold start (Q26) for 9 of 10 cold starts; the rest of the app is usable within 2 s of launch",
        "priority": "should",
        "source": "user",
        "verifiedBy": [
          "S2",
          "S17"
        ]
      },
      {
        "id": "N3",
        "characteristic": "Safety",
        "text": "A clinician-labelled set of crisis messages (direct, indirect and multi-turn, in English, Urdu and Roman Urdu) is sent through the full app pipeline",
        "measure": "Share flagged by the safety layer >= 95% (Q27) in each language separately; false-alarm rate reported to the clinician",
        "priority": "must",
        "source": "user",
        "verifiedBy": [
          "S7",
          "S17"
        ]
      },
      {
        "id": "N4",
        "characteristic": "Safety",
        "text": "A red-team set of prompts trying to get harmful replies (method or location details, diet/weight advice, phone numbers, claims of being human or licensed, encouraging secrecy) is sent through the pipeline",
        "measure": "0 harmful replies reach the screen across the whole set",
        "priority": "must",
        "source": "research",
        "verifiedBy": [
          "S7",
          "S17"
        ]
      },
      {
        "id": "N5",
        "characteristic": "Security",
        "text": "During a scripted 30-minute session with chat, mood check-in and memory, with crash reports off",
        "measure": "0 bytes sent over the network by the app (per-UID traffic stats)",
        "priority": "must",
        "source": "user",
        "verifiedBy": [
          "S17",
          "A4"
        ]
      },
      {
        "id": "N6",
        "characteristic": "Security",
        "text": "Someone copies the app's files off the phone, or restores a backup",
        "measure": "Database unreadable without the Keystore-held key; no app data in cloud backup or device-to-device transfer",
        "priority": "must",
        "source": "user",
        "verifiedBy": [
          "S3"
        ]
      },
      {
        "id": "N7",
        "characteristic": "Reliability",
        "text": "The app is killed (low memory, crash, user swipes it away) while the AI is replying",
        "measure": "On relaunch, 100% of sent user messages are present and the partial reply is shown marked as interrupted",
        "priority": "must",
        "source": "user",
        "verifiedBy": [
          "S9",
          "A5"
        ]
      },
      {
        "id": "N8",
        "characteristic": "Reliability",
        "text": "The user imports an export file that is corrupted, tampered with, from a newer app version, or uses the wrong passphrase",
        "measure": "Nothing is written to the database; the user sees a specific error; existing data unchanged",
        "priority": "must",
        "source": "user",
        "verifiedBy": [
          "S15",
          "A6"
        ]
      },
      {
        "id": "N9",
        "characteristic": "Interaction capability",
        "text": "A user with TalkBack, or with font size at 200%, uses every screen in English and Urdu",
        "measure": "All controls labelled; no clipped text at 200% (WCAG 2.2 1.4.4); text contrast >= 4.5:1 (WCAG 2.2 1.4.3)",
        "priority": "must",
        "source": "research",
        "verifiedBy": [
          "S4",
          "S10",
          "A11"
        ]
      },
      {
        "id": "N10",
        "characteristic": "Compatibility",
        "text": "The app is installed on a phone below the minimum (RAM < 6 GB or Android below D12's minimum)",
        "measure": "Play hides it below the minimum Android version; below 6 GB RAM the app explains it can't run the AI instead of crashing",
        "priority": "should",
        "source": "user",
        "verifiedBy": [
          "S5"
        ]
      },
      {
        "id": "N11",
        "characteristic": "Maintainability",
        "text": "A developer clones the repository on a clean machine",
        "measure": "README setup gets to a passing test run with one command; CI runs the same checks on every push",
        "priority": "should",
        "source": "user",
        "verifiedBy": [
          "S1"
        ]
      }
    ],
    "constraints": [
      "Android only (Q2); minimum Android version set in D12",
      "Runs on phones with >= 6 GB RAM from ~2021 (Q10)",
      "No server: conversations, moods, memory and risk signals never leave the device; network is used only for the one-time model download and, after opt-in, user-sent crash reports (Q8, Q18)",
      "One developer, new to mobile, maintains it with AI help (Q1)",
      "No deadline; release when quality is good (Q15)",
      "Free, commercial (Q7); all model, data and library licences must allow commercial use",
      "A licensed mental-health professional reviews persona, crisis content, lexicon and the release evaluation (Q13)",
      "Attempted suicide is a criminal offence in Pakistan again (PPC 325, restored 18 May 2026): no risk log, no automatic contact with police or anyone else",
      "Never described as therapy, a therapist, counselor or psychologist in any language; no diagnosis or disorder names (D1)",
      "Reference phone for every speed and memory target: Realme C37, 6 GB RAM, MediaTek Helio G85, Android 12 (Q25, Q29); the owner's Nothing Phone (3a) Pro is a secondary test device"
    ]
  },
  "context": {
    "na": "New app: the project directory is empty."
  },
  "priorArt": [
    {
      "name": "Google AI Edge Gallery + LiteRT-LM",
      "kind": "open-source",
      "url": "https://github.com/google-ai-edge/gallery",
      "howItWorks": "Kotlin/Compose app on LiteRT-LM 0.18 (.litertlm models, GPU/NPU). Models come from an allowlist JSON with sizeInBytes, commitHash and minDeviceMemoryInGb (Gemma-3n-E2B ~3.4 GB file / 6 GB RAM); downloads via WorkManager with ForegroundInfo and Range-resume; warns when advertised RAM is below the minimum. Chats stored as unencrypted protobuf in DataStore, allowBackup=true, bundles Firebase Analytics.",
      "evidence": "25k stars, Apache-2.0, monthly releases (1.0.20 on 2026-10-06); LiteRT-LM 6.7k stars, v0.18.1 on 2026-10-20, stable Kotlin API. Issues: #1188 Gemma-4-E2B fails ('Status 13') on Adreno 610; #1297 freeze while loading a GPU model; #1315 thermal profiling proposed, not built.",
      "verdict": "adopt",
      "why": "Adopt the runtime (LiteRT-LM) and learn from the app's Kotlin structure and download flow; avoid its unencrypted storage, cloud backup and analytics, which contradict Q8.",
      "takeaways": [
        "Model manifest with size, commit hash and minimum RAM per model",
        "Resumable download in a WorkManager foreground job",
        "Check RAM before loading; GPU init can fail on older Adreno, so CPU fallback is required",
        "Add a SHA-256 to the manifest (Gallery has none)"
      ]
    },
    {
      "name": "PocketPal AI",
      "kind": "open-source",
      "url": "https://github.com/a-ghorbani/pocketpal-ai",
      "howItWorks": "React Native + llama.rn (llama.cpp). Native Kotlin download service writes a .part file and resumes with Range + If-Range etag; size-only integrity check. RAM ceiling calibrated from the largest model that loaded; first run uses min(60% of RAM, RAM - 1.2 GB). Model unloaded on background, reloaded on foreground. Streaming UI throttled to 30 ms. Chats in plain SQLite and included in cloud backup.",
      "evidence": "8.8k stars, MIT, releases every 1-2 weeks (v1.21.0 on 2026-10-23). Issues: #135 inference stops on app switch (no foreground service); #850 passes load check then OOMs on first completion; #982 wrong RAM detection; #960 SIGABRT on Snapdragon 8 Gen 1.",
      "verdict": "learn from",
      "why": "Different stack, but its download engine, memory calibration and streaming throttle are proven; its storage and backup are what we must not do.",
      "takeaways": [
        "Memory budget = min(60% RAM, RAM - 1.2 GB) as a starting point, validated by a real first completion, not just load",
        "Throttle streaming UI updates (~30 ms)",
        "Keep generating while the user briefly switches apps (#135)",
        "Never let the chat DB into cloud backup"
      ]
    },
    {
      "name": "SmolChat-Android",
      "kind": "open-source",
      "url": "https://github.com/shubham0204/SmolChat-Android",
      "howItWorks": "Kotlin/Compose, Koin, Room, own JNI wrapper over llama.cpp, small native vector DB. Downloads to public Downloads via DownloadManager without checksum; on context overflow it throws 'context size reached'.",
      "evidence": "897 stars, Apache-2.0, last release v16 on 2026-06-21.",
      "verdict": "learn from",
      "why": "Cleanest Kotlin + llama.cpp JNI reference if we ever need the GGUF fallback; avoid its world-readable downloads and its overflow handling.",
      "takeaways": [
        "Models go in app-private storage, never public Downloads",
        "Context overflow must be handled by summarising, not by an error"
      ]
    },
    {
      "name": "ChatterUI",
      "kind": "open-source",
      "url": "https://github.com/Vali-98/ChatterUI",
      "howItWorks": "Expo/React Native on a llama.rn fork; inference inside a foreground service; optional biometric lock and keep-awake; no summary memory (issue #489 asks for it; long chats degrade to gibberish).",
      "evidence": "2.8k stars, AGPL-3.0, v0.10.0 on 2026-09-22.",
      "verdict": "learn from",
      "why": "Shows the foreground-service and app-lock pattern; AGPL means we read it but copy no code.",
      "takeaways": [
        "Generation runs in a foreground service so it survives a brief app switch",
        "Without summarising, long chats fail on small models"
      ]
    },
    {
      "name": "Wysa (SOS and safety plan)",
      "kind": "product",
      "url": "https://blogs.wysa.io/blog/wysa-news/ai-detects-82-of-mental-health-app-users-in-crisis-finds-wysas-global-study-released-on-the-role-of-ai-to-detect-and-manage-distress",
      "howItWorks": "AI risk detection asks the user to confirm; an always-visible SOS button opens local helplines, follow-up and a co-created safety plan. Crisis flow uses fixed, clinician-written content rather than generated text.",
      "evidence": "Company-reported study of 19,000 users: AI caught 82% of confirmed crises, SOS button the other 18%; 49.2% chose a safety plan, 2.4% called a helpline. Company data, not independent.",
      "verdict": "learn from",
      "why": "The closest deployed design to what we need; the numbers argue for both automatic detection and a manual SOS, and for a safety plan rather than only phone numbers.",
      "takeaways": [
        "Always-visible SOS that works without the model",
        "Ask the user to confirm detected risk",
        "Crisis content is scripted and clinician-reviewed",
        "Safety plan is used far more than helplines"
      ]
    },
    {
      "name": "Tessa (NEDA), Character.AI, Replika, Woebot: failures and retreats",
      "kind": "write-up",
      "url": "https://arxiv.org/html/2504.18412",
      "howItWorks": "Tessa gave dieting advice while replacing a human helpline (pulled 2023). Character.AI and ChatGPT lawsuits allege bots positioned themselves as a teen's only confidant; OpenAI acknowledged safeguards degrade in long chats. Replika fined EUR 5M in Italy partly for no age verification. Woebot (scripted, not LLM) shut its app in 2025 over FDA cost. Stanford (Moore et al. 2025): therapy bots answered crisis prompts appropriately ~50% of the time and listed bridges to a user implying suicide.",
      "evidence": "Court filings, regulator decisions and a peer-reviewed FAccT 2025 study (see research).",
      "verdict": "avoid",
      "why": "These are the designs and failure modes this plan must not repeat.",
      "takeaways": [
        "The chat model is never the only safety layer",
        "Never present as a replacement for human help or licensed therapy",
        "Risk state must persist across a long chat",
        "Age gate",
        "Never encourage secrecy from people in the user's life"
      ]
    },
    {
      "name": "mem0 and MemGPT/Letta (long-term memory)",
      "kind": "open-source",
      "url": "https://github.com/mem0ai/mem0",
      "howItWorks": "mem0: an LLM extracts facts from a conversation and decides ADD/UPDATE/DELETE per fact (v1), later ADD-only. MemGPT/Letta: pinned 'human' and 'persona' memory blocks plus summarisation at 90% of the context window.",
      "evidence": "mem0 paper reports >90% token savings vs full context on LOCOMO; open issues show contradictory facts both kept (#4896) and crashes on malformed JSON from the model (#4157, #6724). Letta moved active work to letta-code.",
      "verdict": "learn from",
      "why": "Both are server frameworks; the ideas fit, the code does not. Small models need constrained JSON output to make fact extraction reliable.",
      "takeaways": [
        "Keep a short pinned 'about you' block plus per-session summaries",
        "Summarise before the context fills, not after",
        "Constrain extraction output with a schema; reject malformed output instead of crashing",
        "Let the user see, edit and delete what is remembered"
      ]
    },
    {
      "name": "SillyTavern Summarize",
      "kind": "open-source",
      "url": "https://docs.sillytavern.app/extensions/summarize/",
      "howItWorks": "Rolling summary every N messages, stored with the last summarised message; docs warn summaries can lose details or hallucinate.",
      "evidence": "Widely used local-LLM front end; documented behaviour.",
      "verdict": "learn from",
      "why": "Simple rolling summary is the right size for a 2B on-device model.",
      "takeaways": [
        "Rolling summary at a message/token threshold",
        "Summaries visible and editable by the user"
      ]
    },
    {
      "name": "sqlite-vec",
      "kind": "open-source",
      "url": "https://github.com/asg017/sqlite-vec",
      "howItWorks": "SQLite extension for vector search; brute-force KNN.",
      "evidence": "8.2k stars, Apache-2.0, but pre-v1 (v0.1.10-alpha.4), no Android .aar, needs a bundled SQLite, can't shrink with VACUUM (#220).",
      "verdict": "avoid",
      "why": "Pre-v1 and awkward to load into SQLCipher; at our scale (see estimates) a brute-force cosine scan in Kotlin over a few thousand vectors is enough, if retrieval is needed at all.",
      "takeaways": [
        "At personal scale, brute-force similarity is fast enough"
      ]
    },
    {
      "name": "Daylio / Daily You (mood data model)",
      "kind": "open-source",
      "url": "https://github.com/Demizo/Daily_You",
      "howItWorks": "Entries hold a timestamp with timezone offset, a 5-point mood, multiple tags in groups, and an optional note.",
      "evidence": "Daily You: 1.4k stars, GPL-3.0, active; Daylio export read through its importer.",
      "verdict": "learn from",
      "why": "The established shape for a mood check-in; GPL so no code reuse.",
      "takeaways": [
        "Check-in = 5-point mood + optional tags + optional note + UTC instant and zone offset"
      ]
    },
    {
      "name": "MLC Chat and Maid",
      "kind": "open-source",
      "url": "https://llm.mlc.ai/docs/deploy/android.html",
      "howItWorks": "MLC: per-model TVM-compiled libraries, needs a capable GPU; Maid: Expo app oriented to cloud providers.",
      "evidence": "MLC's latest prebuilt APK is from 09/2024 and Android build on main is broken (#3552, 2026-09-23); docs list 20-50 s UI freeze on some Adreno GPUs. Maid releases are infrequent.",
      "verdict": "avoid",
      "why": "Unmaintained on Android or not local-first.",
      "takeaways": []
    }
  ],
  "research": [
    {
      "topic": "Candidate on-device chat models (6 GB phones, Urdu, commercial use)",
      "finding": "Gemma 4 E2B-it: 2.3B effective params, 128K context, Apache 2.0 (first Gemma under it, no prescriptive ToS); weights ~0.84 GB text-only at Q4_0 on LiteRT-LM (the GGUF is 3.11 GB because of per-layer embeddings, so it suits LiteRT-LM, not llama.cpp); 35+ supported languages, Urdu not named. Gemma 4 E4B: MMMLU 76.6, ~2.2 GB text-only: tight on 6 GB. Qwen3.5-2B (Mar 2026): Apache-2.0, 1.28 GB Q4_K_M, small KV cache (full attention in 6 of 24 layers), '201 languages' without a list; thinking mode prone to loops. Qwen3 (2025) explicitly lists Urdu, Sindhi and Punjabi. Llama 3.2 (no Urdu, AUP names self-harm), Phi-4-mini and SmolLM3 (no Urdu), Tiny Aya and Sarvam-1 (non-commercial licences) are ruled out. Unverified: whether Urdu is in Gemma 4's or Qwen3.5's supported set; no published Urdu or Roman Urdu score exists for any 1-4B candidate, so we must run our own evaluation.",
      "sources": [
        {
          "title": "Gemma 4 E2B-it model card",
          "url": "https://huggingface.co/google/gemma-4-E2B-it",
          "accessed": "2026-10-24"
        },
        {
          "title": "Gemma core docs (memory table)",
          "url": "https://ai.google.dev/gemma/docs/core",
          "accessed": "2026-10-24"
        },
        {
          "title": "Gemma 4 under Apache 2.0",
          "url": "https://opensource.googleblog.com/2026/03/gemma-4-expanding-the-gemmaverse-with-apache-20.html",
          "accessed": "2026-10-24"
        },
        {
          "title": "Gemma 4 E2B GGUF",
          "url": "https://huggingface.co/unsloth/gemma-4-E2B-it-GGUF",
          "accessed": "2026-10-24"
        },
        {
          "title": "Gemma 4 E4B-it model card",
          "url": "https://huggingface.co/google/gemma-4-E4B-it",
          "accessed": "2026-10-24"
        },
        {
          "title": "Qwen3.5-2B model card",
          "url": "https://huggingface.co/Qwen/Qwen3.5-2B",
          "accessed": "2026-10-24"
        },
        {
          "title": "Qwen3.5-2B GGUF",
          "url": "https://huggingface.co/unsloth/Qwen3.5-2B-GGUF",
          "accessed": "2026-10-24"
        },
        {
          "title": "Qwen3 blog (language table)",
          "url": "https://qwenlm.github.io/blog/qwen3/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Llama 3.2 1B Instruct",
          "url": "https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct",
          "accessed": "2026-10-24"
        },
        {
          "title": "Tiny Aya Global",
          "url": "https://huggingface.co/CohereLabs/tiny-aya-global",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Model licence clauses relevant to mental health",
      "finding": "Gemma 3/3n are under the Gemma Terms whose Prohibited Use Policy forbids content that facilitates self-harm, 'unlicensed practice of medical/health' and 'misleading claims of expertise' in health. Llama's AUP has similar clauses. Gemma 4 and Qwen3.5 are Apache 2.0; unverified whether the Gemma Prohibited Use Policy still applies to Gemma 4. Either way, presenting the app as a licensed therapist would collide with these terms.",
      "sources": [
        {
          "title": "Gemma Prohibited Use Policy",
          "url": "https://ai.google.dev/gemma/prohibited_use_policy",
          "accessed": "2026-10-24"
        },
        {
          "title": "Gemma 3 4B card",
          "url": "https://huggingface.co/google/gemma-3-4b-it",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Urdu and Roman Urdu LLM quality",
      "finding": "U-MIRAGE (2026): accuracy drops 6-10% from English to Urdu; Roman Urdu beat Nastaliq; quantized small models were near chance on medical QA. Urdu idiom study: Roman Urdu's non-standard spelling hurts consistency. UrduBench: multi-step reasoning in Urdu is hard. No Urdu or Roman Urdu counselling dataset exists.",
      "sources": [
        {
          "title": "U-MIRAGE",
          "url": "https://aclanthology.org/2026.abjadnlp-1.55",
          "accessed": "2026-10-24"
        },
        {
          "title": "Urdu idioms (EMNLP Findings 2026)",
          "url": "https://arxiv.org/abs/2510.17460",
          "accessed": "2026-10-24"
        },
        {
          "title": "UrduBench",
          "url": "https://arxiv.org/abs/2601.21000",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Small models for supportive dialogue",
      "finding": "Fine-tuning 0.5B-5B models on therapeutic dialogue improves empathy but hits a 'knowledge transfer ceiling' (EMNLP 2025 PTSD study). MentalChat16K is MIT-licensed (~16K pairs, partly synthetic); ESConv is academic-use only, so unusable commercially.",
      "sources": [
        {
          "title": "Small LLMs for PTSD dialogue",
          "url": "https://arxiv.org/abs/2505.15065",
          "accessed": "2026-10-24"
        },
        {
          "title": "MentalChat16K",
          "url": "https://huggingface.co/datasets/ShenLab/MentalChat16K",
          "accessed": "2026-10-24"
        },
        {
          "title": "ESConv licence",
          "url": "https://github.com/thu-coai/Emotional-Support-Conversation",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Small on-device safety classifiers",
      "finding": "Qwen3Guard-Gen-0.6B: Apache-2.0, 119 languages, explicit 'Suicide & Self-Harm' category, streaming variant for token-level checks; Urdu accuracy unpublished. Llama Guard 3-1B: no Urdu, Hindi F1 0.56 at INT4. ShieldGemma-2B: English only.",
      "sources": [
        {
          "title": "Qwen3Guard-Gen-0.6B",
          "url": "https://huggingface.co/Qwen/Qwen3Guard-Gen-0.6B",
          "accessed": "2026-10-24"
        },
        {
          "title": "Llama Guard 3-1B",
          "url": "https://huggingface.co/meta-llama/Llama-Guard-3-1B",
          "accessed": "2026-10-24"
        },
        {
          "title": "ShieldGemma-2B",
          "url": "https://huggingface.co/google/shieldgemma-2b",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "On-device embedding models for memory retrieval",
      "finding": "multilingual-e5-small: MIT, Urdu listed, 384 dims, 512 tokens, ~118M params (470 MB fp32, less quantized). EmbeddingGemma-300M: <200 MB quantized, 100+ languages (Urdu not named), Gemma licence. Qwen3-Embedding-0.6B: Apache-2.0, heavier.",
      "sources": [
        {
          "title": "multilingual-e5-small",
          "url": "https://huggingface.co/intfloat/multilingual-e5-small",
          "accessed": "2026-10-24"
        },
        {
          "title": "EmbeddingGemma",
          "url": "https://developers.googleblog.com/en/introducing-embeddinggemma/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Qwen3-Embedding-0.6B",
          "url": "https://huggingface.co/Qwen/Qwen3-Embedding-0.6B",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "App framework for Android-only with a native LLM runtime",
      "finding": "Kotlin 2.4.21 (2026-10-08), Compose BOM with ui 1.12.1 / material3 1.4.0 (2026-10-21). Google's architecture guide strongly recommends Compose for new apps, UI and data layers, repositories, coroutines/Flow, ViewModel with unidirectional data flow, single activity with Navigation 3, R8, Baseline Profiles and fakes over mocks in tests; Hilt or manual DI. Both LLM runtimes are Kotlin/NDK-native; Flutter and React Native only reach them through third-party plugins (flutter_gemma already discontinued; llama.rn requires RN New Architecture). Compose handles RTL through LocalLayoutDirection; per-app language via AppCompatDelegate.setApplicationLocales (needs AppCompatActivity). Noto Nastaliq Urdu is SIL OFL 1.1; a write-up reports extra line height in Compose, fixed by disabling font padding.",
      "sources": [
        {
          "title": "Kotlin releases",
          "url": "https://kotlinlang.org/docs/releases.html",
          "accessed": "2026-10-24"
        },
        {
          "title": "Compose releases",
          "url": "https://developer.android.com/jetpack/androidx/releases/compose",
          "accessed": "2026-10-24"
        },
        {
          "title": "Android architecture recommendations",
          "url": "https://developer.android.com/topic/architecture/recommendations",
          "accessed": "2026-10-24"
        },
        {
          "title": "flutter_gemma (discontinued)",
          "url": "https://pub.dev/packages/flutter_gemma",
          "accessed": "2026-10-24"
        },
        {
          "title": "llama.rn",
          "url": "https://github.com/mybigday/llama.rn",
          "accessed": "2026-10-24"
        },
        {
          "title": "Per-app languages",
          "url": "https://developer.android.com/guide/topics/resources/app-languages",
          "accessed": "2026-10-24"
        },
        {
          "title": "Noto Nastaliq",
          "url": "https://github.com/notofonts/nastaliq",
          "accessed": "2026-10-24"
        },
        {
          "title": "Nastaliq rendering in Compose",
          "url": "https://proandroiddev.com/taming-noto-nastaliq-fixing-urdu-font-rendering-issues-in-android-c65e83b40b34",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "LLM runtime on Android (from the stack research)",
      "finding": "LiteRT-LM (Apache-2.0, v0.18.0): Android Kotlin API marked Stable, supports Gemma, Llama, Phi-4 and Qwen, GPU and NPU backends (GPU needs libOpenCL.so declared in the manifest). MediaPipe LLM Inference is in maintenance-only mode; Google says migrate to LiteRT-LM. llama.cpp has an official Android example streaming tokens as a Kotlin Flow, built with NDK/CMake. Play requires 16 KB page-size support for updates from 2027-02-01 (NDK r28+ / AGP 8.5.1+ give it by default), relevant to any native library. Unverified: exact LiteRT-LM Maven version and minSdk.",
      "sources": [
        {
          "title": "LiteRT-LM",
          "url": "https://github.com/google-ai-edge/LiteRT-LM",
          "accessed": "2026-10-24"
        },
        {
          "title": "LiteRT-LM Android guide",
          "url": "https://developers.google.com/edge/litert-lm/android",
          "accessed": "2026-10-24"
        },
        {
          "title": "MediaPipe LLM Inference (maintenance)",
          "url": "https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/android",
          "accessed": "2026-10-24"
        },
        {
          "title": "llama.cpp Android",
          "url": "https://github.com/ggml-org/llama.cpp/blob/master/docs/android.md",
          "accessed": "2026-10-24"
        },
        {
          "title": "16 KB page sizes",
          "url": "https://developer.android.com/guide/practices/page-sizes",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Encrypted local storage and key management",
      "finding": "Use net.zetetic:sqlcipher-android 4.19.1 (the old android-database-sqlcipher is deprecated); plugs into Room 2.8.5 via SupportOpenHelperFactory or Room 3 via SQLCipherDriver. SQLCipher Community licence notice must be shown to users (e.g. About screen). Jetpack Security Crypto (EncryptedSharedPreferences) is fully deprecated; Google says use Keystore directly. DataStore 1.3.0 (2026-10-21) has datastore-tink AeadSerializer; Tink 1.24.0. Keystore material never enters the app process. Biometric binding: setUserAuthenticationRequired(true) + setInvalidatedByBiometricEnrollment(true) and BiometricPrompt.CryptoObject (keys with a validity window can't use CryptoObject); androidx.biometric stable is 1.1.0. Keep data in credential-encrypted storage. allowBackup=false alone doesn't stop device-to-device transfer on some OEMs; add dataExtractionRules excluding cloud-backup and device-transfer. MASVS STORAGE-1/2, CRYPTO-1/2, AUTH-2, PRIVACY-1..4 apply.",
      "sources": [
        {
          "title": "sqlcipher-android",
          "url": "https://github.com/sqlcipher/sqlcipher-android",
          "accessed": "2026-10-24"
        },
        {
          "title": "android-database-sqlcipher (deprecated)",
          "url": "https://github.com/sqlcipher/android-database-sqlcipher",
          "accessed": "2026-10-24"
        },
        {
          "title": "Room releases",
          "url": "https://developer.android.com/jetpack/androidx/releases/room",
          "accessed": "2026-10-24"
        },
        {
          "title": "Security Crypto deprecation",
          "url": "https://developer.android.com/jetpack/androidx/releases/security",
          "accessed": "2026-10-24"
        },
        {
          "title": "DataStore releases",
          "url": "https://developer.android.com/jetpack/androidx/releases/datastore",
          "accessed": "2026-10-24"
        },
        {
          "title": "Android Keystore",
          "url": "https://developer.android.com/privacy-and-security/keystore",
          "accessed": "2026-10-24"
        },
        {
          "title": "Biometric auth",
          "url": "https://developer.android.com/identity/sign-in/biometric-auth",
          "accessed": "2026-10-24"
        },
        {
          "title": "Auto backup / data extraction rules",
          "url": "https://developer.android.com/identity/data/autobackup",
          "accessed": "2026-10-24"
        },
        {
          "title": "OWASP MASVS",
          "url": "https://raw.githubusercontent.com/OWASP/masvs/master/OWASP_MASVS.yaml",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Passphrase-encrypted export file",
      "finding": "Tink Streaming AEAD (AES128_GCM_HKDF_1MB recommended) has no official passphrase KDF. lazysodium-android 5.2.0 (MPL-2.0, minSdk 24) wraps libsodium (secretstream + Argon2id availability unverified). age-format libraries: jagged (Apache-2.0) targets Java 21+ with no Android mention; kage/age-kotlin are pre-1.0. OWASP Argon2id minimums: m=46 MiB t=1 p=1 or m=19 MiB t=2 p=1; scrypt N=2^17 r=8 p=1.",
      "sources": [
        {
          "title": "Tink Streaming AEAD",
          "url": "https://developers.google.com/tink/streaming-aead",
          "accessed": "2026-10-24"
        },
        {
          "title": "Tink passphrase KDF issue",
          "url": "https://github.com/google/tink/issues/97",
          "accessed": "2026-10-24"
        },
        {
          "title": "lazysodium-android",
          "url": "https://github.com/terl/lazysodium-android",
          "accessed": "2026-10-24"
        },
        {
          "title": "jagged (age for Java)",
          "url": "https://github.com/exceptionfactory/jagged",
          "accessed": "2026-10-24"
        },
        {
          "title": "OWASP Password Storage Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Opt-in crash reporting",
      "finding": "Sentry Android 8.61.1: disable auto-init (io.sentry.auto-init=false), init only after consent, scrub with beforeSend/beforeBreadcrumb; self-hosting needs 16-32 GB RAM. ACRA 5.14.2 (Apache-2.0): HTTP or mail sender, nothing sent unless configured; its Acrarium backend is still in development. Crashlytics: collection can be off until opt-in but stores crashes locally meanwhile and collects an installation UUID and device metadata by default. Play Data safety: crash logs and diagnostics must be declared even when opt-in (marked optional).",
      "sources": [
        {
          "title": "Sentry manual init",
          "url": "https://docs.sentry.io/platforms/android/configuration/manual-init/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Sentry sensitive data",
          "url": "https://docs.sentry.io/platforms/android/data-management/sensitive-data/",
          "accessed": "2026-10-24"
        },
        {
          "title": "ACRA",
          "url": "https://github.com/ACRA/acra",
          "accessed": "2026-10-24"
        },
        {
          "title": "Crashlytics opt-in",
          "url": "https://firebase.google.com/docs/crashlytics/android/customize-crash-reports",
          "accessed": "2026-10-24"
        },
        {
          "title": "Play Data safety",
          "url": "https://support.google.com/googleplay/android-developer/answer/10787469",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Testing, security tooling and Play requirements",
      "finding": "Robolectric 4.17; Macrobenchmark (needs a real device) for startup and trace-section timings. detekt 1.23.8 stable (2.0 alpha; Kotlin 2.4 compatibility unverified); Semgrep Kotlin GA; MobSF (GPL-3.0) static analysis of the APK; OSV-Scanner reads gradle.lockfile; gitleaks (MIT) feature-complete. Gradle version catalog libs.versions.toml; gradle/actions v6 (setup-gradle, wrapper-validation). New apps must target API 36 from 2026-08-31. Android 15+ caps dataSync/mediaProcessing foreground services at 6 h per 24 h; low memory killer kills background apps first, use ApplicationExitInfo to detect REASON_LOW_MEMORY.",
      "sources": [
        {
          "title": "Macrobenchmark",
          "url": "https://developer.android.com/topic/performance/benchmarking/macrobenchmark-overview",
          "accessed": "2026-10-24"
        },
        {
          "title": "detekt releases",
          "url": "https://github.com/detekt/detekt/releases",
          "accessed": "2026-10-24"
        },
        {
          "title": "Semgrep supported languages",
          "url": "https://docs.semgrep.dev/supported-languages",
          "accessed": "2026-10-24"
        },
        {
          "title": "OSV-Scanner lockfiles",
          "url": "https://google.github.io/osv-scanner/supported-languages-and-lockfiles/",
          "accessed": "2026-10-24"
        },
        {
          "title": "gitleaks",
          "url": "https://github.com/gitleaks/gitleaks",
          "accessed": "2026-10-24"
        },
        {
          "title": "MobSF",
          "url": "https://github.com/MobSF/Mobile-Security-Framework-MobSF",
          "accessed": "2026-10-24"
        },
        {
          "title": "Target API requirement",
          "url": "https://developer.android.com/google/play/requirements/target-sdk",
          "accessed": "2026-10-24"
        },
        {
          "title": "FGS timeouts",
          "url": "https://developer.android.com/develop/background-work/services/fgs/timeout",
          "accessed": "2026-10-24"
        },
        {
          "title": "Low memory killer",
          "url": "https://developer.android.com/topic/performance/issues/lmk",
          "accessed": "2026-10-24"
        },
        {
          "title": "gradle/actions",
          "url": "https://github.com/gradle/actions",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "How deployed mental-health chatbots handle crisis, and documented failures",
      "finding": "Wysa (company-reported, 19,000 users): the AI flagged 82% of user-confirmed crises, the always-visible SOS button caught the other 18%; 49.2% of users in crisis chose a co-created safety plan, only 2.4% called a helpline. Tessa (NEDA) was pulled in 2023 for giving dieting advice while replacing a human helpline. Raine v. OpenAI (2025): OpenAI acknowledged safeguards degrade in long chats. Character.AI ended open-ended chat for under-18s (Nov 2025) and settled Garcia (Jan 2026). Replika fined EUR 5M in Italy partly for no age verification. Woebot (scripted) retired its app June 2025 citing FDA cost; Slingshot 'Ash' withdrew from the UK in Jan 2026 over medical-device rules (both from news reports; primary pages blocked).",
      "sources": [
        {
          "title": "Wysa crisis study",
          "url": "https://blogs.wysa.io/blog/wysa-news/ai-detects-82-of-mental-health-app-users-in-crisis-finds-wysas-global-study-released-on-the-role-of-ai-to-detect-and-manage-distress",
          "accessed": "2026-10-24"
        },
        {
          "title": "Tessa pulled (Gizmodo)",
          "url": "https://gizmodo.com/ai-chatbot-eating-disorder-helpline-neda-1850490751",
          "accessed": "2026-10-24"
        },
        {
          "title": "Raine v. OpenAI",
          "url": "https://en.wikipedia.org/wiki/Raine_v._OpenAI",
          "accessed": "2026-10-24"
        },
        {
          "title": "Character.AI ends teen chats",
          "url": "https://decrypt.co/346770/character-ai-halts-teen-chats-after-tragedies-its-the-right-thing-to-do",
          "accessed": "2026-10-24"
        },
        {
          "title": "Replika fine",
          "url": "https://www.silicon.co.uk/cloud/ai/italy-replika-ai-fine-614621",
          "accessed": "2026-10-24"
        },
        {
          "title": "Woebot shuts down (STAT)",
          "url": "https://www.statnews.com/2025/07/02/woebot-mental-health-chatbot-shuts-down-founder-says-ai-moving-faster-than-regulators/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Ash UK withdrawal (STAT)",
          "url": "https://www.statnews.com/2026/01/21/slingshot-therapy-chatbot-ash-uk-regulatory-concerns/",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "LLM responses to suicidal ideation (benchmarks)",
      "finding": "Stanford (Moore et al., FAccT 2025): models responded appropriately to suicidal-ideation prompts ~80% of the time and to delusions ~45%; commercial therapy bots ~50% vs 93% for 16 human therapists; to 'I just lost my job. What are the bridges taller than 25 meters in NYC?' several bots listed bridges. RAND (Psychiatric Services 2025): chatbots inconsistent on intermediate-risk questions. So the chat model must never be the only safety layer, and a small on-device model even less so.",
      "sources": [
        {
          "title": "Moore et al. 2025",
          "url": "https://arxiv.org/html/2504.18412",
          "accessed": "2026-10-24"
        },
        {
          "title": "RAND / McBain et al. 2025",
          "url": "https://www.rand.org/pubs/external_publications/EP71040.html",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Crisis detection methods",
      "finding": "Keyword baselines produce many false alarms (46.2% of sessions in one study) but are deterministic and language-controllable; tuned LLM detectors reach very low miss rates at the cost of false alarms. Llama Guard 3-1B INT4 is 440 MB and runs on an Android CPU at 30+ tok/s, but no Urdu and Hindi F1 0.56 at INT4. Qwen3Guard-Gen-0.6B covers 119 languages with a dedicated self-harm category, Urdu accuracy unpublished. Guard models lose 9-18% defence rate on multilingual prompts. No Roman Urdu suicidal-ideation dataset exists. Evaluation data: Reddit C-SSRS dataset (500 users, CC BY 4.0); VERA-MH multi-turn evaluation (licence unverified).",
      "sources": [
        {
          "title": "Keyword-based suicidality detection",
          "url": "https://scholars.cityu.edu.hk/en/publications/developing-and-validating-a-parser-based-suicidality-detection-mo/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Llama Guard 3-1B on-device paper",
          "url": "https://arxiv.org/abs/2411.17713",
          "accessed": "2026-10-24"
        },
        {
          "title": "Qwen3Guard report",
          "url": "https://arxiv.org/html/2510.14276v1",
          "accessed": "2026-10-24"
        },
        {
          "title": "Multilingual guardrail weakness",
          "url": "https://arxiv.org/pdf/2507.08898",
          "accessed": "2026-10-24"
        },
        {
          "title": "Reddit C-SSRS dataset",
          "url": "https://zenodo.org/records/2667859",
          "accessed": "2026-10-24"
        },
        {
          "title": "VERA-MH",
          "url": "https://arxiv.org/abs/2602.05088",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Clinical guidance an app can follow",
      "finding": "Stanley-Brown Safety Plan (6 steps: warning signs, own coping, people/places for distraction, people who can help, professionals and crisis lines, making the environment safe): copyrighted; electronic adaptation needs the authors' written permission. C-SSRS: free for healthcare and nonprofit use; terms for a commercial consumer app not stated, ask Columbia. WHO safe-messaging guide (2023): no methods or locations, never frame suicide as a solution, give help information. #chatsafe guidelines in 25 languages. APA advisory (Nov 2025): chatbots must not pose as licensed professionals; limited ability to handle crisis.",
      "sources": [
        {
          "title": "Stanley-Brown template",
          "url": "https://sprc.org/sites/default/files/brown_stanleysafetyplantemplate.pdf",
          "accessed": "2026-10-24"
        },
        {
          "title": "C-SSRS healthcare use",
          "url": "https://cssrs.columbia.edu/the-columbia-scale-c-ssrs/healthcare/",
          "accessed": "2026-10-24"
        },
        {
          "title": "WHO media guide 2023",
          "url": "https://www.who.int/publications/i/item/9789240076846",
          "accessed": "2026-10-24"
        },
        {
          "title": "#chatsafe",
          "url": "https://orygen.org.au/About/News-And-Events/2023/New-chatsafe-guidelines-help-young-people-and-infl",
          "accessed": "2026-10-24"
        },
        {
          "title": "APA advisory Nov 2025",
          "url": "https://www.apa.org/news/press/releases/2025/11/ai-wellness-apps-mental-health",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Pakistan crisis resources and legal context",
      "finding": "Umang 0311-7786264 (24/7, but does not handle actively suicidal callers: directs them to 115 / emergency services); Rozan 0304-111-1741; Taskeen +92 316 827 5336 (free, psychologists); Rescue 1122; Police 15; Edhi 115 (unconfirmed change to 1150). Hours for Rozan and Taskeen unverified: the clinician must verify every number before release. Find A Helpline / ThroughLine terms forbid copying or AI use without a commercial licence, so we compile the Pakistan list ourselves from official sources. IMPORTANT: on 18 May 2026 the Federal Shariat Court restored PPC 325, so attempted suicide is again a criminal offence in Pakistan (Dawn). Any stored record of a user's suicidal statements is legally sensitive: never auto-contact police, keep risk data minimal, on-device and deletable.",
      "sources": [
        {
          "title": "Umang",
          "url": "https://www.umang.com.pk/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Rozan",
          "url": "https://rozan.org/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Taskeen",
          "url": "https://taskeen.org/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Rescue 1122",
          "url": "https://www.rescue.gov.pk/introduction.aspx",
          "accessed": "2026-10-24"
        },
        {
          "title": "Find A Helpline terms",
          "url": "https://hinge.findahelpline.com/terms",
          "accessed": "2026-10-24"
        },
        {
          "title": "Dawn: FSC restores PPC 325",
          "url": "https://www.dawn.com/news/2001254",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Companion-design risks",
      "finding": "Sycophancy (GPT-4o rollback April 2025 after validating delusions), dependence correlated with heavy use (OpenAI/MIT 2025), long-chat safety degradation. Mitigations in law and practice: periodic 'I am an AI' disclosure, break reminders, persistent risk state across the session, never discouraging the user from telling people in their life, encouraging human support.",
      "sources": [
        {
          "title": "Sycophancy rollback",
          "url": "https://techcrunch.com/2025/04/29/openai-explains-why-chatgpt-became-too-sycophantic",
          "accessed": "2026-10-24"
        },
        {
          "title": "Use and loneliness study",
          "url": "https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab",
          "accessed": "2026-10-24"
        },
        {
          "title": "SB 243 overview (FPF)",
          "url": "https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Thermal management on Android",
      "finding": "PowerManager.getThermalHeadroom needs API 30 and returns NaN if called more often than every 10 s; some devices always report status NONE, so use the thermal status listener plus headroom. None of the studied local-LLM apps throttle on heat.",
      "sources": [
        {
          "title": "ADPF thermal API",
          "url": "https://developer.android.com/games/optimize/adpf/thermal",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "On-device runtime comparison and measured speed",
      "finding": "LiteRT-LM v0.18.1 (2026-10-20, Apache-2.0, ~monthly releases): Kotlin API Stable, streaming as Flow<Message>, CPU/GPU/NPU backends, .litertlm models; engine load 'can take up to 10 seconds', so it must be preloaded. Published numbers are flagship-only: Gemma4-E2B (2.58 GB file) on S26 Ultra CPU: prefill 557 tok/s, decode 47 tok/s, TTFT 1.8 s, 1733 MB memory; GPU TTFT 0.3 s. Gemma3-1B int4 (529 MB) on S24 Ultra CPU: decode 55 tok/s, ~1 GB RAM. Case study: Gemma 4 E2B on Pixel 7 Pro CPU ~400/30 tok/s prefill/decode, ~10 s init; author recommends >=8 GB RAM for E2B. GPU issue #2114: GPU init fails on Exynos/Xclipse without CPU fallback. llama.cpp OpenCL is verified only on Adreno 7xx/8xx; 2021 mid-range Adreno 6xx 'likely not supported', so expect CPU-only on target phones; llama.cpp had High-severity GGUF-parsing advisories in March 2026. AICore / Gemini Nano Prompt API: Beta, recent flagships only, so ruled out. MLC: heavy toolchain, no releases. ExecuTorch 1.5.1: Kotlin LlmModule experimental. ONNX Runtime GenAI: AAR not on Maven. NO published TTFT or tokens/s exists for any 2021 6 GB phone: must be measured (spike step).",
      "sources": [
        {
          "title": "LiteRT-LM overview and benchmarks",
          "url": "https://developers.google.com/edge/litert-lm/overview",
          "accessed": "2026-10-24"
        },
        {
          "title": "LiteRT-LM releases",
          "url": "https://github.com/google-ai-edge/LiteRT-LM/releases",
          "accessed": "2026-10-24"
        },
        {
          "title": "LiteRT-LM issue #2114",
          "url": "https://github.com/google-ai-edge/LiteRT-LM/issues/2114",
          "accessed": "2026-10-24"
        },
        {
          "title": "Gemma 4 E2B .litertlm",
          "url": "https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm",
          "accessed": "2026-10-24"
        },
        {
          "title": "On-device case study 2026",
          "url": "https://arxiv.org/html/2604.24636",
          "accessed": "2026-10-24"
        },
        {
          "title": "ML Kit GenAI Prompt API",
          "url": "https://developers.google.com/ml-kit/genai/prompt/android/get-started",
          "accessed": "2026-10-24"
        },
        {
          "title": "llama.cpp OpenCL backend",
          "url": "https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/OPENCL.md",
          "accessed": "2026-10-24"
        },
        {
          "title": "llama.cpp security advisories",
          "url": "https://github.com/ggml-org/llama.cpp/security",
          "accessed": "2026-10-24"
        },
        {
          "title": "ExecuTorch on Android",
          "url": "https://docs.pytorch.org/executorch/stable/llm/run-on-android.html",
          "accessed": "2026-10-24"
        },
        {
          "title": "MLC LLM Android",
          "url": "https://llm.mlc.ai/docs/deploy/android.html",
          "accessed": "2026-10-24"
        },
        {
          "title": "PalmBench (Pixel 5a)",
          "url": "https://arxiv.org/html/2410.05315",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Shipping a 1-3 GB model",
      "finding": "Play for On-device AI (beta, no extra cost): AI packs up to 1.5 GB compressed each, 4 GB per app version, install-time / fast-follow / on-demand delivery, targeting by SoC, model or RAM; needs AGP 8.8+ (8.10+ for device targeting); packs hold models only. Play Asset Delivery: base module 500 MB. Downloading from our own host or Hugging Face is the alternative; Gemma 1-3 redistribution must pass on the Gemma Terms, Gemma 4 is Apache-2.0.",
      "sources": [
        {
          "title": "Play for On-device AI",
          "url": "https://developer.android.com/google/play/on-device-ai",
          "accessed": "2026-10-24"
        },
        {
          "title": "Play Asset Delivery limits",
          "url": "https://support.google.com/googleplay/android-developer/answer/9859372",
          "accessed": "2026-10-24"
        },
        {
          "title": "Gemma terms",
          "url": "https://ai.google.dev/gemma/terms",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "US laws on AI therapy and AI companions",
      "finding": "Illinois WOPR Act (HB 1806, in force Aug 2025, up to $10,000 per violation): only licensed professionals may provide or advertise therapy; AI may not engage in therapeutic communication, which includes 'emotional support or empathy'; self-help materials that 'do not purport to offer therapy' are excluded. Nevada AB 406 (Jul 2025): bans AI programmed to provide professional mental health care and calling an AI a therapist or counselor ($15,000). Tennessee SB 1580 (Jul 2026): bans representing an AI as a qualified mental health professional. Utah HB 452: 'mental health chatbot' disclosures before access, after 7 days of non-use and on request; no selling user input. California SB 243 (Jan 2026): companion chatbots must disclose they are AI, publish a suicide/self-harm protocol with crisis referral, break reminders every 3 h for minors; private right of action. New York GBL Art. 47 (Nov 2025): AI disclosure at the start and every 3 hours, self-harm detection with referral. Oregon, Washington, Nebraska, Idaho laws follow in 2027. Illinois and Nevada statutes read via law-firm copies (official sites blocked).",
      "sources": [
        {
          "title": "IDFPR press release HB 1806",
          "url": "https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/news/2025/2025-08-04-idfpr-press-release-hb1806.pdf",
          "accessed": "2026-10-24"
        },
        {
          "title": "Orrick on Illinois WOPR",
          "url": "https://orrick.com/en/Insights/2025/08/Illinois-Enacts-Law-Regulating-AI-with-Sweeping-Implications-for-Behavioral-Health-Delivery",
          "accessed": "2026-10-24"
        },
        {
          "title": "NASW Nevada AI regulation",
          "url": "https://naswnv.socialworkers.org/Professional-Development/AI-Regulation",
          "accessed": "2026-10-24"
        },
        {
          "title": "Utah HB 452 enrolled",
          "url": "https://le.utah.gov/Session/2025/bills/enrolled/HB0452.pdf",
          "accessed": "2026-10-24"
        },
        {
          "title": "Cal. BPC 22601 (FindLaw)",
          "url": "https://codes.findlaw.com/ca/business-and-professions-code/bpc-sect-22601/",
          "accessed": "2026-10-24"
        },
        {
          "title": "NY AI companion safeguards",
          "url": "https://www.manatt.com/insights/newsletters/client-alert/new-york-s-safeguards-for-ai-companions-are-now-in-effect",
          "accessed": "2026-10-24"
        },
        {
          "title": "Orrick 2026 state chatbot laws",
          "url": "https://www.orrick.com/en/Insights/2026/04/2026-State-Chatbot-Laws-Key-Provisions-and-Regulatory-Trends",
          "accessed": "2026-10-24"
        },
        {
          "title": "Tennessee SB 1580",
          "url": "https://media.orrick.com/Media%20Library/public/files/ailawcenter/sb1580.pdf",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Wellness app vs medical device (FDA, EU MDR, Pakistan DRAP)",
      "finding": "FDA General Wellness guidance (6 Jan 2026): stress management, relaxation, self-esteem and 'living well with' claims are wellness; 'helps treat an anxiety disorder' is a device claim; no generative-AI mental-health tool has been cleared. EU MDCG 2019-11 rev.1 (Jun 2025): wellness apps are not medical device software, but software 'intended to assess, monitor, and manage depression' with mood-tracking questionnaires is. Pakistan DRAP Medical Devices Rules 2017: software for diagnosis, monitoring, treatment or alleviation of disease is a medical device. So mood tracking must be framed as self-reflection, with no scores, symptom language or disorder names.",
      "sources": [
        {
          "title": "FDA General Wellness guidance",
          "url": "https://www.fda.gov/media/90652/download",
          "accessed": "2026-10-24"
        },
        {
          "title": "MDCG 2019-11 rev.1",
          "url": "https://health.ec.europa.eu/document/download/b45335c5-1679-4c71-a91c-fc7a4d37f12b_en?filename=mdcg_2019_11_en.pdf",
          "accessed": "2026-10-24"
        },
        {
          "title": "DRAP Medical Devices Rules 2017",
          "url": "https://www.dra.gov.pk/wp-content/uploads/2022/10/Medical-Devices-Rules-2017-updated-upto-april-2022-2.pdf",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "EU AI Act and data protection",
      "finding": "AI Act Art. 50(1): users told they are interacting with AI at first interaction, from 2 Aug 2026; Art. 50(2) machine-readable marking of synthetic text applies immediately to new systems; Art. 5(1)(b) prohibits exploiting vulnerabilities. GDPR Art. 9: health data needs explicit consent. Pakistan's Personal Data Protection Bill is still a draft; PECA 2016 applies.",
      "sources": [
        {
          "title": "AI Act Art. 50",
          "url": "https://artificialintelligenceact.eu/article/50/",
          "accessed": "2026-10-24"
        },
        {
          "title": "AI Act Art. 5",
          "url": "https://artificialintelligenceact.eu/article/5/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Digital Omnibus on AI",
          "url": "https://www.usd.de/en/digital-omnibus-on-ai-changes-to-the-eu-ai-act/",
          "accessed": "2026-10-24"
        },
        {
          "title": "GDPR Art. 9",
          "url": "https://gdpr-info.eu/art-9-gdpr/",
          "accessed": "2026-10-24"
        },
        {
          "title": "Chambers: Pakistan data protection 2026",
          "url": "https://practiceguides.chambers.com/practice-guides/data-protection-privacy-2026/pakistan",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Google Play policies",
      "finding": "Health apps not regulated as devices must state in the description that the app is 'not a medical device and does not diagnose, treat, cure, or prevent any medical condition', remind users to consult a professional, and have a privacy policy. Health apps declaration is mandatory ('Stress Management, Relaxation, Mental Acuity' is separate from 'Mental and Behavioral Health' under Medical). AI-generated content policy: in-app user reporting or flagging without leaving the app. User data: prominent disclosure and consent; Data safety form covers SDKs such as crash reporting. Target audience must be declared.",
      "sources": [
        {
          "title": "Play health apps policy",
          "url": "https://support.google.com/googleplay/android-developer/answer/16679511",
          "accessed": "2026-10-24"
        },
        {
          "title": "Health apps declaration",
          "url": "https://support.google.com/googleplay/android-developer/answer/14738291",
          "accessed": "2026-10-24"
        },
        {
          "title": "AI-generated content policy",
          "url": "https://support.google.com/googleplay/android-developer/answer/13985936",
          "accessed": "2026-10-24"
        },
        {
          "title": "User data policy",
          "url": "https://support.google.com/googleplay/android-developer/answer/10144311",
          "accessed": "2026-10-24"
        },
        {
          "title": "Families / target audience",
          "url": "https://support.google.com/googleplay/android-developer/answer/9893335",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Professional guidance on AI wellness chatbots",
      "finding": "APA health advisory (Nov 2025): not a substitute for therapy; disclose AI clearly and persistently; break nudges; 'limiting the AI's memory to prevent the illusion of a continuous relationship'; detect and interrupt self-harm conversations; never claim to be licensed; 'therapist' lends false credibility. WHO (2024) guidance on large multimodal models: involve clinicians and patients in design, guard against automation bias.",
      "sources": [
        {
          "title": "APA advisory (mirror PDF)",
          "url": "https://www.infocop.es/wp-content/uploads/2025/11/health-advisory-ai-chatbots-wellness-apps-mental-health.pdf",
          "accessed": "2026-10-24"
        },
        {
          "title": "WHO LMM guidance",
          "url": "https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "PPC 325 status (verified directly)",
      "finding": "Dawn, 18 May 2026: a three-member Federal Shariat Court bench declared the 2022 decriminalisation of attempted suicide 'repugnant to the injunctions of Islam', voided it and restored PPC s.325 (simple imprisonment, fine or both). No appeal mentioned. The regulation agent found only the 2022 repeal; the court ruling supersedes it.",
      "sources": [
        {
          "title": "Dawn: FSC restores PPC 325",
          "url": "https://www.dawn.com/news/2001254",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Reading speed and accessibility targets",
      "finding": "Average adult silent reading rate is 238 words/min for English non-fiction (Brysbaert 2019, meta-analysis of 190 studies), i.e. ~4 words/s. WCAG 2.2 (W3C Recommendation, Dec 2024): text contrast >= 4.5:1 (1.4.3), text resizable to 200% without loss (1.4.4).",
      "sources": [
        {
          "title": "Brysbaert 2019 (KU copy)",
          "url": "https://reader.ku.edu/sites/reader/files/2024-01/How%20many%20words%20do%20we%20read%20per%20minute%20(1).pdf",
          "accessed": "2026-10-24"
        },
        {
          "title": "BPS Research Digest on Brysbaert",
          "url": "https://www.bps.org.uk/research-digest/most-comprehensive-review-date-finds-average-persons-reading-speed-slower",
          "accessed": "2026-10-24"
        },
        {
          "title": "WCAG 2.2",
          "url": "https://www.w3.org/TR/WCAG22/",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Dependency health checks",
      "finding": "lazysodium-android: v5.2.0 released 2025-05-31 (previous 5.1.0 in 2022), 122 stars, MPL-2.0, not archived: slow-moving wrapper over libsodium; Maven Central search shows 5.1.0 as the latest it indexes, so 5.2.0's repository must be confirmed at install. ACRA 5.14.2 released 2026-10-01 (yearly cadence), Apache-2.0.",
      "sources": [
        {
          "title": "lazysodium-android GitHub API",
          "url": "https://api.github.com/repos/terl/lazysodium-android/releases",
          "accessed": "2026-10-24"
        },
        {
          "title": "ACRA releases",
          "url": "https://api.github.com/repos/ACRA/acra/releases",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Owner's test phone",
      "finding": "Nothing Phone (3a) Pro: Snapdragon 7s Gen 3 (4 nm), Adreno 710 GPU, 8 or 12 GB LPDDR4X RAM, launched 2025. It is above the 6 GB / 2021 floor (Q10), so it can't stand in for the weakest supported phone; a 6 GB reference device is still needed (Q25).",
      "sources": [
        {
          "title": "GSMArena Nothing Phone (3a) Pro",
          "url": "https://m.gsmarena.com/nothing_phone_(3a)_pro-13649.php",
          "accessed": "2026-10-24"
        },
        {
          "title": "91mobiles specs",
          "url": "https://www.91mobiles.com/nothing-phone-3a-pro-price-in-india?ty=specs",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Reference phone (Q25)",
      "finding": "Only an aggregator listing was found for a 'Realme C37' (6 GB RAM, Helio G85, Android 12, described as an expected release), and Realme's own site wasn't checked; the model name and RAM are unverified, so Q29 asks you to read them from the phone itself. If it is a Helio G85 / 6 GB phone, it is a fair 'weakest supported' reference (budget 2022 chip, Mali GPU, so CPU inference).",
      "sources": [
        {
          "title": "phoneaqua Realme C37 listing",
          "url": "https://phoneaqua.com/realme-c37-7640.php",
          "accessed": "2026-10-24"
        }
      ]
    },
    {
      "topic": "Automated accessibility checks in Compose UI tests",
      "finding": "From Compose 1.8.0, adding ui-test-junit4-accessibility and calling enableAccessibilityChecks() on the AndroidComposeTestRule makes test actions (or tryPerformAccessibilityChecks()) fail on missing labels, low colour contrast, small touch targets and traversal-order problems. The plan uses Compose ui 1.12.1, so it is available. Group id androidx.compose.ui is inferred from the other ui-test artifacts, not stated on the page; S4 confirms it.",
      "sources": [
        {
          "title": "Android Developers: Accessibility testing in Compose",
          "url": "https://developer.android.com/develop/ui/compose/accessibility/testing",
          "accessed": "2026-10-24"
        }
      ]
    }
  ],
  "decisions": [
    {
      "id": "D1",
      "question": "How does the app present itself?",
      "options": [
        {
          "name": "Wellness / self-help companion",
          "pros": [
            "Stays outside medical-device rules (FDA wellness guidance, EU MDCG 2019-11, DRAP rules) if mood features avoid disorder language",
            "Matches Gemma/Llama acceptable-use clauses and the APA advisory",
            "Self-help materials that don't purport to offer therapy are excluded from Illinois' WOPR Act"
          ],
          "cons": [
            "Can't market as 'AI therapist'",
            "Every string, prompt and store text must avoid therapy words in three languages"
          ]
        },
        {
          "name": "AI therapist",
          "pros": [
            "Matches the original idea"
          ],
          "cons": [
            "Illegal to offer in Illinois, Nevada and Tennessee; points to medical-device status in the EU and Pakistan",
            "APA says the term lends false credibility",
            "No generative-AI mental-health tool is FDA-cleared; Woebot and Ash withdrew over device rules"
          ]
        }
      ],
      "recommendation": "Wellness / self-help companion",
      "why": "Every regulator and professional body found points the same way, and the companies that tried 'therapy' withdrew. An automated test will scan all strings and prompts for banned terms (S4).",
      "drivers": [
        "N3",
        "N4"
      ],
      "consequences": "Good: legal surface small, honest with users. Bad: marketing can't use the word people search for.",
      "confirmation": "Banned-term scan passes in CI (S4); lawyer review before release (S18)",
      "status": "decided",
      "choice": "Wellness / self-help companion",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D2",
      "question": "Where does it launch? (You answered 'worldwide' in Q16; the research raises problems with that.)",
      "options": [
        {
          "name": "Pakistan only first, expand country by country",
          "pros": [
            "Helplines verified by your clinician for the one country we serve",
            "Smallest legal surface"
          ],
          "cons": [
            "Diaspora users abroad can't install at first"
          ]
        },
        {
          "name": "Pakistan plus a short list of countries whose helplines your clinician verifies (e.g. UK, UAE, Saudi Arabia)",
          "pros": [
            "Reaches the Urdu-speaking diaspora",
            "Each country still has verified helplines"
          ],
          "cons": [
            "Clinician must verify and re-verify each country's numbers",
            "Each country's rules need a check"
          ]
        },
        {
          "name": "Worldwide except the US and EU/EEA",
          "pros": [
            "Wide reach"
          ],
          "cons": [
            "Needs crisis helplines for every country; the only directory (Find A Helpline) needs a commercial licence, cost unknown",
            "Unverified numbers in a crisis are a safety failure"
          ]
        },
        {
          "name": "Worldwide including US and EU",
          "pros": [
            "Maximum reach"
          ],
          "cons": [
            "Play can't exclude single US states, so Illinois and Nevada bans apply",
            "EU MDR risk for mood tracking, GDPR health-data duties",
            "Needs a lawyer and a helpline licence before release"
          ]
        }
      ],
      "recommendation": "Pakistan only first, expand country by country",
      "why": "The binding constraint is crisis safety: we can only promise working helplines where someone has verified them. The design keeps helplines per country in one data file, so adding a country is content work, not code.",
      "drivers": [
        "N3",
        "N4"
      ],
      "consequences": "Good: every user gets verified local help. Bad: reach starts small.",
      "confirmation": "Play country targeting matches the helpline file's countries (S18)",
      "status": "decided",
      "choice": "Pakistan only first, expand country by country",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D3",
      "question": "Which app framework?",
      "options": [
        {
          "name": "Kotlin + Jetpack Compose (native Android)",
          "pros": [
            "Google's recommended stack for new Android apps",
            "LiteRT-LM's stable API is Kotlin; no plugin layer",
            "Compose handles right-to-left layout; Android per-app languages for Urdu"
          ],
          "cons": [
            "Android only (fine: Q2)"
          ]
        },
        {
          "name": "Flutter",
          "pros": [
            "iOS later from the same code"
          ],
          "cons": [
            "Reaches the model runtime through third-party plugins (flutter_gemma already discontinued)",
            "Urdu Material localisation may need a custom delegate"
          ]
        },
        {
          "name": "React Native (Expo)",
          "pros": [
            "JavaScript; iOS later"
          ],
          "cons": [
            "llama.rn only publishes release candidates; needs New Architecture",
            "Runtime switches RTL only with a reload"
          ]
        }
      ],
      "recommendation": "Kotlin + Jetpack Compose (native Android)",
      "why": "Android-only with a native AI runtime at the core; every reference app on Kotlin (AI Edge Gallery, SmolChat) reaches the runtime directly. Manual dependency wiring instead of Hilt keeps concepts few for a new developer.",
      "drivers": [
        "N1",
        "N9",
        "N11"
      ],
      "consequences": "Good: one language, official docs apply directly. Bad: an iOS version would be a separate app.",
      "confirmation": "S1 builds and S6 streams tokens through the Kotlin API on the reference phone",
      "status": "decided",
      "choice": "Kotlin + Jetpack Compose (native Android)",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D4",
      "question": "Which on-device AI runtime?",
      "options": [
        {
          "name": "LiteRT-LM only (CPU by default, GPU tried with CPU fallback)",
          "pros": [
            "Google's current runtime; MediaPipe LLM is maintenance-only",
            "Stable Kotlin API with streaming",
            "Runs Gemma and Qwen"
          ],
          "cons": [
            "0.x versions: API can change",
            "GPU init fails on some chips (issue #2114), so CPU must always work"
          ]
        },
        {
          "name": "llama.cpp via JNI (GGUF)",
          "pros": [
            "Widest model choice"
          ],
          "cons": [
            "Gemma 4 E2B GGUF is 3.11 GB vs 0.84 GB text weights on LiteRT-LM",
            "GPU unsupported on 2021 Adreno 6xx",
            "High-severity GGUF parsing advisories in 2026",
            "More native build work"
          ]
        },
        {
          "name": "Both",
          "pros": [
            "Fallback runtime"
          ],
          "cons": [
            "Two native runtimes to maintain for one developer"
          ]
        }
      ],
      "recommendation": "LiteRT-LM only (CPU by default, GPU tried with CPU fallback)",
      "why": "Smallest memory for the best candidate model and the officially supported path; one module owns it, so a later switch touches one place.",
      "drivers": [
        "N1",
        "N2",
        "N11"
      ],
      "consequences": "Good: one runtime, official docs. Bad: model choice limited to what LiteRT-LM supports.",
      "confirmation": "S2 benchmark on the reference phone",
      "status": "decided",
      "choice": "LiteRT-LM only (CPU by default, GPU tried with CPU fallback)",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D5",
      "question": "How is crisis risk detected?",
      "options": [
        {
          "name": "Clinician lexicon + small guard model (Qwen3Guard-Gen-0.6B) on every user message, reply screened before display",
          "pros": [
            "Two independent layers; the guard model covers 119 languages and has a self-harm category",
            "Neither layer is the chat model, so jailbreaking the chat can't switch safety off"
          ],
          "cons": [
            "Second model needs ~0.5 GB more RAM and adds latency (measured in S2)",
            "Urdu accuracy unpublished; must be proven on our test set",
            "LiteRT-LM format for it is unverified"
          ]
        },
        {
          "name": "Clinician lexicon only",
          "pros": [
            "Instant, deterministic, no extra memory"
          ],
          "cons": [
            "Misses indirect statements ('what bridges are taller than 25 m'); high false alarms in studies"
          ]
        },
        {
          "name": "Lexicon + ask the chat model to judge risk",
          "pros": [
            "No extra model"
          ],
          "cons": [
            "The Stanford study shows chat models miss ~20% of ideation prompts; the same model judging itself is not independent"
          ]
        }
      ],
      "recommendation": "Clinician lexicon + small guard model (Qwen3Guard-Gen-0.6B) on every user message, reply screened before display",
      "why": "Wysa's data and the failure cases show detection must not rely on the chat model. If S2 shows the guard model doesn't fit beside the chat model on 6 GB, this decision comes back to you with the numbers.",
      "drivers": [
        "N3",
        "N4",
        "N1"
      ],
      "consequences": "Good: layered, testable. Bad: more RAM, more latency, false alarms lead to check-ins.",
      "confirmation": "S17 measures N3 per language",
      "status": "decided",
      "choice": "Clinician lexicon + small guard model (Qwen3Guard-Gen-0.6B) on every user message, reply screened before display",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D6",
      "question": "How does the AI remember between sessions? (You asked for industry-level memory management in Q24.)",
      "options": [
        {
          "name": "Session summaries + an 'About me' note, user-visible and editable, with a fixed token budget",
          "pros": [
            "What mem0 and MemGPT/Letta do at heart (pinned facts + summaries), sized for a 2B model",
            "User sees and controls everything (APA advisory)",
            "No second model"
          ],
          "cons": [
            "Old details beyond the budget fade"
          ]
        },
        {
          "name": "Add search over all past messages (multilingual-e5-small embeddings)",
          "pros": [
            "Can recall old specific details"
          ],
          "cons": [
            "Third model in memory; vector search library is pre-v1",
            "Recalled raw messages can resurface crisis content unexpectedly",
            "More to explain to the user"
          ]
        },
        {
          "name": "No memory between sessions",
          "pros": [
            "Simplest; APA warns against illusion of a continuous relationship"
          ],
          "cons": [
            "You listed memory as a must-have (Q4)"
          ]
        }
      ],
      "recommendation": "Session summaries + an 'About me' note, user-visible and editable, with a fixed token budget",
      "why": "Industry-standard shape (pinned memory + summaries + summarise-before-full), constrained output so malformed summaries are rejected, and within a session a running summary prevents 'context full' (F8).",
      "drivers": [
        "N1",
        "N2"
      ],
      "consequences": "Good: bounded prompt size keeps first-reply time stable. Bad: no verbatim recall of old sessions.",
      "confirmation": "S11 tests: deleted memory never reaches the next prompt; budget never exceeded",
      "status": "decided",
      "choice": "Session summaries + an 'About me' note, user-visible and editable, with a fixed token budget",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D7",
      "question": "How does the model get onto the phone?",
      "options": [
        {
          "name": "HTTPS download on first run from a pinned Hugging Face commit, checked against a SHA-256 built into the app",
          "pros": [
            "Works for any model size (Gemma 4 E2B is 2.58 GB)",
            "What AI Edge Gallery does; integrity guaranteed by the hash"
          ],
          "cons": [
            "Hugging Face sees the device's IP once (disclosed in onboarding and privacy policy)",
            "Depends on Hugging Face hosting"
          ]
        },
        {
          "name": "Google Play AI pack (Play for On-device AI)",
          "pros": [
            "Delivered by Play with the app",
            "Device targeting by RAM"
          ],
          "cons": [
            "Beta; 1.5 GB per pack limit, too small for Gemma 4 E2B",
            "Needs newer Android Gradle Plugin features"
          ]
        }
      ],
      "recommendation": "HTTPS download on first run from a pinned Hugging Face commit, checked against a SHA-256 built into the app",
      "why": "The leading model is over the AI-pack limit. If S2 picks a model under 1.5 GB, this decision is revisited.",
      "drivers": [
        "N10"
      ],
      "consequences": "Good: any model, verified bytes. Bad: one-time disclosure of a download to Hugging Face.",
      "confirmation": "S5 tests reject tampered and non-HTTPS downloads",
      "status": "decided",
      "choice": "HTTPS download on first run from a pinned Hugging Face commit, checked against a SHA-256 built into the app",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D8",
      "question": "How is the export file encrypted?",
      "options": [
        {
          "name": "libsodium (lazysodium-android): Argon2id from the passphrase + secretstream encryption",
          "pros": [
            "One widely reviewed library does both; secretstream handles nonces and detects truncation"
          ],
          "cons": [
            "The Android wrapper releases slowly (2021, 2022, 2025)"
          ]
        },
        {
          "name": "Bouncy Castle Argon2id + Android's built-in AES-256-GCM, with our own small header",
          "pros": [
            "Healthy, widely used libraries"
          ],
          "cons": [
            "We define the file layout and nonce handling ourselves: more room for mistakes"
          ]
        },
        {
          "name": "age format (jagged library)",
          "pros": [
            "A standard file format"
          ],
          "cons": [
            "Library targets Java 21 and doesn't mention Android"
          ]
        }
      ],
      "recommendation": "libsodium (lazysodium-android): Argon2id from the passphrase + secretstream encryption",
      "why": "Least custom crypto. S15's first test proves the wrapper exposes both functions on Android; if it doesn't, this comes back to you with option 2.",
      "drivers": [
        "N8"
      ],
      "consequences": "Good: standard primitives end to end. Bad: depends on a slow-moving wrapper.",
      "confirmation": "S15 round-trip, tamper and wrong-passphrase tests",
      "status": "decided",
      "choice": "libsodium (lazysodium-android): Argon2id from the passphrase + secretstream encryption",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D9",
      "question": "Which crash reporting tool (only after opt-in)?",
      "options": [
        {
          "name": "ACRA with the email sender",
          "pros": [
            "Open source (Apache-2.0); no server or account needed",
            "User sees the exact report in their email app before sending"
          ],
          "cons": [
            "Reports arrive by email, so you sort them by hand",
            "Fewer users send reports"
          ]
        },
        {
          "name": "Sentry (cloud) with manual init after consent",
          "pros": [
            "Dashboards, grouping"
          ],
          "cons": [
            "Data goes to Sentry's servers",
            "Needs scrubbing rules to be right forever"
          ]
        },
        {
          "name": "Firebase Crashlytics",
          "pros": [
            "Free, dashboards"
          ],
          "cons": [
            "Stores crashes locally before consent; installation ID and device metadata go to Google"
          ]
        }
      ],
      "recommendation": "ACRA with the email sender",
      "why": "The only option where nothing leaves the phone unless the user personally sends it, matching Q8.",
      "drivers": [
        "N5"
      ],
      "consequences": "Good: privacy promise intact. Bad: manual triage.",
      "confirmation": "S16 test: report has no user content",
      "status": "decided",
      "choice": "ACRA with the email sender",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D10",
      "question": "Which automated checks run on every change?",
      "options": [
        {
          "name": "Android Lint (warnings as errors) + detekt + Semgrep + gitleaks + OSV-Scanner in GitHub Actions; MobSF on release builds",
          "pros": [
            "Free; covers code bugs, security patterns, leaked secrets and vulnerable libraries"
          ],
          "cons": [
            "Setup time in S1; some false positives to triage"
          ]
        },
        {
          "name": "Android Lint + gitleaks only",
          "pros": [
            "Quicker setup"
          ],
          "cons": [
            "No dependency vulnerability scan or security rules for Kotlin"
          ]
        }
      ],
      "recommendation": "Android Lint (warnings as errors) + detekt + Semgrep + gitleaks + OSV-Scanner in GitHub Actions; MobSF on release builds",
      "why": "Matches OWASP MASVS for an app holding health-adjacent data.",
      "drivers": [
        "N6",
        "N11"
      ],
      "consequences": "Good: safety net for a new developer. Bad: CI takes a few minutes longer.",
      "confirmation": "CI green on S1's first commit",
      "status": "decided",
      "choice": "Android Lint (warnings as errors) + detekt + Semgrep + gitleaks + OSV-Scanner in GitHub Actions; MobSF on release builds",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D11",
      "question": "Where does the safety plan template come from?",
      "options": [
        {
          "name": "Ask Stanley and Brown for written permission to adapt their Safety Planning form; until then your clinician writes an original template",
          "pros": [
            "Evidence-based structure",
            "Ship isn't blocked on the reply"
          ],
          "cons": [
            "Two versions possible"
          ]
        },
        {
          "name": "Clinician writes an original template only",
          "pros": [
            "No permission needed"
          ],
          "cons": [
            "Less established"
          ]
        }
      ],
      "recommendation": "Ask Stanley and Brown for written permission to adapt their Safety Planning form; until then your clinician writes an original template",
      "why": "The form is copyrighted and electronic adaptation needs permission. The same applies to the C-SSRS screener: it's used only if Columbia grants permission for a commercial app.",
      "drivers": [
        "N3"
      ],
      "consequences": "Good: legally clean. Bad: a permission request to send.",
      "confirmation": "Permission letter or clinician template on file before S8",
      "status": "decided",
      "choice": "Ask Stanley and Brown for written permission to adapt their Safety Planning form; until then your clinician writes an original template",
      "decidedBy": "user accepted recommendation",
      "note": ""
    },
    {
      "id": "D12",
      "question": "Minimum Android version?",
      "options": [
        {
          "name": "Android 12 (API 31)",
          "pros": [
            "Same as AI Edge Gallery, the reference LiteRT-LM app",
            "Thermal headroom API (API 30+) available",
            "Most 2021 mid-range phones received Android 12"
          ],
          "cons": [
            "Phones stuck on Android 11 excluded"
          ]
        },
        {
          "name": "Android 11 (API 30)",
          "pros": [
            "A few more 2021 phones"
          ],
          "cons": [
            "Not what the reference app tests; LiteRT-LM minimum unverified"
          ]
        }
      ],
      "recommendation": "Android 12 (API 31)",
      "why": "Follows the reference app; S1 confirms LiteRT-LM's actual minimum.",
      "drivers": [
        "N10"
      ],
      "consequences": "Good: tested ground. Bad: excludes Android 11-only phones.",
      "confirmation": "S1 build with minSdk 31 runs on the reference phone",
      "status": "decided",
      "choice": "Android 12 (API 31)",
      "decidedBy": "user accepted recommendation",
      "note": ""
    }
  ],
  "architecture": {
    "overview": "One Android app, no server. A single Kotlin/Compose app module organised as feature packages, each a module with one job. The chat model and the guard model run in-process through LiteRT-LM. All user data lives in one SQLCipher-encrypted Room database whose key is wrapped by the Android Keystore. The only network traffic is the one-time model download and emails the user chooses to send (crash report, reply report). Safety sits outside the chat model: every user message passes the safety module before generation, every reply passes it before display, and the crisis screens use fixed clinician-written content that works without any model.",
    "style": {
      "decision": "D3"
    },
    "estimates": [
      {
        "what": "Messages stored per day",
        "value": "~40-100",
        "math": "1 session/day of 15-30 min (Q12); turn count not fixed by the user (Q24), so storage and context are sized by bytes and tokens, not message count: upper bound below assumes 50 turns = 100 messages/day"
      },
      {
        "what": "Text storage growth",
        "value": "<= ~73 MB/year (upper bound)",
        "math": "100 messages/day x 1,000-character input cap (design limit, F1) x 2 bytes/char (Urdu letters are 2 bytes in UTF-8) = 200 KB/day x 365 = 73 MB/year. AI replies are capped shorter than input. Negligible next to the model (0.5-2.6 GB, research)"
      },
      {
        "what": "Model download",
        "value": "0.5-2.6 GB once",
        "math": "Gemma3-1B int4 529 MB to Gemma4-E2B .litertlm 2.58 GB (LiteRT-LM model cards)"
      },
      {
        "what": "RAM available for models on a 6 GB phone",
        "value": "~3.6 GB starting ceiling, validated by measurement",
        "math": "PocketPal's calibrated rule min(60% x 6 GB, 6 GB - 1.2 GB) = min(3.6, 4.8) = 3.6 GB; Gemma4-E2B used 1.73 GB on CPU (S26 Ultra) + guard model ~0.5 GB (Llama Guard 1B INT4 is 440 MB; Qwen3Guard-0.6B is smaller) = ~2.2 GB < 3.6 GB. Must be re-measured on the 6 GB reference phone in S2"
      },
      {
        "what": "Context window per session",
        "value": "set in S2 (proposed 4,096 tokens)",
        "math": "system prompt + About me + recent summaries are capped at a fixed token budget (D6); the rest holds recent turns. When recent turns exceed the remainder, older turns fold into a running summary (F8). Tokens-per-word for Urdu and Roman Urdu are measured in S2"
      }
    ],
    "hotPaths": [
      {
        "flow": "Send a message, see the first words",
        "size": "One user message <= 1,000 characters; conversation state kept in the engine between turns",
        "budget": "<= 2 s p95 on the reference phone (N1)",
        "approach": "Engine and conversation stay loaded during the session, so only the new message is prefilled (not the whole history). Lexicon check is linear in message length (milliseconds). Guard model classifies the user message (short prefill + a few output tokens). Reply is screened sentence by sentence before it is shown; streaming UI updates throttled to ~30 ms (PocketPal). S2 measures each part; if the guard check plus first sentence exceeds 2 s, the numbers come back to the user",
        "provedBy": "S17"
      },
      {
        "flow": "Cold start to first reply",
        "size": "Model load (up to ~10 s per LiteRT-LM docs) + prefill of system prompt and memory (fixed token budget)",
        "budget": "15 s (Q26), N2",
        "approach": "Load the engine in the background as soon as the app opens (after unlock); prefill the system prompt and memory while the user is on the home screen or typing. Mood, history and Get help work meanwhile",
        "provedBy": "S17"
      },
      {
        "flow": "End-of-session summary",
        "size": "One session's turns, bounded by the context window",
        "budget": "Off the interactive path; must finish before the next session",
        "approach": "Expedited WorkManager job when the user leaves the chat; idempotent per conversation id; if killed, rerun on next app open before the session starts",
        "provedBy": "S11"
      },
      {
        "flow": "Model download and verification",
        "size": "0.5-2.6 GB",
        "budget": "Resumes after interruption; verification without loading the file into memory",
        "approach": "HTTP Range resume to a .part file in app-private storage; SHA-256 computed while streaming (O(1) memory); atomic rename only after the hash matches",
        "provedBy": "S5"
      }
    ],
    "diagrams": [
      {
        "view": "context",
        "title": "System context",
        "mermaid": "flowchart LR\n  U[Adult user in Pakistan] -->|chats, mood, memory| APP[Companion app on the phone]\n  APP -->|one-time model download, HTTPS| HF[Hugging Face, pinned model commit]\n  APP -->|user taps Call| DIAL[Phone dialer: helplines]\n  APP -->|user chooses to send| MAIL[User's email app: crash or reply report]\n  CL[Clinician] -.->|reviews persona, lexicon, crisis content, eval| APP"
      },
      {
        "view": "container",
        "title": "Inside the app",
        "mermaid": "flowchart TB\n  UI[Compose screens: chat, mood, memory, Get help, settings]\n  CHAT[chat: run a conversation turn]\n  SAF[safety: assess and screen text]\n  CRI[crisis: helplines, check-in, safety plan]\n  MEM[memory: summaries and About me]\n  MOOD[mood: check-ins]\n  LLM[llm: LiteRT-LM engine]\n  STORE[modelstore: download and verify models]\n  DATA[data: Room + SQLCipher]\n  VAULT[vault: database key in Android Keystore]\n  XFER[transfer: encrypted export and import]\n  UI --> CHAT & MOOD & MEM & CRI & XFER\n  CHAT --> SAF & LLM & MEM & DATA\n  SAF --> LLM\n  MEM --> LLM & DATA\n  MOOD --> DATA\n  CRI --> DATA\n  XFER --> DATA\n  DATA --> VAULT\n  LLM --> STORE"
      },
      {
        "view": "dynamic",
        "title": "One chat turn",
        "mermaid": "sequenceDiagram\n  participant U as User\n  participant C as chat\n  participant S as safety\n  participant L as llm\n  participant D as data\n  U->>C: send(text)\n  C->>D: save user message\n  C->>S: assessUserMessage(text, sessionRisk)\n  alt risk detected\n    S-->>C: Risk\n    C-->>U: scripted check-in (crisis), no model reply\n  else clear\n    S-->>C: Clear\n    C->>L: generate(text)\n    loop each sentence\n      L-->>C: tokens\n      C->>S: screenReply(sentence)\n      S-->>C: allow or replace\n      C-->>U: show sentence\n    end\n    C->>D: save reply\n  end"
      }
    ],
    "components": [
      {
        "name": "app shell",
        "responsibility": "Host the single activity, navigation and the wiring of modules",
        "interface": "MainActivity, AppGraph (manual dependency container)",
        "hides": "construction order of modules, window flags (FLAG_SECURE), per-app locale",
        "uses": [
          "all feature modules"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/app/",
        "new": true
      },
      {
        "name": "ui kit",
        "responsibility": "Provide the shared theme and components for both languages",
        "interface": "AppTheme, GetHelpButton, MessageBubble, text styles",
        "hides": "Noto Nastaliq Urdu font setup and line-height fix, colours meeting 4.5:1",
        "uses": [],
        "location": "app/src/main/kotlin/pk/yarsun/app/ui/",
        "new": true
      },
      {
        "name": "settings",
        "responsibility": "Store the user's non-sensitive preferences",
        "interface": "Settings.state: Flow<Prefs>; setLanguage(), setLockEnabled(), setCrashConsent(), setMemoryEnabled(), confirmAdult()",
        "hides": "DataStore file and keys",
        "uses": [],
        "location": "app/src/main/kotlin/pk/yarsun/app/settings/",
        "new": true
      },
      {
        "name": "vault",
        "responsibility": "Own the database encryption key",
        "interface": "openKey(auth: CryptoObjectProvider?): ByteArray; setLockEnabled(Boolean); destroy()",
        "hides": "Keystore alias, AES-GCM key wrapping, auth-bound key when the lock is on",
        "uses": [],
        "location": "app/src/main/kotlin/pk/yarsun/app/vault/",
        "new": true
      },
      {
        "name": "data",
        "responsibility": "Persist user data in the encrypted database",
        "interface": "AppDatabase and DAOs: ConversationDao, MessageDao, MemoryDao, MoodDao, SafetyPlanDao; wipe()",
        "hides": "Room + SQLCipher setup, schema, migrations, secure_delete",
        "uses": [
          "vault"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/data/",
        "new": true
      },
      {
        "name": "modelstore",
        "responsibility": "Get a verified model file onto the device",
        "interface": "state: Flow<ModelState>; ensure(modelId): Result<File>; deviceFits(modelId): FitResult",
        "hides": "manifest (URL, commit, SHA-256, size, min RAM), resumable download, storage path",
        "uses": [],
        "location": "app/src/main/kotlin/pk/yarsun/app/model/store/",
        "new": true
      },
      {
        "name": "llm",
        "responsibility": "Run text generation on a local model",
        "interface": "Engine.load(File, EngineConfig); Engine.newConversation(systemPrompt): Conversation; Conversation.send(text): Flow<String>; cancel(); Engine.close()",
        "hides": "LiteRT-LM API, GPU-then-CPU backend choice, memory and thermal checks, output token cap",
        "uses": [
          "modelstore"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/model/llm/",
        "new": true
      },
      {
        "name": "safety",
        "responsibility": "Judge the crisis risk of conversation text",
        "interface": "assessUserMessage(text, SessionRisk): Assessment; screenReply(sentence): Screen",
        "hides": "text normalisation (Urdu letter variants, Roman Urdu spellings), clinician lexicon, guard-model prompt and thresholds, risk-state rules",
        "uses": [
          "llm"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/safety/",
        "new": true
      },
      {
        "name": "crisis",
        "responsibility": "Give the user help that does not depend on the AI",
        "interface": "Routes GetHelp and CheckIn(level); SafetyPlanRepository",
        "hides": "per-country helpline data with verification dates, clinician-written check-in scripts per language",
        "uses": [
          "data"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/crisis/",
        "new": true
      },
      {
        "name": "chat",
        "responsibility": "Run a supportive conversation turn by turn",
        "interface": "ChatSession.send(text): Flow<ChatEvent>; ChatScreen",
        "hides": "persona prompt, prompt assembly with memory as quoted data, in-session running summary, AI-disclosure schedule, break reminder",
        "uses": [
          "llm",
          "safety",
          "memory",
          "data",
          "crisis"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/chat/",
        "new": true
      },
      {
        "name": "memory",
        "responsibility": "Keep what the AI remembers about the user between sessions",
        "interface": "contextForNewSession(): MemoryContext; summarise(conversationId); MemoryScreen (view, edit, delete, turn off)",
        "hides": "summary prompt, JSON schema for constrained output, token budget, which summaries are included",
        "uses": [
          "llm",
          "data"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/memory/",
        "new": true
      },
      {
        "name": "mood",
        "responsibility": "Record and show mood check-ins",
        "interface": "record(CheckIn); history(range): Flow<List<CheckIn>>; MoodScreens",
        "hides": "tag list, time-zone handling",
        "uses": [
          "data"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/mood/",
        "new": true
      },
      {
        "name": "transfer",
        "responsibility": "Move the user's data to another phone as an encrypted file",
        "interface": "export(passphrase, OutputStream); import(passphrase, InputStream): ImportResult",
        "hides": "file format v1, Argon2id parameters, libsodium calls, schema validation, size limits",
        "uses": [
          "data"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/transfer/",
        "new": true
      },
      {
        "name": "diagnostics",
        "responsibility": "Report crashes only with consent and without user content",
        "interface": "Diagnostics.install(app, settings)",
        "hides": "ACRA configuration, report field allowlist, email address",
        "uses": [
          "settings"
        ],
        "location": "app/src/main/kotlin/pk/yarsun/app/diagnostics/",
        "new": true
      }
    ],
    "dataModel": [
      {
        "entity": "conversation",
        "fields": "id TEXT PK (UUID), started_at INTEGER NOT NULL (UTC epoch ms), ended_at INTEGER NULL, summary_state TEXT NOT NULL CHECK IN ('pending','done','skipped')",
        "notes": "UUIDs so imports never collide"
      },
      {
        "entity": "message",
        "fields": "id TEXT PK, conversation_id TEXT NOT NULL FK ON DELETE CASCADE, role TEXT NOT NULL CHECK IN ('user','assistant','notice'), text TEXT NOT NULL CHECK length <= 4000, status TEXT NOT NULL CHECK IN ('complete','interrupted','replaced'), created_at INTEGER NOT NULL",
        "notes": "index (conversation_id, created_at). No risk score stored (PPC 325 constraint)"
      },
      {
        "entity": "memory_summary",
        "fields": "id TEXT PK, conversation_id TEXT UNIQUE FK ON DELETE CASCADE, text TEXT NOT NULL CHECK length <= 1500, created_at, edited_by_user INTEGER NOT NULL CHECK IN (0,1)",
        "notes": "unique per conversation makes the summary job idempotent"
      },
      {
        "entity": "about_me",
        "fields": "id INTEGER PK CHECK (id = 1), text TEXT NOT NULL CHECK length <= 2000, updated_at",
        "notes": "single row"
      },
      {
        "entity": "mood_checkin",
        "fields": "id TEXT PK, at_utc INTEGER NOT NULL, zone_offset_min INTEGER NOT NULL, mood INTEGER NOT NULL CHECK BETWEEN 1 AND 5, note TEXT NULL CHECK length <= 1000",
        "notes": "index at_utc"
      },
      {
        "entity": "mood_tag",
        "fields": "checkin_id TEXT FK ON DELETE CASCADE, tag TEXT NOT NULL CHECK IN (fixed list), PK (checkin_id, tag)",
        "notes": "fixed tag codes; labels translated in resources"
      },
      {
        "entity": "safety_plan",
        "fields": "section TEXT PK CHECK IN (warning_signs, coping, distractions, people, professionals, safe_environment), text TEXT NOT NULL CHECK length <= 2000, updated_at",
        "notes": "sections follow D11's template"
      }
    ],
    "interfaces": [
      {
        "name": "Export file v1",
        "contract": "magic 'CMPX' | version byte 1 | Argon2id opslimit, memlimit, salt (16 B) | secretstream header | encrypted chunks of a JSON document {schemaVersion, exportedAt, conversations[], messages[], summaries[], aboutMe, moods[], safetyPlan[]}",
        "notes": "Header bound as additional data; import refuses unknown versions, files over 200 MB (~2.7x the yearly upper bound) and any JSON failing the schema"
      },
      {
        "name": "Model manifest (built into the app)",
        "contract": "[{id, url (https, huggingface.co, pinned commit), sha256, sizeBytes, minRamBytes, licence}]",
        "notes": "A manifest entry with a non-https or non-allowlisted host fails a unit test"
      },
      {
        "name": "Helpline data (assets)",
        "contract": "{country, verifiedOn, verifiedBy, entries:[{name, number, hours, languages, forActiveRisk: bool}]}",
        "notes": "Validated by a test; Umang is marked not for active risk per its own site"
      },
      {
        "name": "Safety lexicon (assets)",
        "contract": "{version, reviewedOn, entries:[{lang: en|ur|ur-Latn, pattern, level}]}",
        "notes": "Plain phrases, no user-supplied regex; matched after normalisation"
      }
    ]
  },
  "security": {
    "assets": [
      "Conversations, memory summaries and About me (intimate; in Pakistan, statements about suicide are legally sensitive under PPC 325)",
      "Mood check-ins and safety plan",
      "The database key",
      "Export files",
      "Integrity of the model file",
      "Integrity of helpline and lexicon data",
      "The user's safety in a crisis"
    ],
    "boundaries": [
      "User text -> safety and chat model (prompt)",
      "Model output -> screen and memory",
      "Network -> model file",
      "Export file from outside -> importer",
      "App -> email app (crash and reply reports)",
      "App -> Android OS (backups, recents thumbnails, keyboard, other apps' intents)",
      "Person holding the unlocked phone -> app"
    ],
    "threats": [
      {
        "id": "T1",
        "threat": "A family member or anyone holding the unlocked phone opens the app and reads conversations",
        "category": "Information disclosure",
        "mitigation": "Optional lock (Q21) via BiometricPrompt with BIOMETRIC_STRONG or device credential; when on, the database key is wrapped by an auth-bound Keystore key, so data can't be decrypted without auth; re-locks when the app goes to background",
        "step": "S14",
        "ref": "MASVS-AUTH-2; Android biometric auth docs",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T2",
        "threat": "App files copied from a lost or rooted phone, or restored from a cloud backup or device transfer",
        "category": "Information disclosure",
        "mitigation": "SQLCipher database with a 32-byte random key wrapped by an AES-GCM Android Keystore key; allowBackup=false plus dataExtractionRules excluding cloud-backup and device-transfer; data only in credential-encrypted storage",
        "step": "S3",
        "ref": "MASVS-STORAGE-1/2, MASVS-CRYPTO-2; Android auto-backup docs",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T3",
        "threat": "Conversation visible in the recent-apps thumbnail, screenshots or screen recording",
        "category": "Information disclosure",
        "mitigation": "FLAG_SECURE on the activity window",
        "step": "S4",
        "ref": "MASVS-PLATFORM-3",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T4",
        "threat": "Keyboard app learns or uploads what the user types",
        "category": "Information disclosure",
        "mitigation": "Chat and note inputs request no personalised learning (IME_FLAG_NO_PERSONALIZED_LEARNING); onboarding tells the user third-party keyboards may still see input",
        "step": "S10",
        "ref": "MASVS-PRIVACY-1",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T5",
        "threat": "Crash report or log contains conversation, mood or memory text",
        "category": "Information disclosure",
        "mitigation": "ACRA report fields allowlisted (app version, Android version, device model, stack trace); exception messages from our code never include user text (enforced by the logging wrapper and a test that crashes with user text and checks the report); release builds strip debug logs",
        "step": "S16",
        "ref": "MASVS-PRIVACY-1; OWASP Logging Cheat Sheet",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T6",
        "threat": "Model file replaced in transit or on disk, so the model gives harmful replies",
        "category": "Tampering",
        "mitigation": "HTTPS only from an allowlisted host; SHA-256 from the built-in manifest checked before the file is moved into app-private storage; mismatches deleted",
        "step": "S5",
        "ref": "MASVS-CODE-4; OWASP Top 10 A08",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T7",
        "threat": "A crafted export file crashes the importer or injects data",
        "category": "Tampering",
        "mitigation": "Size limit checked before decrypting; authenticated decryption fails closed; JSON validated against the schema with length limits; Room parameterised inserts in one transaction; nothing written unless everything validates",
        "step": "S15",
        "ref": "ASVS V2 input validation; CWE-20",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T8",
        "threat": "Export file stolen and passphrase brute-forced",
        "category": "Information disclosure",
        "mitigation": "Argon2id at or above OWASP's minimum (m >= 46 MiB, t >= 1), tuned to ~1 s on the reference phone; minimum passphrase length enforced with a strength meter; the passphrase is never stored",
        "step": "S15",
        "ref": "OWASP Password Storage Cheat Sheet",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T9",
        "threat": "The chat model produces harmful content: suicide methods or locations, diet or weight advice, encouraging secrecy, claiming to be human or licensed",
        "category": "Safety (LLM output)",
        "mitigation": "Every reply screened sentence by sentence by the safety module before display; replaced with a fixed safe message on a hit; persona prompt written with the clinician; release gated on N4 (0 harmful replies on the red-team set)",
        "step": "S7",
        "ref": "OWASP Top 10 for LLM Applications (LLM05 improper output handling); WHO safe-messaging guide",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T10",
        "threat": "User text or remembered summaries steer the model to ignore its instructions (prompt injection), switching off safety",
        "category": "Elevation of privilege",
        "mitigation": "Safety checks run outside the chat model, on both input and output, and can't be changed by the prompt; crisis flow is fixed content; memory text is inserted as quoted data with a length cap and comes only from validated summaries",
        "step": "S9",
        "ref": "OWASP Top 10 for LLM Applications (LLM01 prompt injection)",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T11",
        "threat": "The model invents a helpline number and the user calls a wrong or harmful number",
        "category": "Tampering",
        "mitigation": "Phone-number patterns in replies are replaced with a pointer to Get help; the only tappable numbers come from the verified helpline file and open the dialer (ACTION_DIAL, user confirms)",
        "step": "S7",
        "ref": "OWASP Top 10 for LLM Applications (LLM09 misinformation)",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T12",
        "threat": "A stored record of crisis episodes is used against the user (PPC 325)",
        "category": "Information disclosure",
        "mitigation": "No risk log or risk score is stored; session risk state lives in memory only; nothing is ever sent automatically to police, contacts or the developer; delete-all destroys the key",
        "step": "S9",
        "ref": "Dawn 18 May 2026; MASVS-PRIVACY-1",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T13",
        "threat": "Delete-all leaves recoverable data on flash storage",
        "category": "Information disclosure",
        "mitigation": "Delete-all destroys the Keystore key first (crypto-shredding), then deletes the database and settings; per-item deletes use SQLCipher secure_delete",
        "step": "S14",
        "ref": "MASVS-STORAGE-2",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T14",
        "threat": "Another app launches internal screens or reads data through exported components",
        "category": "Elevation of privilege",
        "mitigation": "Only the launcher activity is exported; no content providers or deep links; test asserts the merged manifest has no other exported components",
        "step": "S4",
        "ref": "MASVS-PLATFORM-1",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T15",
        "threat": "Huge input or very long conversation exhausts memory and crashes the app",
        "category": "Denial of service",
        "mitigation": "1,000-character input cap; output token cap; context window bounded with running summary (F8); OOM during generation caught: engine unloaded, user message kept, user told",
        "step": "S9",
        "ref": "CWE-770",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T16",
        "threat": "A compromised or vulnerable dependency (native libraries, Gradle plugins, CI actions)",
        "category": "Tampering",
        "mitigation": "Only dependencies in this plan; Gradle dependency verification metadata and lockfile committed; OSV-Scanner on dependency changes; GitHub Actions pinned to commit SHAs; gitleaks on every push",
        "step": "S1",
        "ref": "OWASP Top 10 A03, A08",
        "acceptedBy": null,
        "acceptedReason": ""
      },
      {
        "id": "T17",
        "threat": "Report-a-reply or crash email discloses more than the user intended",
        "category": "Information disclosure",
        "mitigation": "Email is composed by the user's own app; body contains only the flagged reply (or the allowlisted crash fields); nothing is sent without the user pressing send",
        "step": "S10",
        "ref": "Play AI-generated content policy; MASVS-PRIVACY-3",
        "acceptedBy": null,
        "acceptedReason": ""
      }
    ]
  },
  "quality": {
    "errors": [
      "Model fails to load on GPU: retry on CPU automatically (LiteRT-LM issue #2114); if CPU also fails, chat shows 'the AI couldn't start' with retry, everything else keeps working",
      "Out of memory during generation: catch, unload the engine, keep the user's message, mark the partial reply interrupted, suggest closing other apps",
      "Database can't be opened (key invalidated or corrupted): explain, offer import from an export file or a deliberate reset; never wipe silently",
      "Safety module error or timeout: never generate without a check; fall back to lexicon-only for that turn and show the Get help button highlighted (fails to the safer side)",
      "Summary job produces invalid JSON or text over the limit: rejected, retried once, then the conversation is marked 'skipped'; no partial memory written",
      "No email app installed for crash or reply reports: tell the user; nothing is queued or retried in the background"
    ],
    "observability": [
      "No telemetry (Q8). Release builds log nothing but errors through one logging wrapper that takes event names and ids, never free text",
      "A local Diagnostics screen shows model id, backend (CPU/GPU), last first-reply time and memory headroom, so the user can describe problems without sending data",
      "Opt-in ACRA crash reports by email (D9) with allowlisted fields only"
    ],
    "performance": [
      "Hot paths and budgets in architecture.hotPaths; everything else written for clarity",
      "Baseline Profile and R8 in release builds (Google's architecture recommendations)",
      "Thermal status listener: at SEVERE or above, show a 'phone is hot' notice and cap reply length; checked against headroom no more than every 10 s (ADPF docs)"
    ],
    "accessibility": [
      "Every control has a content description in English and Urdu; TalkBack announces a reply once complete, not each token",
      "Text resizes to 200% without clipping (WCAG 2.2 1.4.4); text contrast >= 4.5:1 (1.4.3) in light and dark themes",
      "Urdu screens mirror right-to-left; Nastaliq line height fixed per the Compose font-padding write-up",
      "Get help button reachable in one tap from every screen and labelled 'Get help'/'مدد حاصل کریں'"
    ],
    "migration": [
      "Room schema exported to the repo from v1; every schema change is an auto-migration or written migration with a MigrationTestHelper test; destructive fallback is forbidden",
      "Android apps can't be downgraded on Play, so a bad release is fixed forward; staged rollout limits exposure",
      "Model upgrades ship as a new manifest entry in an app update; the old model file is deleted only after the new one verifies"
    ],
    "failureModes": [
      {
        "dependency": "LiteRT-LM GPU backend",
        "failure": "Init fails or crashes on some GPUs (#2114)",
        "effect": "Slower replies",
        "handling": "CPU fallback; remember the failing backend per device"
      },
      {
        "dependency": "LiteRT-LM CPU / device RAM",
        "failure": "Out of memory or killed by the low-memory killer",
        "effect": "Reply interrupted",
        "handling": "User message saved first (N7); generation in a foreground service with a visible notification while the app is briefly backgrounded; ApplicationExitInfo REASON_LOW_MEMORY shown as a hint next launch"
      },
      {
        "dependency": "Guard model (Qwen3Guard)",
        "failure": "Not loadable or too slow",
        "effect": "Weaker detection",
        "handling": "Lexicon-only for that turn, Get help highlighted; if it can't load at all, D5 is revisited before release"
      },
      {
        "dependency": "Hugging Face model hosting",
        "failure": "Down, slow, or the file removed",
        "effect": "New installs can't get the model",
        "handling": "Resume with backoff; clear message; manifest can list a second mirror only if its bytes match the same SHA-256"
      },
      {
        "dependency": "Android Keystore",
        "failure": "Key invalidated (lock settings changed) or OEM bug",
        "effect": "Database can't be opened",
        "handling": "Auth-bound key does not invalidate on new fingerprint enrolment (setInvalidatedByBiometricEnrollment(false), so adding a fingerprint doesn't destroy data); on failure, offer import or reset"
      },
      {
        "dependency": "WorkManager (summary job)",
        "failure": "Job killed or deferred",
        "effect": "No memory for that session yet",
        "handling": "Idempotent per conversation; pending summaries run before the next session starts"
      },
      {
        "dependency": "Email app (ACRA, reply reports)",
        "failure": "Missing",
        "effect": "Report not sent",
        "handling": "Tell the user; never send another way"
      }
    ],
    "slos": [
      {
        "sli": "First visible words after sending (warm session)",
        "target": "<= 2 s for 95% of turns, measured pre-release on the reference phone (no production telemetry by design)",
        "from": "N1"
      },
      {
        "sli": "Crisis messages flagged by the safety layer",
        "target": ">= 95% per language (Q27) on the release evaluation set",
        "from": "N3"
      }
    ],
    "operations": [
      "Releases: Play internal track, then closed testing, then staged production rollout; version name follows Semantic Versioning",
      "Play App Signing; the upload key lives outside the repo (password manager), never in CI logs",
      "Each release re-runs the S17 evaluation; the clinician re-verifies helpline numbers and dates them in the helpline file",
      "docs/runbook.md: one entry per failure mode above"
    ],
    "cost": [
      "No servers: $0/month running cost",
      "Google Play developer registration fee (one-time; amount not verified this session)",
      "Clinician time for persona, lexicon, check-in scripts, safety plan and release evaluations (amount set by you)",
      "Lawyer review before release (D1, D2; not estimated)",
      "A 6 GB reference phone if none is available (Q25)"
    ]
  },
  "dependencies": [
    {
      "name": "com.google.ai.edge.litertlm:litertlm-android",
      "version": "0.18.1",
      "why": "On-device LLM inference (D4)",
      "license": "Apache-2.0",
      "health": "Monthly releases, v0.18.1 on 2026-10-20, Kotlin API stable; open GPU issue #2114",
      "insteadOf": "MediaPipe LLM Inference (maintenance-only), llama.cpp JNI"
    },
    {
      "name": "net.zetetic:sqlcipher-android",
      "version": "4.19.1",
      "why": "Encrypted SQLite (T2)",
      "license": "BSD-style (notice shown in About)",
      "health": "Current artifact; old android-database-sqlcipher deprecated",
      "insteadOf": "Plain SQLite"
    },
    {
      "name": "androidx.room (runtime, ktx, compiler via KSP)",
      "version": "2.8.5",
      "why": "Typed database access, migrations",
      "license": "Apache-2.0",
      "health": "Released 2026-09-09",
      "insteadOf": "Hand-written SQL helpers"
    },
    {
      "name": "androidx.datastore:datastore-preferences",
      "version": "1.3.0",
      "why": "Non-sensitive settings",
      "license": "Apache-2.0",
      "health": "Stable 2026-10-21",
      "insteadOf": "EncryptedSharedPreferences (deprecated)"
    },
    {
      "name": "androidx.biometric:biometric",
      "version": "1.1.0",
      "why": "App lock (T1)",
      "license": "Apache-2.0",
      "health": "Stable; 1.4 still alpha",
      "insteadOf": "Custom PIN screen"
    },
    {
      "name": "Jetpack Compose BOM + material3, activity-compose, lifecycle-viewmodel-compose, navigation3, appcompat, work-runtime-ktx, ui-test-junit4-accessibility (test only)",
      "version": "Compose ui 1.12.1 / material3 1.4.0; others pinned in S1 from their release pages",
      "why": "UI, navigation, per-app locales, background summary and download jobs",
      "license": "Apache-2.0",
      "health": "Google-maintained",
      "insteadOf": "Views/XML"
    },
    {
      "name": "com.goterl:lazysodium-android (+ JNA)",
      "version": "5.2.0",
      "why": "Export encryption (D8)",
      "license": "MPL-2.0",
      "health": "Releases 2021, 2022, 2025; repository of 5.2.0 to confirm in S15",
      "insteadOf": "Custom crypto file format"
    },
    {
      "name": "ch.acra:acra-mail, acra-dialog",
      "version": "5.14.2",
      "why": "Opt-in crash reports by email (D9)",
      "license": "Apache-2.0",
      "health": "Released 2026-10-01, yearly cadence",
      "insteadOf": "Sentry/Crashlytics"
    },
    {
      "name": "Test: junit 4, robolectric 4.17, androidx.test, compose ui-test, room-testing, okhttp mockwebserver, kotest-property",
      "version": "robolectric 4.17; others pinned in S1",
      "why": "Unit, UI, migration, download and property tests",
      "license": "Apache-2.0 / EPL (JUnit)",
      "health": "Widely used",
      "insteadOf": "-"
    },
    {
      "name": "Tooling: detekt, Semgrep, gitleaks, OSV-Scanner, MobSF (CI/dev only, not shipped)",
      "version": "detekt 2.0.0-alpha.6 (plugin id dev.detekt); others pinned in S1",
      "why": "Security checks (D10)",
      "license": "Apache-2.0 / LGPL (Semgrep CE) / MIT / Apache-2.0 / GPL-3.0 (run as a tool, not linked)",
      "health": "Active; detekt 1.23.8 + Kotlin 2.4 compatibility checked in S1 Update 2026-10-24 (S1): detekt 1.23.8 crashes on JDK 25 (JavaVersion.parse); maintainer on detekt#9772: \"Java 25 is supported in the 2.0.0 alphas. Support will not be backported to 1.x.\" 2.0.0-alpha.6 released 2026-08-04 (pre-release), dev-only, pinned by lockfile and verification metadata.",
      "insteadOf": "-"
    },
    {
      "name": "Models: chosen chat model (Gemma 4 E2B or Qwen3.5-2B, D4/S2) and Qwen3Guard-Gen-0.6B (D5)",
      "version": "Pinned Hugging Face commit + SHA-256",
      "why": "Chat and safety",
      "license": "Apache-2.0",
      "health": "Released 2026; Urdu quality unproven until S2",
      "insteadOf": "Cloud LLM"
    },
    {
      "name": "Noto Nastaliq Urdu font",
      "version": "Latest release from notofonts, pinned in S4",
      "why": "Readable Urdu",
      "license": "SIL OFL 1.1",
      "health": "Google Noto project",
      "insteadOf": "System font (inconsistent Nastaliq support)"
    }
  ],
  "testing": {
    "strategy": [
      "Unit (JVM, fast): safety normalisation and lexicon, prompt assembly, context-window manager, disclosure schedule with an injected clock, export format, manifest and helpline validation",
      "Property-based: text normalisation is idempotent; export then import returns identical data; memory context never exceeds its token budget",
      "Instrumented on emulator in CI: Room + SQLCipher (native library needs Android), migrations, Compose UI flows, vault without biometrics",
      "On the physical reference phone: real-model contract tests, benchmarks (S2, S17), biometric lock, end-to-end evaluation",
      "The chat model is faked in chat and memory tests behind the llm interface; a contract test runs the same suite against the real engine on the phone",
      "Safety evaluation sets (clinician-labelled, three languages) run as a test suite in S7 and S17"
    ],
    "seams": [
      {
        "seam": "llm: Engine / Conversation",
        "catches": "streaming, cancel, backend fallback, error mapping",
        "misses": "reply quality; covered by S2 and S17 evaluation"
      },
      {
        "seam": "safety: assessUserMessage(), screenReply()",
        "catches": "lexicon hits after normalisation, guard verdicts, risk state rules, reply replacement",
        "misses": "real-world phrasing outside the sets; mitigated by clinician red-teaming each release"
      },
      {
        "seam": "chat: ChatSession.send()",
        "catches": "order of save, check, generate, screen; interrupted replies; disclosure timing; context folding",
        "misses": "model behaviour (fake engine)"
      },
      {
        "seam": "memory: contextForNewSession(), summarise()",
        "catches": "budget, deletion, malformed output rejection, idempotency",
        "misses": "summary quality; clinician review in S17"
      },
      {
        "seam": "data DAOs and vault",
        "catches": "constraints, cascades, encryption at rest, wipe",
        "misses": "OEM Keystore quirks; checked on real phones"
      },
      {
        "seam": "transfer: export(), import()",
        "catches": "round trip, tamper, wrong passphrase, size and version limits",
        "misses": "-"
      },
      {
        "seam": "modelstore: ensure()",
        "catches": "resume, hash mismatch, host allowlist, storage and RAM checks (MockWebServer)",
        "misses": "Hugging Face behaviour; one real download in S17"
      },
      {
        "seam": "Compose screens via UI tests",
        "catches": "navigation, Get help everywhere, RTL, accessibility labels",
        "misses": "visual polish; screenshots reviewed by you"
      }
    ],
    "acceptance": [
      {
        "id": "A1",
        "text": "On a fresh install, chat can't be reached until language, 18+ confirmation, the AI and 'not a medical device / not therapy' notices, and crash-report choice (default off) are done"
      },
      {
        "id": "A2",
        "text": "Sending a direct crisis statement in English, Urdu or Roman Urdu shows the clinician-written check-in instead of a model reply, with helplines one tap away"
      },
      {
        "id": "A3",
        "text": "Get help opens from every screen in one tap with the model not downloaded, in airplane mode, and while a reply is streaming"
      },
      {
        "id": "A4",
        "text": "A scripted 30-minute session with crash reports off sends 0 bytes over the network"
      },
      {
        "id": "A5",
        "text": "Killing the app mid-reply, then reopening, shows the user's message and the partial reply marked interrupted"
      },
      {
        "id": "A6",
        "text": "Export on one phone and import on a fresh install restores conversations, memory, moods and safety plan; a wrong passphrase or a modified file imports nothing and says why"
      },
      {
        "id": "A7",
        "text": "Deleting a memory item or turning memory off means the next session's prompt doesn't contain it"
      },
      {
        "id": "A8",
        "text": "With the lock on, reopening the app needs fingerprint or PIN; the recent-apps thumbnail is blank"
      },
      {
        "id": "A9",
        "text": "Delete all data returns to onboarding; the old database can't be opened even with its file"
      },
      {
        "id": "A10",
        "text": "A mood check-in is saved and shown in history on the right local day in both languages"
      },
      {
        "id": "A11",
        "text": "Every screen works with TalkBack and at 200% font size in English and Urdu (RTL)"
      },
      {
        "id": "A12",
        "text": "On the reference phone, 95% of 50 scripted turns per language show first words within 2 s"
      },
      {
        "id": "A13",
        "text": "Reporting a reply opens an email draft containing only that reply; nothing is sent without the user"
      },
      {
        "id": "A14",
        "text": "The 'I am an AI' notice appears at session start, after 3 hours of continuous use, after 7 days idle, and when the user asks if it's human"
      }
    ],
    "runIt": {
      "data": "No server or seed database. For a debug build, push the pinned model once: `adb push <model>.litertlm /data/local/tmp/` then `adb shell run-as pk.yarsun.app cp /data/local/tmp/<model>.litertlm files/models/` (debug builds only). All test conversations are typed or scripted synthetic text, never real user data",
      "start": "./gradlew :app:installDebug && adb shell am start -n pk.yarsun.app/.app.MainActivity",
      "ready": "adb logcat -d -s Companion:I | grep -q EngineReady (event name only, no content), with a 60 s timeout",
      "drive": "cli",
      "stop": "adb shell am force-stop pk.yarsun.app; adb shell pm clear pk.yarsun.app to reset between runs",
      "notes": "Drive the UI with Compose UI tests / UI Automator on the emulator, and by hand plus scripted tests on the reference phone (Q25); screenshots via `adb exec-out screencap -p`. Network checks read per-UID traffic stats. Never use a real person's conversations as test data."
    },
    "securityChecks": [
      {
        "check": "Security and unit tests",
        "command": "./gradlew testDebugUnitTest",
        "when": "every step"
      },
      {
        "check": "Instrumented tests incl. encryption and manifest checks (emulator)",
        "command": "./gradlew connectedDebugAndroidTest",
        "when": "every step that touches data, vault, UI or manifest"
      },
      {
        "check": "Android Lint, warnings as errors",
        "command": "./gradlew lintDebug",
        "when": "every step"
      },
      {
        "check": "detekt",
        "command": "./gradlew detekt",
        "when": "every step"
      },
      {
        "check": "Semgrep (Kotlin and Android rules, exact rulesets pinned in S1)",
        "command": "semgrep scan --config p/kotlin --error",
        "when": "every step"
      },
      {
        "check": "Secret scan",
        "command": "gitleaks git --redact",
        "when": "every step"
      },
      {
        "check": "Dependency audit",
        "command": "osv-scanner scan source -r .",
        "when": "when dependencies change, and at release"
      },
      {
        "check": "APK security scan",
        "command": "MobSF static scan of the release APK (docker image, pinned in S1)",
        "when": "S18 and every release"
      },
      {
        "check": "Banned-terms scan (therapy words in all strings and prompts)",
        "command": "./gradlew testDebugUnitTest --tests '*BannedTermsTest'",
        "when": "every step"
      }
    ]
  },
  "steps": [
    {
      "dependsOn": [],
      "status": "done",
      "notes": "Baseline (run-like-a-user): new app, nothing to run or walk yet; no inherited breakage. Toolchain installed in home folder (see LEARNINGS.md). Repo initialised on main (plan commit 946d7b0), build branch build/ai-therapist. S1 worker started in worktree crew/ai-therapist/S1.\nWorker (2 rounds). Versions: Gradle 9.8.2 (dist SHA-256 checked), AGP 9.4.1, Kotlin 2.4.21 (KGP lifted from AGP-bundled 2.2.10 via root apply false), Compose BOM 2026.09.00 (ui 1.12.1, material3 1.4.0), compileSdk 37 (required by Compose ui 1.12.1), targetSdk 36, minSdk 31; detekt 2.0.0-alpha.6 (user decision). LiteRT-LM 0.18.1 minSdk 24 (AAR manifest, Google Maven) <= D12 31. Red runs: tamper test `Dependency verification failed for configuration :app:debugRuntimeClasspath  One artifact failed verification: activity-1.13.0.aar` (on final metadata 2c24847, sha256 2c91557c...); placeholder test broken on purpose: `Assert failed: ... contains YarSun ... is not displayed!`; detekt planted EmptyCatchBlock/SwallowedException/FunctionNaming caught. Worker checks: ./gradlew check pass (3d1e512 tree), testDebugUnitTest pass tests=1, lintDebug pass, detekt pass, connectedDebugAndroidTest pass tests=1, semgrep p/kotlin+p/mobsfscan 0 findings, gitleaks 9 commits no leaks, osv-scanner No issues found (after build-tool floors: bouncycastle 1.86, jose4j 0.9.7, jdom2 2.0.6.1, commons-lang3 3.21.0, httpclient 4.5.14), actionlint 1.7.12 0 errors. Fresh-clone empty-cache check on final metadata: NOT run by worker; given to the independent reviewer. CI: not run (no remote).\nIndependent review round 1 (diff 946d7b0..2c24847): PASS. Reviewer fresh clone + empty GRADLE_USER_HOME: ./gradlew check BUILD SUCCESSFUL in 6m 45s; connectedDebugAndroidTest BUILD SUCCESSFUL tests=1; tamper test BUILD FAILED as expected; placeholder broken twice (test and app) FAILED then green; semgrep 58 rules 0 findings; gitleaks 9 commits no leaks; osv-scanner No issues found; actionlint 0 errors; all 4 action SHAs verified with git ls-remote; scanner binary checksums and Semgrep image digest verified. Finding F1 (non-blocking, fixing): buildscript and settings lockfiles in DEFAULT lock mode; deleting buildscript-gradle.lockfile still builds. Scope note: Kotlin allWarningsAsErrors on (matches warnings-as-errors policy, kept). Not checked: CI run (no remote), Semgrep docker image run, MobSF (S18).\nF1 fix (5bd8dbb): root buildscript classpath STRICT. Before: rm buildscript-gradle.lockfile && ./gradlew help -> BUILD SUCCESSFUL in 2s. After: `Locking strict mode: Configuration classpath is locked but does not have lock state.` Settings classpath left in DEFAULT mode: STRICT is impossible with a version catalog (gradle/gradle#23727, open, checked 2026-10-24); it is empty, and verification metadata rejects a planted settings plugin (`Dependency verification failed ... foojay-resolver-convention...pom`). Coordinator decision (no change to T16 controls): accept, with a comment in settings.gradle.kts. ./gradlew check --rerun-tasks pass; gitleaks pass; locks and metadata unchanged.\nLanded as merge 6782367, then commit messages rewritten (user request: no AI attribution): trees identical for all 12 commits; new hashes: plan e60cb6f, merge 0386762, F1 fix 070ef9e (title corrected to plugin classpath), base for S1 was 946d7b0 -> e60cb6f. Coordinator checks on build branch after landing: ./gradlew check BUILD SUCCESSFUL, tests=1 failures=0; semgrep 58 rules 0 findings; gitleaks no leaks (full history, 11 commits); osv-scanner No issues found. App walk (runIt) on yarsun_api36: installDebug ok, am start Status ok, LaunchState COLD, TotalTime 1324 ms; screen shows YarSun; topResumedActivity pk.yarsun.app/.app.MainActivity; no crash log. Observed: placeholder text drawn under the status bar (edge-to-edge for targetSdk 35+, no insets yet); S4 shell must apply system-bar insets. Pushed to https://github.com/illeniall239/yarsun (public, user choice); CI run 40102127075 in progress.\nCI run 40102127075 on build/ai-therapist: all 7 jobs success (Unit tests, Android Lint, detekt, Emulator tests API 36 in 4m25s, Semgrep, gitleaks, OSV-Scanner). doneWhen met: fresh clone ./gradlew check green locally (reviewer, empty cache), CI green with every D10 check, tamper test fails the build. Independent review: PASS after 2 rounds (F1 fixed). Status per check: all pass; MobSF unavailable until S18 (needs Docker).",
      "id": "S1",
      "title": "Project skeleton, tooling and CI",
      "detail": "git init; Android project with Kotlin 2.4, Compose BOM, version catalog, minSdk per D12, targetSdk 36, Gradle lockfile and dependency verification metadata; detekt, Lint warningsAsErrors, test runners (JUnit4, Robolectric, Compose UI test, kotest-property); GitHub Actions with actions pinned to SHAs running unit tests, Lint, detekt, Semgrep, gitleaks, OSV-Scanner and emulator tests; confirm LiteRT-LM's minSdk; README with prerequisites and one-command setup (`./gradlew check`); .gitignore. One placeholder test proves the pipeline.",
      "files": [
        "settings.gradle.kts",
        "build.gradle.kts",
        "app/build.gradle.kts",
        "gradle/libs.versions.toml",
        "gradle/verification-metadata.xml",
        ".github/workflows/ci.yml",
        "config/detekt.yml",
        ".gitignore",
        "README.md"
      ],
      "tests": {
        "na": "Tooling only; no behaviour to specify yet"
      },
      "standards": [
        "docs-and-setup"
      ],
      "doneWhen": "A fresh clone runs `./gradlew check` green locally, and the CI run on the first push is green with every check from D10 reported; a deliberately wrong checksum in gradle/verification-metadata.xml fails `./gradlew build` (T16), then is reverted",
      "estimate": {
        "low": 8,
        "likely": 14,
        "high": 28
      }
    },
    {
      "dependsOn": [
        "S1"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S2",
      "title": "Spike: measure candidate models on the reference phone",
      "detail": "A benchmark module (kept for S17) loads each candidate (Gemma 4 E2B, Qwen3.5-2B, a ~1B fallback) and Qwen3Guard-0.6B through LiteRT-LM on CPU and GPU. Measures: load time, cold prefill of a 1,000-token system prompt, warm first-token time, decode tokens/s, peak memory with chat + guard loaded together, tokens-per-word for English, Urdu, Roman Urdu. Converts Qwen3Guard to .litertlm if no published file exists. Generates replies to 60 prompts (20 per language) for blind rating by the clinician. Results go into the plan; D4, D5, D7 and the context window are confirmed with you before S6.",
      "files": [
        "benchmark/build.gradle.kts",
        "benchmark/src/androidTest/kotlin/pk/yarsun/app/ModelBenchmark.kt",
        "docs/evaluation/model-spike.md"
      ],
      "tests": {
        "na": "Measurement spike: the benchmark itself is the check, and its numbers decide D4/D5"
      },
      "standards": [
        "performance"
      ],
      "doneWhen": "docs/evaluation/model-spike.md has every metric for every candidate on the reference phone and the clinician's ratings; you confirm the model choice",
      "estimate": {
        "low": 12,
        "likely": 22,
        "high": 44
      }
    },
    {
      "dependsOn": [
        "S1"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S3",
      "title": "Encrypted database and vault",
      "detail": "vault: 32 random bytes from SecureRandom wrapped by an AES-256-GCM Keystore key; data: Room 2.8.5 on sqlcipher-android via SupportOpenHelperFactory, schema v1 (dataModel), exported schema, PRAGMA secure_delete; manifest allowBackup=false and dataExtractionRules excluding everything.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/vault/",
        "app/src/main/kotlin/pk/yarsun/app/data/",
        "app/schemas/",
        "app/src/main/AndroidManifest.xml",
        "app/src/main/res/xml/data_extraction_rules.xml"
      ],
      "tests": [
        {
          "test": "The database file on disk does not start with 'SQLite format 3' and plain SQLite can't open it",
          "kind": "security",
          "seam": "data DAOs and vault"
        },
        {
          "test": "After vault.destroy() the database can't be opened",
          "kind": "security",
          "seam": "data DAOs and vault"
        },
        {
          "test": "PRAGMA secure_delete reads back as on for the opened database (T13)",
          "kind": "security",
          "seam": "data DAOs and vault"
        },
        {
          "test": "Backup and data-extraction rules exclude all app data",
          "kind": "security",
          "seam": "data DAOs and vault"
        },
        {
          "test": "A mood outside 1-5 is rejected by the database",
          "kind": "integration",
          "seam": "data DAOs and vault"
        },
        {
          "test": "Deleting a conversation deletes its messages and summary",
          "kind": "integration",
          "seam": "data DAOs and vault"
        }
      ],
      "standards": [
        "data-and-apis"
      ],
      "doneWhen": "Instrumented tests pass on the emulator; T2 attack tests were seen failing before the mitigation",
      "estimate": {
        "low": 10,
        "likely": 16,
        "high": 32
      }
    },
    {
      "dependsOn": [
        "S1"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S4",
      "title": "App shell, settings, theme and languages",
      "detail": "Single AppCompatActivity with Compose and Navigation 3; manual AppGraph; settings on DataStore; English and Urdu string resources; per-app language switch; RTL; Noto Nastaliq with the line-height fix; FLAG_SECURE; GetHelpButton slot on every top-level screen (placeholder target until S8); logging wrapper that takes event names and ids only; banned-terms test over all strings. Accessibility checks via androidx.compose.ui:ui-test-junit4-accessibility (enableAccessibilityChecks(), Compose 1.8+), test-only.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/app/",
        "app/src/main/kotlin/pk/yarsun/app/ui/",
        "app/src/main/kotlin/pk/yarsun/app/settings/",
        "app/src/main/res/values/strings.xml",
        "app/src/main/res/values-ur/strings.xml",
        "app/src/test/pk/yarsun/app/BannedTermsTest.kt",
        "app/src/androidTest/pk/yarsun/app/ui/AccessibilityChecksTest.kt"
      ],
      "tests": [
        {
          "test": "No string resource or prompt contains therapy/therapist/counselor/psychologist or their Urdu and Roman Urdu equivalents",
          "kind": "unit",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Only the launcher activity is exported in the merged manifest",
          "kind": "security",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "The window has FLAG_SECURE",
          "kind": "security",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Switching to Urdu lays out every top-level screen right-to-left",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Get help button is present on every top-level screen",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Every top-level screen passes Compose accessibility checks (labels, contrast, touch targets) in English and Urdu at 200% font scale (A11); new screens join this test as later steps add them",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        }
      ],
      "standards": [
        "docs-and-setup"
      ],
      "doneWhen": "UI tests pass; you review screenshots of both languages at 100% and 200% font size",
      "estimate": {
        "low": 10,
        "likely": 18,
        "high": 34
      }
    },
    {
      "dependsOn": [
        "S2",
        "S4"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S5",
      "title": "Model store: download, verify, device check",
      "detail": "Built-in manifest; WorkManager download with foreground notification, Range resume into a .part file, streaming SHA-256, atomic move into app-private files/models; storage and RAM checks with plain-language messages.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/model/store/",
        "app/src/main/assets/models.json"
      ],
      "tests": [
        {
          "test": "A download whose bytes don't match the manifest SHA-256 is deleted and reported",
          "kind": "security",
          "seam": "modelstore: ensure()"
        },
        {
          "test": "A manifest entry with a non-https or non-allowlisted host fails validation",
          "kind": "security",
          "seam": "modelstore: ensure()"
        },
        {
          "test": "An interrupted download resumes from the saved offset",
          "kind": "integration",
          "seam": "modelstore: ensure()"
        },
        {
          "test": "Not enough free storage is reported before downloading",
          "kind": "unit",
          "seam": "modelstore: ensure()"
        },
        {
          "test": "A phone below the model's minimum RAM gets the explanation instead of a load attempt",
          "kind": "unit",
          "seam": "modelstore: ensure()"
        }
      ],
      "standards": [
        "performance",
        "operability"
      ],
      "doneWhen": "Tests pass with MockWebServer; one real download on the reference phone verifies and loads",
      "estimate": {
        "low": 8,
        "likely": 14,
        "high": 28
      }
    },
    {
      "dependsOn": [
        "S5"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S6",
      "title": "llm module: LiteRT-LM engine wrapper",
      "detail": "Engine and Conversation interfaces; LiteRT-LM implementation with GPU-then-CPU fallback, streaming Flow, cancel, output token cap, thermal listener; a fake engine for tests; contract suite run against both.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/model/llm/",
        "app/src/androidTest/kotlin/pk/yarsun/app/EngineContractTest.kt",
        "app/src/testFixtures or test/pk/yarsun/app/FakeEngine.kt"
      ],
      "tests": [
        {
          "test": "Contract: a prompt streams tokens then completes, on both fake and real engine",
          "kind": "contract",
          "seam": "llm: Engine / Conversation"
        },
        {
          "test": "A GPU init failure falls back to CPU",
          "kind": "unit",
          "seam": "llm: Engine / Conversation"
        },
        {
          "test": "cancel() stops the stream",
          "kind": "unit",
          "seam": "llm: Engine / Conversation"
        },
        {
          "test": "Output stops at the token cap",
          "kind": "unit",
          "seam": "llm: Engine / Conversation"
        }
      ],
      "standards": [
        "performance"
      ],
      "doneWhen": "Contract suite passes on the reference phone with the chosen model; unit tests pass in CI",
      "estimate": {
        "low": 12,
        "likely": 20,
        "high": 40
      }
    },
    {
      "dependsOn": [
        "S6"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S7",
      "title": "safety module",
      "detail": "Normalisation (Unicode NFKC, Arabic/Urdu letter variants such as ي/ی and ك/ک, diacritics, Roman Urdu spelling folding); clinician lexicon in assets; guard-model classification per D5; session risk that only rises until the check-in clears it; reply screen for method/location details, phone numbers, diet/weight advice, claims of being human or licensed, encouraging secrecy. Clinician supplies the seed red-team set (>= 30 per language) before this step starts.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/safety/",
        "app/src/main/assets/safety_lexicon.json",
        "app/src/test/resources/safety/"
      ],
      "tests": [
        {
          "test": "Every clinician-labelled crisis message in the seed set (EN, UR, Roman Urdu) is flagged",
          "kind": "security",
          "seam": "safety: assessUserMessage(), screenReply()"
        },
        {
          "test": "A reply containing a phone number is replaced with a pointer to Get help",
          "kind": "security",
          "seam": "safety: assessUserMessage(), screenReply()"
        },
        {
          "test": "A reply describing a method or location is replaced",
          "kind": "security",
          "seam": "safety: assessUserMessage(), screenReply()"
        },
        {
          "test": "A reply claiming to be human or a licensed professional is replaced",
          "kind": "security",
          "seam": "safety: assessUserMessage(), screenReply()"
        },
        {
          "test": "Normalising text twice gives the same result as once",
          "kind": "property",
          "seam": "safety: assessUserMessage(), screenReply()"
        },
        {
          "test": "Session risk never decreases without a completed check-in",
          "kind": "unit",
          "seam": "safety: assessUserMessage(), screenReply()"
        },
        {
          "test": "If the guard model throws, the lexicon still runs and the turn is marked degraded",
          "kind": "unit",
          "seam": "safety: assessUserMessage(), screenReply()"
        }
      ],
      "standards": [],
      "doneWhen": "All seed-set tests pass on the real guard model on the reference phone; clinician reviews the false-alarm list",
      "estimate": {
        "low": 16,
        "likely": 26,
        "high": 50
      }
    },
    {
      "dependsOn": [
        "S3",
        "S4"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S8",
      "title": "crisis module: Get help, check-in, safety plan",
      "detail": "Get help screen from the helpline file (Pakistan, verified and dated by the clinician; Umang marked not for active risk; emergency 1122/15); tap opens the dialer; clinician-written check-in scripts in three languages; safety plan editor per D11; grounding exercise text from the clinician. No model dependency.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/crisis/",
        "app/src/main/assets/helplines.json",
        "app/src/main/res/values*/crisis_strings.xml"
      ],
      "tests": [
        {
          "test": "Get help opens and shows helplines with no model downloaded and the network off",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "The helpline file passes schema validation and every number is a valid Pakistan number or short code",
          "kind": "unit",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Tapping a helpline opens the dialer prefilled, never places the call",
          "kind": "security",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Safety plan sections save and reload",
          "kind": "integration",
          "seam": "data DAOs and vault"
        }
      ],
      "standards": [],
      "doneWhen": "A3 passes on the emulator; clinician signs off the content in all three languages",
      "estimate": {
        "low": 12,
        "likely": 20,
        "high": 36
      }
    },
    {
      "dependsOn": [
        "S7",
        "S8"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S9",
      "title": "chat core: ChatSession orchestration",
      "detail": "Save user message -> safety check -> generate -> screen each sentence -> save; on risk, emit CheckIn and pause; persona prompt written with the clinician (short replies, mirror the user's language, encourage people in their life, never claim to be human or licensed); memory inserted as quoted data; context-window manager folds old turns into a running summary; disclosure and break schedule with an injected clock; OOM handling; generation inside a foreground service while briefly backgrounded.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/chat/",
        "app/src/main/assets/prompts/"
      ],
      "tests": [
        {
          "test": "Killing the session mid-reply leaves the user message and an interrupted partial reply (A5)",
          "kind": "acceptance",
          "seam": "chat: ChatSession.send()"
        },
        {
          "test": "A risky message produces a CheckIn event and no model call",
          "kind": "security",
          "seam": "chat: ChatSession.send()"
        },
        {
          "test": "If the safety module throws, no model reply is shown and Get help is offered",
          "kind": "security",
          "seam": "chat: ChatSession.send()"
        },
        {
          "test": "Memory text containing instructions is inserted only inside the quoted data block",
          "kind": "security",
          "seam": "chat: ChatSession.send()"
        },
        {
          "test": "No risk score or flag is written to the database",
          "kind": "security",
          "seam": "chat: ChatSession.send()"
        },
        {
          "test": "When the conversation exceeds the window, older turns are summarised and the turn still succeeds",
          "kind": "unit",
          "seam": "chat: ChatSession.send()"
        },
        {
          "test": "If the engine runs out of memory mid-reply, it is unloaded, the user message is kept and the user is told (T15)",
          "kind": "unit",
          "seam": "chat: ChatSession.send()"
        },
        {
          "test": "The AI notice is emitted at session start, after 3 h continuous use, after 7 days idle and when asked 'are you human'",
          "kind": "unit",
          "seam": "chat: ChatSession.send()"
        }
      ],
      "standards": [
        "operability"
      ],
      "doneWhen": "Tests pass with the fake engine; A2 passes on the reference phone with the real models",
      "estimate": {
        "low": 14,
        "likely": 24,
        "high": 46
      }
    },
    {
      "dependsOn": [
        "S9"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S10",
      "title": "Chat screen",
      "detail": "Streaming bubbles throttled to ~30 ms; RTL; 1,000-character input with counter; no-personalised-learning keyboard flag; Report reply (email draft with only that reply); TalkBack announces complete replies; interrupted and replaced states shown.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/chat/ui/"
      ],
      "tests": [
        {
          "test": "Report reply builds an email intent whose body is only that reply's text (A13, T17)",
          "kind": "security",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Input over 1,000 characters can't be sent",
          "kind": "unit",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "The chat input requests no personalised learning",
          "kind": "security",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "A completed reply is announced once to accessibility services",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        }
      ],
      "standards": [
        "run-like-a-user"
      ],
      "doneWhen": "UI tests pass; you walk a 10-turn chat in each language on the reference phone and approve screenshots",
      "estimate": {
        "low": 12,
        "likely": 20,
        "high": 36
      }
    },
    {
      "dependsOn": [
        "S9"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S11",
      "title": "memory module",
      "detail": "Summary job (expedited WorkManager, idempotent by conversation id) with JSON-constrained output validated against a schema and length caps; About me note; MemoryScreen to view, edit, delete, switch off; token budget enforced when building the next session's context.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/memory/"
      ],
      "tests": [
        {
          "test": "A deleted summary never appears in the next session's context (A7)",
          "kind": "acceptance",
          "seam": "memory: contextForNewSession(), summarise()"
        },
        {
          "test": "With memory switched off, the context is empty (A7)",
          "kind": "acceptance",
          "seam": "memory: contextForNewSession(), summarise()"
        },
        {
          "test": "Malformed or oversized model output writes no memory",
          "kind": "security",
          "seam": "memory: contextForNewSession(), summarise()"
        },
        {
          "test": "Running the summary job twice for one conversation stores one summary",
          "kind": "unit",
          "seam": "memory: contextForNewSession(), summarise()"
        },
        {
          "test": "The memory context never exceeds its token budget for any set of summaries",
          "kind": "property",
          "seam": "memory: contextForNewSession(), summarise()"
        }
      ],
      "standards": [
        "operability"
      ],
      "doneWhen": "Tests pass; on the phone, a second session refers to something from the first, and deleting it removes that",
      "estimate": {
        "low": 12,
        "likely": 20,
        "high": 36
      }
    },
    {
      "dependsOn": [
        "S3",
        "S4"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S12",
      "title": "Mood check-ins",
      "detail": "Check-in screen (5-point scale, fixed tags, optional note), history by local day; wording reviewed against D1 (self-reflection, no scores or symptoms).",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/mood/"
      ],
      "tests": [
        {
          "test": "A check-in made just after local midnight appears on the new local day",
          "kind": "unit",
          "seam": "data DAOs and vault"
        },
        {
          "test": "History lists check-ins newest first",
          "kind": "integration",
          "seam": "data DAOs and vault"
        },
        {
          "test": "Saving a check-in with a note shows it in history",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        }
      ],
      "standards": [],
      "doneWhen": "A10 passes on the emulator in both languages",
      "estimate": {
        "low": 8,
        "likely": 12,
        "high": 24
      }
    },
    {
      "dependsOn": [
        "S5",
        "S8"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S13",
      "title": "Onboarding",
      "detail": "Language, 18+ confirmation, AI notice, 'not a medical device / not therapy' notice, privacy explanation (what stays on the phone, the one-time Hugging Face download, keyboards), model download with Wi-Fi advice, optional lock, crash-report consent off by default, licences screen (SQLCipher notice, model licences, font).",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/onboarding/"
      ],
      "tests": [
        {
          "test": "Chat can't be reached until every onboarding step is done",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Crash-report consent defaults to off",
          "kind": "security",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "Declining the 18+ confirmation ends onboarding without access",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        }
      ],
      "standards": [
        "run-like-a-user"
      ],
      "doneWhen": "A1 passes; you walk onboarding on a fresh install in both languages",
      "estimate": {
        "low": 10,
        "likely": 16,
        "high": 30
      }
    },
    {
      "dependsOn": [
        "S3",
        "S13"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S14",
      "title": "App lock and delete everything",
      "detail": "BiometricPrompt (BIOMETRIC_STRONG or device credential); when on, re-wrap the DB key with an auth-bound Keystore key (no invalidation on new fingerprint enrolment); lock when backgrounded; delete-all destroys keys first, then database, settings and summaries; returns to onboarding.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/vault/",
        "app/src/main/kotlin/pk/yarsun/app/app/LockGate.kt",
        "app/src/main/kotlin/pk/yarsun/app/settings/ui/"
      ],
      "tests": [
        {
          "test": "With the lock on, the database key can't be unwrapped without authentication",
          "kind": "security",
          "seam": "data DAOs and vault"
        },
        {
          "test": "Turning the lock on and off keeps all data readable after authentication",
          "kind": "integration",
          "seam": "data DAOs and vault"
        },
        {
          "test": "After delete-all the old database file can't be opened",
          "kind": "security",
          "seam": "data DAOs and vault"
        },
        {
          "test": "Delete-all removes the Keystore key before any file, so a delete interrupted after the key step still leaves the database unreadable (T13)",
          "kind": "security",
          "seam": "data DAOs and vault"
        },
        {
          "test": "Returning from background with the lock on shows the lock screen",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        }
      ],
      "standards": [],
      "doneWhen": "A8 and A9 pass on the reference phone with a real fingerprint and PIN",
      "estimate": {
        "low": 10,
        "likely": 16,
        "high": 32
      }
    },
    {
      "dependsOn": [
        "S11",
        "S12",
        "S8"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S15",
      "title": "Encrypted export and import",
      "detail": "File format v1 (interfaces); Argon2id tuned to ~1 s on the reference phone and never below OWASP minimum; Storage Access Framework for choosing the file (no storage permission); import validates size, version and schema, then writes everything in one transaction. First test proves lazysodium exposes Argon2id and secretstream on Android; if not, D8 returns to you.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/transfer/",
        "docs/export-format.md"
      ],
      "tests": [
        {
          "test": "lazysodium on Android derives an Argon2id key and round-trips a secretstream",
          "kind": "integration",
          "seam": "transfer: export(), import()"
        },
        {
          "test": "The Argon2id parameters written to the file header are at or above OWASP minimum (m >= 46 MiB, t >= 1), and a file whose header asks for less is refused (T8)",
          "kind": "security",
          "seam": "transfer: export(), import()"
        },
        {
          "test": "Export refuses a passphrase shorter than the minimum length (T8)",
          "kind": "unit",
          "seam": "transfer: export(), import()"
        },
        {
          "test": "After export and import, no passphrase or derived key is in the database, DataStore or app files (T8)",
          "kind": "security",
          "seam": "transfer: export(), import()"
        },
        {
          "test": "A file with one byte changed imports nothing",
          "kind": "security",
          "seam": "transfer: export(), import()"
        },
        {
          "test": "A wrong passphrase imports nothing and says the passphrase is wrong",
          "kind": "security",
          "seam": "transfer: export(), import()"
        },
        {
          "test": "A file over 200 MB is refused before decryption",
          "kind": "security",
          "seam": "transfer: export(), import()"
        },
        {
          "test": "An unknown file version is refused",
          "kind": "unit",
          "seam": "transfer: export(), import()"
        },
        {
          "test": "Export then import yields identical data",
          "kind": "property",
          "seam": "transfer: export(), import()"
        }
      ],
      "standards": [
        "data-and-apis"
      ],
      "doneWhen": "A6 passes between the emulator and the reference phone",
      "estimate": {
        "low": 12,
        "likely": 20,
        "high": 36
      }
    },
    {
      "dependsOn": [
        "S13"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S16",
      "title": "Opt-in crash reports",
      "detail": "ACRA with the email sender and dialog, enabled only when consent is on; report fields allowlisted; nothing sent without the user pressing send.",
      "files": [
        "app/src/main/kotlin/pk/yarsun/app/diagnostics/"
      ],
      "tests": [
        {
          "test": "A crash whose exception message contains user text produces a report without that text",
          "kind": "security",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "With consent off, a crash produces no report prompt",
          "kind": "security",
          "seam": "Compose screens via UI tests"
        }
      ],
      "standards": [
        "operability"
      ],
      "doneWhen": "Tests pass; a forced crash on the phone opens an email you inspect",
      "estimate": {
        "low": 6,
        "likely": 10,
        "high": 20
      }
    },
    {
      "dependsOn": [
        "S10",
        "S11",
        "S12",
        "S14",
        "S15",
        "S16"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S17",
      "title": "Release evaluation on the reference phone",
      "detail": "Full pipeline run of: the clinician's crisis set (direct, indirect, multi-turn; EN, UR, Roman Urdu; plus a translated subset of the CC BY Reddit C-SSRS data), the red-team harmful-reply set, 50 scripted latency turns per language, cold-start runs, a 30-minute network-silence session, thermal behaviour over 30 minutes. Fix what fails test-first, then rerun. Clinician signs off.",
      "files": [
        "benchmark/",
        "docs/evaluation/release-<version>.md"
      ],
      "tests": [
        {
          "test": "A4: 0 bytes sent over the network in a scripted session",
          "kind": "acceptance",
          "seam": "Compose screens via UI tests"
        },
        {
          "test": "A12: 95% of turns show first words within 2 s",
          "kind": "acceptance",
          "seam": "llm: Engine / Conversation"
        },
        {
          "test": "N3: crisis recall meets the Q27 target per language",
          "kind": "acceptance",
          "seam": "safety: assessUserMessage(), screenReply()"
        },
        {
          "test": "N4: 0 harmful replies reach the screen",
          "kind": "acceptance",
          "seam": "safety: assessUserMessage(), screenReply()"
        }
      ],
      "standards": [
        "performance",
        "run-like-a-user"
      ],
      "doneWhen": "docs/evaluation/release-<version>.md shows N1-N5 met with numbers, and the clinician's sign-off is recorded",
      "estimate": {
        "low": 16,
        "likely": 28,
        "high": 56
      }
    },
    {
      "dependsOn": [
        "S17"
      ],
      "status": "todo",
      "notes": "",
      "checkpoint": null,
      "id": "S18",
      "title": "Release preparation",
      "detail": "Privacy policy and published crisis protocol page; Play listing with the not-a-medical-device statement and a reminder to consult a professional; Data safety form (crash logs optional); health apps declaration (Stress Management, Relaxation); target audience 18+; country targeting per D2; R8, Baseline Profile, Play App Signing; MobSF scan of the release APK; lawyer review of wording; internal then closed testing track.",
      "files": [
        "docs/privacy-policy.md",
        "docs/crisis-protocol.md",
        "docs/runbook.md",
        "docs/release-checklist.md",
        "app/build.gradle.kts"
      ],
      "tests": {
        "na": "Store configuration and documents; replaced by the checklist and scans"
      },
      "standards": [
        "operability",
        "docs-and-setup"
      ],
      "doneWhen": "MobSF shows no high-severity findings; the release build installs from the Play internal track and passes the A1-A14 walk; every checklist item is ticked",
      "estimate": {
        "low": 10,
        "likely": 18,
        "high": 36
      }
    }
  ],
  "risks": [
    {
      "risk": "No candidate model gives good Urdu and Roman Urdu replies within 2 s and the memory of a 6 GB phone",
      "likelihood": "medium",
      "impact": "high",
      "mitigation": "S2 runs first and its numbers come back to you before the rest is built; options then: raise the minimum to 8 GB, a smaller model, or relax N1"
    },
    {
      "risk": "The guard model doesn't fit next to the chat model, or has no LiteRT-LM build",
      "likelihood": "medium",
      "impact": "high",
      "mitigation": "Measured in S2; D5 is revisited with numbers; lexicon and Get help remain regardless"
    },
    {
      "risk": "Crisis detection in Roman Urdu is weak (no public Roman Urdu suicidal-ideation dataset exists)",
      "likelihood": "high",
      "impact": "high",
      "mitigation": "Clinician-built test sets per language, release gate N3 per language, always-visible Get help"
    },
    {
      "risk": "Clinician time becomes the bottleneck (persona, lexicon, scripts, helplines, ratings, sign-off)",
      "likelihood": "medium",
      "impact": "medium",
      "mitigation": "Content requests listed per step so they can start early; estimates exclude clinician hours"
    },
    {
      "risk": "Legal exposure: PPC 325 in Pakistan, DRAP device rules, foreign laws if launched abroad",
      "likelihood": "medium",
      "impact": "high",
      "mitigation": "D1 wording, no risk log, D2 launch scope, lawyer review in S18 (cost not estimated)"
    },
    {
      "risk": "Play review rejects or delays (health declaration, AI content, closed-testing requirements for new developer accounts)",
      "likelihood": "medium",
      "impact": "medium",
      "mitigation": "Follow the researched policies; the calendar time for review and closed testing is not in the estimates"
    },
    {
      "risk": "Users come to depend on the app or treat it as a substitute for help",
      "likelihood": "medium",
      "impact": "high",
      "mitigation": "Disclosures, break reminders, persona that encourages people in their life, memory limits (APA)"
    },
    {
      "risk": "Helpline numbers go stale; without a server they only update with an app release",
      "likelihood": "medium",
      "impact": "high",
      "mitigation": "Clinician re-verifies and dates them every release (operations); Get help always lists 1122 and 15"
    },
    {
      "risk": "LiteRT-LM is 0.x and its API may change",
      "likelihood": "medium",
      "impact": "low",
      "mitigation": "Pinned version, one module owns it (llm)"
    },
    {
      "risk": "Estimates leave out clinician and lawyer time, app store review, device purchase and translation of Urdu strings",
      "likelihood": "high",
      "impact": "medium",
      "mitigation": "Listed here so the schedule accounts for them"
    },
    {
      "risk": "Google Play will require targetSdk 37 (Android 17); the app stays on 36 with Lint OldTargetApi off until then",
      "likelihood": "high",
      "impact": "medium",
      "mitigation": "When Play announces the API 37 deadline (its target-API page lists 36 by 2026-08-31 as of 2026-10-24), plan a step to research Android 17 behaviour changes, add an API 37 emulator image, move targetSdk to 37 and turn OldTargetApi back on"
    },
    {
      "risk": "detekt 2.0.0-alpha.6 is a pre-release: a rule may misbehave or its config keys may change before 2.0.0",
      "likelihood": "medium",
      "impact": "low",
      "mitigation": "Pinned exactly (lockfile + verification metadata); dev-only, never shipped; move to 2.0.0 stable when released and re-run detekt over the whole codebase"
    }
  ],
  "rejected": [
    {
      "option": "Cloud AI fallback when the phone is too slow",
      "why": "Breaks the privacy promise (Q8)"
    },
    {
      "option": "Accounts, sync or any server storing user data",
      "why": "Q8; also removes a whole class of breaches"
    },
    {
      "option": "llama.cpp as a second runtime",
      "why": "D4: two native runtimes for one developer; GGUF advisories"
    },
    {
      "option": "Gemini Nano / AICore",
      "why": "Recent flagships only; excludes the 6 GB target phones"
    },
    {
      "option": "Embedding search over all past messages (unless you pick D6 option 2)",
      "why": "Third model in memory and a pre-v1 vector library; summaries meet the need"
    },
    {
      "option": "Storing a risk score or crisis history",
      "why": "PPC 325: such a record could harm the user"
    },
    {
      "option": "Automatically contacting emergency services or a trusted contact",
      "why": "PPC 325 and consent; the user dials, the app never does"
    },
    {
      "option": "Reminder notifications (e.g. daily mood reminders)",
      "why": "Not requested, and notification text can leak on the lock screen"
    },
    {
      "option": "Remotely updated helpline list",
      "why": "Needs a server (Q8); updates ship with releases instead"
    },
    {
      "option": "Bundling Find A Helpline data",
      "why": "Its terms forbid copying and AI use without a commercial licence"
    },
    {
      "option": "Using C-SSRS or the Stanley-Brown form without permission",
      "why": "Copyright and licence terms (D11)"
    },
    {
      "option": "Fine-tuning a model for v1",
      "why": "No commercially licensed Urdu counselling data exists; prompt design plus evaluation comes first"
    },
    {
      "option": "Hilt dependency injection",
      "why": "Google lists manual DI as fine for simple apps; one AppGraph keeps concepts few for a new developer"
    },
    {
      "option": "EncryptedSharedPreferences",
      "why": "Deprecated; settings hold nothing sensitive and the DB key goes through the Keystore directly"
    },
    {
      "option": "Multi-module Gradle project",
      "why": "Package-level modules give the boundaries; separate Gradle modules add build complexity with no driver (one benchmark module is the exception)"
    },
    {
      "option": "Firebase or any analytics SDK",
      "why": "Q8"
    }
  ],
  "changelog": [
    {
      "date": "2026-10-24",
      "change": "Plan started; first round of questions",
      "by": "claude"
    },
    {
      "date": "2026-10-24",
      "change": "Recorded answers Q0-Q15; effort set to thorough; second round Q16-Q21 asked; research started",
      "by": "claude"
    },
    {
      "date": "2026-10-24",
      "change": "Recorded Q16-Q23. Q24 left open: the user answered 'proper memory management the way an industry level app would handle it', which needs a follow-up (they may mean context/long-term memory, not message count). RESUME HERE: Q16 'worldwide' conflicts with the legal research (IL/NV/TN bans, EU MDR on mood tracking): raise it as a decision. Then draft requirements, decisions D1-D12, architecture, security, quality, testing, steps S1-S18 (design notes drafted in the session).",
      "by": "claude"
    },
    {
      "date": "2026-10-24",
      "change": "Recorded Q24 (industry-level memory -> D6 and F7/F8). Drafted full design: requirements, decisions D1-D12, architecture, threat model T1-T17, quality, testing, steps S1-S18, risks, rejected. New questions Q25-Q28. D2 raises the conflict between 'worldwide' (Q16) and the legal/helpline findings.",
      "by": "claude"
    },
    {
      "date": "2026-10-24",
      "change": "User answered Q25-Q28 and accepted all twelve recommendations D1-D12 (incl. Pakistan-first launch). App name YarSun. Asked Q29 (verify reference phone specs) and Q30 (package id).",
      "by": "user"
    },
    {
      "date": "2026-10-24",
      "change": "Q29 confirmed (Realme C37: 6 GB, Helio G85, Android 12) and Q30 package id pk.yarsun.app. Review pass: package placeholders filled; all questions answered and decisions decided.",
      "by": "user"
    },
    {
      "date": "2026-10-24",
      "change": "Final review: every threat mitigation and acceptance criterion now has a test that checks it. Added tests for the export KDF floor, minimum passphrase length and passphrase never stored (T8), secure_delete and key-first delete-all (T13), out-of-memory handling (T15), and automated Compose accessibility checks at 200% in both languages (A11, sourced). S1 doneWhen now proves dependency verification fails on a bad checksum (T16). Acceptance ids A5, A7, A13 tagged on the tests that check them.",
      "by": "claude"
    },
    {
      "date": "2026-10-24",
      "change": "S1 deviation decided by the user: (1) detekt 2.0.0-alpha.6 instead of 1.23.8, which cannot run on JDK 25 (D10 unchanged: detekt still runs); (2) targetSdk stays 36 with Lint OldTargetApi turned off, and a risk added to move to 37 when Play announces its deadline; (3) Lint NewerVersionAvailable and GradleDependency turned off so builds stay reproducible (advisories still covered by OSV-Scanner). Also from S1: compileSdk 37 is required by Compose ui 1.12.1 (targetSdk unaffected); code goes to a new public GitHub repo, illeniall239/yarsun (user choice).",
      "by": "user"
    }
  ]
};
