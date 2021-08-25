import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Geolocation as GeolocationIonicNative} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public status: string = 'not started';
    
    constructor(
	private geolocation: GeolocationIonicNative
    ){}

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

    getCurrentPositionIonicNative(): void{
	this.geolocation.getCurrentPosition().then((resp) => {
	    console.log(resp);
	    // resp.coords.latitude
	    // resp.coords.longitude
	    this.status = resp.coords.latitude + ', ' + resp.coords.longitude;
	}).catch((error) => {
	    console.log('Error getting location', error);
	    this.status = JSON.stringify(error.message);
	});
    }
}
