// import { Controller, Get } from "@nestjs/common";

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto";

// @Controller('/users')
// export class UsersController{

//     // making request handlers 
//     @Get('/profile')
//     getProfile(){
//         // return 'Hello harsh'

//         // return {
//         //     hello: 'harsh'
//         // }

//         // return new Promise((resolve, reject)=>{
//         //     resolve({
//         //         hello: 'harsh'
//         //     })
//         // })
//     }

// }

//_______________________________________________


// import { Controller, Get, Request } from "@nestjs/common";

// @Controller('/users')
// export class UsersController{

//     // making request handlers 
//     @Get('/profile')
//     getProfile(@Request() req: Request){
//         console.log(req);
//         return 'hello'
//     }

    

// }


//_______________________________________________-


let USERS =[];
@Controller('/users')
export class UsersController{

    @Post()
    addUser(@Body() createUserDto: CreateUserDTO){
        USERS.push(createUserDto);
        return 'User added'
    }

    @Get()
    getUsers(){
        return USERS;
    }

    @Get(':id')
    getUser(@Param('id') id: number){
        return USERS.find(user => +user.id === +id);
    } 

    @Put(":id")
    updateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO){
        const userIndex =  USERS.findIndex(user=> +user.id === +id)

        if(!userIndex){
            return ;
        } 

        USERS[userIndex] = updateUserDTO
        return 'success'
    }

    @Delete(":id") 
    deleteUser(@Param('id') id: number){
       USERS = USERS.filter(user=> +user.id !== +id);
    }
}