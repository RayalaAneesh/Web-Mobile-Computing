import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// Http library is imported from angular inorder to call the api's
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  // types for all the variables are set to any just to avoid typescript errors
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];
  formattedaddress = [];
  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    // This function is used to get users current location which is native to the browser.
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;
    // Recipe value should not be null
    if (this.recipeValue !== null) {
      this._http.get('https://api.edamam.com/search?q=' + this.recipeValue +
        '&app_id=036cd118&app_key=287414f6501087839c2261422a63bc1b').subscribe((recipes: any) => {
          // Below we map every value in the array and destructure the values
          console.log(recipes)
        this.recipeList = Object.keys(recipes.hits).map(function (rec) {
          const recipe = recipes.hits[rec].recipe;
          return {name: recipe.label,content:recipe.digest[0].schemaOrgTag, icon: recipe.image, add:recipe.address, url: recipe.url}
        });
      });


    }

    if (this.placeValue != null && this.placeValue !== '') {
      this._http.get('https://api.foursquare.com/v2/venues/search?client_id=HB1CVTCHDXNIFD0NSZKTJNXJYKYBBP4B0HJEUDL0T2IKJZZO' +
        '&client_secret=QY1NOC4K0WJ5JRGLZW24CPGNJYO12C15NHRG001H3MHJSSA0&v=20200625&near=' + this.placeValue +'&query='+this.recipeValue).
      subscribe((restaurants:any) => {
        console.log(restaurants)
        this.venueList = Object.keys(restaurants.response.venues).map(function (input) {
          const restaurant = restaurants.response.venues[input];
          return {name: restaurant.name,currentLat:restaurant.location.labeledLatLngs[0].lng,currentLong:restaurant.location.labeledLatLngs[0].lat, formattedAddress: restaurant.location.formattedAddress};

        })
      }, error => {});
    }
  }
}

// Another way use the api call

// search(term:string){
//   return this.http.get('https://api.foursquare.com/v2/venues/search?',{
//     params:{
//       client_id:'5XMFPDJXC2QQQMZTXC3ZO4Q5WOH4DMLOKMF3LKNCCR304HLO',
//       client_secret:'KNFQPOAU1ZRMW4OPLL4KYCC145R4F5QE5T4W1TTVIZDRHM3F',
//       ll:'39.099724,-94.578331',
//       query:term,
//       v:'20210224'
//     }
//   })
// }