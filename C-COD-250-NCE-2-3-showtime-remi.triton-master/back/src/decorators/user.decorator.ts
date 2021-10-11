import { createParamDecorator, ExecutionContext } from '@nestjs/common';
//Décorateur récupérable via  @User(), by John
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request.user);
    return request.user;
  },
);
