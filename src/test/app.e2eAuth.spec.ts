import { Controller, HttpStatus, INestApplication } from "@nestjs/common";
import { CreateUserDto } from "src/modules/users/userDto/createUserDto";
import * as request from 'supertest';
import {  createConnection } from "typeorm";


describe('User',()=>{
  let app= 'http://localhost:4000';
  let userid;
  
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
    const connection = await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1902',
      database: 'postgres',
      logging:true
    });

   await connection.query('Delete  from "user" where email=\'test@test.ru\'')
   await connection.close();
  })
  it("CreateUser",()=>{

      return request(app)
      .post('/users')
      .set('Content-Type','application/json')
      .send(user)
      .expect(({body})=>{
        expect(body.id).toBeDefined()
        expect(body.email).toEqual(user.email)
        expect(body.firstName).toEqual(user.firstName)
        expect(body.lastName).toEqual(user.lastName)
        expect(body.address).toEqual(user.address)
        expect(body.city).toEqual(user.city)
        expect(body.phone).toEqual(user.phone)
        expect(body.password).toBeUndefined()
        userid=body.id
      })
      .expect(HttpStatus.CREATED);
    
    
    })
});
