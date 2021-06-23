import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    // pass PrismaClientOptions e.g. logging levels or error formatting
    super();
  }
}
