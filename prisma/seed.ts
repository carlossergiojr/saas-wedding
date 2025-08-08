import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create sample wedding
  await prisma.wedding.upsert({
    where: { id: 'sample-wedding-id' },
    update: {},
    create: {
      id: 'sample-wedding-id',
      title: 'John & Jane Wedding',
      date: new Date('2024-12-31'),
      location: 'Beautiful Beach Resort',
      description: 'A magical beach wedding celebration',
    },
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
