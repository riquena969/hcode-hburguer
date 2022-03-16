import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/admin.guard';
import { BreadService } from './bread.service';
import { CreateBreadDto } from './dto/create-bread.dto';
import { UpdateBreadDto } from './dto/update-bread.dto';

@ApiTags('bread')
@ApiBearerAuth()
@Controller('bread')
export class BreadController {
  constructor(private readonly breadService: BreadService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createBreadDto: CreateBreadDto) {
    return this.breadService.create(createBreadDto);
  }

  @UseGuards(AdminGuard)
  @Get()
  findAll() {
    return this.breadService.findAll();
  }

  @UseGuards(AdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breadService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBreadDto: UpdateBreadDto) {
    return this.breadService.update(+id, updateBreadDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breadService.remove(+id);
  }
}
