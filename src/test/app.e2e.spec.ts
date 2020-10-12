import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CreateUserDto } from 'src/modules/users/userDto/createUserDto';
// import { DatabaseModule } from 'src/modules/database/database.module';
import { DatabaseModule } from '../../src/modules/database/database.module';
import { UsersModule } from '../../src/modules/users/users.module';
import { AppModule } from '../../src/app.module';
import { AppController } from '../../src/app.controller';


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

describe('Bootstrap', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppController],
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
    console.log("app!!!!!",app)
  });
 

it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('The server is running');
  });
});
// describe("CreateUser",()=>{
// it("New user",()=>{

//   return request(app)
//   .post('/users')
//   .set('Content-Type','application/json')
//   .send(user)
//   .expect(({body})=>{
//     console.log(body)
//     expect(body.id).toBeDefined()
//     expect(body.email).toEqual(user.email)
//     expect(body.firstName).toEqual(user.firstName)
//     expect(body.lastName).toEqual(user.lastName)
//     expect(body.address).toEqual(user.address)
//     expect(body.city).toEqual(user.city)
//     expect(body.phone).toEqual(user.phone)
//     expect(body.password).toBeUndefined()
//   })
//   .expect(HttpStatus.CREATED);
  
// })
// })
// describe("Dublicate User",()=>{
//   it("Dublicate User",()=>{

//     return request(app)
//     .post('/users')
//     .set('Content-Type','application/json')
//     .send(user)
//     .expect(HttpStatus.CONFLICT)
//     })
//   });
  
//   describe("Auth",()=>{
//   it('login',()=>{
//     const authuser={
//       email: user.email, 
//       password: user.password
//     }
//     return request(app)
//     .post('/auth')
//     .set('Content-Type','application/json')
//     .send(user)
//     .expect(({body})=>{
//       expect(body.id).toBeDefined()
//       expect(body.email).toEqual(user.email);
//       expect(body.accessToken).toBeDefined();
//       expect(HttpStatus.OK)
//     })
//   })
//})