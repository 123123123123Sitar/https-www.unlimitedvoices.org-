/** Extended per-course detail content for the course template pages. */

export interface CourseModule {
  title: string;
  lessons: string;
  comingSoon?: boolean;
}

export interface CourseDetailContent {
  whatYouLearn: string[];
  whoFor: string;
  modules: CourseModule[];
}

export const courseDetails: Record<string, CourseDetailContent> = {
  "python-course": {
    whatYouLearn: [
      "Variables, data types, and clean, readable code",
      "Loops, conditionals, and functions you can reuse",
      "Reading and writing files to handle real data",
      "Core data structures: lists, dictionaries, sets, and tuples",
      "Common patterns programmers reach for every day",
      "Small projects that automate everyday tasks",
      "Simple data cleaning, step by step",
      "Quick quizzes throughout to lock in each idea",
    ],
    whoFor:
      "Made for total beginners and early-intermediate learners. If you have never written a line of code, you will be fine here. If you know a little already, you can move faster and skip ahead.",
    modules: [
      { title: "Getting Started with Python", lessons: "Set up, run your first program, and learn how Python reads your code." },
      { title: "Variables and Data Types", lessons: "Store text and numbers, name things well, and avoid common mistakes." },
      { title: "Logic and Loops", lessons: "Make decisions with conditionals and repeat work with for and while loops." },
      { title: "Functions and Reuse", lessons: "Write functions, pass arguments, return values, and keep code tidy." },
      { title: "Data Structures", lessons: "Use lists, dictionaries, sets, and tuples to organize information." },
      { title: "Files and Real Data", lessons: "Open, read, and write files, then clean messy data into something useful." },
      { title: "Mini-Projects", lessons: "Build small tools that automate tasks, with quizzes to check your work." },
    ],
  },
  "java-course": {
    whatYouLearn: [
      "Java syntax, types, and control flow from scratch",
      "Methods, parameters, and how to structure programs",
      "Classes, objects, and object-oriented thinking",
      "Inheritance, interfaces, and clean design patterns",
      "Collections like lists, maps, and sets",
      "Exam-style practice for AP CS and contests",
      "Interview questions with worked solutions",
      "Capstone projects that pull it all together",
    ],
    whoFor:
      "Great for students prepping for AP Computer Science, USACO, or the basics behind Android and backend work. Start at the beginning, or jump to the topics you need most.",
    modules: [
      { title: "Java Basics", lessons: "Install the tools, write your first class, and run your first program." },
      { title: "Types and Variables", lessons: "Work with numbers, text, and booleans, and understand how Java handles them." },
      { title: "Control Flow", lessons: "Branch with if and switch, and repeat work with loops." },
      { title: "Methods", lessons: "Break programs into methods with parameters and return values." },
      { title: "Classes and Objects", lessons: "Model real things with classes, fields, and constructors." },
      { title: "Inheritance and Interfaces", lessons: "Share behavior with inheritance and interfaces, and avoid common traps." },
      { title: "Collections", lessons: "Store and search data with ArrayList, HashMap, and Set." },
      { title: "Common Design Patterns", lessons: "Recognize and apply a few patterns that keep code clean." },
      { title: "Exam Practice", lessons: "Work through AP CS and contest-style problems with full explanations." },
      { title: "Interview Practice", lessons: "Solve common interview questions and learn how to talk through them." },
      { title: "Capstone Part 1", lessons: "Plan and start a larger project that uses everything so far." },
      { title: "Capstone Part 2", lessons: "Finish, test, and polish your capstone project." },
    ],
  },
  "data-science-course": {
    whatYouLearn: [
      "How to acquire and load data from common sources",
      "Cleaning and preparing messy, real-world datasets",
      "Exploratory analysis to find patterns and surprises",
      "NumPy and pandas through hands-on labs",
      "Working with retail and sensor datasets",
      "Querying data in a SQL sandbox",
      "Clear charts that communicate your findings",
      "A full capstone plus interview prep and a portfolio piece",
    ],
    whoFor:
      "Best for learners who are comfortable with basic Python. If you have finished a beginner Python course or know loops, functions, and lists, you are ready to start.",
    modules: [
      { title: "Getting Data", lessons: "Load data from files and sources, and understand its shape." },
      { title: "Cleaning Data", lessons: "Fix missing values, fix types, and prepare data for analysis." },
      { title: "Exploratory Analysis", lessons: "Summarize, group, and explore data to find what matters." },
      { title: "NumPy Foundations", lessons: "Work with arrays and fast numeric operations through labs." },
      { title: "pandas in Practice", lessons: "Filter, join, and reshape data using a retail dataset." },
      { title: "Sensor Data Lab", lessons: "Analyze time-based sensor data and spot trends." },
      { title: "SQL Sandbox", lessons: "Query tables, join data, and answer questions with SQL." },
      { title: "Visualization", lessons: "Build charts that make your results easy to understand." },
      { title: "Capstone Project", lessons: "Take a dataset from raw to insight, end to end." },
      { title: "Interview and Portfolio", lessons: "Prep for interviews and turn your capstone into a portfolio piece." },
    ],
  },
  "sat-course": {
    whatYouLearn: [
      "Two-module adaptive practice tests, just like the real thing",
      "A Math route that adapts from 15 to 22 questions in 35 minutes",
      "A Reading and Writing route from 18 to 27 questions in 32 minutes",
      "Autosave and resume so you never lose your place",
      "Clean math display with KaTeX for every problem",
      "Six focused video modules with per-lesson timing",
      "Strategy for pacing, guessing, and test-day nerves",
      "Steady progress toward your target score",
    ],
    whoFor:
      "For any student taking the Digital SAT. Whether you are starting early or doing a final review, the adaptive simulators and videos meet you where you are.",
    modules: [
      { title: "Algebra Foundations", lessons: "Linear equations, systems, and the core algebra the test rewards." },
      { title: "Advanced Math", lessons: "Quadratics, functions, and the harder math topics, step by step." },
      { title: "Problem Solving & Data", lessons: "Ratios, percentages, statistics, and reading data from charts.", comingSoon: true },
      { title: "Craft & Structure", lessons: "Vocabulary in context, purpose, and how passages fit together." },
      { title: "Standard English Conventions", lessons: "Grammar, punctuation, and sentence structure made simple.", comingSoon: true },
      { title: "Test-Day Strategy", lessons: "Pacing, smart guessing, and a calm plan for the real test." },
    ],
  },
};
