
import { Controller, Get, Request } from "@nestjs/common";

@Controller('/albums')
export class AlbumsController{

    // making request handlers 
    @Get('/profile')
    getProfile(@Request() req: Request){
        console.log(req);
        return 'hello'
    }

    

}