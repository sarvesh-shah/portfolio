const projects = [
  {
    title: "Heart Disease Prediction with ML",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "SMOTE", "K-Fold", "Decision Tree", "Naïve Bayes"],
    description:
      "Developed ML models to predict heart disease using Decision Tree and Naïve Bayes. Applied SMOTE, normalization, and K-Fold CV. Achieved 86.1% accuracy.",
    date: "Mar 2025 – Apr 2025",
    image: `${process.env.PUBLIC_URL}/assets/images/heart-ml.jpg`,
  },
  {
    title: "Find Your Flight - Interactive Airport Explorer",
    date: "Jan 2025 – March 2025",
    description: "Built a dynamic full-stack web app for exploring global airlines, routes, and airport data. Integrated Leaflet map, weather API, and animated UI.",
    tech: ["JavaScript", "Node.js", "PostgreSQL", "Leaflet", "REST API", "HTML", "CSS"],
    github: "https://github.com/sarvesh-shah/Find-Your-Flight",
    image: `${process.env.PUBLIC_URL}/assets/images/find-your-flight.png`
  },
  {
    title: "DynamoDB Query & Scan Optimization",
    tech: ["DynamoDB", "AWS", "GSI", "NoSQL"],
    description:
      "Benchmarked DynamoDB’s Query vs Scan ops. Used GSIs and parallel scans to boost performance and reduce costs.",
    date: "Sep 2024 – Dec 2024",
    image: `${process.env.PUBLIC_URL}/assets/images/dynamodb-opt.png`,
    tag: "Research"
  },
  {
    title: "Sentiment Analysis Web App",
    tech: ["Flask", "MySQL", "TextBlob", "Spacy", "NLP"],
    description:
      "Built a web app for analyzing product reviews. Achieved 90% accuracy using sentiment classification with NLP and rendered insights graphically.",
    date: "Jan 2022 – Apr 2022",
    image: `${process.env.PUBLIC_URL}/assets/images/sentiment-app.png`, // 👈 Replace with actual image
    github: "https://github.com/sarvesh-shah/sentiment_analysis",
    tag: "Published",
    link: "https://www.jetir.org/papers/JETIR2305C24.pdf"
  }
];

export default projects;
