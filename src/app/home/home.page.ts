import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public status: string = 'not started';
    
  constructor() {}

    async getCurrentPosition(): Promise<void>{
	await Geolocation.requestPermissions();
	try{
	    const coordinates = await Geolocation.getCurrentPosition();
	    this.status = JSON.stringify(coordinates);
	}catch(error){
	    console.log('---');
	    console.log(error.message);
	    this.status = error.message;
	}
    }
}
