import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {

  @Redirect("https://store.goldbearing.kz/public/8gruwz57s3rnhubyk3meghiidfh3tbiw")
  @Get()
  redirect() {}
}