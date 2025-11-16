import prisma from '../config/prisma';
import { Prisma } from '../generated/prisma';

// Validación en código
export async function createUser() {
  try {
    await prisma.user.create({
      data: { email: 'duplicate@email.com', name: 'Juan', password: '123456' },
    });
  } catch (error) {

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        console.log('Email duplicado');
      }
    } else {
      console.error(error);
    }
  }
}
