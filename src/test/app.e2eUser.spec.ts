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

  const userupdate: CreateUserDto ={
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
  it('/ (GET)', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('The server is running');
  });
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
    it("Dublicate User",()=>{

           return request(app)
           .post('/users')
           .set('Content-Type','application/json')
           .send(user)
           .expect(HttpStatus.CONFLICT)
    })
    it("All Users",()=>{

      return request(app)
      .get('/users')
      .set('Content-Type','application/json')
      .expect(HttpStatus.OK)
    })
    it("Get user by Id",()=>{

      return request(app)
      .get(`/users/${userid}`)
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
      })
      .expect(HttpStatus.OK);
    })
    it("Update user by Id",()=>{

      return request(app)
      .put(`/users/${userid}`)
      .set('Content-Type','application/json')
      .send(userupdate)
      .expect(({body})=>{
        expect(body.id).toBeDefined()
        expect(body.email).toEqual(userupdate.email)
        expect(body.firstName).toEqual(userupdate.firstName)
        expect(body.lastName).toEqual(userupdate.lastName)
        expect(body.address).toEqual(userupdate.address)
        expect(body.city).toEqual(userupdate.city)
        expect(body.phone).toEqual(userupdate.phone)
        expect(body.password).toBeUndefined()
      })
      .expect(HttpStatus.OK);
    })
    it("Delete User",()=>{

      return request(app)
      .delete(`/users/${userid}`)
      .set('Content-Type','application/json')
      .expect(HttpStatus.OK);
    })
    it("Delete User NO_FOUND",()=>{

      return request(app)
      .delete(`/users/${userid}`)
      .set('Content-Type','application/json')
      .expect(HttpStatus.NOT_FOUND);
    })
    

});
