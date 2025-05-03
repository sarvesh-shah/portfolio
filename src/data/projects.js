const projects = [
  {
    title: "Heart Disease Prediction with ML",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "SMOTE", "K-Fold", "Decision Tree", "Naïve Bayes"],
    description:
      "Developed ML models to predict heart disease using Decision Tree and Naïve Bayes. Applied SMOTE, normalization, and K-Fold CV. Achieved 86.1% accuracy.",
    date: "Mar 2025 – Apr 2025",
    image: "/assets/images/heart-ml.jpg", // 👈 Replace with your own
    github: "https://github.com/yourusername/heart-disease-prediction"
  },
  {
    title: "DynamoDB Query & Scan Optimization",
    tech: ["DynamoDB", "AWS", "GSI", "NoSQL"],
    description:
      "Benchmarked DynamoDB’s Query vs Scan ops. Used GSIs and parallel scans to boost performance and reduce costs.",
    date: "Sep 2024 – Dec 2024",
    image: "/assets/images/dynamodb-opt.jpg", // 👈 Replace with actual image
    github: "https://github.com/yourusername/dynamodb-optimization"
  },
  {
    title: "Sentiment Analysis Web App",
    tech: ["Flask", "MySQL", "TextBlob", "Spacy", "NLP"],
    description:
      "Built a web app for analyzing product reviews. Achieved 90% accuracy using sentiment classification with NLP and rendered insights graphically.",
    date: "Jan 2022 – Apr 2022",
    image: "/assets/images/sentiment-app.jpg", // 👈 Replace with actual image
    github: "https://github.com/yourusername/sentiment-analysis"
  }
];

export default projects;
