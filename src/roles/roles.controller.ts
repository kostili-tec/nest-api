import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private roleSrvice: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleSrvice.createRole(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleSrvice.getRoleByValue(value);
  }
}
