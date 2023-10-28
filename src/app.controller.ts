import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {

  @Redirect("https://store.goldbearing.kz/public/caeymjctzoogdnpmg8183jjdsm73d2k5", 301)
  @Get()
  redirect() {}
}
