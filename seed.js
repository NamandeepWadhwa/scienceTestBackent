const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

// Predefined list of relevant tags
const tagsList = [
  "Technology",
  "Programming",
  "JavaScript",
  "Web Development",
  "React",
  "Node.js",
  "Database",
  "Software Engineering",
  "AI",
  "Cloud Computing",
];

const createDummyUsers = async (numUsers = 10) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    users.push({
      email: faker.internet.email(),
    });
  }



  // Insert users in bulk
  await prisma.user.createMany({
    data: users,
  });

  console.log(`Successfully created ${numUsers} dummy users.`);
};

// Create dummy posts with upvotes and other fields
const generateDummyPosts = async (numPosts = 1000) => {
  const users = await prisma.user.findMany(); // Get users for userId reference
  const blog = [];

  for (let i = 0; i < numPosts; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];

    // Select 2 random tags from the predefined list
    const randomTags = [];
    for (let j = 0; j < 2; j++) {
      const randomTag = tagsList[Math.floor(Math.random() * tagsList.length)];
      randomTags.push(randomTag);
    }

    blog.push({
      title: faker.lorem.words(3),
      content: faker.lorem.paragraphs(3),
      userId: randomUser.id, // Random user for each post
      tags: randomTags, // Randomly selected tags
      upvotes: Math.floor(Math.random() * 1000), // Random upvotes
      createdAt: faker.date.past(), // Random past date
      updatedAt: new Date(),
    });
  }

  // Insert posts in bulk
  await prisma.blog.createMany({
    data: blog,
  });

  console.log(`Successfully created ${numPosts} dummy blog posts.`);
};

// Run the seeder functions
const seedDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database.");

    await createDummyUsers(10); // Create 10 dummy users first
    await generateDummyPosts(1000); // Create 1000 dummy posts
  } catch (e) {
    console.error("Error seeding database:", e);
    throw e;
  } finally {
    await prisma.$disconnect();
    console.log("Disconnected from the database.");
  }
};

seedDatabase().catch((e) => {
  console.error(e);
  process.exit(1);
});

module.exports = seedDatabase;
