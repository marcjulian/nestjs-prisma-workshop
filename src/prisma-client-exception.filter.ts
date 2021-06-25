import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    switch (exception.code) {
      case 'P2002':
        // TODO return conflict response
        break;
      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }
}