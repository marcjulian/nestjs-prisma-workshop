import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class PrismaClientExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
