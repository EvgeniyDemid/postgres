import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { CreateUserDto } from 'src/modules/users/userDto/createUserDto';
import { UsersService } from 'src/modules/users/users.service';

const app = 'http://localhost:4000'
const user: CreateUserDto ={
  email:'test@test.ru',
  password:'We67!qwqw233DDF@}',
  firstName:'firstName',
  lastName:'lastName',
  address:'address',
  city:'city',
  country:'country',
  phone:'79278753544'
};

beforeAll(async()=>{

})

describe('AppController (e2e)', () => {
it('/ (GET)', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('The server is running');
  });
});
describe("CreateUser",()=>{
it("New user",()=>{

  return request(app)
  .post('/users')
  .set('Content-Type','application/json')
  .send(user)
  .expect(({body})=>{
    console.log(body)
    expect(body.id).toBeDefined()
    expect(body.email).toEqual(user.email)
    expect(body.firstName).toEqual(user.firstName)
    expect(body.lastName).toEqual(user.lastName)
    expect(body.address).toEqual(user.address)
    expect(body.city).toEqual(user.city)
    expect(body.phone).toEqual(user.phone)
    expect(body.password).toBeUndefined()
  })
  .expect(HttpStatus.CREATED)
})
})
describe("Dublicate User",()=>{
  it("New user",()=>{

    return request(app)
    .post('/users')
    .set('Content-Type','application/json')
    .send(user)
    .expect(HttpStatus.CONFLICT)
  })
  })
